import React from "react";

/**
 * Tag — a compact, removable label (entity ids, filters, keywords).
 * Quieter than Badge: sentence-case mono, hairline only.
 */
export function Tag({ children, onRemove, mono = true, style, ...rest }) {
  return (
    <span
      className={onRemove ? "strix-tag strix-tag--removable" : "strix-tag"}
      style={{
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
        ...style,
      }}
      {...rest}
    >
      {children}
      {onRemove && (
        <button
          className="strix-tag-remove"
          onClick={onRemove}
          aria-label="Remove"
          style={{
            all: "unset",
            cursor: "pointer",
            color: "var(--mute)",
            fontFamily: "var(--font-mono)",
            fontSize: 13,
            lineHeight: 1,
            padding: "0 1px",
            borderRadius: "var(--radius-sm)",
          }}
        >
          ×
        </button>
      )}
    </span>
  );
}
