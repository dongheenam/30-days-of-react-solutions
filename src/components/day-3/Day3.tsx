import imgURL from "../images/asabeneh.jpg";
import Tag from "./Tag";

const skills: Array<String> = [
  "HTML",
  "CSS",
  "Sass",
  "JS",
  "React",
  "Redux",
  "Node",
  "MongoDB",
  "Python",
  "Flask",
  "Django",
  "NumPy",
  "Pandas",
  "Data Analysis",
  "MySQL",
  "GraphQL",
  "D3.js",
  "Gatsby",
  "Docker",
  "Heroku",
  "Git",
];

export default function Day3() {
  return (
    <main>
      <h1>Day 3</h1>

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
        <button
          type="submit"
          form="subscribe"
          className="m-4 px-36 py-4 bg-red-500 text-white
          rounded-xl hover:bg-red-700 transition-colors"
        >
          Subscribe
        </button>
      </div>
      <div id="level-3" className="my-8 p-8 rounded-lg bg-white roboto">
        <div className="flex flex-col items-start max-w-[12rem]">
          <img src={imgURL} alt="user image" className="rounded-full w-48" />
          <div className="font-bold text-lg my-4">ASABENEH YETAYEH</div>
          <div className="font-thin text-sm">Senior Developer, Finland</div>
        </div>
        <div className="">
          <div className="font-bold text-lg my-4">SKILLS</div>
          <div className="flex flex-row flex-wrap gap-2">
            {skills.map((skill) => {
              return <Tag>{skill}</Tag>;
            })}
          </div>
          <div className="mt-8 text-sm text-gray-400">
            Joined on Aug 30, 2020
          </div>
        </div>
      </div>
    </main>
  );
}
