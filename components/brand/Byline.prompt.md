# Byline

The author attribution — mono, white, set beneath a title or at a document foot. The name form is **Dr. Matt Booth**; the doctoral title is never dropped.

```jsx
<Byline />                      {/* Dr. Matt Booth · The Order of the Strix — house byline */}
<Byline instance="StrixMCS" />  {/* Dr. Matt Booth · StrixMCS · The Order of the Strix — internal footer */}
<Byline entity="labs" />        {/* StrixMCS Labs · Dr. Matt Booth — Labs byline */}
```

- **entity**: `"house"` (default) or `"labs"`. Never mix the two bylines on one artifact. `"order"` and `imprint` are deprecated aliases.
- **order**: append "The Order of the Strix" (house only). **instance**: entity segment set before the Order, matching the header.
