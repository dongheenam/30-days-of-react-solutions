import Button from "../../components/Button";

export default function HomeButtons() {
  return (
    <>
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
    </>
  );
}
