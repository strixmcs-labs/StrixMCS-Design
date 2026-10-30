import * as React from "react";

/** A compact, optionally-removable label. Quieter than Badge. */
export interface TagProps {
  children: React.ReactNode;
  /** Show a × remove affordance; called on click. */
  onRemove?: (e: React.MouseEvent) => void;
  /** Mono by default; set false for sans. */
  mono?: boolean;
}

export function Tag(props: TagProps): JSX.Element;
