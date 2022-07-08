import { Link } from "react-router-dom";
import { VscGithub, VscColorMode } from "react-icons/vsc";
import Button from "./Button";
import IconButton from "./IconButton";

interface TopNavProps {
  mode: string;
  toggleMode: () => void;
}
export default function TopNav({ mode, toggleMode }: TopNavProps) {
  const buttonClassName = "hover:bg-gray-700 active:bg-gray-600";
  return (
    <nav
      className="dark
      p-4 px-8 shadow-black drop-shadow-xl
      bg-gray-800 font-semibold
      flex flex-row gap-4 items-center"
    >
      <div className="text-2xl">30 Days of React Solutions</div>
      <div className="flex-grow"></div>
      <Button as={Link} to="/" className={buttonClassName}>
        Home
      </Button>
      <IconButton
        as="a"
        target="_blank"
        href="https://github.com/dongheenam"
        className={buttonClassName}
        icon={<VscGithub size="1.5em" />}
      />
      <IconButton
        onClick={toggleMode}
        className={buttonClassName}
        icon={
          <VscColorMode
            size="1.5em"
            style={{
              transition: "transform 150ms ease-in-out",
              transform: mode === "dark" ? "rotate(180deg)" : "",
            }}
          />
        }
      />
    </nav>
  );
}
