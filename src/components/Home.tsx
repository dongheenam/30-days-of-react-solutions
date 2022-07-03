import DayButton from "./DayButton";

export default function Home() {
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
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4">
        {[3].map((num) => {
          return <DayButton to={"/day" + num} text={"Day " + num} />;
        })}
      </div>
    </main>
  );
}
