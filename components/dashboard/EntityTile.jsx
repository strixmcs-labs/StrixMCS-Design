import React from "react";

/**
 * EntityTile — a StrixHome dashboard tile for a light, switch, or sensor.
 * Tap to toggle. Off reads muted; on lifts to white (--state-on).
 * `icon` is any node (an <img>, an icon-font <i>, or a glyph).
 */
export function EntityTile({
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

  return (
    <button
      className="strix-entity-tile"
      onClick={unavailable ? undefined : onToggle}
      style={{
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
        transition: "background var(--dur) var(--ease-standard), border-color var(--dur) var(--ease-standard)",
      }}
      {...rest}
    >
      <div
        style={{
          width: 38,
          height: 38,
          borderRadius: "var(--radius)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: active ? "var(--line-2)" : "var(--near-2)",
          color: tint,
          fontSize: 18,
          lineHeight: 1,
        }}
      >
        {icon}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 13,
            color: "var(--white)",
            lineHeight: 1.25,
          }}
        >
          {name}
        </span>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            letterSpacing: "0.04em",
            color: tint,
          }}
        >
          {unavailable ? "unavailable" : state}
        </span>
      </div>
    </button>
  );
}
