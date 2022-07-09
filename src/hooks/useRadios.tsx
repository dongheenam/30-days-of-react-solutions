import { useState } from "react";
import { Value } from "../components/RadioGroup";

type SelectedItem = undefined | Value;
type HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => void;
export type UseRadios = [SelectedItem, HandleChange];

export default function useRadios(): UseRadios {
  const [selectedItem, setSelectedItem] = useState<SelectedItem>();

  const handleChange: HandleChange = ({ target: { value } }) =>
    setSelectedItem(value);

  return [selectedItem, handleChange];
}
