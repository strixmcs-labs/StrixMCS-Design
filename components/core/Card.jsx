import React from "react";

/**
 * Card — a raised surface on the black field.
 * Near-black panel with a hairline ring. Ceremonial variant takes a gold hairline and the oxblood
 * inner glow for formal registers (title screens, motto cards).
 */
export function Card({
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
    lg: "28px 30px",
  }[padding];

  const base = {
    background: "var(--near)",
    border: "1px solid var(--line)",
    borderRadius: "var(--radius)",
    padding: pad,
    color: "var(--read)",
  };

  const variants = {
    default: {},
    raised: {
      background: "var(--near-2)",
      borderColor: "var(--line-2)",
    },
    ceremonial: {
      borderColor: "var(--gold)",
      boxShadow: "var(--glow-oxblood)",
    },
    code: {
      background: "var(--surface-code)",
      fontFamily: "var(--font-mono)",
      fontSize: 12.5,
      color: "var(--white-2)",
    },
  };

  return (
    <div
      className={`strix-card strix-card--${variant}`}
      style={{ ...base, ...variants[variant], ...(accentLeft ? { borderLeft: "3px solid var(--oxblood-hi)" } : null), ...style }}
      {...rest}
    >
      {children}
    </div>
  );
}
