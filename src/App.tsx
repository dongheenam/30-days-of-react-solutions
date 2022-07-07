import { BrowserRouter } from "react-router-dom";

import useDarkMode from "./components/hooks/useDarkMode.js";
import TopNav from "./components/TopNav.js";
import RenderPages from "./pages/RenderPages.js";
import SideNav from "./components/SideNav.js";

export default function App() {
  const [mode, toggleMode, loadDOM] = useDarkMode();

  if (!loadDOM) return <div />;
  return (
    <div id="app" className={`h-max lg:h-screen flex flex-col ${mode}`}>
      <BrowserRouter>
        <TopNav mode={mode} toggleMode={toggleMode} />
        <div
          className="min-h-0 
          flex flex-grow flex-col-reverse lg:flex-row
          justify-end lg:justify-center
          text-slate-900 dark:text-slate-50
          bg-white dark:bg-slate-800
          "
        >
          <SideNav />
          <article
            className="overflow-y-hidden lg:overflow-y-scroll p-8 pb-24"
            style={{ width: "min(100%, 60rem)" }}
          >
            <RenderPages />
          </article>
        </div>
      </BrowserRouter>
    </div>
  );
}
