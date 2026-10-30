import React from "react";

/**
 * Badge — a small status marker. Mono, normal case, lightly tracked.
 * No status colors: status is neutral or accent with a dot. Gold (ceremonial) is for formal fronts only.
 */
export function Badge({ children, tone = "neutral", dot = false, style, ...rest }) {
  const tones = {
    neutral: { color: "var(--white-2)", border: "var(--line-2)", bg: "var(--near-2)", dot: "var(--mute)" },
    accent: { color: "var(--white)", border: "var(--oxblood-hi)", bg: "var(--oxblood-wash)", dot: "var(--oxblood-hi)" },
    ceremonial: { color: "var(--gold-hi)", border: "var(--gold)", bg: "var(--gold-wash)", dot: "var(--gold)" },
    mute: { color: "var(--mute)", border: "var(--line)", bg: "transparent", dot: "var(--mute)" },
  };
  const t = tones[tone] || tones.neutral;

  return (
    <span
      className={`strix-badge strix-badge--${tone}`}
      style={{
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
        ...style,
      }}
      {...rest}
    >
      {dot && (
        <span
          style={{
            width: 5,
            height: 5,
            borderRadius: "50%",
            background: t.dot,
            flex: "none",
          }}
        />
      )}
      {children}
    </span>
  );
}
