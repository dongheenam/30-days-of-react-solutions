import useCheckboxes from "../../hooks/useCheckboxes";
import CheckboxGroup, { Checkboxes } from "../../components/CheckboxGroup";
import LabelButton from "../../components/LabelButton";
import Button from "../../components/Button";

export default function HomeCheckBoxes() {
  const useCB = useCheckboxes();
  const [_checkedStatuses, checkedItems, checkItems, _handleChange] = useCB;
  const useCB2 = useCheckboxes();
  const [_checkedStatuses2, checkedItems2, _checkItems2, _handleChange2] =
    useCB2;

  const checkboxes: Checkboxes = {
    name: "cb-example",
    items: [
      { label: "Checkbox 1", id: "checkbox-1", value: "1" },
      { label: "Checkbox 2", id: "checkbox-2", value: "2" },
      { label: "Checkbox 3", id: "checkbox-3", value: "3" },
      { label: "Checkbox 4", id: "checkbox-4", value: "4", disabled: true },
    ],
  };
  const checkboxes2: Checkboxes = {
    name: "cb-example-2",
    items: [
      { label: "Checkbox 1", id: "checkbox-2-1", value: "1" },
      { label: "Checkbox 2", id: "checkbox-2-2", value: "2" },
      { label: "Checkbox 3", id: "checkbox-2-3", value: "3" },
      { label: "Checkbox 4", id: "checkbox-2-4", value: "4", disabled: true },
    ],
  };

  return (
    <>
      <h3>Checkboxes</h3>
      <div className="mb-4">
        <span>Checkbox values: {checkedItems.join(", ")}</span>

        <div className="border border-gray-500 rounded-md px-4 py-2 flex flex-col">
          <Button
            color="red"
            variant="solid"
            className="self-start"
            onClick={() => checkItems([])}
          >
            Reset all
          </Button>
          <CheckboxGroup checkboxes={checkboxes} useCheckboxes={useCB} />
        </div>
      </div>
      <div className="mb-4">
        <span>Checkbox values: {checkedItems2.join(", ")}</span>
        <div className="border border-gray-500 rounded-md p-4 flex flex-row flex-wrap gap-2">
          <CheckboxGroup
            checkboxes={checkboxes2}
            useCheckboxes={useCB2}
            labelElement={LabelButton}
          />
        </div>
      </div>
    </>
  );
}
