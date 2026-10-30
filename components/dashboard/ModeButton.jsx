import React from "react";

/**
 * ModeButton — a house-mode selector button (Day / Bedtime / Night / Away).
 * The active mode carries the oxblood structure; the rest stay hairline.
 */
export function ModeButton({ mode, active = false, icon, onSelect, ...rest }) {
  return (
    <button
      className="strix-mode-button"
      aria-pressed={active}
      onClick={onSelect}
      style={{
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
        transition: "background var(--dur) var(--ease-standard), border-color var(--dur) var(--ease-standard), color var(--dur) var(--ease-standard)",
      }}
      {...rest}
    >
      {icon && (
        <span style={{ fontSize: 18, lineHeight: 1, color: active ? "var(--state-on)" : "var(--mute)" }}>
          {icon}
        </span>
      )}
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 12,
          letterSpacing: "0.04em",
        }}
      >
        {mode}
      </span>
    </button>
  );
}
