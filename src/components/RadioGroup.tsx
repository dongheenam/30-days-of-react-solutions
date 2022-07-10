import React from "react";
import { UseRadios } from "../hooks/useRadios";
import Label from "./Label";
import Radio from "./Radio";

export type Value = string | number;
type Item = {
  label: string;
  id: string;
  value: Value;
  disabled?: boolean;
};
export interface Radios {
  name: string;
  items: Array<Item>;
}

interface RadioGroupProps {
  radios: Radios;
  useRadios: UseRadios;
  labelElement?: string | React.ElementType;
  inputElement?: string | React.ElementType;
}

export default function RadioGroup({
  radios,
  useRadios,
  labelElement = Label,
  inputElement = Radio,
}: RadioGroupProps) {
  const [selectedItem, _selectItem, handleChange] = useRadios;

  function createInput(item: Item) {
    const inputProps = {
      value: item.value,
      checked: selectedItem === item.value,
      onChange: handleChange,
    };
    return React.createElement(inputElement, inputProps);
  }
  function createLabel(item: Item) {
    const labelProps = {
      id: item.id,
      key: item.id,
      disabled: item.disabled,
      input: createInput(item),
    };
    return React.createElement(labelElement, labelProps, item.label);
  }

  return <>{radios.items.map((item) => createLabel(item))}</>;
}
