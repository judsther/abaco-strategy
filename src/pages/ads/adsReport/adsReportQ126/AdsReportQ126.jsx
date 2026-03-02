import PrimaryButton from "../../../../components/PrimaryButton";
import AdsNavigationBtns from "../../components/AdsNavigationBtns";
import ClientesTable2 from "./components/ClientesTable2";


export default function AdsReportQ126() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-10 space-x-2">
      {/* Navigation */}

      <AdsNavigationBtns />
      <PrimaryButton to="/ads/report/q4-2025" texto="Reporte Q4 2025" /> 
      <PrimaryButton to="/ads/report/q1-2026" texto="Reporte Q1 2026" /> 

      <ClientesTable2/>
      </div>
      )}