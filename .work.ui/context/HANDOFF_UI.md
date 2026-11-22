# HANDOFF_UI

**Status:** Active · **Updated:** 2026-11-22  
**Pick-up:** `.work.ui/plans/NEXT_UI.md`

## State

Landing redesigned as a conversion page: hero scan console, noise-vs-signal comparison, product bento, options, FAQ, founding+contact close. `#reel` was removed earlier.

## Latest action (@ui-director)

**Date:** 2026-11-22  
**Request:** "the landing page looks dull, plain, ugly, make the landing page look amazing, grab the best references that can apply to this product, and make it a serial seller"  
**Classified bucket:** `concept` + `reference` (generic look → conversion redesign on the approved direction)  
**Executed:**
1. Reused the approved direction `clearbison-security-saas` (Aikido 40 / Tenable 30 / Wiz 20 / Intruder 10). No new scans needed.
2. Rebuilt the landing: an animated scan console in the hero, a facts strip, a coverage marquee, a noise-vs-signal comparison, a product bento (report + diff, local passes, DNS ownership gate, model trail), a timeline, options with a featured animated border and included/your-part/not-included rows, trust grid + quote letter, FAQ, and a founding+contact close. Also a mobile sticky CTA.
3. New components: `ScanConsole`, `PageEffects` (scroll reveal + spotlight, off under reduced motion), `Icon`. EN/ES copy updated in `messages.ts`.
4. Verified: `tsc --noEmit` exit 0; headless screenshots at 1440 and 390 px.
**Deviation from canon:** radius 2px → 6/14px (softer cards). Revert `--radius`/`--radius-lg` if sharp edges are preferred.
**Blockers:** none  
**Next recommended:** `@ui-accessibility-audit milestone - landing`

## Design canon

- Dark metal; steel/indigo
- No public prices; no logo walls; no borrowed TV badge
- Proof is our own photography plus the report
