#!/usr/bin/env bash
# =============================================================================
#  ClearBison — read-only production discovery
#
#  Collects the facts a deployment runbook needs. Does not change DNS, Docker,
#  firewall, or env files. Never prints secret values.
#
#  Usage:
#    ./bin/deploy-discover.sh
#    ./bin/deploy-discover.sh clearbison.com 169.58.4.85
#
#  Exit 0 always when the report finishes. Each check is pass / fail / skip.
# =============================================================================
set -u

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$REPO_ROOT"

DOMAIN="${1:-}"
ORIGIN="${2:-169.58.4.85}"
REPORT="${3:-}"

if [ -z "$DOMAIN" ]; then
  DOMAIN="$(grep -E '^PUBLIC_HOST=' .env.prd 2>/dev/null | head -1 | cut -d= -f2- | tr -d '"' | tr -d "'")"
  DOMAIN="${DOMAIN:-clearbison.com}"
fi

if [ -z "$REPORT" ]; then
  mkdir -p .work/docs
  REPORT=".work/docs/$(date -u +%Y%m%d)-deploy-discover.txt"
fi

section() { printf '\n## %s\n' "$1"; }
row() { printf '%-22s %s\n' "$1" "$2"; }
have() { command -v "$1" >/dev/null 2>&1; }

{
  section "Identity"
  row "when_utc" "$(date -u +%Y-%m-%dT%H:%M:%SZ)"
  row "hostname" "$(hostname 2>/dev/null || echo missing)"
  row "user" "$(id -un 2>/dev/null || echo missing)"
  row "repo" "$REPO_ROOT"
  row "git" "$(git rev-parse --short HEAD 2>/dev/null || echo no-git)"
  row "domain" "$DOMAIN"
  row "origin_claimed" "$ORIGIN"

  section "This host vs origin"
  row "uname" "$(uname -srm 2>/dev/null || echo missing)"
  if have ip; then
    ip -4 -br addr 2>/dev/null | awk 'NR==1 || /./ { print }' | sed 's/^/addr                   /'
  else
    row "addr" "skip ip(8) missing"
  fi
  local_hit="no"
  if ip -4 addr 2>/dev/null | grep -q "$ORIGIN"; then
    local_hit="yes"
  fi
  row "origin_on_this_host" "$local_hit"
  if have curl; then
    pub="$(curl -4 -fsS --max-time 8 https://ifconfig.me 2>/dev/null || true)"
    row "public_ip_seen" "${pub:-unreachable}"
    if [ -n "$pub" ] && [ "$pub" = "$ORIGIN" ]; then
      row "public_ip_matches" "yes"
    else
      row "public_ip_matches" "no"
    fi
  else
    row "public_ip_seen" "skip curl missing"
  fi

  section "DNS"
  resolve() {
    local name="$1" type="$2"
    if have dig; then
      dig +time=3 +tries=1 +short "$type" "$name" 2>/dev/null | paste -sd ' ' -
    elif have getent && [ "$type" = "A" ]; then
      getent ahostsv4 "$name" 2>/dev/null | awk '{print $1}' | sort -u | paste -sd ' ' -
    else
      echo "skip"
    fi
  }
  for name in "$DOMAIN" "www.$DOMAIN"; do
    a="$(resolve "$name" A)"
    aaaa="$(resolve "$name" AAAA)"
    cname="$(resolve "$name" CNAME)"
    row "A $name" "${a:-none}"
    row "AAAA $name" "${aaaa:-none}"
    row "CNAME $name" "${cname:-none}"
    if printf '%s' "$a" | grep -qw "$ORIGIN"; then
      row "A_is_origin $name" "yes"
    else
      row "A_is_origin $name" "no"
    fi
  done
  ns="$(resolve "$DOMAIN" NS)"
  row "NS" "${ns:-none}"
  case "$ns" in
    *cloudflare*|*CLOUDFLARE*) row "ns_cloudflare" "yes" ;;
    *) row "ns_cloudflare" "no" ;;
  esac
  mx="$(resolve "$DOMAIN" MX)"
  row "MX" "${mx:-none}"

  section "HTTP"
  probe() {
    local url="$1" extra="$2"
    if ! have curl; then
      row "$url" "skip curl missing"
      return
    fi
    # shellcheck disable=SC2086
    hdr="$(curl -sSI --max-time 12 $extra "$url" 2>/dev/null || true)"
    if [ -z "$hdr" ]; then
      row "$url" "no-response"
      return
    fi
    code="$(printf '%s\n' "$hdr" | awk 'toupper($1) ~ /^HTTP/ { code=$2 } END { print code }')"
    server="$(printf '%s\n' "$hdr" | awk 'tolower($1)=="server:" { print $2; exit }')"
    cf="$(printf '%s\n' "$hdr" | awk 'tolower($1)=="cf-ray:" { print "yes"; exit }')"
    loc="$(printf '%s\n' "$hdr" | awk 'tolower($1)=="location:" { print $2; exit }')"
    row "$url" "code=${code:-?} server=${server:-?} cf-ray=${cf:-no} location=${loc:-}"
  }
  probe "https://$DOMAIN/" ""
  probe "https://www.$DOMAIN/" ""
  probe "http://$ORIGIN/" "-H Host:$DOMAIN"
  probe "https://$ORIGIN/" "-H Host:$DOMAIN --insecure"

  section "TLS"
  if have openssl; then
    cert="$(echo | openssl s_client -connect "$DOMAIN:443" -servername "$DOMAIN" 2>/dev/null \
      | openssl x509 -noout -subject -issuer -dates 2>/dev/null || true)"
    if [ -n "$cert" ]; then
      printf '%s\n' "$cert" | sed 's/^/cert                   /'
    else
      row "cert" "none"
    fi
  else
    row "cert" "skip openssl missing"
  fi

  section "Listeners on this host"
  if have ss; then
    ss -lntH 2>/dev/null | awk '{print $4}' | sed 's/^/listen                 /' | head -40
  else
    row "listen" "skip ss missing"
  fi

  section "Edge software"
  for bin in nginx caddy certbot cloudflared docker; do
    if have "$bin"; then
      row "$bin" "$(command -v "$bin")"
    else
      row "$bin" "absent"
    fi
  done
  if have docker; then
    row "docker_version" "$(docker version --format '{{.Server.Version}}' 2>/dev/null || echo unreachable)"
    row "compose" "$(docker compose version --short 2>/dev/null || echo absent)"
  fi

  section "Production env keys"
  python3 - << PY
