import { VscPassFilled } from "react-icons/vsc";

import Box from "../../components/Box";
import Tag from "../../components/Tag";
import imgURL from "../../images/asabeneh.jpg";

const skills: Array<string> = [
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

export default function Day3Task2() {
  return (
    <>
      <h2>User card</h2>
      <Box className="items-start roboto">
        <div className="max-w-[15rem]">
          <img
            src={imgURL}
            alt="user image"
            className="rounded-full w-48 m-auto"
          />
          <div className="font-bold text-lg mt-4">
            ASABENEH YETAYEH{" "}
            <VscPassFilled className="inline text-green-500 align-[-7%]" />
          </div>
          <div className="font-thin text-sm">Senior Developer, Finland</div>
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map((item) => (
            <Tag key={item} className="bg-secondary-300 dark:bg-secondary-600">
              {item}
            </Tag>
          ))}
        </div>
      </Box>
    </>
  );
}
