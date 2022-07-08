import Button from "../ButtonOld";

export default function Day3Level2() {
  return (
    <main>
      <h1>Day 3: Level 2</h1>

      <div
        id="level-2"
        className="
          my-8 p-8
          flex flex-col items-center
          bg-blue-200 rounded-2xl
          roboto
          "
      >
        <h1 className="mont font-thin">SUBSCRIBE</h1>
        <p className="m-8">
          Sign up with your email address to receive news and updates.
        </p>
        <form
          id="subscribe"
          className="m-4"
          onSubmit={(e) => {
            e.preventDefault();
            alert("submitted!");
          }}
        >
          <div id="inputs" className="grid grid-flow-col gap-4">
            <input
              type="text"
              placeholder="First name"
              className="py-2 px-4 rounded-lg"
            />
            <input
              type="text"
              placeholder="Last name"
              className="py-2 px-4 rounded-lg"
            />
            <input
              type="text"
              placeholder="Email"
              className="py-2 px-4 rounded-lg"
            />
          </div>
        </form>
        <Button
          type="submit"
          form="subscribe"
          className="w-72 bg-red-500 hover:bg-red-700 border-0"
        >
          Subscribe
        </Button>
      </div>
    </main>
  );
}
