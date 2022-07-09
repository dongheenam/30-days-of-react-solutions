import React from "react";
import { LabelProps } from "./Label";
import { RadioProps } from "./Radio";

interface RadioGroupProps {
  children: React.ReactElement<RadioProps | LabelProps>[];
  name: string;
  [otherProps: string]: any;
}

export default function RadioGroup({
  children,
  name,
  ...otherProps
}: RadioGroupProps) {
  const nameContext = React.createContext(name);
  return <div>{children}</div>;
}
