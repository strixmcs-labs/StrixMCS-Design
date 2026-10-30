# EntityTile

A StrixHome dashboard tile for a light, switch, or sensor. Tap to toggle; off reads muted, on lifts to the gold live-state tint.

```jsx
<EntityTile name="Living Room" state="On · 60%" on icon={<i className="lucide" />} onToggle={toggle} />
<EntityTile name="Laundry" state="unavailable" unavailable />
```

- **icon**: any node — supply a Lucide/MDI glyph or `<img>`. **on**: drives the live gold tint. **unavailable**: dims and disables.
