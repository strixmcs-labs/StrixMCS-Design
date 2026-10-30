# Switch

A binary toggle for dashboard controls (use-occupancy, disable-lighting). Off reads as a hairline track; on lifts to oxblood.

```jsx
<Switch checked={useOcc} onChange={setUseOcc} label="living_room_use_occupancy" />
```

- **label**: optional mono label to the right. **tone**: `accent` (oxblood, default) or `ceremonial` (gold).
