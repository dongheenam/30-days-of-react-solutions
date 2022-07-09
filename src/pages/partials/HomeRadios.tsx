import { useState } from "react";
import Label from "../../components/Label";
import Radio from "../../components/Radio";

interface Radios {
  name: string;
  items: Array<{
    label: string;
    id: string;
    value: any;
    disabled?: boolean;
  }>;
}

export default function HomeRadios() {
  const [selected, setSelected] = useState<string>();

  const radios: Radios = {
    name: "radio-example",
    items: [
      { label: "Radio 1", id: "radio-1", value: "1" },
      { label: "Radio 2", id: "radio-2", value: "2" },
      { label: "Radio 3", id: "radio-3", value: "3" },
      { label: "Radio 4", id: "radio-4", value: "4", disabled: true },
    ],
  };

  function handleRChange({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) {
    setSelected(value);
  }
  return (
    <>
      <h3>Radios</h3>
      <div className="mb-4">
        <span>Radio value: {selected}</span>
        <div className="border border-gray-500 rounded-md px-4 py-2 flex flex-col">
          {radios.items.map((item) => (
            <Label
              id={item.id}
              key={item.id}
              disabled={item.disabled}
              input={
                <Radio
                  value={item.value}
                  checked={item.value === selected}
                  onChange={(e) => handleRChange(e)}
                />
              }
            >
              {item.label}
            </Label>
          ))}
        </div>
      </div>
    </>
  );
}
