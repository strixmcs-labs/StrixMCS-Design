```
# ============================================
#  StrixMCS Labs · The Order of the Strix
#  project:    StrixMCS-Design
#  file:       readme.md
#  author:     Dr. Matt Booth <matt@strixmcs.com>
#  policy:     published · credited
#  Scientia · Societas · Ascensus
# ============================================
```

# StrixMCS — The Order of the Strix · Design System

*Scientia · Societas · Ascensus — Knowledge · Society · Ascent*

StrixMCS Labs · Dr. Matt Booth

**Status:** final · issued 2026-10-30

**This system is the final design and branding standard for The Order of the
Strix, StrixMCS and StrixMCS Labs.** It replaces StrixMCS-Branding and StrixHA.
This system is the only authority: where any file disagrees with the rules
below, the file changes.

Everything issued under the name — a public page, a private StrixHome config, a
document, a dashboard — reads as **one hand**. The rules apply the same whether
or not anyone else will see the artifact.

The conceit: an **ancient posture, current execution**. A centuries-old seal set
in clean modern monospace — an old institution staffed by people who ship.

> The global stylesheet is **`styles.css`** (imports the token, font-face and
> interaction files). Components are bundled to `_ds_bundle.js` under the window
> namespace **`StrixMCSOrderDesignSystem_72a56f`**. Generated files are not edited
> by hand.

**Assets:** the seal (owl over book) at 256/512/1024 and full resolution, the
transparent owl mark, and the full IBM Plex Mono + IBM Plex Sans families
(self-hosted in `fonts/`). The marks are **proprietary** to StrixMCS. A public
repository makes them viewable; it does not grant a license to reuse them. See NOTICE.

---

## Casing

1. **Normal case everywhere.** All-capitals is reserved for nothing — headings,
   labels, eyebrows, badges, crest lines included. *The Order does not shout.*
   Acronyms (MCS, IBM, HA) keep their capitals; all-capitals as styling is
   reserved for nothing.
2. No `text-transform: uppercase` anywhere in the system.
3. The motto is always set **Scientia · Societas · Ascensus** — crest lines,
   templates and specimens included.
4. Labels use normal case: *Audience*, *Policy*, *The seal*, *Not the voice*.
5. Wide letter-tracking on short mono labels remains allowed.
6. Forbidden forms (~~STRIXMCS~~, ~~strixmcs~~, ~~Strix MCS~~) appear only
   struck through, as examples of what not to do.

## Color

7. **The field is `#000000`.** White `#F7F7F7` carries all text and display.
   Body drops to Read `#A8A8A8`, captions to Mute `#6A6A6A`. Surfaces: Near
   `#0B0B0B`, Near 2 `#121212`, code `#050505`. Hairlines: Line `#1C1C1C` /
   `#262626`.
8. **Oxblood** `#4A0404` / lift `#6E0808` is **structure only** — borders,
   rules, active edges, the primary button, list dashes. Never used for words.
9. **Gold** `#BCA687` is reserved for **the motto and the front of formal
   things**: the ceremonial Button, Badge, Switch and Card variants, and title
   screens.
10. **The one exception:** the keyboard focus ring is gold.
11. Gold is **not** used for dashboard states, section numbers, eyebrows,
    specimen labels or form focus borders.
12. `--state-on` and `--warn` are white. The EntityTile on-state and the active
    ModeButton icon are white.
13. **No status colors.** Status is shown as `neutral` or `accent` with a dot.
14. Components use **tokens only** — no raw hex.

## Scoped exceptions (StrixMCS Labs)

15. **Native Labs apps** may follow system appearance (light/dark), use the
    system typeface, and use **Labs oxblood** `#650F20` (light-mode accent,
    12.8:1 on white) and **Labs wine** `#D37181` (dark-mode accent text). Never
    on pages or marks. Tokens: `--labs-oxblood`, `--labs-wine-text`.
