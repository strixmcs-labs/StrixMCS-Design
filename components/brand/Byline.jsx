import React from "react";

/**
 * Byline — the author attribution. Mono, white, beneath a title or at a document foot.
 * The doctoral title is part of the attribution and is not dropped.
 * House byline (default): "Dr. Matt Booth · The Order of the Strix".
 * `entity="labs"`: "StrixMCS Labs · Dr. Matt Booth". The two bylines are never mixed.
 * `entity="order"` and `imprint` are deprecated aliases.
 */
export function Byline({
  form = "Dr. Matt Booth",
  order = true,
  instance,
  align = "left",
  entity = "house",
  imprint = false,
  style,
  ...rest
}) {
  const isLabs = imprint || entity === "labs";
  const parts = isLabs ? ["StrixMCS Labs", form] : [form];
  if (instance) parts.push(instance);
  if (order && !isLabs) parts.push("The Order of the Strix");
  return (
    <div
      className="strix-byline"
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: 12,
        letterSpacing: "0.02em",
        color: "var(--white)",
        textAlign: align,
        ...style,
      }}
      {...rest}
    >
      {parts.join(" · ")}
    </div>
  );
}
