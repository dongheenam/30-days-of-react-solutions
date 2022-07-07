import { Link } from "react-router-dom";
import { VscGithub, VscColorMode } from "react-icons/vsc";
import Button from "./Button";

interface TopNavProps {
  mode: string;
  toggleMode: () => void;
}
export default function TopNav({ mode, toggleMode }: TopNavProps) {
  const buttonClass = `transition-colors
    hover:bg-slate-800 dark:hover:bg-slate-800`;

  return (
    <nav
      className="
      p-4 pr-8 shadow-xl
      bg-slate-900 text-slate-100 font-semibold
      flex flex-row gap-4 items-center"
    >
      <div className="text-xl">30 Days of React Solutions</div>
      <div className="flex-grow"></div>
      <Button as={Link} to="/" className={"px-4 " + buttonClass}>
        Home
      </Button>
      <Button
        as="a"
        target="_blank"
        href="https://github.com/dongheenam"
        className={buttonClass}
      >
        <VscGithub size="1.5em" />
      </Button>
      <Button onClick={toggleMode} className={buttonClass}>
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