16. The gradient `#8F3040 → #650F20` (`--labs-art-gradient`) is for **book and
    cover artwork only**. Otherwise: no gradients, imagery, texture or patterns.

## Shape and depth

17. **Radii 3–6px**, base 4px (`--radius-sm` 3, `--radius` 4, `--radius-md` 6).
18. **Only toggles are pill-shaped.** Status dots may be circular.
19. **Depth is the hairline ring.** Shadows are for overlays only — Card
    `raised` is a surface step and a stronger hairline, never a shadow.
20. The oxblood **inner glow** (`--glow-oxblood`) is for motto and ceremonial
    cards only. The ceremonial Card pairs it with a gold hairline.

## Interaction

21. **Hover lifts the border** Line → oxblood. Ceremonial variants may lift to
    gold. Hover never brightens text.
22. Every interactive component — Button, Switch, Input, Tag, EntityTile,
    ModeButton — shows the same **`:focus-visible` ring**: a 2px black gap,
    then gold (`--focus-ring`, defined in `tokens/interaction.css`).
23. **Input focus** lifts its border to oxblood and also shows the ring.

Motion is measured, no bounce: `cubic-bezier(.2,0,0,1)`, 120–280ms. Disabled
drops to ~45% opacity.

## Entities

24. **The Order of the Strix** is the umbrella. Beneath it are two entities:
    **StrixMCS** — *the house; what runs at home stays here* — and **StrixMCS
    Labs** — *the press; what leaves the house is published here.*
25. One switch: **`entity="house" | "labs"`** (default `"house"`) on `Wordmark`,
    `Byline` and every template. `entity="order"` and the older `labs` /
    `imprint` props remain as deprecated aliases.
26. Runs the home → **StrixMCS** (StrixHome, devices, dashboards, automations,
    internal docs). Published publicly → **StrixMCS Labs** (repos, READMEs, docs
    sites, releases, research — filed as *StrixMCS Labs · Notes*, Note 001, 002…).
27. **Published copies of this standard** use the Labs header, byline and footer.

Headers name the entity and its Order: `StrixMCS · The Order of the Strix` /
`StrixMCS Labs · The Order of the Strix`.

## Names

28. **The wordmark is StrixMCS** wherever it is displayed — prose, headers, UI
    and signatures. Identifiers in code and URLs follow their own conventions.
29. **Devices** are closed compounds with the next word capitalized:
    `StrixHome`, `StrixPhone`, `StrixBook`, `StrixBox`.
30. **Model modifiers stay open:** `StrixBook Pro`.
31. **StrixMCS Labs** is the one open name — an imprint, not a device.

## Repositories

32. Repo names are plain, lowercase and hyphenated, with no Strix prefix
    (`repo-name`).
33. **Forks** keep the upstream name and casing exactly, and credit upstream
    beneath the byline.
34. A fork that becomes a separate product under its own name follows rule 32
    and still credits upstream.
35. The org name `strixmcs-labs` is exempt.
36. `StrixMCS-Design` is exempt — it is the mark's own specification.

Credit names the upstream project and its authors directly beneath the byline
(public name, then handle in parentheses; contributors too). Never imply
endorsement. README header: the project name at display size, the Labs byline
beneath; the logo may lead. Social preview 1280×640, absolute black, logo left,
project name in Plex Mono 600 white, Labs byline beneath. Every screenshot or
diagram carries alt text, a one-line caption and a capture date.

## Bylines and footers

37. The name form is **Dr. Matt Booth**. The doctoral title is not dropped.
38. **House byline:** `Dr. Matt Booth · The Order of the Strix`
39. **Labs byline:** `StrixMCS Labs · Dr. Matt Booth`
40. The two bylines are never mixed on one artifact.
41. **Internal footer:** the motto, then
    `Dr. Matt Booth · StrixMCS · The Order of the Strix` — entity before the Order, matching the header.
