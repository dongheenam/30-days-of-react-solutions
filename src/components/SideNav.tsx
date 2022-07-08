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

function NavLink({ to, children }: { to: string; children: string }) {
  return (
    <Link to={to} className="click-transparent">
      {children}
    </Link>
  );
}

export default function SideNav() {
  return (
    <aside>
      <nav
        className="h-full flex flex-col gap-2 min-w-[18rem] p-8 lg:pt-12
          dark:border-t-2 dark:border-gray-600 dark:lg:border-none"
      >
        <NavLink to="/">Home</NavLink>
        <hr className="my-2 border-gray-300 dark:border-gray-600" />
        <NavSubtitle>All Solutions</NavSubtitle>
        <NavLink to="/day-3">Day 3</NavLink>
        <NavLink to="/day-4">Day 4</NavLink>
        <NavLink to="/day-6">Day 6</NavLink>
        <NavLink to="/day-7">Day 7</NavLink>
        <NavLink to="/day-8">Day 8</NavLink>
        <NavLink to="/day-9">Day 9</NavLink>
      </nav>
    </aside>
  );
}
