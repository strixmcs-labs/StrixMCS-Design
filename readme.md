# StrixMCS — The Order of the Strix · Design System

*Scientia · Societas · Ascensus — Knowledge · Society · Ascent*

The canonical design system for **StrixMCS**, the personal-and-professional
identity of the Order of the Strix. It exists so that everything issued under the
name — a public page, a private StrixHome config, a document, a dashboard — reads
as **one hand**. Apply it the same whether or not anyone else will see the
artifact. The Order keeps its standards in private.

The conceit: an **ancient posture, current execution**. A centuries-old seal
rendered in clean modern monospace — an old institution staffed by people who
ship. Lean into the age; refuse the costume.

> This design system is authored by an automated compiler-backed pipeline. The
> global stylesheet consumers link is **`styles.css`** (imports the token +
> font-face files). Components are bundled to `_ds_bundle.js` under the window
> namespace **`StrixMCSOrderDesignSystem_72a56f`** (do not edit generated files).

---

## Authority

- **This design system is the source of truth.** It is the final, canonical
  Order design system — including the StrixMCS Labs imprint, the Labs
  application colors, and the whole-mark rule. When anything disagrees with
  this system, this system wins.
- **The standard going forward.** This repository is the final design and
  branding specification for all work of The Order of the Strix, StrixMCS and
  StrixMCS Labs. It replaces `StrixMCS-Branding` and `StrixHA` as the design and
  branding standard.
- **Assets:** the seal (owl-over-book) at 256/512/1024, the transparent
  owl mark, and the full IBM Plex Mono + IBM Plex Sans families (self-hosted in
  `fonts/`, under the SIL Open Font License; see `fonts/OFL.txt`).

The marks are **proprietary** to StrixMCS. A public repository makes them
viewable; it does not grant a license to reuse them. See `NOTICE`.

---

## CONTENT FUNDAMENTALS — how it reads

The voice is **serious, precise, service-oriented; documentation-minded.** Plain
verbs over jargon. A dry, absurdist wit is allowed — but only where it never
costs clarity.

- **Casing.** Normal case everywhere — headings included. *The Order does not
  shout.* All-capitals is reserved for nothing; even section titles use proper
  case. (Wide letter-tracking on short mono labels is the only "loud" move, and
  it is quiet.)
- **The wordmark is `StrixMCS`** — always. Capital S, lowercase, `MCS` in
  capitals. Never `STRIXMCS`, `strixmcs`, or `Strix MCS`. Fixed in prose,
  headers, code, and signatures.
- **The Strix names.** Devices take the `Strix` prefix as one closed compound:
  `StrixHome` (the HA instance / the apartment), `StrixPhone`, `Strixbook Pro`,
  `StrixBox`, `StrixMCS` (the entity — acronym in full caps). Drop the space;
  capitalize the following word. **`StrixMCS Labs`** is the one open name — an
  imprint, not a device, so it keeps the space.
- **The two entities.** Three levels: **The Order of the Strix** is the
  umbrella — the society; seal, motto, ceremony. Beneath it, **StrixMCS** —
  *the house; what runs at home stays here* — and **StrixMCS Labs** — *the
  press; what leaves the house is published here.* Headers name the entity and
  its Order: `StrixMCS · The Order of the Strix` /
  `StrixMCS Labs · The Order of the Strix`.
- **One switch.** `entity="order" | "labs"` on `Wordmark`, `Byline`, and every
  template sets header, lockup, byline and footer together. (`labs` / `imprint`
  remain as deprecated aliases.)
- **The boundary.** Runs the home → **StrixMCS** (StrixHome, devices,
  dashboards, automations, internal docs). Published publicly → **StrixMCS
  Labs** (repos, READMEs, docs sites, releases, research). Labs apps keep their
  own names; repo names are plain, lowercase, hyphenated, no Strix prefix; repos
  live in the `strixmcs-labs` org. Research is filed as *StrixMCS Labs · Notes*,
  numbered Note 001, 002, …
- **Credit.** Work built on another project names that project and its authors
  directly beneath the byline (public name, then handle in parentheses;
  credit contributors too). Never imply endorsement.
- **Person vs. product.** Writes in the **third person / imperative** — it
  documents systems, it does not address "you". "StrixHome drives living-room
  lights from occupancy." Instructions are stated plainly: "Non-destructive by
  default. Review precedes implementation."
- **Byline.** Anything authored bears a byline, and the **doctoral title is not
  dropped.** Default: **Dr. Matt Booth**. Formal email sig: *Matt Booth, PhD*.
  Full given name: *Dr. Matthew Booth* / *Matthew Booth, PhD*. Brief: *Dr.
  Booth*. Set in mono, white, beneath the title or at the foot. Labs work
  uses the **imprint byline** `StrixMCS Labs · Dr. Matt Booth` (`<Byline entity="labs" />`);
  the two bylines are never mixed on one artifact.
