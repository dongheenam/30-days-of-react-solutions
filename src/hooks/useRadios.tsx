import { useState } from "react";
import { Value } from "../components/RadioGroup";

type SelectedItem = undefined | Value;
type SetSelectedItem = React.Dispatch<React.SetStateAction<SelectedItem>>;
type HandleChange = (event: React.ChangeEvent<HTMLInputElement>) => void;
export type UseRadios = [SelectedItem, SetSelectedItem, HandleChange];

export default function useRadios(): UseRadios {
  const [selectedItem, setSelectedItem] = useState<SelectedItem>();

  const handleChange: HandleChange = ({ target: { value } }) =>
    setSelectedItem(value);

  return [selectedItem, setSelectedItem, handleChange];
}
