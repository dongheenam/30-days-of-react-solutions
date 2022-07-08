import React from "react";

export interface ButtonProps {
  children: string | React.ReactElement;
  as?: string | React.ElementType;
  variant?: "solid" | "outline" | "text";
  color?: "default" | "primary" | "secondary" | "red" | "amber" | "green";
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  className?: string;
  [otherProps: string]: any;
}

export default function Button({
  as = "button",
  variant = "text",
  color = "default",
  className = "",
  leftIcon,
  rightIcon,
  children,
  ...otherProps
}: ButtonProps) {
  let defaultClassName = "btn click";
  switch (variant) {
    case "solid":
      defaultClassName += " click-filled";
      break;
    case "outline":
      defaultClassName += " border";
  }
  switch (color) {
    case "primary":
      defaultClassName += " click-primary";
      break;
    case "secondary":
      defaultClassName += " click-secondary";
      break;
    case "red":
      defaultClassName += " click-red";
      break;
    case "amber":
      defaultClassName += " click-amber";
      break;
    case "green":
      defaultClassName += " click-green";
  }

  const buttonProps = {
    className: `inline-flex align-middle ${defaultClassName} ${className}`,
    ...otherProps,
  };
  const innerComponent = (
    <span className="inline-flex gap-2">
      {leftIcon} {children} {rightIcon}
    </span>
  );
  return React.createElement(as, buttonProps, innerComponent);
}
