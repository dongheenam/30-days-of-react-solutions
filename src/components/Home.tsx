import { useNavigate } from "react-router-dom";

import Button from "./Button";

export default function Home() {
  const navigate = useNavigate();

  return (
    <main className="main-width">
      <h1>30 Days of React</h1>
      <p className="text-xl">
        This is my collection of solutions for{" "}
        <a href="https://github.com/Asabeneh/30-Days-Of-React">
          30 Days of React
        </a>
        !
      </p>
      <h2>Interesting apps</h2>
      <Button onClick={() => navigate("/day9-3#random-maths-question")}>
        Random maths questions
      </Button>
      <h2>Full list of Solutions</h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 sm:gap-4">
        <Button onClick={() => navigate("/day3-2")}>Day 3 #2</Button>
        <Button onClick={() => navigate("/day3-3")}>Day 3 #3</Button>
        <Button onClick={() => navigate("/day4-3")}>Day 4 #3</Button>
        <Button onClick={() => navigate("/day6-2")}>Day 6 #2</Button>
        <Button onClick={() => navigate("/day8-2")}>Day 8 #2</Button>
        <Button onClick={() => navigate("/day9-2")}>Day 9 #2</Button>
        <Button onClick={() => navigate("/day9-3")}>Day 9 #3</Button>
      </div>
    </main>
  );
}
