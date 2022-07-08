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
      <h2>Design elements</h2>
      <h3>Buttons</h3>
      <div className="p-2 flex gap-4">
        <button className="btn click">Default</button>
        <button className="btn click click-filled">Default filled</button>
        <button className="btn click click-primary">Primary</button>
        <button className="btn click click-filled click-primary">
          Primary filled
        </button>
      </div>
      <div className="p-2 flex gap-4">
        <button className="btn click click-filled click-secondary">
          Secondary
        </button>
        <button className="btn click click-filled click-red">Red</button>
        <button className="btn click click-filled click-amber">Amber</button>
        <button className="btn click click-filled click-green">Green</button>
      </div>
    </>
  );
}
