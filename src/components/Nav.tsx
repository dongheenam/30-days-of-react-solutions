import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav
      className="
      p-4 pr-8 bg-slate-800 text-slate-100 font-semibold text-xl
      flex flex-row justify-between"
    >
      <div>30 Days of React Solutions</div>
      <ul className="flex gap-8 justify-end">
        <li className="hover:text-slate-300">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-slate-300">
          <a href="https://github.com/dongheenam">GitHub</a>
        </li>
      </ul>
    </nav>
  );
}
