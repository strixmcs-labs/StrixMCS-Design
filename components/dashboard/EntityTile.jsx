import React from "react";

/**
 * EntityTile — a StrixHome dashboard tile for a light, switch, or sensor.
 * Tap to toggle. Off reads muted; on lifts to gold (the live-state tint).
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
  const tint = unavailable ? "var(--faint)" : active ? "var(--gold)" : "var(--mute)";

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
        background: active ? "rgba(188,166,135,0.06)" : "var(--near)",
        border: `1px solid ${active ? "rgba(188,166,135,0.28)" : "var(--line-2)"}`,
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
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: active ? "rgba(188,166,135,0.12)" : "var(--near-2)",
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
            letterSpacing: "0.06em",
            color: tint,
            textTransform: "uppercase",
          }}
        >
          {unavailable ? "unavailable" : state}
        </span>
      </div>
    </button>
  );
}
