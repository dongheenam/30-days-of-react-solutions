import { Link } from "react-router-dom";
import { VscGithub, VscColorMode } from "react-icons/vsc";
import Button from "./Button";

interface TopNavProps {
  mode: string;
  toggleMode: () => void;
}
export default function TopNav({ mode, toggleMode }: TopNavProps) {
  return (
    <nav
      className="
      p-4 pr-8 shadow-black drop-shadow-xl
      bg-gray-900 text-gray-100 font-semibold
      flex flex-row gap-4 items-center"
    >
      <div className="text-xl">30 Days of React Solutions</div>
      <div className="flex-grow"></div>
      <Button as={Link} to="/" className="button-black">
        Home
      </Button>
      <Button
        iconOnly
        as="a"
        target="_blank"
        href="https://github.com/dongheenam"
        className="button-black"
      >
        <VscGithub size="1.5em" />
      </Button>
      <Button iconOnly onClick={toggleMode} className="button-black">
        <VscColorMode
          size="1.5em"
          style={{
            transition: "transform 150ms ease-in-out",
            transform: mode === "dark" ? "rotate(180deg)" : "",
          }}
        />
      </Button>
    </nav>
  );
}
