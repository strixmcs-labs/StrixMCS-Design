import * as React from "react";

/** A mono text field for config values and search; focus lifts the border to oxblood and shows the gold focus ring. */
export interface InputProps {
  /** Normal-case mono label above the field. */
  label?: string;
  /** Sans hint below the field. */
  hint?: string;
  /** Static mono prefix inside the field (e.g. a sigil). */
  prefix?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
  type?: string;
  id?: string;
}

export function Input(props: InputProps): JSX.Element;
