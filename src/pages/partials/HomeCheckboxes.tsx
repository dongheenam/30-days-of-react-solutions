import useCheckboxes from "../../hooks/useCheckboxes";
import CheckboxGroup, { Checkboxes } from "../../components/CheckboxGroup";

export default function HomeCheckBoxes() {
  const useCB = useCheckboxes();
  const [_checkedStatuses, checkedItems, _handleChange] = useCB;

  const checkboxes: Checkboxes = {
    name: "cb-example",
    items: [
      { label: "Checkbox 1", id: "checkbox-1", value: "1" },
      { label: "Checkbox 2", id: "checkbox-2", value: "2" },
      { label: "Checkbox 3", id: "checkbox-3", value: "3" },
      { label: "Checkbox 4", id: "checkbox-4", value: "4", disabled: true },
    ],
  };

  return (
    <>
      <h3>Checkboxes</h3>
      <div className="mb-4">
        <span>Checkbox values: {checkedItems.join(", ")}</span>
        <div className="border border-gray-500 rounded-md px-4 py-2 flex flex-col">
          <CheckboxGroup checkboxes={checkboxes} useCheckboxes={useCB} />
        </div>
      </div>
    </>
  );
}
