# HANDOFF - session boundary

## Session status

**Open:** 2026-11-22 — ClearBison.com landing + docker stack

**Updated:** 2026-11-22

**Closed:** -

**Repository state:** Greenfield implementation — marketing site for ClearBison (product name for ai.soc / Security OS).

**Recommended pick-up file:** `.work/plans/NEXT.md`

**Lost or new?** Read `$AGENT_OS_SOURCE/START_HERE.md`.

---

## Fresh start - what the next session should do first

1. Run **`@session-control start`**
2. Read this file through §Open owner actions
3. Read `.work/plans/NEXT.md`
4. Confirm `./bin/start.sh dev` brings the site up

### Conditional reads

| If the task touches… | Read first |
|----------------------|------------|
| Product / pricing | `future-strategy/.work.biz/reference/CLEARBISON_QUOTE.md`, `…/strategy/pricing.md` |
| UI | `.work.ui/context/HANDOFF_UI.md`, `.work.ui/plans/NEXT_UI.md` |
| Stack | `DOCS_TECH_STACK.md` |

---

## Goal (this session)

Build ClearBison.com: dockerized landing for selling ClearBison (ai.soc), design refs Varsuite + Aikido, metalized brand from `.work.ui/brand`, `bin/start.sh` with `dev`|`prd` + random ports. Proceed unattended (`-y`).

## Routing (@x-director / @ai-director / @ui-director)

**Request (verbatim):** Session-control start — Build basic understanding… landing for ClearBison.com… pricing from future-strategy… design refs… metalized logos… orchestrate ai-director + ui-director… proceed unattended.

**Classified:** cross-framework (`.ai` + `.ai.ui` + product truth from `.ai.soc` / future-strategy)
**Routing confidence:** high
**Trust mode:** `-y` (proceed unattended)

**Decisions applied without further ask:**
1. **No published USD on the website** — honors `future-strategy/.work.biz/strategy/pricing.md` (no public price bands). Four engagement options shown as scoped packages; quote after founder call. Internal figures remain in `CLEARBISON_QUOTE.md` only.
2. **Stack:** Next.js App Router marketing site in `apps/web`, single `web` compose service, random `WEB_PORT` per env, `PUBLIC_HOST=logicbison.com`.
3. **CEO/founder trust CTA** — direct contact path on pricing + contact sections.

## Latest action (@session-control start)

**Date:** 2026-11-22
**Goal captured.** Stack + site scaffold in progress.

## Open owner actions

| # | Item | Owner |
|---|------|-------|
| 1 | Confirm public contact email / calendar URL for founder CTA | owner |
| 2 | Counsel U7 before taking payment (sale rule in CLEARBISON_QUOTE) | owner |

## Working notes

- ClearBison ≡ `clearbison`/`soc` CLI from `pilo.ai.soc.logicbison` v0.6.1
- Options a/b/d/c from internal quote file — labels only on site
- Brand base: `.work.ui/brand/clearbison.png`, `clearbison-text.png`


## Completion (2026-11-22)

- Layout: `frontend/` + `backend/`; root-only `.env.example` / `.env.dev` / `.env.prd`; `docker-compose.dev.yml` / `docker-compose.prd.yml`; per-service `Dockerfile.dev` / `Dockerfile.prd`.
- `./bin/start.sh dev|prd` menu with random ports; `PUBLIC_HOST=logicbison.com`.
- Dev smoke: web 200, `/health` ok, `/api/contact` ok (direct + via Next rewrite).
- No published USD on site (pricing.md canon).
