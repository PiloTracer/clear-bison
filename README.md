# ClearBison

Product site for **ClearBison** — the commercial face of LogicBison Security OS (`ai.soc`). Authorized AI security scans for code and hostnames you control.

## Layout

```
frontend/          Next.js 15 marketing site
backend/           FastAPI (/health, /api/contact)
bin/start.sh       Stack menu (dev | prd)
docker-compose.dev.yml
docker-compose.prd.yml
.env.example       Template only
.env.dev / .env.prd  Generated locally (gitignored) — only .env* files in the repo
```

## Quick start

```bash
./bin/start.sh dev setup    # random free API_PORT + WEB_PORT → .env.dev
./bin/start.sh dev up       # build + start
./bin/start.sh dev          # interactive menu
```

Production mirror:

```bash
./bin/start.sh prd setup
./bin/start.sh prd up
```

`PUBLIC_HOST` defaults to `logicbison.com`. Ports are random per env and persisted in the root `.env.<env>` file.

## Pricing posture

Engagement options (A/B/C/D) are described on the site **without published dollar amounts**. Quotes follow a short founder scoping call. Internal quote figures live outside this repo’s public surface.

## Brand

Base marks: `.work.ui/brand/`. Metalized variants: `.work.ui/brand/metalized/` (also copied into `frontend/public/`).
