/* @ds-bundle: {"format":4,"namespace":"StrixMCSOrderDesignSystem_72a56f","components":[{"name":"Byline","sourcePath":"components/brand/Byline.jsx"},{"name":"Motto","sourcePath":"components/brand/Motto.jsx"},{"name":"Seal","sourcePath":"components/brand/Seal.jsx"},{"name":"SectionHeader","sourcePath":"components/brand/SectionHeader.jsx"},{"name":"Wordmark","sourcePath":"components/brand/Wordmark.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"EntityTile","sourcePath":"components/dashboard/EntityTile.jsx"},{"name":"ModeButton","sourcePath":"components/dashboard/ModeButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"}],"sourceHashes":{"components/brand/Byline.jsx":"2173fe272f2c","components/brand/Motto.jsx":"fb6ee7aa79ea","components/brand/Seal.jsx":"7da19b8978b4","components/brand/SectionHeader.jsx":"e2c1cc08ad8c","components/brand/Wordmark.jsx":"19cd7bd9914e","components/core/Badge.jsx":"76ecc4c1e7cf","components/core/Button.jsx":"b83ae47633a2","components/core/Card.jsx":"d9bc8914e446","components/core/Tag.jsx":"3536712e5bca","components/dashboard/EntityTile.jsx":"9f799ecc3dbe","components/dashboard/ModeButton.jsx":"8c25c786acf4","components/forms/Input.jsx":"0102471e11c6","components/forms/Switch.jsx":"5dc7f59a43fd"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.StrixMCSOrderDesignSystem_72a56f = window.StrixMCSOrderDesignSystem_72a56f || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Byline.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Byline — the author attribution. Mono, white, beneath a title or at a document foot.
 * The doctoral title is part of the attribution and is not dropped.
 * House byline (default): "Dr. Matt Booth · The Order of the Strix".
 * `entity="labs"`: "StrixMCS Labs · Dr. Matt Booth". The two bylines are never mixed.
 * `entity="order"` and `imprint` are deprecated aliases.
 */
function Byline({
  form = "Dr. Matt Booth",
  order = true,
  instance,
  align = "left",
  entity = "house",
  imprint = false,
  style,
  ...rest
}) {
  const isLabs = imprint || entity === "labs";
  const parts = isLabs ? ["StrixMCS Labs", form] : [form];
  if (instance) parts.push(instance);
  if (order && !isLabs) parts.push("The Order of the Strix");
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "strix-byline",
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      letterSpacing: "0.02em",
      color: "var(--white)",
      textAlign: align,
      ...style
    }
  }, rest), parts.join(" · "));
}
Object.assign(__ds_scope, { Byline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Byline.jsx", error: String((e && e.message) || e) }); }

// components/brand/Motto.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Motto — the ceremonial cipher. Gold on a near-black card with an oxblood inner glow.
 * The rarest register; use for footers, title screens, and formal fronts only.
 */
function Motto({
  gloss = true,
  align = "center",
  framed = true,
  style,
  ...rest
}) {
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 15,
      letterSpacing: "0.22em",
      color: "var(--gold-hi)"
    }
  }, "Scientia \xB7 Societas \xB7 Ascensus"), gloss && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      color: "var(--mute)",
      marginTop: 11
    }
  }, "Knowledge \xB7 Society \xB7 Ascent"));
  if (!framed) {
    return /*#__PURE__*/React.createElement("div", _extends({
      className: "strix-motto",
      style: {
        textAlign: align,
        ...style
      }
    }, rest), inner);
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "strix-motto",
    style: {
      border: "1px solid var(--oxblood-hi)",
      borderRadius: "var(--radius)",
      background: "var(--near)",
      boxShadow: "var(--glow-oxblood)",
      padding: "22px 26px",
      textAlign: align,
      ...style
    }
  }, rest), inner);
}
Object.assign(__ds_scope, { Motto });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Motto.jsx", error: String((e && e.message) || e) }); }

