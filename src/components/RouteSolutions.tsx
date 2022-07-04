import { Routes, Route } from "react-router-dom";

import Home from "./Home.js";
import Day3Level2 from "./day-3/Day3Level2.js";
import Day3Level3 from "./day-3/Day3Level3.js";
import Day4Level3 from "./day-4/Day4Level3.js";
import Day6Level2 from "./day-6/Day6Level2.js";

export default function RouteSolutions() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/day3-2" element={<Day3Level2 />} />
      <Route path="/day3-3" element={<Day3Level3 />} />
      <Route path="/day4-3" element={<Day4Level3 />} />
      <Route path="/day6-2" element={<Day6Level2 />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}
