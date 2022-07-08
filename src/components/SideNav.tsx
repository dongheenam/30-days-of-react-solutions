import { Link } from "react-router-dom";

function NavSubtitle({ children }: { children: string }) {
  return (
    <div
      className="uppercase font-bold text-sm
      text-secondary-500 dark:text-secondary-400"
    >
      // {children}
    </div>
  );
}

export default function SideNav() {
  return (
    <aside>
      <nav
        className="h-full flex flex-col gap-3 min-w-[20rem] p-8 lg:pt-12
          dark:border-t-2 dark:border-gray-600 dark:lg:border-none"
      >
        <Link to="/" className="btn click">
          Home
        </Link>
        <hr className="border-gray-300 dark:border-gray-600" />
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
