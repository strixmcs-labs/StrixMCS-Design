# Input

A mono text field for config values and search. Hairline on the black field; focus lifts the border to gold.

```jsx
<Input label="House Zone" value={zone} onChange={e => setZone(e.target.value)} hint="Home Assistant zone name" />
<Input prefix="⌕" placeholder="Filter entities…" />
```

- **label**: uppercase mono label above. **hint**: sans note below. **prefix**: static mono glyph inside the field.
