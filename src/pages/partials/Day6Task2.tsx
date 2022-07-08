import Box from "../../components/Box";
import { range } from "../../utils";
import { Color, randomColor } from "./Day4Task1";

// pre-generate colors so they stay constant within a session
const colors: Array<Color> = range(32).map(() => randomColor());

export default function Day6Task2() {
  return (
    <>
      <h2>Hexadecimal colors</h2>
      <Box>
        <div
          className="grid gap-1
            grid-cols-3 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-8"
        >
          {colors.map((color) => (
            <div
              key={color.value}
              className="aspect-square flex justify-center items-center"
              style={{ backgroundColor: color.value, color: color.textColor }}
            >
              {color.value}
            </div>
          ))}
        </div>
      </Box>
    </>
  );
}