- **No emoji.** Ever. `"Supercharge your smart home today!! 🚀"` and `"Oops!
  Something went wrong 😅"` are exactly the voice to avoid, as is
  synergy-speak (`"leverage synergies across your IoT ecosystem at scale"`).
- **Footers, two-tier.** Internal docs/configs close with the **lean** footer
  (motto, then one mono line: *Dr. Matt Booth · The Order of the Strix ·
  StrixMCS*). Public landing pages carry the **richer** footer (motto + English
  gloss + `mattbooth.me` + byline). The landing page speaks outward; the internal
  set keeps the austere register. Labs READMEs carry the richer footer with the
  imprint byline.
- **Labs repositories.** README header: app name at display size, imprint byline
  beneath; the logo may lead. Social preview 1280×640, absolute black, logo left,
  project name in proper case (Plex Mono 600 white), imprint byline beneath. Every
  screenshot/diagram carries alt text, a one-line caption, and a capture date.

---

## VISUAL FOUNDATIONS

**The field is black.** `#000000`, absolute, everywhere. Everything else sits on
the void — which is also the frame for the mark.

- **Color — three colors, held apart** (disciplined, not monochrome; each color
  has exactly one job, never blurred together; **no pastels, ever**):
  - **White** `#F7F7F7` — *all* text and display, zero warmth. Body drops to Read
    `#A8A8A8`, captions to Mute `#6A6A6A`.
  - **Oxblood** `#4A0404` / lift `#6E0808` — **structure, not language.** Borders,
    rules, active edges, the primary button. **Never body text.**
  - **Ceremonial Gold** `#BCA687` — the **rarest**; the motto and the front of
    formal things only. The seal itself is white-on-black — gold is not part of
    the mark. Sprinkling gold into ordinary UI spends its weight.
  - Surfaces: Near `#0B0B0B` panels, Near-2 `#121212`, code `#050505`. Hairlines
    Line `#1C1C1C` / `#262626`.
- **Type — mono leads.** **IBM Plex Mono** carries titles, labels, the wordmark,
  the motto, and code. **IBM Plex Sans** carries running prose (15–16px, 1.6
  leading) where mono would tire the eye. Modern faces both — no nostalgia, no
  serifs. Weight and size carry hierarchy; the system never reaches for bold as
  decoration.
- **Backgrounds.** Flat black. **No gradients, no imagery, no texture, no
  patterns.** The only "background effect" sanctioned is the ceremonial oxblood
  **inner glow** on a motto/ceremonial card (`inset 0 0 40px rgba(74,4,4,.18)`).
- **Borders & elevation.** The vocabulary is the **hairline ring**, not the drop
  shadow — the field is already black, so depth is rare. Cards are Near-black with
  a 1px Line border; a 3px oxblood **left rule** marks structure. Raised/pop
  shadows exist for overlays only.
- **Radii.** Restrained: 3–6px (base **4px**). This is a hairline institution,
  not soft SaaS. Nothing pill-shaped except toggles and mode badges.
- **Spacing.** A quiet 4px grid (4 → 96). Generous margins; the seal sits alone,
  surrounded by dark, with clear space equal to the owl-head height.
- **Motion.** Measured; **no bounce** — the Order does not spring. Standard ease
  `cubic-bezier(.2,0,0,1)`, 120–280ms. Fades and short slides; no infinite
  decorative loops.
- **Hover / press.** Hover lifts the **border** (Line → oxblood or gold) and/or
  the surface a step; it does not brighten text. Disabled drops to ~45% opacity.
  Focus is a 2px black gap + gold ring.
- **Imagery vibe.** There is none by convention — the aesthetic is line-art on
  void. Where a photo is unavoidable, keep it cold and high-contrast; never warm,
  never grainy-nostalgic.

- **Labs applications (native apps only).** Appearance follows the system —
  light mode on white/system background, dark mode on system dark; never force a
  black window. One accent tuned per mode: app oxblood `#650F20` in light
  (12.8:1 on white; may colour controls, selection, short labels), wine
  `#D37181`+ for accent text in dark. The only sanctioned gradient,
  `#8F3040 → #650F20`, is for book/cover artwork only. Interface text uses the
  system typeface; Plex stays with pages, previews, docs and the wordmark.
  Tokens: `--app-oxblood`, `--app-wine-text`, `--app-wine-art`,
  `--app-art-gradient`.
- **Ceremonial register.** Gold appears only where ceremony is earned — the
  seal on a title screen, the motto in a footer. The oxblood-and-gold Calibre
  dashboard is the sanctioned ceremonial register.

---

## THE SEAL & ICONOGRAPHY

