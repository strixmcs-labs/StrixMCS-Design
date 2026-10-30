import React from "react";

/**
 * SectionHeader — a numbered section opener in the guidelines register.
 * Gold section number over a white mono title, optional sans lede, hairline rule.
 */
export function SectionHeader({ number, title, lede, rule = true, style, ...rest }) {
  return (
    <header
      className="strix-section-header"
      style={{
        paddingBottom: rule ? 22 : 0,
        borderBottom: rule ? "1px solid var(--line)" : "none",
        ...style,
      }}
      {...rest}
    >
      {number != null && (
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            letterSpacing: "0.26em",
            color: "var(--gold)",
            marginBottom: 14,
          }}
        >
          {number}
        </div>
      )}
      <h2
        style={{
          fontFamily: "var(--font-mono)",
          fontWeight: 600,
          fontSize: 23,
          letterSpacing: "0.005em",
          color: "var(--white)",
          margin: 0,
        }}
      >
        {title}
      </h2>
      {lede && (
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 15,
            lineHeight: 1.6,
            color: "var(--read)",
            maxWidth: "66ch",
            margin: "14px 0 0",
          }}
        >
          {lede}
        </p>
      )}
    </header>
  );
}
