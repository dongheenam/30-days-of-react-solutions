import A from "../components/A";
import { H1, H2, H3 } from "../components/HeadingElems";

export default function Home() {
  return (
    <>
      <H1>30 Days of React</H1>
      <p className="text-xl">
        This is my collection of solutions for{" "}
        <A target="_blank" href="https://github.com/Asabeneh/30-Days-Of-React">
          30 Days of React
        </A>
        !
      </p>
    </>
  );
}
