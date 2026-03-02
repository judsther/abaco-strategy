import PrimaryButton from "../../../components/PrimaryButton";
import AdsNavigationBtns from "../components/AdsNavigationBtns";



export default function AdsReport() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-10 space-x-2">
      {/* Navigation */}

      <AdsNavigationBtns />
      <PrimaryButton to="/ads/report/q4-2025" texto="Reporte Q4 2025"/> 
      <PrimaryButton to="/ads/report/q1-2026" texto="Reporte Q1 2026"/> 

      
      </div>
      )}