// components/brand/Seal.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Seal — the single mark of the Order: owl over book, white line-art on absolute black.
 * The void is the frame. Never recolor, rotate, or crop. Give it size and clear space.
 *
 * `src` must point to a copied seal asset (see the design system's assets/ folder).
 */
function Seal({
  size = 220,
  src = "assets/StrixMCS-seal-512.png",
  clearspace = true,
  alt = "StrixMCS — the seal of the Order of the Strix",
  ...rest
}) {
  const margin = clearspace ? Math.round(size * 0.16) : 0;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "strix-seal",
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--black)",
      padding: margin
    }
  }, rest), /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    width: size,
    height: size,
    style: {
      display: "block",
      width: size,
      height: size
    }
  }));
}
Object.assign(__ds_scope, { Seal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Seal.jsx", error: String((e && e.message) || e) }); }

// components/brand/SectionHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SectionHeader — a numbered section opener in the guidelines register.
 * Mute section number over a white mono title, optional sans lede, hairline rule.
 */
function SectionHeader({
  number,
  title,
  lede,
  rule = true,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({
    className: "strix-section-header",
    style: {
      paddingBottom: rule ? 22 : 0,
      borderBottom: rule ? "1px solid var(--line)" : "none",
      ...style
    }
  }, rest), number != null && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.26em",
      color: "var(--mute)",
      marginBottom: 14
    }
  }, number), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: 600,
      fontSize: 23,
      letterSpacing: "0.005em",
      color: "var(--white)",
      margin: 0
    }
  }, title), lede && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 15,
      lineHeight: 1.6,
      color: "var(--read)",
      maxWidth: "66ch",
      margin: "14px 0 0"
    }
  }, lede));
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/brand/Wordmark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Wordmark — StrixMCS, set correctly and immutably.
 * Capital S, lowercase, MCS in capitals. Mono, normal case, never restyled.
 * `entity="house"` (default) sets StrixMCS; `entity="labs"` sets the StrixMCS Labs lockup:
 * Labs in Plex Mono Light 300, var(--white-2), word space tightened to about a third of a mono space.
 * `entity="order"` and `labs` are deprecated aliases.
 */
function Wordmark({
  size = 32,
  tagline = false,
  entity = "house",
  labs = false,
  color = "var(--white)",
  ...rest
}) {
  const isLabs = labs || entity === "labs";
  return /*#__PURE__*/React.createElement("span", _extends({
    className: "strix-wordmark",
    style: {
      display: "inline-flex",
      flexDirection: "column",
      gap: 6
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: 600,
      fontSize: size,
      letterSpacing: "0.005em",
      color,
      lineHeight: 1
    }
  }, "StrixMCS", isLabs && /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 300,
      color: "var(--white-2)",
      marginLeft: "0.2em"
    }
  }, "Labs")), tagline && !isLabs && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: Math.max(10, Math.round(size * 0.28)),
      letterSpacing: "0.12em",
      color: "var(--mute)"
    }
  }, "The Order of the Strix"));
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — a small status marker. Mono, normal case, lightly tracked.
 * No status colors: status is neutral or accent with a dot. Gold (ceremonial) is for formal fronts only.
 */
