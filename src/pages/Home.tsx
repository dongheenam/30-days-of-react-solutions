import A from "../components/A";
import HomeButtons from "./partials/HomeButtons";
import HomeCheckBoxes from "./partials/HomeCheckboxes";
import HomeRadios from "./partials/HomeRadios";
import HomeSwitches from "./partials/HomeSwitches";

export default function Home() {
  return (
    <>
      <h1>30 Days of React</h1>
      <p className="text-xl">
        This is my collection of solutions for{" "}
        <A blank href="https://github.com/Asabeneh/30-Days-Of-React">
          30 Days of React
        </A>
        !
      </p>
      <h2>Design elements</h2>
      <HomeButtons />
      <HomeCheckBoxes />
      <HomeRadios />
      <HomeSwitches />
    </>
  );
}
