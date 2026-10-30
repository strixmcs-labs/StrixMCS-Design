import * as React from "react";

/** A numbered section opener — mute number, mono title, optional lede, hairline rule. */
export interface SectionHeaderProps {
  /** Section number/eyebrow, e.g. "00 — Premise". */
  number?: string;
  title: string;
  /** Optional sans introductory paragraph. */
  lede?: string;
  /** Draw the hairline rule beneath. Default true. */
  rule?: boolean;
}

export function SectionHeader(props: SectionHeaderProps): JSX.Element;
