# REFERENCE DNA — aikido

**What this is:** Distilled design mechanics from one public website, used as inspiration for an original design.
**Status:** Draft · **Date:** 2026-11-22
**Needs:** feeds synthesized direction (operator ordered implement).
**Rights basis:** Operator: "PROCEED AND IMPLEMENT YOUR RECOMMENDATIONS!" (2026-11-22) — public analysis, principles not clone; primary ≤4: aikido, intruder, wiz, tenable; target: whole landing.
**Confidence:** medium — solid CSS tokens; JS sections unobserved

## 1. Source & provenance

| Field | Value |
|---|---|
| Reference ID | `aikido` |
| URL | https://www.aikido.dev/ |
| Fetched | 2026-11-22 · static HTML/CSS · no JS · no browser |
| Evidence | `evidence.json` + `scan-summary.md` |
| Robots | allowed |
| Rights basis | Operator: "PROCEED AND IMPLEMENT YOUR RECOMMENDATIONS!" (2026-11-22) — public analysis, principles not clone; primary ≤4: aikido, intruder, wiz, tenable; target: whole landing. |
| Scan limits | No JS-rendered UI, hover, responsive, or screenshots |

## 2. Identity & positioning

- **Primary site type:** `saas-product`
- **All types (multi-label):** `saas-product`, `lead-generation`
- **Conversion goal:** `free-trial`
- **Secondary goals:** hybrid sales CTAs where present
- **Funnel stage:** `decision`
- **Classification confidence:** medium (scanner heuristics)
- **Audience & job:** Developers / AppSec buying continuous security tooling `estimated`
- **Promise / positioning:** Secure what teams build/ship/run without slowing delivery `estimated`
- **Proof style:** product UI + multi-accent badges; logo-heavy risk `estimated`
- **Voice:** direct, product-led, developer-facing `estimated`

## 3. Layout & information architecture

- **Nav model:** sticky product nav + free-trial CTA `measured` landmarks
- **Hero type:** product-forward dark/light hybrid with purple accent `measured`
- **Section order:** many sections (~12) product capabilities → proof → CTA `measured`
- **Grid / container / measure:** comfortable marketing width `estimated`
- **Density:** comfortable-to-dense `estimated`

## 4. Color

**Measured palette (top roles):**

| Role | Value | Evidence | Notes |
|---|---|---|---|
| Canvas | #111111 / #010024 | measured | |
| Ink | #ffffff / light ink on dark | measured | |
| Accent | #6551f3 (purple) | measured | do not copy as identity |
| Neutral/border | #bfbfc8 | measured | |

- **Dark mode:** dark surfaces present
- **Contrast risks observed:** purple-on-dark may fail AA in places `assumption` — do not inherit

## 5. Typography

| Field | Value |
|---|---|
| Display family | Newgrotesk (proprietary) — proprietary unless noted; do not ship files |
| Body family | system/Arial fallbacks |
| Scale | fluid rem/vw clamps `measured` |
| Weights | 400–700 primary `measured` |
| Case/tracking | mixed; kickers often uppercase `estimated` |

## 6. Space, shape & surface

- **Spacing base / rhythm:** 8-ish rhythm `estimated`
- **Section padding:** generous section stacks `estimated`
- **Radii scale:** moderate radii `estimated`
- **Borders:** 1px borders + soft fills `estimated`
- **Shadows/elevation:** soft elevation `estimated`
- **Background treatment:** dark panels + purple aura `measured`

## 7. Components & patterns

| Pattern | Observed behavior | Transfer? |
|---|---|---|
| Navigation | sticky + trial CTA | yes (pattern) |
| Primary CTA | high-contrast fill | yes |
| Cards | capability mosaics | adapt |
| Forms | not in static home | no |
| Pricing | trial-led | no (ClearBison quote) |
| Proof | product + logos | adapt without logos |
| Footer | present | yes |

## 8. Motion & interaction

- **Measured transitions/animations:** unobserved JS motion
- **Unobserved:** hover/focus/scroll
- **Transfer candidates:** subtle only; no gimmick loops

## 9. Imagery & iconography

- **Mix:** product UI + SVGs `measured` image counts
- **Do not reuse:** logos, product chrome screenshots as assets, icon packs, compositions

## 10. Copy & content patterns

- **Headline shapes:** outcome + continuous security promise `estimated`
- **CTA verbs:** demo / trial / get started (observed) — ClearBison maps to quote/call
- **No verbatim reuse:** paraphrase only

## 11. Transfer rules

### Adopt
- Dual CTA above fold
- Capability sections with index/order
- Product visual as proof
- Sticky nav with primary action

### Adapt
- Replace purple identity with ClearBison steel/indigo
- Replace trial language with scoped quote
- No logo wall

### Avoid
- Exact purple `#6551f3`
- Newgrotesk
- Logo mosaics
- Free-trial framing

### Originality constraints
- Own palette, hero composition, imagery, copy, component shape.
- Recognition test: user must not name `aikido`.
- Minimum 3 differentiating moves: metal brand; founder voice; no public prices

## 12. Evidence & confidence

| Claim | Tag | Evidence / gap |
|---|---|---|
| palette purple dominant | measured | scan-summary |
| 12 sections | measured | landmarks |
| JS UI unknown | assumption | no browser |

## Next action

`@ui-reference-intake synthesize - aikido intruder wiz tenable`
