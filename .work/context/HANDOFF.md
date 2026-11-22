# HANDOFF — session boundary

**Closed:** 2026-11-22 — findings board replaced the photo reel; Iterwire SMTP login ok  
**Updated:** 2026-11-22  
**Open:** —  
**Pick-up:** `.work/plans/NEXT.md`

## Repository state

Marketing site + thin API. This close commits `.work/` only. Frontend and `.env.example` are still uncommitted (consumer session scope). Private `.env.dev` / `.env.prd` stay untracked.

## What this cycle produced

| Item | Where |
|------|-------|
| Iterwire SMTP (`mail.iterwire.com:465`) | private `.env.*` — login ok |
| Package names, no letter prefixes | `frontend/src/i18n/messages.ts` |
| Option bars + badge outside the card | `frontend/src/app/globals.css` |
| Hero findings board; `#reel` removed | `frontend/src/app/page.tsx` |

## Owner blockers

1. Confirm calendar URL for the founder CTA
2. Counsel U7 before taking payment
3. Say `whole-tree` if the uncommitted site files should be committed

## Notes

- No public USD
- Do not commit `.env.dev`, `.env.prd`, or `frontend/public/reel/`
