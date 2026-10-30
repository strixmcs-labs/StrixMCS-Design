import * as React from "react";

/**
 * A house-mode selector button — the active mode carries oxblood structure.
 */
export interface ModeButtonProps {
  /** Mode label, e.g. "Day", "Bedtime", "Night", "Away". */
  mode: string;
  /** Whether this is the current house mode. */
  active?: boolean;
  /** Icon node above the label. */
  icon?: React.ReactNode;
  onSelect?: (e: React.MouseEvent) => void;
}

export function ModeButton(props: ModeButtonProps): JSX.Element;
