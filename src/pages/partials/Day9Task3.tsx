import { useState } from "react";
import A from "../../components/A";
import Box from "../../components/Box";
import Button from "../../components/Button";
import CheckboxGroup, { Checkboxes } from "../../components/CheckboxGroup";
import useCheckboxes from "../../hooks/useCheckboxes";

import countryCodesJSON from "../../data/country-codes.json";
import { choice, randInt } from "../../utils";
import Skeleton from "../../components/Skeleton";

interface Choice {
  idx: number;
  label: string;
  isCorrect: boolean;
  isRevealed: boolean;
}
interface Problem {
  question: string;
  choices: Array<Choice>;
}

/* for the external api calls */
interface CountryInfo {
  data: {
    capital: string;
    code: string;
    callingCode: string;
    currencyCodes: string[];
    flagImageUri: string;
    name: string;
    numRegions: number;
    wikiDataId: string;
  };
}

const API_URL = "http://geodb-free-service.wirefreethought.com/v1/";

export default function Day9Task3() {
  const countryCodes: Array<string> = (
    countryCodesJSON as { data: Array<string> }
  ).data;

  const [isLoading, setIsLoading] = useState(false);
  const [problem, setProblem] = useState<Problem>({
    question: "Which is the capital of Australia?",
    choices: [
      {
        idx: 0,
        label: "Washington D. C.",
        isCorrect: false,
        isRevealed: false,
      },
      { idx: 1, label: "Canberra", isCorrect: true, isRevealed: false },
      { idx: 2, label: "London", isCorrect: false, isRevealed: false },
      { idx: 3, label: "Sydney", isCorrect: false, isRevealed: false },
    ],
  });

  /* generate problems */
  function fetchCountryInfo(countryCode: string): Promise<CountryInfo> {
    return fetch(`${API_URL}/geo/countries/${countryCode}`).then((response) =>
      response.json()
    );
  }
  async function makeCapitalProblem() {
    const randomCountryCodes = choice(countryCodes, 4) as Array<string>;
    let leftCodes = countryCodes.filter(
      (code) => !randomCountryCodes.includes(code)
    );
    const infos: Array<CountryInfo> = await Promise.all(
      randomCountryCodes.map((code) => fetchCountryInfo(code))
    );

    let filteredInfos = infos.filter((info) => !!info.data?.name);
    while (filteredInfos.length < 4) {
      console.log("current stack of countries: ", filteredInfos.length);
      let newCode = choice(leftCodes) as string;
      const newInfo = await Promise.resolve(fetchCountryInfo(newCode));

      if (!!newInfo.data?.name) {
        filteredInfos.push(newInfo);
        console.log("re-fetching succeeded, code:", newCode);
      } else {
        console.log("re-fetching failed, code:", newCode);
      }
    }

    const answerIdx: number = randInt(4);

    setProblem({
      question: `Which is the capital of ${filteredInfos[answerIdx].data.name}?`,
      choices: filteredInfos.map((info, idx) => {
        return {
          idx: idx,
          label: info.data.capital,
          isCorrect: idx === answerIdx,
          isRevealed: false,
        };
      }),
    });
  }

  function generateProblem() {
    setIsLoading(true);

    makeCapitalProblem()
      .then()
      .catch((error) => {
        console.error(error);
        setProblem({ question: "Loading failed! Try again...", choices: [] });
      })
      .finally(() => setIsLoading(false));
  }

  /* show the problem */
  function renderProblem(problem: Problem) {
    return (
      <>
        <div className="text-xl font-semibold mb-4">{problem.question}</div>
        <div className="grid gap-2 grid-cols-1 md:grid-cols-2">
          {problem.choices.map((choice) => (
            <Button
              variant={choice.isRevealed ? "solid" : "outline"}
              key={choice.label}
              color={
                choice.isRevealed
                  ? choice.isCorrect
                    ? "green"
                    : "red"
                  : "default"
              }
              onClick={() => submitChoice(choice)}
            >
              {choice.label}
            </Button>
          ))}
        </div>
      </>
    );
  }

  function submitChoice(choice: Choice) {
    const newProblem = { ...problem };
    newProblem.choices[choice.idx].isRevealed = true;
    setProblem(newProblem);
  }

  return (
    <>
      <h2>Guess the capital</h2>
      <p>
        Data is fetched from{" "}
        <A blank href="http://geodb-cities-api.wirefreethought.com/">
          GeoDB Cities API
        </A>
        . Note: there is a daily request limit of 86k. Each question makes 4
        requests on average.
      </p>
      <Box>
        <Button
          variant="outline"
          color="primary"
          onClick={() => generateProblem()}
        >
          Generate question
        </Button>
        <hr className="my-4" />
        <div id="problem">
          {isLoading ? (
            <Skeleton className="h-[16rem] md:h-[10rem]" />
          ) : (
            renderProblem(problem)
          )}
        </div>
      </Box>
    </>
  );
}
