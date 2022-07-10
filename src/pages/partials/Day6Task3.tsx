import React from "react";
import Box from "../../components/Box";
import popJSON from "../../data/populations.json";

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
    <React.Fragment key={country}>
      <div>{shortName(country)}</div>
      <div>
        <div
          className="h-full bg-amber-400 dark:opacity-md rounded-md"
          style={{ width: widthPercent }}
        />
      </div>
      <div>{Intl.NumberFormat("en-US").format(population)}</div>
    </React.Fragment>
  );
}

export default function Day6Task3() {
  // "World" isn't really a country
  const countries: Array<{ country: string; population: number }> =
    popJSON.data.filter((item) => item.country !== "World");
  const maxPopulation: number = Math.max(
    ...countries.map((country) => country.population)
  );
  return (
    <>
      <h2>World population</h2>
      <Box>
        <div className="grid grid-cols-[auto,1fr,auto] gap-x-4 gap-y-1">
          {countries.map((country) =>
            renderChartElement(country, maxPopulation)
          )}
        </div>
      </Box>
    </>
  );
}
