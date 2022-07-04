import { BrowserRouter } from "react-router-dom";

import useDarkMode from "./components/useDarkMode.js";
import Nav from "./components/Nav.js";
import RouteSolutions from "./components/RouteSolutions.js";

export default function App() {
  const [mode, toggleMode, loadDOM] = useDarkMode();

  if (!loadDOM) return <div />;
  return (
    <div id="app" className={`min-h-screen flex flex-col ${mode}`}>
      <BrowserRouter>
        <Nav toggleMode={toggleMode} />
        <div
          className="min-h-full pt-8
        bg-slate-200 dark:bg-slate-900 dark:text-slate-100
        flex-1 flex flex-column items-stretch justify-center
        transition-colors"
        >
          <RouteSolutions />
        </div>
      </BrowserRouter>
    </div>
  );
}
