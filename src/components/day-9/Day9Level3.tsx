import RandomMaths from "./RandomMaths";
import RandomGeo from "./RandomGeo";

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
      <h2 id="random-geo-question">Random Geometry Question</h2>
      <p>
        Questions are generated using the free version of the{" "}
        <a target="_blank" href="http://geodb-cities-api.wirefreethought.com/">
          GeoDB Cities API
        </a>
        . Note the API has a daily GET request limit of 86k.
      </p>
      <RandomGeo />
    </main>
  );
}
