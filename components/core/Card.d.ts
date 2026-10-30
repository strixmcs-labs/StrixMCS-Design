import * as React from "react";

/**
 * A raised near-black surface on the black field, ringed by a hairline.
 */
export interface CardProps {
  children: React.ReactNode;
  /** default (hairline panel), raised (second surface step + stronger hairline; no shadow), ceremonial (gold hairline + oxblood inner glow — formal only), code (terminal surface). */
  variant?: "default" | "raised" | "ceremonial" | "code";
  /** Default "md". */
  padding?: "none" | "sm" | "md" | "lg";
  /** Add a 3px oxblood left rule to mark structure. */
  accentLeft?: boolean;
  style?: React.CSSProperties;
}

export function Card(props: CardProps): JSX.Element;
