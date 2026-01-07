import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

import Analysis from "./components/pages/Analysis";
import Strategy from "./components/pages/strategy/Strategy";
import Intro from "./components/pages/Intro";
import Organic from "./components/pages/tactics/Organic";
import LeadsInsights from "./components/pages/ads/LeadsInsights";
import LeadsReport from "./components/pages/ads/LeadsReport";
import LeadsStrategy from "./components/pages/ads/LeadsStrategy";
import AdsTactics from "./components/pages/Ads/Ads";




{/* <Route path="/tactics/organic" element={<OrganicTactics />} /> */}

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/intro" element={<Intro />} />
        <Route path="/analisis" element={<Analysis />} />
        <Route path="/strategy" element={<Strategy />} />
     
        <Route path="/tactics/ads" element={<AdsTactics />} />
        <Route path="/tactics/organic" element={<Organic />} />
        <Route path="/tactics/ads-insights" element={<LeadsInsights />} />
        <Route path="/tactics/ads-report" element={<LeadsReport />} />
        <Route path="/tactics/ads-strategy" element={<LeadsStrategy />} />
      </Routes>
    </>
  );
}

export default App;
