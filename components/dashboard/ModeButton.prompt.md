# ModeButton

A house-mode selector button (Day / Bedtime / Night / Away). The active mode carries the oxblood structure; the others stay hairline. Wire a row of four to `script.set_house_mode`.

```jsx
<ModeButton mode="Day" active icon={<i className="lucide" />} onSelect={() => set("Day")} />
<ModeButton mode="Night" onSelect={() => set("Night")} />
```

- **active**: the current mode. **icon**: glyph above the label (white when active).
