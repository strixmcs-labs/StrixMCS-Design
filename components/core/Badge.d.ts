import * as React from "react";

/** A small mono status marker, normal case. Status is neutral or accent with a dot. */
export interface BadgeProps {
  children: React.ReactNode;
  /** neutral (default), accent (oxblood), ceremonial (gold — formal fronts only), mute. */
  tone?: "neutral" | "accent" | "ceremonial" | "mute";
  /** Show a leading status dot. */
  dot?: boolean;
}

export function Badge(props: BadgeProps): JSX.Element;
