import * as React from "react";

/**
 * The single mark of the Order — owl over book, white on absolute black.
 */
export interface SealProps {
  /** Rendered mark size in px. Give it size — the seal is regalia. Default 220. */
  size?: number;
  /** Path to a copied seal PNG asset. Default "assets/StrixMCS-seal-512.png". */
  src?: string;
  /** Reserve clear space = 16% of size around the mark. Default true. */
  clearspace?: boolean;
  alt?: string;
}

export function Seal(props: SealProps): JSX.Element;