42. **Public footer:** the motto, the English gloss, `mattbooth.me`, then the
    entity byline.

## Voice

43. **Third person or imperative.** The reader is never addressed as "you".
    "StrixHome drives living-room lights from occupancy." "Non-destructive by
    default. Review precedes implementation." Serious, precise,
    service-oriented; a dry wit only where it never costs clarity.
44. **No emoji**, except quoted as examples of what to avoid —
    `"Supercharge your smart home today!! 🚀"`.

## Documentation

45. This system is the only authority. There is no separate brand document.
46. SKILL.md describes dashboard components, not a dashboard UI kit.
47. **Icons are Lucide** at a 1.6px line weight, standing in for MDI. Projects
    that need exact Home Assistant parity swap in MDI and keep the weight. Icons
    are line, never filled.

---

## Type

**IBM Plex Mono** carries titles, labels, the wordmark, the motto and code.
**IBM Plex Sans** carries running prose (15–16px, 1.6 leading). Weight and size
carry hierarchy; bold is never decoration. Spacing is a quiet 4px grid
(4 → 96).

## The seal and iconography

**One mark: the seal.** The owl — sharp, angular, fierce — on the open book,
white line-art on absolute black. The void is the frame.

- Keep owl and book as one figure. Never crop, separate, recolor, rotate, glow
  or bevel it. Place only on absolute black, with clear space equal to the
  owl-head height. Never use the owl head alone.
- **StrixMCS Labs** carries the same mark, whole. The **Labs lockup**: the mark,
  then **StrixMCS** in Plex Mono 600 white, then **Labs** in Plex Mono Light 300
  white-2, the word space tightened to about a third of a mono space
  (`<Wordmark entity="labs" />`). Never Labs in oxblood or gold, boxed or bold;
  never ~~StrixMCSLabs~~, ~~StrixLab~~, ~~Strix Labs~~, ~~STRIXMCS LABS~~.
- Assets: `assets/StrixMCS-seal-{256,512,1024}.png`, `assets/StrixMCS-seal.png`
  (full resolution), `assets/StrixMCS-owl-transparent.png`.

---

## Components

Mount from `window.StrixMCSOrderDesignSystem_72a56f`. Each has a `.d.ts`
contract and a `.prompt.md` usage note; each group has a card.

- **Core** (`components/core/`): Button, Card, Badge, Tag
- **Forms** (`components/forms/`): Switch, Input
- **Brand** (`components/brand/`): Seal, Wordmark, Motto, SectionHeader, Byline
- **Dashboard** (`components/dashboard/`): EntityTile, ModeButton — dashboard
  components for StrixHome

## Templates

- **Order Document** (`templates/order-document/`) — config header, numbered
  sections, byline, motto footer. Printable.
- **Order Title Screen** (`templates/order-title/`) — seal on black, wordmark,
  title and the gold motto card.
- **Order Deck** (`templates/order-deck/`) — title, section divider, content,
  big figure, closing. Arrow keys / Page Up/Down navigate.

Each template takes `entity="house" | "labs"`.

## Index

```
styles.css              Global entry — @import list only
tokens/                 fonts · colors · typography · spacing · effects · interaction
fonts/                  IBM Plex Mono + Sans
assets/                 The seal and transparent owl
guidelines/             Foundation cards (Colors, Type, Spacing, Brand)
components/             core/ · forms/ · brand/ · dashboard/
templates/              order-document/ · order-title/ · order-deck/
readme.md               This file
SKILL.md                Agent-Skills entry point
NOTICE                  Rights in the marks and the fonts
fonts/OFL.txt           IBM Plex license (SIL Open Font License)
index.html              The public site
.nojekyll               Keeps GitHub Pages from dropping underscore-prefixed files
```

---

`Scientia · Societas · Ascensus`
Knowledge · Society · Ascent — mattbooth.me
StrixMCS Labs · Dr. Matt Booth
