import React from "react";

/**
 * Motto — the ceremonial cipher. Gold on a near-black card with an oxblood inner glow.
 * The rarest register; use for footers, title screens, and formal fronts only.
 */
export function Motto({ gloss = true, align = "center", framed = true, style, ...rest }) {
  const inner = (
    <>
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 15,
          letterSpacing: "0.22em",
          color: "var(--gold-hi)",
        }}
      >
        Scientia · Societas · Ascensus
      </div>
      {gloss && (
        <div
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 13,
            color: "var(--mute)",
            marginTop: 11,
          }}
        >
          Knowledge · Society · Ascent
        </div>
      )}
    </>
  );

  if (!framed) {
    return (
      <div className="strix-motto" style={{ textAlign: align, ...style }} {...rest}>
        {inner}
      </div>
    );
  }

  return (
    <div
      className="strix-motto"
      style={{
        border: "1px solid var(--oxblood-hi)",
        borderRadius: "var(--radius)",
        background: "var(--near)",
        boxShadow: "var(--glow-oxblood)",
        padding: "22px 26px",
        textAlign: align,
        ...style,
      }}
      {...rest}
    >
      {inner}
    </div>
  );
}
