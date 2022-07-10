import React from "react";
import { UseCheckboxes } from "../hooks/useCheckboxes";
import Checkbox from "./Checkbox";
import Label from "./Label";

export type Value = string | number;
type Item = {
  label: string;
  id: string;
  value: Value;
  disabled?: boolean;
};
export interface Checkboxes {
  name: string;
  items: Array<Item>;
}

interface CheckboxGroupProps {
  checkboxes: Checkboxes;
  useCheckboxes: UseCheckboxes;
  labelElement?: string | React.ElementType;
  inputElement?: string | React.ElementType;
}

export default function CheckboxGroup({
  checkboxes,
  useCheckboxes,
  labelElement = Label,
  inputElement = Checkbox,
}: CheckboxGroupProps) {
  const [checkedStatuses, _checkedItems, _checkItems, handleChange] =
    useCheckboxes;

  function createInput(item: Item) {
    const inputProps = {
      value: item.value,
      /* initially checkedStatuses is an empty object */
      checked: !!checkedStatuses[item.value],
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

  return <>{checkboxes.items.map((item) => createLabel(item))}</>;
}
