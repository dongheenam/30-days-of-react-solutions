import RandomMaths from "./RandomMaths";

export default function Day9Level3() {
  return (
    <main>
      <h1>Day 9: Level 3</h1>
      <h2 id="random-maths-question">Random Maths Question</h2>
      <p>
        Questions are fetched from{" "}
        <a target="_blank" href="https://x-math.herokuapp.com/">
          xMath
        </a>{" "}
        and rendered with{" "}
        <a target="_blank" href="https://katex.org/">
          KaTeX
        </a>
        .
      </p>
      <RandomMaths />
    </main>
  );
}
