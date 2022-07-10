import { BrowserRouter } from "react-router-dom";

import useDarkMode from "./hooks/useDarkMode.js";
import TopNav from "./components/TopNav.js";
import RenderPages from "./pages/RenderPages.js";
import SideNav from "./components/SideNav.js";

export default function App() {
  const [mode, toggleMode, loadDOM] = useDarkMode();

  if (!loadDOM) return <div />;
  return (
    <div
      id="app"
      className={`h-max min-h-screen lg:h-screen flex flex-col text-lg ${mode}`}
    >
      <BrowserRouter>
        <TopNav mode={mode} toggleMode={toggleMode} />
        <div
          className="min-h-0 flex flex-grow flex-col-reverse lg:flex-row
          items-center lg:items-stretch justify-end lg:justify-center"
        >
          <SideNav />
          <main
            className="w-[min(95%,800px)] overflow-y-hidden lg:overflow-y-scroll p-8 pb-24
            bg-gray-100 dark:bg-gray-900"
          >
            <RenderPages />
          </main>
        </div>
      </BrowserRouter>
    </div>
  );
}
