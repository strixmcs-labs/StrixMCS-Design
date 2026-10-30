import * as React from "react";

/** A small mono status marker, uppercase-tracked. */
export interface BadgeProps {
  children: React.ReactNode;
  /** neutral (default), accent (oxblood), ceremonial (gold), ok (sage), mute. */
  tone?: "neutral" | "accent" | "ceremonial" | "ok" | "mute";
  /** Show a leading status dot. */
  dot?: boolean;
}

export function Badge(props: BadgeProps): JSX.Element;
