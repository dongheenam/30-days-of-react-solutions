import { useEffect } from "react";
import CheckboxGroup from "../../components/CheckboxGroup";
import Label from "../../components/Label";
import Switch from "../../components/Switch";
import useCheckboxes from "../../hooks/useCheckboxes";

export default function HomeSwitches() {
  const useCB = useCheckboxes();
  const [checkedStatuses, checkedItems, checkItems, handleChange] = useCB;

  const switches = {
    name: "switch-example",
    items: [
      { id: "s-1", value: "1", label: "Switch 1" },
      { id: "s-2", value: "2", label: "Switch 2" },
      { id: "s-3", value: "3", label: "Switch 3" },
      { id: "s-4", value: "4", label: "Switch 4", disabled: true },
    ],
  };

  return (
    <>
      <h3>Switches</h3>
      <div className="mb-4">
        <span>Switched on: {checkedItems.join(", ")}</span>
        <div className="border border-gray-500 rounded-md px-4 py-2 flex flex-col">
          <CheckboxGroup
            checkboxes={switches}
            useCheckboxes={useCB}
            inputElement={Switch}
          />
        </div>
      </div>
    </>
  );
}
