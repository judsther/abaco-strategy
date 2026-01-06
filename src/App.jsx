import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

import Analysis from "./components/pages/Analysis";
import Strategy from "./components/pages/strategy/Strategy";
import Intro from "./components/pages/Intro";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/intro" element={<Intro />} />
        <Route path="/analisis" element={<Analysis />} />
        <Route path="/strategy" element={<Strategy />} />
      </Routes>
    </>
  );
}

export default App;
