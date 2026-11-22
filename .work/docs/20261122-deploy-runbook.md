# Production deploy — clearbison.com

**What this is:** The order of checks before ClearBison is served at `https://clearbison.com` from origin `169.58.4.85`.
**Status:** Draft · 2026-11-22
**Needs:** Run `./bin/deploy-discover.sh` on `169.58.4.85`, then create the Cloudflare A record. This laptop is not that host.

Facts below are from `.work/docs/20261122-deploy-discover.txt` (measured).

## Blockers

1. `clearbison.com` has Cloudflare nameservers (`kai.ns.cloudflare.com`, `zainab.ns.cloudflare.com`) and **no A record**. HTTPS to the name does not answer.
2. This machine is not `169.58.4.85` (`origin_on_this_host: no`). Its prd stack is already up here on `WEB_PORT=35561` / `API_PORT=36309`.
3. `169.58.4.85` answers with `nginx/1.28.3` (HTTP 404, HTTPS 405). Nothing for this site is on that vhost yet.
4. `.env.prd` `PUBLIC_HOST` is `logicbison.com`, not `clearbison.com`.

## Order

Do these on the origin, not on this laptop.

1. Copy the repo to `169.58.4.85` at a fixed path. Do not copy `.env.dev`.
2. `./bin/start.sh prd setup` only if `.env.prd` is missing. Then set `PUBLIC_HOST=clearbison.com`. Keep `SMTP_*` and `CONTACT_INBOX` filled. Leave `NEXT_PUBLIC_API_BASE` empty so the browser uses the same host.
3. `./bin/start.sh prd up`. Confirm `curl -fsS http://127.0.0.1:$WEB_PORT/health` returns ok. The browser never needs `API_PORT`; Next rewrites `/health` and `/api/*`.
4. On the origin nginx, one site for `clearbison.com` and `www.clearbison.com` proxies to `127.0.0.1:$WEB_PORT`. Listen on 80 only if Cloudflare is the TLS edge. Do not publish `API_PORT` or `35561` on the internet.
5. In Cloudflare DNS: `A clearbison.com → 169.58.4.85` proxied (orange cloud), and `CNAME www → clearbison.com` proxied. SSL mode Full. Do not create the record until step 4 returns 200 on the origin.
6. Re-run `./bin/deploy-discover.sh clearbison.com 169.58.4.85` on the origin. Pass means: `A_is_origin` or Cloudflare anycast plus `cf-ray=yes`, and `https://clearbison.com/` code 200.

## Do not

- Point DNS at this laptop.
- Commit `.env.prd`.
- Open SMTP or the random app ports in the firewall.

## Next action

`ssh` to `169.58.4.85` and run `./bin/deploy-discover.sh clearbison.com 169.58.4.85`.
