# Byline

The author attribution — mono, white, set beneath a title or at a document foot. The doctoral title is part of the attribution and is never dropped.

```jsx
<Byline />                                          {/* Dr. Matt Booth · The Order of the Strix */}
<Byline form="Matt Booth, PhD" order={false} />     {/* formal email signature */}
<Byline instance="StrixMCS" />                       {/* lean internal footer */}
```

- **form**: one of the five sanctioned forms. **order**: append "The Order of the Strix". **instance**: append e.g. "StrixMCS".