**One mark: the seal.** The owl — sharp, angular, fierce — perched on the open
book, white line-art on absolute black. Nothing frames it; the void is the frame.
It is both the working mark and the regalia.

- Keep the seal intact (owl + book as one figure). **Never** crop, separate,
  recolor, rotate, glow, or bevel it. Place **only on absolute black**. Give it
  size — do not shrink it to a cramped favicon. Never use the owl head alone.
  Clear space on all sides equals the owl-head height.
- **StrixMCS Labs** (the publishing imprint) carries **the same mark**,
  whole. What marks Labs work is the lockup and the byline, not a different mark.
  The transparent owl is the same drawing without its black square, for placing
  on a black field.
- **The Labs lockup:** the mark, then **StrixMCS** in Plex Mono SemiBold 600
  white, then **Labs** in Plex Mono Light 300, `#CFCFCF`, with the word space
  tightened to about a third of a mono space. Never Labs in oxblood or gold,
  boxed, or bold; never `StrixMCSLabs`, `StrixLab`, `Strix Labs`,
  `STRIXMCS LABS`. Component: `<Wordmark entity="labs" />`.
- Assets: `assets/StrixMCS-seal-{256,512,1024}.png`, `assets/StrixMCS-seal.png`
  (full res), `assets/StrixMCS-owl-transparent.png` (transparent owl mark).

**UI iconography.** The brand document defines no icon set of its own; the
StrixHome dashboard runs on Home Assistant's **Material Design Icons (MDI)**.
Since MDI is not bundled here, the components use **Lucide**
(CDN: `unpkg.com/lucide`) as the closest match — a thin (1.6px), line-only set
that sits naturally in a hairline system. **⚠️ Substitution flagged:** Lucide
stands in for MDI. If you want exact HA parity, swap the CDN for
`@mdi/js` / MDI web font and keep the 1.6px line weight. Icons are line, never
filled; **no emoji**; Unicode glyphs (·, —, ×, ⌕) are used as small structural
marks in mono contexts.

---

## Components

Reusable primitives, grouped by concern. Mount from
`window.StrixMCSOrderDesignSystem_72a56f`. Each has a `.d.ts` contract and a
`.prompt.md` usage note; each group has a `@dsCard` showcase.

- **Core** (`components/core/`): **Button**, **Card**, **Badge**, **Tag**
- **Forms** (`components/forms/`): **Switch**, **Input**
- **Brand** (`components/brand/`): **Seal**, **Wordmark**, **Motto**,
  **SectionHeader**, **Byline**
- **Dashboard** (`components/dashboard/`): **EntityTile**, **ModeButton**

*Intentional additions:* the brand document is guidelines-only (no component
library), so the Core/Forms set is a standard, brand-sized primitive kit; the
**Brand** and **Dashboard** groups are the brand-specific families the material
actually calls for (the mark, the wordmark, the motto, the byline; the StrixHome
tiles and house-mode buttons).

---

## Templates (starting points for consuming projects)

- **Order Document** (`templates/order-document/`) — a phase-gated Order document:
  config header, numbered sections, byline, ceremonial motto footer. Printable.
- **Order Title Screen** (`templates/order-title/`) — the ceremonial register:
  seal on black, wordmark, title, and the gold motto card. For covers/title
  slides.
- **Order Deck** (`templates/order-deck/`) — the austere Order register as a
  slide deck: title, section divider, content, big-stat, closing. Arrow keys /
  Page Up/Down navigate.
- **Production build:** a Vite + React + TypeScript port of this system
  (typed components, `npm run check` = lint + build + specimen-safety
  assertions) lives in the `strixmcs-order-design-system` codebase.

---

## Root index / manifest

```
index.html              The public site: thatosxguy.github.io/StrixMCS-Design
styles.css              Global entry — @import list only (link THIS)
tokens/
  fonts.css             @font-face — IBM Plex Mono + Sans (self-hosted)
  colors.css            Base palette + semantic aliases
  typography.css        Families, weights, scale, tracking
  spacing.css           4px grid, radii, borders, layout
  effects.css           Rings, glows, motion, focus
fonts/                  IBM Plex Mono + Sans .ttf files, OFL.txt
assets/                 The seal (256/512/1024 + full), transparent owl
guidelines/             Foundation @dsCard specimens (Colors, Type, Spacing, Brand)
components/             core/ · forms/ · brand/ · dashboard/
templates/              order-document/ · order-title/ · order-deck/
readme.md               This file
SKILL.md                Agent-Skills-compatible entry point
NOTICE                  Rights in the marks and the fonts
```

---

`Scientia · Societas · Ascensus`
Knowledge · Society · Ascent — StrixMCS · mattbooth.me
Dr. Matt Booth · The Order of the Strix
