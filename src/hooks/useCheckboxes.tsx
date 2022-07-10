import { useState, useEffect } from "react";
import { Value } from "../components/CheckboxGroup";

type CheckedStatuses = { [value: Value]: boolean };
type CheckedItems = Array<Value>;
type CheckItems = (items: Array<Value>) => void;
type HandleChange = (event: React.ChangeEvent<HTMLInputElement>) => void;
export type UseCheckboxes = [
  CheckedStatuses,
  CheckedItems,
  CheckItems,
  HandleChange
];

export default function useCheckboxes(): UseCheckboxes {
  const [checkedStatuses, setCheckedStatuses] = useState<CheckedStatuses>({});
  const [checkedItems, setCheckedItems] = useState<CheckedItems>([]);

  const handleChange: HandleChange = ({ target: { value, checked } }) =>
    setCheckedStatuses({ ...checkedStatuses, [value]: checked });

  useEffect(() => {
    setCheckedItems(
      Object.keys(checkedStatuses).filter((key) => checkedStatuses[key])
    );
  }, [checkedStatuses]);

  const checkItems: CheckItems = (newItems) => {
    setCheckedStatuses(
      Object.fromEntries(newItems.map((item) => [item, true]))
    );
  };

  return [checkedStatuses, checkedItems, checkItems, handleChange];
}
