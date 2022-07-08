import A from "../components/A";

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
      <a href="#" className="clickable">
        Hello there!
      </a>
      <a href="#" className="disabled">
        Hello there!
      </a>

      <p>
        <button
          className="btn btn-border
          text-secondary-600 border-secondary-600
          dark:text-secondary-300 dark:border-secondary-300
          hover:bg-secondary-100 active:bg-secondary-200
          dark:hover:bg-secondary-900 dark:active:bg-secondary-800"
        >
          Example button
        </button>
        <button className="btn click click-filled">Default</button>
        <button className="btn click click-filled click-primary">
          Primary
        </button>
        <button className="btn click click-filled click-secondary">
          Secondary
        </button>
        <button className="btn click click-filled click-red">Red</button>
        <button className="btn click click-filled click-amber">Amber</button>
        <button className="btn click click-filled click-green">Green</button>
      </p>
    </>
  );
}
