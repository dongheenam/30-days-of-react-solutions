import { BrowserRouter } from "react-router-dom";

import useDarkMode from "./hooks/useDarkMode.js";
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
          className="min-h-0 flex flex-grow flex-col-reverse lg:flex-row
          items-center lg:items-stretch justify-end lg:justify-center"
        >
          <SideNav />
          <main
            className="overflow-y-hidden lg:overflow-y-scroll p-8 pb-24
            bg-gray-100 dark:bg-gray-900"
          >
            <RenderPages />
          </main>
        </div>
      </BrowserRouter>
    </div>
  );
}
