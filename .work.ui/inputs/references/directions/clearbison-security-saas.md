# DESIGN DIRECTION — clearbison-security-saas

**What this is:** Synthesized direction from Aikido, Intruder, Wiz, Tenable for the ClearBison landing.
**Status:** Approved — 2026-11-22 (operator: proceed and implement recommendations)
**Needs:** nothing for this pass — apply to landing; Action1/Qualys deferred.

## 1. Product & job

- **Product / screen:** ClearBison landing (whole page) — sell scoped security scan engagements
- **Audience:** founders/tech leads who want authorized scans + a human, not a credit pack
- **Primary action:** request scoped quote / founding scoping call (`contact-quote`)
- **Constraints:** dark metal brand; no public USD; EN/ES; WCAG AA; no clone of refs

## 2. Reference set & weights

| Reference ID | Role | Weight | Why selected | DNA confidence |
|---|---|---|---|---|
| `aikido` | primary | 40% | product-forward proof + dual CTA + sticky action | medium |
| `tenable` | secondary | 30% | dark form seriousness + large type + Instrument Sans kinship | medium |
| `wiz` | secondary | 20% | demo/booking conversion clarity + soft bands (pattern only) | medium |
| `intruder` | accent | 10% | short path + high-contrast CTA (not yellow) | medium |

**Rejected / deferred this pass:** `action1`, `qualys` — keep for later accent scan; avoid franken-design with 6 DNAs.

## 3. Synthesis thesis

> Dark metal security landing that feels as serious as enterprise VM pages, as product-clear as Aikido, and as conversion-sharp as demo-led peers — without looking like any of them.

## 4. Design principles

1. **Proof before hype** — show the report/product, then options; never logo walls or fake metrics.
2. **One loud action** — sticky nav + hero primary → contact/founding; secondary explores options.
3. **Assurance without theater** — short post-hero commitments (authorized / confidential / human), linking to Trust.
4. **Dark form as conversion surface** — elevated contact panel with clear borders (Tenable pattern, own palette).
5. **Compress** — keep section count tight; never inherit Wiz/Tenable page length.

## 5. Token proposal

Keep ClearBison tokens; tighten roles only:

| Role | Fallback hex | Notes |
|---|---|---|
| `--bg` | `#050507` | keep |
| `--bg-elevated` | `#0c0c11` | keep |
| `--ink` / `--ink-muted` | `#f2f3f7` / `#9aa0b2` | keep AA |
| `--brand` | `#6b7cff` | steel-indigo — NOT Aikido purple / Intruder yellow / Wiz pink |
| `--steel` | `#8fa0b8` | assurance / kicker metal |
| `--radius` | `2px` | keep sharp (anti-rounded-SaaS) |

- **Type:** Syne display + Instrument Sans body (licensed/open stacks already in use).
- **Motion:** subtle hero drift only; no scan lines / float gimmicks.
- **Do not adopt:** `#6551f3`, `#fec400`, `#fc80ff`, `#e7ff00` as identity.

## 6. Layout & composition

- **Hero:** brand mark + reliance + display title + dual CTA + **assurance strip** (new)
- **Section order:** hero → product split → difference → options → trust → founding → contact → footer
- **Density:** comfortable marketing; product visual sticky
- **Responsive:** stack product split; hide nav links on small (existing)

## 7. Component rules

| Component | Rule | Reference principle |
|---|---|---|
| Nav | Sticky; primary CTA to `#contact` | aikido/wiz conversion |
| Primary CTA | Brand fill, quiet shadow | intruder contrast (own color) |
| Assurance | 3 text commitments, no logos | proof pattern adapted |
| Product visual | Framed panel + caption | aikido product-forward |
| Options | Featured elevated; others quiet | hierarchy |
| Forms | Dark elevated contact box | tenable entrance forms |
| Proof | Trust bullets only — no logo wall | avoid wiz/aikido logo noise |

## 8. Content voice

- **Voice:** founder-direct, honest limits (existing)
- **CTA verbs:** Talk / Request quote / Start founding engagement — not “free trial”
- **Proof strategy:** process + confidentiality + LLM terms

## 9. Originality guardrails

- **Differentiating moves:** (1) metal mark brand-first (2) no public prices (3) founder as the seat (4) steel/indigo not purple/yellow/pink
- **Recognition test:** must not read as Aikido/Intruder/Wiz/Tenable

## 10. Accessibility constraints

- Keep AA; inherit none of low-contrast accent-on-dark failures from refs.
- Prefer `prefers-reduced-motion` on hero drift.

## 11. Screen application

| Screen | Reference IDs | Rules to bind | Status |
|---|---|---|---|
| landing | aikido, tenable, wiz, intruder | this direction | implementing |

## Next action

Implement landing craft per §4–§7; then visual check.
