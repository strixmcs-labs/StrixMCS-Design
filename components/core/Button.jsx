import React from "react";

/**
 * Button — the Order's action control.
 * Three registers: primary (oxblood structure), secondary (hairline), ghost (bare).
 * A ceremonial variant is reserved for formal moments (gold hairline).
 * Hover lifts the border to oxblood (ceremonial → gold); focus shows the shared gold ring.
 */
export function Button({
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
    lg: "13px 24px",
  }[size];
  const fs = { sm: 12, md: 13, lg: 14 }[size];

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
    WebkitTapHighlightColor: "transparent",
  };

  const variants = {
    primary: {
      background: "var(--oxblood)",
      borderColor: "var(--oxblood-hi)",
      color: "var(--white)",
    },
    secondary: {
      background: "var(--near)",
      borderColor: "var(--line-2)",
      color: "var(--white)",
    },
    ghost: {
      background: "transparent",
      borderColor: "transparent",
      color: "var(--white-2)",
    },
    ceremonial: {
      background: "transparent",
      borderColor: "var(--gold)",
      color: "var(--gold-hi)",
    },
  };

  const Tag = as;

  return (
    <Tag
      className={`strix-btn strix-btn--${variant}`}
      style={{ ...base, ...variants[variant], ...style }}
      disabled={as === "button" ? disabled : undefined}
      onClick={disabled ? undefined : onClick}
      {...rest}
    >
      {children}
    </Tag>
  );
}
