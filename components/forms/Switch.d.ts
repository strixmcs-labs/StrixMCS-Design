import * as React from "react";

/**
 * A binary toggle for dashboard controls — off is hairline, on lifts to oxblood.
 */
export interface SwitchProps {
  checked?: boolean;
  onChange?: (next: boolean) => void;
  disabled?: boolean;
  /** Optional mono label shown to the right. */
  label?: string;
  /** "accent" (oxblood, default) or "ceremonial" (gold). */
  tone?: "accent" | "ceremonial";
}

export function Switch(props: SwitchProps): JSX.Element;
