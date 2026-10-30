import React from "react";

/**
 * Wordmark — StrixMCS, set correctly and immutably.
 * Capital S, lowercase, MCS in capitals. Mono, normal case, never restyled.
 * `entity="labs"` sets the StrixMCS Labs imprint lockup: Labs in Plex Mono Light 300,
 * #CFCFCF, with the word space tightened to about a third of a mono space.
 * `labs` is kept as a deprecated alias for `entity="labs"`.
 */
export function Wordmark({ size = 32, tagline = false, entity = "order", labs = false, color = "var(--white)", ...rest }) {
  const isLabs = labs || entity === "labs";
  return (
    <span
      className="strix-wordmark"
      style={{ display: "inline-flex", flexDirection: "column", gap: 6 }}
      {...rest}
    >
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontWeight: 600,
          fontSize: size,
          letterSpacing: "0.005em",
          color,
          lineHeight: 1,
        }}
      >
        StrixMCS
        {isLabs && (
          <span style={{ fontWeight: 300, color: "var(--white-2)", marginLeft: "0.2em" }}>Labs</span>
        )}
      </span>
      {tagline && !isLabs && (
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: Math.max(10, Math.round(size * 0.28)),
            letterSpacing: "0.28em",
            color: "var(--mute)",
            textTransform: "uppercase",
          }}
        >
          The Order of the Strix
        </span>
      )}
    </span>
  );
}
