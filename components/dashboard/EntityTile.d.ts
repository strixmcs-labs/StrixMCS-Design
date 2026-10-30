import * as React from "react";

/**
 * A StrixHome dashboard tile for a light/switch/sensor — tap to toggle, white when on.
 */
export interface EntityTileProps {
  /** Entity display name, e.g. "Living Room". */
  name: string;
  /** State line, e.g. "On · 60%" or "Occupied". */
  state?: string;
  /** Live on-state — lifts the tile to white (--state-on). */
  on?: boolean;
  /** Icon node (an <img>, icon-font <i>, or glyph). */
  icon?: React.ReactNode;
  /** Render as unavailable (dimmed, non-interactive). */
  unavailable?: boolean;
  onToggle?: (e: React.MouseEvent) => void;
}

export function EntityTile(props: EntityTileProps): JSX.Element;
