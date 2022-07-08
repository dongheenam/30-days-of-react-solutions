import { useState } from "react";

import { choice } from "../../utils";
import countriesJSON from "../../data/countries.json";
import Box from "../../components/Box";
import Button from "../../components/Button";
import FetchImage from "../../components/FetchImage";

interface Country {
  name: string;
  capital: string;
  languages: Array<string>;
  population: number;
  flag: string;
  currency: string;
}
export default function Day8Task2() {
  const countries: Array<Country> = countriesJSON.data;
  const [country, setCountry] = useState<Country>(choice(countries) as Country);
  return (
    <>
      <h2>Random country selector</h2>
      <Box className="mont">
        <div
          className="w-1/3 aspect-[3/2] m-auto 
            flex items-center justify-center overflow-hidden"
        >
          <FetchImage src={country.flag} alt={`flag of ${country.name}`} />
        </div>
        <span className="text-center text-base font-bold uppercase mb-8">
          {country.name}
        </span>
        <div className="w-2/3 m-auto text-lg">
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
        <div className="w-1/3 m-auto text-center mt-4">
          <Button
            variant="solid"
            color="primary"
            onClick={() => setCountry(choice(countries) as Country)}
          >
            Random country!
          </Button>
        </div>
      </Box>
    </>
  );
}
