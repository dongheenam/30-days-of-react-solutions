import { useState } from "react";
import countriesJSON from "./countries.json";
import Button from "../ButtonOld";

interface Country {
  name: string;
  capital: string;
  languages: Array<string>;
  population: number;
  flag: string;
  currency: string;
}

function randomCountry(countries: Array<Country>): Country {
  const idx = Math.floor(Math.random() * countries.length);
  return countries[idx];
}

export default function Day8Level2() {
  const countries: Array<Country> = countriesJSON.data;
  const [country, setCountry] = useState<Country>(randomCountry(countries));
  return (
    <main>
      <h1>Day 8: Level 2</h1>
      <h2>Dark mode</h2>
      <p>Use the ☀️/🌙 button on the navigation menu!</p>
      <div id="toggle-dark-mode"></div>
      <h2>Random country selector</h2>
      <div
        id="country-selector"
        className="mx-auto my-8 w-fit p-8 mont
           flex flex-col items-center rounded-lg"
        style={{
          boxShadow: "0px 0px 10px 3px rgba(128,128,128,0.4)",
        }}
      >
        <div id="country-identity">
          <img
            src={country.flag}
            alt={`flag of ${country.name}`}
            className="w-48 m-auto"
            style={{
              boxShadow: "0px 0px 5px 2px rgba(128,128,128,0.4)",
            }}
          />
          <div className="text-center py-2 font-bold">
            {country.name.toUpperCase()}
          </div>
        </div>
        <div
          id="country-details"
          className="w-96 my-4 text-slate-600 dark:text-slate-300"
        >
          <div>
            <span className="font-bold">Capital: </span>
            <span>{country.capital}</span>
          </div>
          <div>
            <span className="font-bold">Languages: </span>
            <span>{country.languages.join(", ")}</span>
          </div>
          <div>
            <span className="font-bold">Population: </span>
            <span>{Intl.NumberFormat("en-US").format(country.population)}</span>
          </div>
          <div>
            <span className="font-bold">Currency: </span>
            <span>{country.currency}</span>
          </div>
        </div>
        <Button
          onClick={() => setCountry(randomCountry(countries))}
          className="border-0 px-8 text-slate-50
          bg-secondary-600 hover:bg-secondary-500 
          dark:bg-secondary-900 dark:hover:bg-secondary-800"
        >
          Random country!
        </Button>
      </div>
    </main>
  );
}
