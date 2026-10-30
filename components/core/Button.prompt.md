# Button

The Order's action control — a mono-label button with hairline or oxblood structure. Use for anything the user acts on; reserve `ceremonial` (gold hairline) for formal moments only.

```jsx
<Button variant="primary" onClick={run}>Apply Mode</Button>
<Button variant="secondary" size="sm">Cancel</Button>
<Button variant="ghost">Dismiss</Button>
<Button variant="ceremonial">Issue Document</Button>
```

- **variant**: `primary` (oxblood fill), `secondary` (near-black + hairline, the default), `ghost` (bare), `ceremonial` (gold hairline — rare).
- **size**: `sm` / `md` / `lg`. **full**: stretch to container. **disabled**: dims to 45%.
- Labels stay in normal case — the Order does not shout.
- Hover lifts the border Line → oxblood (ceremonial → gold); keyboard focus shows the shared gold ring.
