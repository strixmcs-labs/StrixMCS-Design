# Badge

A small mono status marker, normal case with light tracking. Use for modes, states, and short status words.

```jsx
<Badge tone="accent" dot>Night</Badge>
<Badge tone="neutral" dot>Nominal</Badge>
<Badge tone="ceremonial">Edition II</Badge>
```

- **tone**: `neutral` (default), `accent` (oxblood), `ceremonial` (gold — formal fronts only), `mute`. No status colors: show status as `neutral` or `accent` with `dot`.
- **dot**: adds a leading status dot in the tone color.
