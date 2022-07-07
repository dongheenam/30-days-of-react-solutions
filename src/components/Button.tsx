import React from "react";

interface ButtonProps {
  children: string | React.ReactElement;
  as?: string | React.ElementType;
  primary?: boolean;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  iconOnly?: boolean;
  className?: string;
  [otherProps: string]: any;
}

export default function Button({
  as = "button",
  className = "",
  primary = false,
  leftIcon,
  rightIcon,
  iconOnly = false,
  children,
  ...otherProps
}: ButtonProps) {
  const buttonColor = primary
    ? "button-primary"
    : !className.includes("button")
    ? "button-default"
    : "";

  const buttonProps = {
    className: `p-2 rounded-md inline-flex align-middle
    font-semibold transition-colors ${buttonColor}
    ${!iconOnly && "px-4"} ${className}`,
    ...otherProps,
  };
  const innerComponent = (
    <span className="inline-flex gap-2">
      {leftIcon} {children} {rightIcon}
    </span>
  );
  return React.createElement(as, buttonProps, innerComponent);
}
