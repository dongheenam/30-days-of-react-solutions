import { useState } from "react";
import Box from "../../components/Box";
import Button from "../../components/Button";

export interface Color {
  value: string;
  textColor: string;
}

/* returns a random hex color as string e.g. #3a12d8 */
export function randomColor(): Color {
  const colorValues: Array<number> = Array.from({ length: 3 }, () =>
    Math.floor(Math.random() * 256)
  );

  // if the average of the RGB values is less than 128, the text needs to be white
  const needWhiteText = colorValues.reduce((a, b) => a + b) / 3 < 128;
  const textColor = needWhiteText ? "rgba(255,255,255,0.8)" : "rgba(0,0,0,0.8)";

  const colorHex: Array<string> = colorValues.map((num) =>
    num.toString(16).padStart(2, "0")
  );

  return {
    value: "#" + colorHex.reduce((a, b) => "".concat(a, b)),
    textColor: textColor,
  };
}

function renderColors(colors: Array<Color>) {
  return colors.map((color) => (
    <div
      key={color.value}
      className="py-4 rounded-lg text-center text-xl font-semibold"
      style={{
        background: color.value,
        color: color.textColor,
      }}
    >
      {color.value}
    </div>
  ));
}

export default function Day4Task1() {
  const [colors, setColors] = useState<Array<Color>>([]);
  return (
    <>
      <h2>Random hex color generator</h2>
      <Box>
        <div className="flex gap-4">
          <Button onClick={() => setColors([])} color="red" variant="outline">
            Reset
          </Button>
          <Button
            onClick={() => setColors([...colors, randomColor()])}
            variant="outline"
          >
            Add Colors
          </Button>
        </div>
        <div className="flex flex-col">{renderColors(colors)}</div>
      </Box>
    </>
  );
}