from pathlib import Path
p = Path(".env.prd")
print(f"{'env_file':<22} {p} exists={p.exists()}")
if not p.exists():
    raise SystemExit
wanted = [
    "COMPOSE_PROJECT_NAME","APP_ENV","PUBLIC_HOST","BIND_ADDRESS",
    "API_PORT","WEB_PORT","NEXT_PUBLIC_API_BASE","CORS_ORIGINS",
    "CONTACT_INBOX","SMTP_HOST","SMTP_PORT","SMTP_USER","SMTP_PASS",
]
vals = {}
for line in p.read_text().splitlines():
    if not line or line.startswith("#") or "=" not in line:
        continue
    k, _, v = line.partition("=")
    if (v.startswith('"') and v.endswith('"')) or (v.startswith("'") and v.endswith("'")):
        v = v[1:-1]
    vals[k] = v
for k in wanted:
    v = vals.get(k, None)
    if v is None:
        state = "MISSING"
    elif k in {"SMTP_PASS","SMTP_USER","CONTACT_INBOX"}:
        state = "set" if v else "empty"
    elif k == "SMTP_HOST":
        state = v or "empty"
    else:
        state = v if v != "" else "empty"
    print(f"{k:<22} {state}")
PY

  section "Compose prd"
  if [ -f .env.prd ] && have docker; then
    project="$(grep -E '^COMPOSE_PROJECT_NAME=' .env.prd | head -1 | cut -d= -f2- | tr -d '"' | tr -d "'")"
    row "project" "${project:-missing}"
    if [ -n "${project:-}" ]; then
      docker compose --project-name "$project" --env-file .env.prd -f docker-compose.prd.yml ps --format '{{.Service}} {{.Status}}' 2>/dev/null \
        | sed 's/^/ps                     /' || row "ps" "not-running"
    fi
  else
    row "ps" "skip"
  fi

  section "Disk"
  df -h / 2>/dev/null | awk 'NR==1 || NR==2 { print }' | sed 's/^/disk                   /'

  section "Read this as"
  cat <<EOF
Public site should be https://$DOMAIN (Cloudflare terminates TLS when the NS is Cloudflare and the A record is proxied).
Origin $ORIGIN should only expose 80 and 443 to Cloudflare. The app itself listens on API_PORT and WEB_PORT from .env.prd.
Next.js rewrites /health and /api/* to the api container, so the browser only needs the web port.
Do not publish SMTP_* or CONTACT_INBOX. An empty SMTP_PASS means the contact form returns 503.
If origin_on_this_host is no, run this script again on $ORIGIN before changing DNS.
EOF
} | tee "$REPORT"

printf '\nreport written: %s\n' "$REPORT"
