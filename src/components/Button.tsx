import React from "react";

interface ButtonProps {
  as?: string | React.ElementType;
  className?: string;
  children: string | React.ReactElement;
  [otherProps: string]: any;
}

export default function Button({
  as = "button",
  className = "",
  children,
  ...otherProps
}: ButtonProps) {
  const buttonProps = {
    className: `p-2 rounded-md ${className}`,
    ...otherProps,
  };
  return React.createElement(as, buttonProps, children);
}
