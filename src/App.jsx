import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Intro from "./pages/Intro";
import OrganicAnalysis from "./pages/organic/organicAnalysis/OrganicAnalysis";
import OrganicStrategy from "./pages/organic/organicStrategy/OrganicStrategy";
import OrganicTactics from "./pages/organic/organicCalendar/OrganicTactics";
import OrganicKpis from "./pages/organic/organicKpis/OrganicKpis";
import ContentCalendarView from "./pages/organic/organicCalendar/components/ContentCalendarView";
import AdsReport from "./pages/ads/adsReport/AdsReport";
import AdsTactics from "./pages/ads/adsTactics/AdsTactics";
import AdsStrategy from "./pages/ads/adsStrategy/AdsStrategy";
import PaidAdsKPIsView from "./pages/ads/adsKpis/PaidAdsKPIsView";



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/intro" />}/>
        <Route path="/intro" element={<Intro />} />
        <Route path="/organic-analisis" element={<OrganicAnalysis/>} />
        <Route path="/organic-strategy" element={<OrganicStrategy/>} />
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
