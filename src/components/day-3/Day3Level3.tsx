import imgURL from "../images/asabeneh.jpg";
import Tag from "../Tag";

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

export default function Day3Level3() {
  return (
    <main>
      <h1>Day 3: Level 3</h1>
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
