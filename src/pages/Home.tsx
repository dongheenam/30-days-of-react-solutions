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
      <div className="p-2 flex flex-wrap gap-4">
        <button className="btn fo fo--hover">Default</button>
        <button className="btn fo fo--hover fo-outline">Outlined</button>
        <button className="btn fo fo--hover fo-fill">Filled</button>
        <button className="btn fo fo-primary">Primary</button>
        <button className="btn fo fo-fill fo-primary">Primary filled</button>
        <button className="btn">Secondary</button>
        <button className="btn">Red</button>
        <button className="btnr">Amber</button>
        <button className="btn">Green</button>
      </div>
      <h3>Inputs</h3>
      <div>
        <div className="border border-gray-500 rounded-md px-4 py-2">
          <div className="flex flex-col">
            <label className="px-2 py-1 rounded flex items-center label">
              <input type="checkbox" className="input" />
              <span className="ml-2 label-transparent">Checkbox 1</span>
            </label>
            <label className="px-2 py-1 rounded flex items-center hover:bg-gray-200">
              <input type="checkbox" className="input" />
              <span className="ml-2 label-transparent">Checkbox 2</span>
            </label>
            <label className="px-2 py-1 rounded flex items-center disabled">
              <input type="checkbox" disabled className="input" />
              <span className="ml-2">Disabled</span>
            </label>

            <label className="flex flex-col">
              <span className="">Text input</span>
              <input type="text" className="input" />
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
