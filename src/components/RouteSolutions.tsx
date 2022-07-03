import { Routes, Route } from "react-router-dom";

import Home from "./Home.js";
import Day3 from "./day-3/Day3.js";

export default function RouteSolutions() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/day3" element={<Day3 />} />
    </Routes>
  );
}
