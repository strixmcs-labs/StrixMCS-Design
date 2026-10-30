# Tag

A compact label for entity ids, filters, and keywords. Quieter than Badge — hairline only, no fill emphasis.

```jsx
<Tag>light.living_room_lights</Tag>
<Tag onRemove={() => drop(id)}>occupancy</Tag>
```

- **onRemove**: renders a × affordance. **mono**: true by default (right for entity ids); set false for prose tags.
