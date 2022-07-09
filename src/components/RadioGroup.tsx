import { UseRadios } from "../hooks/useRadios";
import Label from "./Label";
import Radio from "./Radio";

export type Value = string | number;
export interface Radios {
  name: string;
  items: Array<{
    label: string;
    id: string;
    value: Value;
    disabled?: boolean;
  }>;
}

interface RadioGroupProps {
  radios: Radios;
  useRadios: UseRadios;
}

export default function RadioGroup({ radios, useRadios }: RadioGroupProps) {
  const [selectedItem, handleChange] = useRadios;

  return (
    <>
      {radios.items.map((item) => (
        <Label
          id={item.id}
          key={item.id}
          disabled={item.disabled}
          input={
            <Radio
              value={item.value}
              checked={item.value === selectedItem}
              onChange={(e) => handleChange(e)}
            />
          }
        >
          {item.label}
        </Label>
      ))}
    </>
  );
}
