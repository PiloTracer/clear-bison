# Front-end stack — ClearBison

**Updated:** 2026-11-22

## Runtime

| Item | Value |
|------|-------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript 5.x |
| Styling | Custom CSS (`src/app/globals.css`) — Syne + Instrument Sans |
| Package manager | npm (inside container) |

## Tooling

| Check | Command |
|-------|---------|
| Unit tests | n/a (marketing v0) |
| Lint | `npx next lint` (in `web` container) |
| Typecheck | `npx tsc --noEmit` (in `web` container) |
| Visual / a11y | Manual + `@ui-visual-verify` / `@ui-accessibility-audit` when scheduled |

## Paths

| Item | Path |
|------|------|
| App root | `frontend/` |
| Components | `frontend/src/components/` |
| Screens | `frontend/src/app/` |
| Tokens | CSS variables in `frontend/src/app/globals.css` |
| Brand (base) | `.work.ui/brand/` |
| Brand (metalized) | `.work.ui/brand/metalized/` |

## Docker

| Service | Workdir |
|---------|---------|
| `web` | `/app` (compose service) |
