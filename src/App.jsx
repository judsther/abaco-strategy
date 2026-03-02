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
import AdsReportQ425 from "./pages/ads/adsReport/adsReportQ425/AdsReportQ425";
import AdsReportQ126 from "./pages/ads/adsReport/adsReportQ126/AdsReportQ126";
import RolePresentation from "./pages/presentationTemp/RolePresentation";



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
        <Route path="/ads/report/q4-2025" element={<AdsReportQ425 />} />
        <Route path="/ads/report/q1-2026" element={<AdsReportQ126 />} />

        <Route path="/role-presentation" element={<RolePresentation />} />

      </Routes>
    </>
  );
}

export default App;
