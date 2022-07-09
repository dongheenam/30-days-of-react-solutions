import React from "react";

export interface LabelProps {
  children: string | React.ReactElement;
  input: React.ReactElement;
  disabled?: boolean;
  id?: string;
  className?: string;
  [otherProps: string]: any;
}

export default function Label({
  children,
  id,
  input,
  disabled = false,
  className,
  ...otherProps
}: LabelProps) {
  const labelProps = {
    className: `px-2 py-1 rounded flex items-center transition-colors
      ${disabled ? "disabled" : "hover:bg-gray-200 dark:hover:bg-gray-800"}
      ${className}`,
    ...otherProps,
  };
  return (
    <label htmlFor={id} {...labelProps}>
      {id || disabled
        ? React.cloneElement(input, { id: id, disabled: disabled })
        : input}
      <span className="ml-2">{children}</span>
    </label>
  );
}
