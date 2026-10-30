import * as React from "react";

/**
 * The ceremonial motto cipher — gold on near-black, oxblood inner glow.
 */
export interface MottoProps {
  /** Show the English gloss "Knowledge · Society · Ascent". Default true. */
  gloss?: boolean;
  /** Text alignment. Default "center". */
  align?: "left" | "center";
  /** Wrap in the ceremonial oxblood-glow card. Default true; false renders bare for footers. */
  framed?: boolean;
}

export function Motto(props: MottoProps): JSX.Element;
