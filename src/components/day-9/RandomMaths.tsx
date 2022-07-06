import React, { Suspense, useEffect, useState } from "react";
import Button from "../Button";
const Katex = React.lazy(() => import("../Katex"));

/* API fetchers */
interface Problem {
  first: number;
  second: number;
  operation: string;
  expression: string;
  answer: number;
}

export default function RandomMaths() {
  const [problem, setProblem] = useState<Problem>();
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [statusMessage, setStatusMessage] = useState<string>(
    "question not loaded!"
  );

  // fetch questions
  function fetchProblem() {
    setStatusMessage("loading question...");
    fetch("https://x-math.herokuapp.com/api/random?negative=1")
      .then((response) => response.json())
      .then((result) => {
        setProblem(result as Problem);
        setStatusMessage("loading complete, question is live!");
      })
      .catch((error) => {
        setStatusMessage(`loading failed: ${error}`);
        console.error("error calling xMath api: ", error);
      });
  }

  // hide question after a new question is loaded
  useEffect(() => {
    setShowAnswer(false);
  }, [problem]);

  return (
    <div
      id="level-3"
      className="my-8 px-8 rounded-lg border-2 dark:border-slate-800 
        bg-white dark:bg-slate-800 shadow dark:shadow-none
          "
    >
      <div id="control" className="mt-4 flex gap-4">
        <Button onClick={() => fetchProblem()}>New Question</Button>
        <Button onClick={() => setShowAnswer(true)}>Reveal Answer</Button>
      </div>
      <div id="question" className="my-8 flex gap-2 text-xl roboto">
        <span>Question:</span>
        <Suspense fallback={<div>Loading KaTeX renderer...</div>}>
          <Katex expr={problem?.expression} />
          {showAnswer && <Katex expr={`= ${problem?.answer}`} />}
        </Suspense>
      </div>
      <div
        id="status"
        className="my-4 text-sm text-slate-600 dark:text-slate-400"
      >
        Status: {statusMessage} <br />
        Problem: {JSON.stringify(problem)}
      </div>
    </div>
  );
}
