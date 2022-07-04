import { Color, randomColor } from "../day-4/Day4Level3";
import popJSON from "./populations.json";

/* Helper functions for Challenge #1 and #2 */
function range(start: number, end: number) {
  return [...Array(end - start + 1)].map((_, idx) => start + idx);
}

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
    return "bg-yellow-500";
  }
}

/* Helper functions for Challenge #3 */
const chartNameClass = "w-36 roboto font-light text-lg";
const chartNumberClass = "w-36 ml-4 roboto font-light text-lg";

// shorten USA and Russia
function shortName(country: string) {
  switch (country.toLowerCase()) {
    case "united states of america":
      return "USA";
    case "russian federation":
      return "Russia";
    default:
      return country;
  }
}

function renderChartElement(
  countryData: {
    country: string;
    population: number;
  },
  maxPopulation: number
) {
  const { country, population } = countryData;
  const widthPercent: string =
    ((population / maxPopulation) * 100).toPrecision(2) + "%";
  return (
    <div key={country} className="flex w-full my-1">
      <div className={chartNameClass}>{shortName(country)}</div>
      <div className="flex-grow">
        <div
          className="h-full bg-orange-400 rounded-md"
          style={{ width: widthPercent }}
        />
      </div>
      <div className={chartNumberClass}>
        {Intl.NumberFormat("en-US").format(population)}
      </div>
    </div>
  );
}

export default function Day6Level2() {
  const numbers: Array<number> = range(0, 31);
  const colors: Array<Color> = [...Array(32)].map(() => randomColor());
  // "World" isn't really a country
  const countries: Array<{ country: string; population: number }> =
    popJSON.data.filter((item) => item.country !== "World");
  const maxPopulation: number = Math.max(
    ...countries.map((country) => country.population)
  );
  return (
    <main>
      <h1>Day 6: Level 2</h1>
      <h2>Number Generator</h2>
      <div
        id="part-1"
        className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-0.5 justify-items-stretch"
      >
        {numbers.map((num) => (
          <div
            key={num}
            className={`aspect-square flex justify-center items-center
              text-white text-3xl mont ${classNum(num)}`}
          >
            {num}
          </div>
        ))}
      </div>
      <h2>Hexadecimal Colors</h2>
      <div
        id="part-2"
        className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-0.5 justify-items-stretch"
      >
        {colors.map((color) => (
          <div
            key={color.value}
            className={`aspect-square flex justify-center items-center
              text-xl mont ${color.whiteText ? "text-white" : "text-black"}`}
            style={{ backgroundColor: color.value }}
          >
            {color.value}
          </div>
        ))}
      </div>
      <h2>World population</h2>
      <div id="part-3">
        {countries.map((country) => renderChartElement(country, maxPopulation))}
      </div>
    </main>
  );
}
