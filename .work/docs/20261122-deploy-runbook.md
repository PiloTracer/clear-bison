# Production deploy — clearbison.com

**What this is:** The exact order to publish ClearBison from `169.58.4.85` through Cloudflare.
**Status:** Draft · 2026-11-22
**Needs:** Create `.env.prd`, proxy nginx to the web port, then add the Cloudflare A record.

Measured on `vmi3435240` at `/srv/clear-bison` (`git 2665004`, 2026-11-22T22:53:34Z): this host **is** the origin. Nameservers are Cloudflare. `clearbison.com` has **no A record**. nginx owns ports 80 and 443 and returns 404/405 for the bare IP. `.env.prd` does not exist. Host port `8000` is already taken. Disk is 8% used.

## 1. Stack, loopback only

On the origin:

```bash
cd /srv/clear-bison
./bin/start.sh prd setup
```

Edit `.env.prd` before `up`:

- `PUBLIC_HOST=clearbison.com`
- `BIND_ADDRESS=127.0.0.1`
- `NEXT_PUBLIC_API_BASE=` (empty)
- `CONTACT_INBOX`, `SMTP_HOST=mail.iterwire.com`, `SMTP_PORT=465`, `SMTP_USER`, `SMTP_PASS` copied from the working dev env. Quote `SMTP_PASS` if it contains `$`.

```bash
./bin/start.sh prd up
set -a && source .env.prd && set +a
curl -fsS "http://127.0.0.1:${WEB_PORT}/health"
```

Pass: JSON `"status":"ok"`. Do not open `API_PORT` or `WEB_PORT` on `eth0`. The site rewrites `/health` and `/api/*` to the api container.

## 2. nginx

Add a site for `clearbison.com` and `www.clearbison.com` that proxies to `127.0.0.1:$WEB_PORT`. Leave the existing default site alone. Reload nginx only after `nginx -t` passes.

Check from the origin:

```bash
curl -fsS -H 'Host: clearbison.com' http://127.0.0.1/health
```

## 3. Cloudflare

Only after step 2 returns ok.

| Record | Value | Proxy |
|--------|--------|--------|
| `A clearbison.com` | `169.58.4.85` | Proxied |
| `CNAME www` | `clearbison.com` | Proxied |

SSL/TLS mode: **Full**. Turn on **Always Use HTTPS**. Do not use Flexible (it fights an HTTPS redirect). Do not use Full (strict) until the origin presents a certificate for `clearbison.com`.

## 4. Prove it

On the origin:

```bash
./bin/deploy-discover.sh clearbison.com 169.58.4.85
```

Pass: `https://clearbison.com/` code 200 and `cf-ray=yes`. Then submit the contact form once.

## Do not

- Bind the app on `0.0.0.0` or on host port `8000`.
- Commit `.env.prd`.
- Create the DNS record before nginx returns 200 for `Host: clearbison.com`.

## Next action

`cd /srv/clear-bison && ./bin/start.sh prd setup`
