import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

import OrganicAnalysis from "./pages/organic/OrganicAnalysis";
import OrganicStrategy from "./pages/organic/OrganicStrategy";
import OrganicTactics from "./pages/organic/OrganicTactics";
import AdsTactics from "./pages/ads/AdsTactics";
import Intro from "./pages/Intro";

import AdsReport from "./pages/ads/AdsReport";
import AdsStrategy from "./pages/ads/AdsStrategy";
import ContentCalendarView from "./pages/organic/ContentCalendarView";
import PaidAdsKPIsView from "./pages/ads/PaidAdsKPIsView";
import OrganicKpis from "./pages/organic/OrganicKpis";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/intro" element={<Intro />} />
        <Route path="/organic-analisis" element={<OrganicAnalysis />} />
        <Route path="/organic-strategy" element={<OrganicStrategy />} />
        <Route path="/organic-tactics" element={<OrganicTactics />} />
        <Route path="/organic-kpis" element={<OrganicKpis />} />

        <Route
          path="/organic-tactics-calendar"
          element={<ContentCalendarView />}
        />

        <Route path="/ads-report" element={<AdsReport />} />
        <Route path="/ads-tactics" element={<AdsTactics />} />
        <Route path="/ads-strategy" element={<AdsStrategy />} />
        <Route path="/ads-kpis" element={<PaidAdsKPIsView />} />
      </Routes>
    </>
  );
}

export default App;
