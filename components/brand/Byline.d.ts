import * as React from "react";

/** The author attribution — mono, white; the doctoral title is never dropped. */
export interface BylineProps {
  /** Attribution form. Default "Dr. Matt Booth". */
  /** The name form. Always "Dr. Matt Booth" — the doctoral title is not dropped. */
  form?: "Dr. Matt Booth";
  /** Append "The Order of the Strix". Default true. */
  order?: boolean;
  /** Entity segment set before the Order — e.g. "StrixMCS" for the internal footer: "Dr. Matt Booth · StrixMCS · The Order of the Strix". */
  instance?: string;
  /** Which entity: "house" (default) or "labs" — the Labs byline "StrixMCS Labs · Dr. Matt Booth" (drops the Order segment). "order" is a deprecated alias for "house". */
  entity?: "house" | "labs" | "order";
  /** @deprecated Use entity="labs". */
  imprint?: boolean;
  align?: "left" | "center" | "right";
}

export function Byline(props: BylineProps): JSX.Element;
