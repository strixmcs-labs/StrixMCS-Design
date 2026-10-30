import * as React from "react";

/** The wordmark, set immutably: StrixMCS — capital S, lowercase, MCS in capitals. */
export interface WordmarkProps {
  /** Font size in px. Default 32. */
  size?: number;
  /** Show "The Order of the Strix" tagline beneath. */
  tagline?: boolean;
  /** Which entity: "house" (StrixMCS, default) or "labs" (StrixMCS Labs lockup — Labs in Light 300; suppresses the tagline). "order" is a deprecated alias for "house". */
  entity?: "house" | "labs" | "order";
  /** @deprecated Use entity="labs". */
  labs?: boolean;
  /** Override color (stay within the palette). Default white. */
  color?: string;
}

export function Wordmark(props: WordmarkProps): JSX.Element;
