---
name: strixmcs-design
description: The final design and branding standard for The Order of the Strix, StrixMCS and StrixMCS Labs — guidelines, colors, type, fonts, seal assets, reusable and dashboard components, and document, title and deck templates. Use for production work or throwaway prototypes and mocks.
user-invocable: true
---

Read `readme.md` in this skill — it holds the numbered rules — then explore the other files.

For visual artifacts (slides, mocks, prototypes, documents), copy `assets/` and `fonts/` out and build static HTML that links `styles.css`. For production code, copy the assets and apply the rules below.

The essentials, to set the register on the first pass:

- **Authority:** this system is the only authority. It replaces StrixMCS-Branding and StrixHA; where a file disagrees, the file changes.
- **Casing:** normal case everywhere; all-capitals as styling is reserved for nothing; acronyms (MCS, IBM, HA) keep their capitals. No `text-transform: uppercase`. The motto is always *Scientia · Societas · Ascensus*. Wide tracking on short mono labels is allowed. Forbidden forms appear only struck through.
- **Color:** field `#000000`; white for all text. Oxblood (`#4A0404` / `#6E0808`) is structure only — never words. Gold (`#BCA687`) is for the motto and formal fronts (ceremonial variants, title screens) — plus the keyboard focus ring, the one exception. No gold for states, labels, section numbers or form focus. `--state-on` and `--warn` are white. No status colors: neutral or accent with a dot. Components use tokens only.
- **Labs exceptions:** native Labs apps may follow system appearance and typeface and use `#650F20` / `#D37181` — never on pages or marks. The `#8F3040 → #650F20` gradient is for book and cover artwork only.
- **Shape:** radii 3–6px (base 4px). Only toggles are pill-shaped; status dots may be circular. Depth is the hairline ring; shadows for overlays only; the oxblood inner glow for motto and ceremonial cards only.
- **Interaction:** hover lifts the border Line → oxblood (ceremonial → gold), never brightens text. Every interactive component shows the same `:focus-visible` ring — 2px black gap, then gold. Input focus also lifts its border to oxblood.
- **Entities:** The Order of the Strix is the umbrella; StrixMCS is the house, StrixMCS Labs the press. Switch with `entity="house" | "labs"` (default `house`) on Wordmark, Byline and every template. Runs the home → StrixMCS; published → StrixMCS Labs. Published copies of this standard use the Labs header, byline and footer.
- **Names:** wordmark `StrixMCS` wherever displayed (code identifiers and URLs follow their own conventions). Devices are closed compounds — StrixHome, StrixPhone, StrixBook, StrixBox; model modifiers stay open — StrixBook Pro. StrixMCS Labs is the one open name.
- **Repositories:** plain, lowercase, hyphenated, no Strix prefix. Forks keep the upstream name exactly and credit upstream; a fork that becomes its own product follows the plain rule and still credits upstream. `strixmcs-labs` and `StrixMCS-Design` are exempt.
- **Bylines:** name form *Dr. Matt Booth*. House: `Dr. Matt Booth · The Order of the Strix`. Labs: `StrixMCS Labs · Dr. Matt Booth`. Never mixed. Internal footer: motto, then `Dr. Matt Booth · StrixMCS · The Order of the Strix`. Public footer: motto, gloss, `mattbooth.me`, entity byline.
- **Seal:** one mark, whole, on black, with clear space; never recolored, rotated, cropped, or the head alone.
- **Voice:** third person or imperative; the reader is never addressed directly. No emoji, except quoted as examples to avoid.
- **Icons:** Lucide at 1.6px, standing in for MDI; exact Home Assistant parity swaps in MDI at the same weight.

Invoked without other guidance: ask what is to be built, ask a few focused questions, then act as an expert designer producing HTML artifacts or production code as needed.

`Scientia · Societas · Ascensus` — Knowledge · Society · Ascent — mattbooth.me
StrixMCS Labs · Dr. Matt Booth
