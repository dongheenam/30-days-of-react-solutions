import { useState } from "react";

import Button from "../ButtonOld";

/* returns a random hex color as string e.g. #3a12d8 */
export interface Color {
  value: string;
  whiteText: boolean;
}
export function randomColor(): Color {
  const colorValues: Array<number> = Array.from({ length: 3 }, () =>
    Math.floor(Math.random() * 256)
  );

  // if the average of the RGB values is less than 128, the text needs to be white
  const whiteText = colorValues.reduce((a, b) => a + b) / 3 < 128;

  const colorHex: Array<string> = colorValues.map((num) =>
    num.toString(16).padStart(2, "0")
  );

  return {
    value: "#" + colorHex.reduce((a, b) => "".concat(a, b)),
    whiteText: whiteText,
  };
}

function renderColors(colors: Array<Color>) {
  return colors.map((color) => (
    <div
      key={color.value}
      className="text-center text-lg mont py-4 rounded-lg"
      style={{
        backgroundColor: color.value,
        color: color.whiteText ? "white" : "black",
      }}
    >
      {color.value}
    </div>
  ));
}

export default function Day4Level3() {
  const [colors, setColors] = useState<Array<Color>>([]);

  return (
    <main>
      <h1>Day 4: Level 3-1</h1>
      <div id="level-3">
        <div id="control" className="m-4 mt-8 flex gap-4">
          <Button onClick={() => setColors([])}>Reset</Button>
          <Button onClick={() => setColors([...colors, randomColor()])}>
            Add Colors
          </Button>
        </div>
        <div id="colors">{renderColors(colors)}</div>
      </div>
    </main>
  );
}
