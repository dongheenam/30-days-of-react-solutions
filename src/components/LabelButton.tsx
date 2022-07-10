import React from "react";

export interface LabelButtonProps {
  children: string | React.ReactElement;
  input: React.ReactElement;
  disabled?: boolean;
  id?: string;
  className?: string;
  [otherProps: string]: any;
}

export default function LabelButton({
  children,
  id,
  input,
  disabled = false,
  className = "",
  ...otherProps
}: LabelButtonProps) {
  const labelProps = {
    className: `btn-label${disabled ? " disabled" : ""} ${className}`,
    htmlFor: id,
    ...otherProps,
  };
  const inputProps = {
    className: "hidden",
    id: id,
    disabled: disabled,
  };
  return (
    <div>
      {React.cloneElement(input, inputProps)}
      <label {...labelProps}>{children}</label>
    </div>
  );
}
