import React from "react";

/**
 * Seal — the single mark of the Order: owl over book, white line-art on absolute black.
 * The void is the frame. Never recolor, rotate, or crop. Give it size and clear space.
 *
 * `src` must point to a copied seal asset (see the design system's assets/ folder).
 */
export function Seal({
  size = 220,
  src = "assets/StrixMCS-seal-512.png",
  clearspace = true,
  alt = "StrixMCS — the seal of the Order of the Strix",
  ...rest
}) {
  const margin = clearspace ? Math.round(size * 0.16) : 0;
  return (
    <div
      className="strix-seal"
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#000000",
        padding: margin,
      }}
      {...rest}
    >
      <img
        src={src}
        alt={alt}
        width={size}
        height={size}
        style={{ display: "block", width: size, height: size }}
      />
    </div>
  );
}
