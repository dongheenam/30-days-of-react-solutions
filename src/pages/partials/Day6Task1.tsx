import Box from "../../components/Box";
import { range } from "../../utils";

function isPrime(num: number): boolean {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}

function classNum(num: number): string {
  if (num % 2 == 0) {
    return "bg-green-500";
  } else if (isPrime(num)) {
    return "bg-red-500";
  } else {
    return "bg-amber-500";
  }
}

export default function Day6Task1() {
  const numbers: Array<number> = range(32);

  return (
    <>
      <h2>Number generator</h2>
      <Box>
        <div
          className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-1
            mont text-2xl text-bold text-gray-100"
        >
          {numbers.map((num) => (
            <div
              className={`aspect-square flex justify-center items-center
              ${classNum(num)}`}
              key={num}
            >
              {num}
            </div>
          ))}
        </div>
      </Box>
    </>
  );
}
