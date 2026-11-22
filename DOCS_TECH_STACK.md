# Technology stack — ClearBison

**Status:** Active · **Updated:** 2026-11-22

Marketing site + thin API for clearbison.com (product face of ai.soc / Security OS).

---

## 1. Summary

| Layer | Choice | Version (pin) | Notes |
|-------|--------|---------------|-------|
| Language (API) | Python | 3.12 | FastAPI |
| Language (UI) | TypeScript | 5.x | Next.js App Router |
| HTTP API | FastAPI + Uvicorn | ≥0.115 | `/health`, `/api/contact` |
| Frontend | Next.js | 15 | `frontend/` |
| Database | none (v0) | — | contact intake only |
| Auth | none (v0) | — | public marketing |
| Hosting | Docker on LogicBison | — | `PUBLIC_HOST=logicbison.com`, random ports |

---

## 2. Repository layout

| Path | Purpose |
|------|---------|
| `frontend/` | Next.js marketing site |
| `backend/` | FastAPI health + contact intake |
| `frontend/Dockerfile.dev` / `Dockerfile.prd` | UI images |
| `backend/Dockerfile.dev` / `Dockerfile.prd` | API images |
| `docker-compose.dev.yml` / `docker-compose.prd.yml` | Compose (root only) |
| `.env.example` / `.env.dev` / `.env.prd` | **Only** `.env*` files in the repo (root) |
| `bin/start.sh` | Stack menu: `./bin/start.sh dev` \| `prd` |
| `.work/` | Agent OS project memory |
| `.work.ui/` | UI Design OS memory + brand |

---

## 3. Local development

| Item | Value |
|------|-------|
| Dev stack script | `./bin/start.sh` |
| Setup (random ports) | `./bin/start.sh dev setup` |
| Start | `./bin/start.sh dev up` |
| Prod mirror | `./bin/start.sh prd setup` then `./bin/start.sh prd up` |
| Compose files | `docker-compose.dev.yml`, `docker-compose.prd.yml` |
| Test (API) | `docker compose --env-file .env.dev -f docker-compose.dev.yml exec api python -c "from clearbison_api.main import app"` |
| Lint (UI) | `docker compose … exec web npx next lint` (when configured) |
| Type check (UI) | `docker compose … exec web npx tsc --noEmit` |

---

## 4. CI/CD

| Item | Status |
|------|--------|
| Platform | GitHub (PiloTracer/clear-bison) |
| Deploy targets | LogicBison host via compose prd |

---

## 5. Open decisions

| ID | Topic | Owner |
|----|-------|-------|
| U1 | Founder calendar / CRM for contact intake | owner |
| U2 | Counsel U7 before taking payment | owner |

---

## 6. ADR cross-reference

Decisions live in `.work/decisions/`. Pricing canon: no published USD on this site (`future-strategy` pricing.md).
