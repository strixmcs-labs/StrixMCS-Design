import React from "react";

/**
 * Switch — a binary control for dashboard toggles (use_occupancy, disable lighting).
 * Off reads as a hairline track; on lifts to oxblood (structure), or gold when ceremonial.
 */
export function Switch({
  checked = false,
  onChange,
  disabled = false,
  label,
  tone = "accent",
  ...rest
}) {
  const onColor = tone === "ceremonial" ? "var(--gold)" : "var(--oxblood-hi)";
  const control = (
    <button
      className={tone === "ceremonial" ? "strix-switch strix-switch--ceremonial" : "strix-switch"}
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={disabled ? undefined : () => onChange && onChange(!checked)}
      style={{
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
        verticalAlign: "middle",
      }}
      {...rest}
    >
      <span
        style={{
          position: "absolute",
          top: 2,
          left: checked ? 20 : 2,
          width: 16,
          height: 16,
          borderRadius: "50%",
          background: checked ? onColor : "var(--mute)",
          transition: "left var(--dur) var(--ease-out), background var(--dur) var(--ease-standard)",
        }}
      />
    </button>
  );

  if (!label) return control;

  return (
    <label
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 12,
        fontFamily: "var(--font-mono)",
        fontSize: 13,
        color: disabled ? "var(--faint)" : "var(--white-2)",
        cursor: disabled ? "not-allowed" : "pointer",
      }}
    >
      {control}
      <span>{label}</span>
    </label>
  );
}
