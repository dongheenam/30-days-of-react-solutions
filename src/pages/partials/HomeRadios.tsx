import Button from "../../components/Button";
import LabelButton from "../../components/LabelButton";
import RadioGroup, { Radios } from "../../components/RadioGroup";
import useRadios from "../../hooks/useRadios";

export default function HomeRadios() {
  const useR = useRadios();
  const [selectedItem, selectItem, _handleChange] = useR;
  const useR2 = useRadios();
  const [selectedItem2, _selectItem2, _handleChange2] = useR2;

  const radios: Radios = {
    name: "radio-example",
    items: [
      { label: "Radio 1", id: "radio-1", value: "1" },
      { label: "Radio 2", id: "radio-2", value: "2" },
      { label: "Radio 3", id: "radio-3", value: "3" },
      { label: "Radio 4", id: "radio-4", value: "4", disabled: true },
    ],
  };
  const radios2: Radios = {
    name: "radio-example",
    items: [
      { label: "Radio 1", id: "radio-2-1", value: "1" },
      { label: "Radio 2", id: "radio-2-2", value: "2" },
      { label: "Radio 3", id: "radio-2-3", value: "3" },
      { label: "Radio 4", id: "radio-2-4", value: "4", disabled: true },
    ],
  };

  return (
    <>
      <h3>Radios</h3>
      <div className="mb-4">
        <span>Radio value: {selectedItem}</span>
        <div className="border border-gray-500 rounded-md px-4 py-2 flex flex-col">
          <Button
            color="red"
            variant="solid"
            className="self-start"
            onClick={() => selectItem(undefined)}
          >
            Reset
          </Button>
          <RadioGroup radios={radios} useRadios={useR} />
        </div>
      </div>
      <div className="mb-4">
        <span>Radio value: {selectedItem2}</span>
        <div className="border border-gray-500 rounded-md p-4 flex flex-row flex-wrap gap-2">
          <RadioGroup
            radios={radios2}
            useRadios={useR2}
            labelElement={LabelButton}
          />
        </div>
      </div>
    </>
  );
}
