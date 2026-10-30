import React from "react";

/**
 * Input — a mono text field for config values and search.
 * Hairline on the black field; focus lifts the border to gold.
 */
export function Input({
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

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 7, width: "100%" }}>
      {label && (
        <label
          htmlFor={fieldId}
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--mute)",
          }}
        >
          {label}
        </label>
      )}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          background: "var(--near)",
          border: `1px solid ${focused ? "var(--gold)" : "var(--line-2)"}`,
          borderRadius: "var(--radius)",
          padding: "0 12px",
          opacity: disabled ? 0.5 : 1,
          transition: "border-color var(--dur) var(--ease-standard)",
        }}
      >
        {prefix && (
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--mute)" }}>
            {prefix}
          </span>
        )}
        <input
          id={fieldId}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            all: "unset",
            flex: 1,
            fontFamily: "var(--font-mono)",
            fontSize: 13,
            color: "var(--white)",
            padding: "10px 0",
            minWidth: 0,
          }}
          {...rest}
        />
      </div>
      {hint && (
        <span style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "var(--mute)" }}>
          {hint}
        </span>
      )}
    </div>
  );
}
