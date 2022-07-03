import { BrowserRouter } from "react-router-dom";
import Nav from "./components/Nav.js";
import RouteSolutions from "./components/RouteSolutions.js";

export default function App() {
  return (
    <div id="app" className="min-h-screen bg-slate-200 flex flex-col gap-4">
      <BrowserRouter>
        <Nav />
        <div className="min-h-full flex-1 flex flex-column items-stretch justify-center">
          <RouteSolutions />
        </div>
      </BrowserRouter>
    </div>
  );
}
