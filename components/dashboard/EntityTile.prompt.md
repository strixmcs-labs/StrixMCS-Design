# EntityTile

A StrixHome dashboard tile for a light, switch, or sensor. Tap to toggle; off reads muted, on lifts to white (`--state-on`).

```jsx
<EntityTile name="Living Room" state="On · 60%" on icon={<i className="lucide" />} onToggle={toggle} />
<EntityTile name="Laundry" state="unavailable" unavailable />
```

- **icon**: any node — supply a Lucide/MDI glyph or `<img>`. **on**: lifts icon and state to white. **unavailable**: dims and disables.
