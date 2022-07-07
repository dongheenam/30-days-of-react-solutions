import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import Day3 from "./Day3";
import Day4 from "./Day4";
import Day6 from "./Day6";
import Day8 from "./Day8";
import Day9 from "./Day9";

export default function RenderPages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/day-3" element={<Day3 />} />
      <Route path="/day-4" element={<Day4 />} />
      <Route path="/day-6" element={<Day6 />} />
      <Route path="/day-8" element={<Day8 />} />
      <Route path="/day-9" element={<Day9 />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
}
