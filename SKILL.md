---
name: strixmcs-design
description: Use this skill to generate well-branded interfaces and assets for StrixMCS — the Order of the Strix — either for production or throwaway prototypes/mocks. Contains the essential design guidelines, colors, type, fonts, seal assets, reusable components, the StrixHome dashboard UI kit, and document/title templates.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, documents), copy assets out (`assets/`, `fonts/`) and create static HTML files for the user to view, linking `styles.css` for tokens and fonts. If working on production code, copy assets and read the rules here to become an expert in designing with this brand.

The essentials, so you get the register right on the first pass:

- **Authority:** this design system is final and canonical; when anything disagrees with it, it wins.
- **The field is black** (`#000000`), everywhere. Three colors held apart: **white** for all text, **oxblood** (`#4A0404` / `#6E0808`) for structure only (borders/rules/primary button — never body text), **ceremonial gold** (`#BCA687`) for the motto and formal fronts only. No pastels, no gradients, no imagery/texture.
- **Mono leads.** IBM Plex Mono for titles, labels, the wordmark, the motto, and code; IBM Plex Sans for running prose (15–16px). Normal case everywhere — the Order does not shout.
- **The wordmark is `StrixMCS`** — always (capital S, lowercase, MCS in caps). Devices take the `Strix` prefix as one compound (StrixHome, StrixPhone). **StrixMCS Labs** is the publishing imprint (open name; same seal; lockup = StrixMCS 600 white + Labs 300 `#CFCFCF`; byline `StrixMCS Labs · Dr. Matt Booth`). Home → StrixMCS; published → Labs. Both sit under The Order of the Strix (the umbrella). Switch with `entity="order" | "labs"` on Wordmark, Byline and templates.
- **The seal** (owl over book, white-on-black) is the one mark: keep it intact, on black, with clear space; never recolor/rotate/crop, never the head alone. Assets in `assets/`.
- **Byline** on anything authored; the doctoral title stays — default *Dr. Matt Booth*. **No emoji.** Voice is serious, precise, service-oriented, dry.
- **Footers:** lean (motto + one mono byline) for internal artifacts; richer (motto + English gloss + mattbooth.me) for outward-facing pages.
- **Native Labs apps** follow system light/dark; accent `#650F20` (light) / `#D37181` (dark text); system typeface for UI. Pages and marks keep the black field.
- **Icons:** Lucide (line, 1.6px) stands in for Home Assistant's MDI — flag this if exact parity matters.

If the user invokes this skill without other guidance, ask what they want to build or design, ask a few focused questions, and act as an expert designer who outputs HTML artifacts *or* production code, depending on the need.

`Scientia · Societas · Ascensus` — Knowledge · Society · Ascent.
