import * as React from "react";

/** The author attribution — mono, white; the doctoral title is never dropped. */
export interface BylineProps {
  /** Attribution form. Default "Dr. Matt Booth". */
  form?:
    | "Dr. Matt Booth"
    | "Matt Booth, PhD"
    | "Dr. Matthew Booth"
    | "Matthew Booth, PhD"
    | "Dr. Booth";
  /** Append "The Order of the Strix". Default true. */
  order?: boolean;
  /** Append an instance/wordmark segment, e.g. "StrixMCS". */
  instance?: string;
  /** Which entity: "order" (default) or "labs" — the imprint byline "StrixMCS Labs · Dr. Matt Booth" (drops the Order segment). */
  entity?: "order" | "labs";
  /** @deprecated Use entity="labs". */
  imprint?: boolean;
  align?: "left" | "center" | "right";
}

export function Byline(props: BylineProps): JSX.Element;
