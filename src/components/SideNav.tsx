import { Link } from "react-router-dom";

function NavSubtitle({ children }: { children: string }) {
  return (
    <div
      className="uppercase font-bold text-sm
      text-pink-500 dark:text-pink-300 "
    >
      // {children}
    </div>
  );
}

export default function SideNav() {
  return (
    <aside>
      <nav className="flex flex-col gap-3 min-w-[20rem] p-8">
        <Link to="/" className="font-semibold">
          Home
        </Link>
        <hr />
        <NavSubtitle>All Solutions</NavSubtitle>
        <Link to="/day-3">Day 3</Link>
        <Link to="/day-4">Day 4</Link>
        <Link to="/day-6">Day 6</Link>
        <Link to="/day-7">Day 7</Link>
        <Link to="/day-8">Day 8</Link>
        <Link to="/day-9">Day 9</Link>
      </nav>
    </aside>
  );
}
