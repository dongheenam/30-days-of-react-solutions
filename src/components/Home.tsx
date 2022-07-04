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
      <h2>List of Solutions</h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 sm:gap-4">
        <Button onClick={() => navigate("/day3-2")}>Day 3 #2</Button>
        <Button onClick={() => navigate("/day3-3")}>Day 3 #3</Button>
        <Button onClick={() => navigate("/day4-3")}>Day 4 #3</Button>
      </div>
    </main>
  );
}
