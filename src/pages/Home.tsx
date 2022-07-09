import A from "../components/A";
import Button from "../components/Button";

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
      <div className="p-2 flex flex-wrap items-center gap-4">
        <span className="w-16">Text</span>
        <Button>Default</Button>
        <Button color="primary">Primary</Button>
        <Button color="red">Red</Button>
        <Button color="green">Green</Button>
      </div>
      <div className="p-2 flex flex-wrap items-center gap-4">
        <span className="w-16">Outline</span>
        <Button variant="outline">Default</Button>
        <Button variant="outline" color="primary">
          Primary
        </Button>
        <Button variant="outline" color="red">
          Red
        </Button>
        <Button variant="outline" color="green">
          Green
        </Button>
      </div>
      <div className="p-2 flex flex-wrap items-center gap-4">
        <span className="w-16">Solid</span>
        <Button variant="solid">Default</Button>
        <Button variant="solid" color="primary">
          Primary
        </Button>
        <Button variant="solid" color="red">
          Red
        </Button>
        <Button variant="solid" color="green">
          Green
        </Button>
      </div>
      <div className="p-2 flex flex-wrap items-center gap-4">
        <span className="w-16">Disabled</span>
        <Button disabled>Default</Button>
        <Button variant="outline" color="primary" disabled>
          Primary
        </Button>
        <Button variant="solid" color="red" disabled>
          Red
        </Button>
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
