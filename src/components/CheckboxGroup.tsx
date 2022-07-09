import { UseCheckboxes } from "../hooks/useCheckboxes";
import Checkbox from "./Checkbox";
import Label from "./Label";

export type Value = string | number;
export interface Checkboxes {
  name: string;
  items: Array<{
    label: string;
    id: string;
    value: Value;
    disabled?: boolean;
  }>;
}

interface CheckboxGroupProps {
  checkboxes: Checkboxes;
  useCheckboxes: UseCheckboxes;
}

export default function CheckboxGroup({
  checkboxes,
  useCheckboxes,
}: CheckboxGroupProps) {
  const [checkedStatuses, _checkedItems, handleChange] = useCheckboxes;
  return (
    <>
      {checkboxes.items.map((item) => (
        <Label
          id={item.id}
          key={item.id}
          disabled={item.disabled}
          input={
            <Checkbox
              value={item.value}
              checked={checkedStatuses[item.value]}
              onChange={handleChange}
            />
          }
        >
          {item.label}
        </Label>
      ))}
    </>
  );
}
