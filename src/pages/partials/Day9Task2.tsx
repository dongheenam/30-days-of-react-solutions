import React, { Suspense } from "react";
import { useEffect, useState } from "react";
import A from "../../components/A";
import Box from "../../components/Box";
import Button from "../../components/Button";
import Skeleton from "../../components/Skeleton";

const Katex = React.lazy(() => import("../../components/Katex"));

interface Problem {
  first: number;
  second: number;
  operation: string;
  expression: string;
  answer: number;
}

export default function Day9Task2() {
  const [problem, setProblem] = useState<Problem>();
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // fetch questions
  function fetchProblem() {
    setIsLoading(true);
    fetch("https://x-math.herokuapp.com/api/random?negative=1")
      .then((response) => response.json())
      .then((result) => {
        setProblem(result as Problem);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.error("error calling xMath api: ", error);
      });
  }

  // hide question after a new question is loaded
  useEffect(() => {
    setShowAnswer(false);
  }, [problem]);

  return (
    <>
      <h2 id="random-maths-problem">Random maths problem</h2>
      <p>
        The questions are fetched from{" "}
        <A blank href="https://x-math.herokuapp.com/">
          xMath
        </A>{" "}
        and rendered with{" "}
        <A blank href="https://katex.org/">
          KaTeX
        </A>
        .
      </p>
      <Box>
        <div className="flex gap-4">
          <Button
            onClick={() => fetchProblem()}
            variant="outline"
            color="green"
          >
            New Question
          </Button>
          <Button onClick={() => setShowAnswer(true)} variant="outline">
            Reveal Answer
          </Button>
        </div>
        <Suspense fallback={<Skeleton />}>
          <div className="roboto text-xl mt-4 h-12">
            {isLoading ? (
              <Skeleton text lines={1} />
            ) : (
              <>
                <span>Question: </span>
                <Katex expr={problem?.expression} />
                {showAnswer && problem && (
                  <Katex expr={`= ${problem.answer}`} className="ml-2" />
                )}
              </>
            )}
          </div>
        </Suspense>
      </Box>
    </>
  );
}
