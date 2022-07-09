import { useState } from "react";
import Checkbox from "../../components/Checkbox";
import Label from "../../components/Label";

interface Checkboxes {
  name: string;
  items: Array<{
    label: string;
    id: string;
    value: any;
    disabled?: boolean;
  }>;
}

interface CheckedItems {
  [value: string]: boolean;
}

export default function HomeCheckBoxes() {
  const [checkedItems, setCheckedItems] = useState<CheckedItems>({});

  const checkboxes: Checkboxes = {
    name: "cb-example",
    items: [
      { label: "Checkbox 1", id: "checkbox-1", value: "1" },
      { label: "Checkbox 2", id: "checkbox-2", value: "2" },
      { label: "Checkbox 3", id: "checkbox-3", value: "3" },
      { label: "Checkbox 4", id: "checkbox-4", value: "4", disabled: true },
    ],
  };

  function handleCBChange({
    target: { value, checked },
  }: React.ChangeEvent<HTMLInputElement>) {
    setCheckedItems({ ...checkedItems, [value]: checked });
  }
  function reduceCheckedItems(checkedItems: CheckedItems) {
    return Object.keys(checkedItems).filter((key) => checkedItems[key]);
  }

  return (
    <>
      <h3>Checkboxes</h3>
      <div className="mb-4">
        <span>
          Checkbox values: {reduceCheckedItems(checkedItems).join(", ")}
        </span>
        <div className="border border-gray-500 rounded-md px-4 py-2 flex flex-col">
          {checkboxes.items.map((item) => (
            <Label
              id={item.id}
              key={item.id}
              disabled={item.disabled}
              input={
                <Checkbox
                  value={item.value}
                  checked={checkedItems[item.value]}
                  onChange={(e) => handleCBChange(e)}
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
