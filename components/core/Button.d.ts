import * as React from "react";

/**
 * The Order's action control — mono label, hairline or oxblood structure.
 */
export interface ButtonProps {
  children: React.ReactNode;
  /** Visual register. Default "secondary". Use "ceremonial" only for formal moments. */
  variant?: "primary" | "secondary" | "ghost" | "ceremonial";
  /** Default "md". */
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  /** Stretch to container width. */
  full?: boolean;
  /** Render as a different element (e.g. "a"). Default "button". */
  as?: "button" | "a";
  onClick?: (e: React.MouseEvent) => void;
}

export function Button(props: ButtonProps): JSX.Element;
