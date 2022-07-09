import RadioGroup, { Radios } from "../../components/RadioGroup";
import useRadios from "../../hooks/useRadios";

export default function HomeRadios() {
  const useR = useRadios();
  const [selectedItem, handleChange] = useR;

  const radios: Radios = {
    name: "radio-example",
    items: [
      { label: "Radio 1", id: "radio-1", value: "1" },
      { label: "Radio 2", id: "radio-2", value: "2" },
      { label: "Radio 3", id: "radio-3", value: "3" },
      { label: "Radio 4", id: "radio-4", value: "4", disabled: true },
    ],
  };

  return (
    <>
      <h3>Radios</h3>
      <div className="mb-4">
        <span>Radio value: {selectedItem}</span>
        <div className="border border-gray-500 rounded-md px-4 py-2 flex flex-col">
          <RadioGroup radios={radios} useRadios={useR} />
        </div>
      </div>
    </>
  );
}
