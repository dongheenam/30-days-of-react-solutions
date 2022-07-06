import { useState } from "react";
import Checkbox from "../Checkbox";

const questionTypes = [
  "Flags",
  "Capitals",
  "Cities",
  "Currency",
  "Languages",
  "Time Zones",
];

export default function RandomGeo() {
  const [typesChecked, setTypesChecked] = useState(
    [...Array(questionTypes.length)].fill(false)
  );
  return (
    <div
      id="level-3-2"
      className="my-8 px-8 rounded-lg border-2 dark:border-slate-800 
    bg-white dark:bg-slate-800 shadow dark:shadow-none
      "
    >
      <Checkbox id="flags">Flags</Checkbox>
      <Checkbox id="capitals">Capitals</Checkbox>
      <Checkbox id="cities">Cities</Checkbox>
    </div>
  );
}