function Badge({
  children,
  tone = "neutral",
  dot = false,
  style,
  ...rest
}) {
  const tones = {
    neutral: {
      color: "var(--white-2)",
      border: "var(--line-2)",
      bg: "var(--near-2)",
      dot: "var(--mute)"
    },
    accent: {
      color: "var(--white)",
      border: "var(--oxblood-hi)",
      bg: "var(--oxblood-wash)",
      dot: "var(--oxblood-hi)"
    },
    ceremonial: {
      color: "var(--gold-hi)",
      border: "var(--gold)",
      bg: "var(--gold-wash)",
      dot: "var(--gold)"
    },
    mute: {
      color: "var(--mute)",
      border: "var(--line)",
      bg: "transparent",
      dot: "var(--mute)"
    }
  };
  const t = tones[tone] || tones.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `strix-badge strix-badge--${tone}`,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      fontFamily: "var(--font-mono)",
      fontSize: 10.5,
      fontWeight: 500,
      letterSpacing: "0.06em",
      padding: "4px 9px",
      borderRadius: "var(--radius-sm)",
      border: `1px solid ${t.border}`,
      background: t.bg,
      color: t.color,
      lineHeight: 1,
      whiteSpace: "nowrap",
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 5,
      borderRadius: "50%",
      background: t.dot,
      flex: "none"
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — the Order's action control.
 * Three registers: primary (oxblood structure), secondary (hairline), ghost (bare).
 * A ceremonial variant is reserved for formal moments (gold hairline).
 * Hover lifts the border to oxblood (ceremonial → gold); focus shows the shared gold ring.
 */
function Button({
  children,
  variant = "secondary",
  size = "md",
  disabled = false,
  full = false,
  as = "button",
  onClick,
  style,
  ...rest
}) {
  const pad = {
    sm: "7px 14px",
    md: "10px 18px",
    lg: "13px 24px"
  }[size];
  const fs = {
    sm: 12,
    md: 13,
    lg: 14
  }[size];
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    fontFamily: "var(--font-mono)",
    fontWeight: 500,
    fontSize: fs,
    letterSpacing: "0.02em",
    lineHeight: 1,
    padding: pad,
    width: full ? "100%" : "auto",
    borderRadius: "var(--radius)",
    border: "1px solid transparent",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.45 : 1,
    transition: "background var(--dur) var(--ease-standard), border-color var(--dur) var(--ease-standard), color var(--dur) var(--ease-standard)",
    background: "transparent",
    color: "var(--white)",
    userSelect: "none",
    WebkitTapHighlightColor: "transparent"
  };
  const variants = {
    primary: {
      background: "var(--oxblood)",
      borderColor: "var(--oxblood-hi)",
      color: "var(--white)"
    },
    secondary: {
      background: "var(--near)",
      borderColor: "var(--line-2)",
      color: "var(--white)"
    },
    ghost: {
      background: "transparent",
      borderColor: "transparent",
      color: "var(--white-2)"
    },
    ceremonial: {
      background: "transparent",
      borderColor: "var(--gold)",
      color: "var(--gold-hi)"
    }
  };
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: `strix-btn strix-btn--${variant}`,
    style: {
      ...base,
      ...variants[variant],
      ...style
    },
    disabled: as === "button" ? disabled : undefined,
    onClick: disabled ? undefined : onClick
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — a raised surface on the black field.
 * Near-black panel with a hairline ring. Ceremonial variant takes a gold hairline and the oxblood
 * inner glow for formal registers (title screens, motto cards).
 */
function Card({
  children,
  variant = "default",
  padding = "md",
  accentLeft = false,
  style,
  ...rest
}) {
  const pad = {
    none: 0,
    sm: "14px 16px",
    md: "20px 22px",
    lg: "28px 30px"
  }[padding];
  const base = {
    background: "var(--near)",
    border: "1px solid var(--line)",
    borderRadius: "var(--radius)",
    padding: pad,
    color: "var(--read)"
  };
  const variants = {
    default: {},
    raised: {
      background: "var(--near-2)",
      borderColor: "var(--line-2)"
    },
    ceremonial: {
      borderColor: "var(--gold)",
      boxShadow: "var(--glow-oxblood)"
    },
    code: {
      background: "var(--surface-code)",
      fontFamily: "var(--font-mono)",
      fontSize: 12.5,
      color: "var(--white-2)"
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `strix-card strix-card--${variant}`,
    style: {
      ...base,
      ...variants[variant],
      ...(accentLeft ? {
        borderLeft: "3px solid var(--oxblood-hi)"
      } : null),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tag — a compact, removable label (entity ids, filters, keywords).
 * Quieter than Badge: sentence-case mono, hairline only.
 */
function Tag({
  children,
  onRemove,
  mono = true,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: onRemove ? "strix-tag strix-tag--removable" : "strix-tag",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 7,
      fontFamily: mono ? "var(--font-mono)" : "var(--font-sans)",
      fontSize: 12,
      letterSpacing: "0.01em",
      padding: "4px 10px",
      borderRadius: "var(--radius-sm)",
      border: "1px solid var(--line-2)",
      background: "var(--near)",
      color: "var(--white-2)",
      lineHeight: 1,
      whiteSpace: "nowrap",
      ...style
    }
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("button", {
    className: "strix-tag-remove",
    onClick: onRemove,
    "aria-label": "Remove",
    style: {
      all: "unset",
      cursor: "pointer",
      color: "var(--mute)",
      fontFamily: "var(--font-mono)",
      fontSize: 13,
      lineHeight: 1,
      padding: "0 1px",
      borderRadius: "var(--radius-sm)"
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/dashboard/EntityTile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * EntityTile — a StrixHome dashboard tile for a light, switch, or sensor.
 * Tap to toggle. Off reads muted; on lifts to white (--state-on).
 * `icon` is any node (an <img>, an icon-font <i>, or a glyph).
 */
function EntityTile({
  name,
  state,
  on = false,
  icon,
  unavailable = false,
  onToggle,
  ...rest
}) {
  const active = on && !unavailable;
  const tint = unavailable ? "var(--faint)" : active ? "var(--state-on)" : "var(--mute)";
  return /*#__PURE__*/React.createElement("button", _extends({
    className: "strix-entity-tile",
    onClick: unavailable ? undefined : onToggle,
    style: {
      all: "unset",
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      gap: 14,
      padding: "16px 16px 14px",
      minWidth: 132,
      background: active ? "var(--near-2)" : "var(--near)",
      border: `1px solid ${active ? "var(--mute)" : "var(--line-2)"}`,
      borderRadius: "var(--radius-md)",
      cursor: unavailable ? "not-allowed" : "pointer",
      opacity: unavailable ? 0.55 : 1,
      transition: "background var(--dur) var(--ease-standard), border-color var(--dur) var(--ease-standard)"
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 38,
      height: 38,
      borderRadius: "var(--radius)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: active ? "var(--line-2)" : "var(--near-2)",
      color: tint,
      fontSize: 18,
      lineHeight: 1
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 13,
      color: "var(--white)",
      lineHeight: 1.25
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.04em",
      color: tint
    }
  }, unavailable ? "unavailable" : state)));
}
Object.assign(__ds_scope, { EntityTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/dashboard/EntityTile.jsx", error: String((e && e.message) || e) }); }

// components/dashboard/ModeButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ModeButton — a house-mode selector button (Day / Bedtime / Night / Away).
 * The active mode carries the oxblood structure; the rest stay hairline.
 */
function ModeButton({
  mode,
  active = false,
  icon,
  onSelect,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    className: "strix-mode-button",
    "aria-pressed": active,
    onClick: onSelect,
    style: {
      all: "unset",
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      padding: "16px 10px",
      flex: 1,
      minWidth: 76,
      background: active ? "var(--oxblood)" : "var(--near)",
      border: `1px solid ${active ? "var(--oxblood-hi)" : "var(--line-2)"}`,
      borderRadius: "var(--radius-md)",
      color: active ? "var(--white)" : "var(--white-2)",
      cursor: "pointer",
      transition: "background var(--dur) var(--ease-standard), border-color var(--dur) var(--ease-standard), color var(--dur) var(--ease-standard)"
    }
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      lineHeight: 1,
      color: active ? "var(--state-on)" : "var(--mute)"
    }
  }, icon), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      letterSpacing: "0.04em"
    }
  }, mode));
}
Object.assign(__ds_scope, { ModeButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/dashboard/ModeButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — a mono text field for config values and search.
 * Hairline on the black field; focus lifts the border to oxblood and shows the shared gold ring.
 */
function Input({
  label,
  hint,
  prefix,
  value,
  onChange,
  placeholder,
  disabled = false,
  type = "text",
  id,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const fieldId = id || (label ? `strix-in-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 7,
      width: "100%"
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.06em",
      color: "var(--mute)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "strix-input",
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      background: "var(--near)",
      border: `1px solid ${focused ? "var(--oxblood-hi)" : "var(--line-2)"}`,
      borderRadius: "var(--radius)",
      padding: "0 12px",
      opacity: disabled ? 0.5 : 1,
      transition: "border-color var(--dur) var(--ease-standard)"
    }
  }, prefix && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 13,
      color: "var(--mute)"
    }
  }, prefix), /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: type,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      all: "unset",
      flex: 1,
      fontFamily: "var(--font-mono)",
      fontSize: 13,
      color: "var(--white)",
      padding: "10px 0",
      minWidth: 0
    }
  }, rest))), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      color: "var(--mute)"
    }
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Switch — a binary control for dashboard toggles (use_occupancy, disable lighting).
 * Off reads as a hairline track; on lifts to oxblood (structure), or gold when ceremonial.
 */
function Switch({
  checked = false,
  onChange,
  disabled = false,
  label,
  tone = "accent",
  ...rest
}) {
  const onColor = tone === "ceremonial" ? "var(--gold)" : "var(--oxblood-hi)";
  const control = /*#__PURE__*/React.createElement("button", _extends({
    className: tone === "ceremonial" ? "strix-switch strix-switch--ceremonial" : "strix-switch",
    role: "switch",
    "aria-checked": checked,
    disabled: disabled,
    onClick: disabled ? undefined : () => onChange && onChange(!checked),
    style: {
      all: "unset",
      boxSizing: "border-box",
      width: 40,
      height: 22,
      borderRadius: 999,
      border: `1px solid ${checked ? onColor : "var(--line-2)"}`,
      background: checked ? "var(--oxblood-wash)" : "var(--near-2)",
      position: "relative",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      transition: "border-color var(--dur) var(--ease-standard), background var(--dur) var(--ease-standard)",
      flex: "none",
      verticalAlign: "middle"
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 2,
      left: checked ? 20 : 2,
      width: 16,
      height: 16,
      borderRadius: "50%",
      background: checked ? onColor : "var(--mute)",
      transition: "left var(--dur) var(--ease-out), background var(--dur) var(--ease-standard)"
    }
  }));
  if (!label) return control;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 12,
      fontFamily: "var(--font-mono)",
      fontSize: 13,
      color: disabled ? "var(--faint)" : "var(--white-2)",
      cursor: disabled ? "not-allowed" : "pointer"
    }
  }, control, /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Byline = __ds_scope.Byline;

__ds_ns.Motto = __ds_scope.Motto;

__ds_ns.Seal = __ds_scope.Seal;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.EntityTile = __ds_scope.EntityTile;

__ds_ns.ModeButton = __ds_scope.ModeButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Switch = __ds_scope.Switch;

})();
