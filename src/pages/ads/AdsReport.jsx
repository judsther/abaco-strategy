import { Outlet } from "react-router-dom";
import ROICalculatorView from "./components/ROICalculatorView";
import AdsNavigationBtns from "./AdsNavigationBtns";
import AnalysisCampaigns from "./AnalysisCampaigns";

export default function AdsReport() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-10">
      {/* Navigation */}

      <AdsNavigationBtns />

      <header className="space-y-3">
        <h1 className="text-4xl font-semibold text-slate-900">
          Reporte de Rendimiento según Leads
        </h1>
        <p className="text-slate-600">Sep–Dic 2025</p>
      </header>

      <Outlet />

      {/* ACTIVOS PUBLICITARIOS */}
     <AnalysisCampaigns/>
      <section>
        {/* AD ESTRELLA */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-8 space-y-4">
          <h3 className="text-xl font-bold text-emerald-900">
            Ad Estrella — Análisis de Éxito
          </h3>

          <ul className="list-disc pl-6 text-emerald-900 space-y-2">
            <li>
              <strong>Propuesta de valor inmediata:</strong> “Te adelantamos el
              pago de facturas” comunica el beneficio central con máxima
              claridad.
            </li>
            <li>
              <strong>Claridad B2B:</strong> ataca el dolor principal de las
              PYMES — la espera por cobrar.
            </li>
            <li>
              <strong>Conexión local:</strong> uso de hashtags como{" "}
              <code>#pymes</code> y<code> #elsalvador</code> refuerza relevancia
              geográfica y demográfica.
            </li>
          </ul>
        </div>
      </section>

      <ROICalculatorView />

      {/* Hallazgos */}
      <section className="border-t border-t-indigo-800 text-slate p-10 space-y-4">
        <h2 className="text-2xl font-bold">Hallazgos</h2>
        <p>
          Desempeño de Herramientas:{" "}
          <span className="font-semibold">Datos Irregulares.</span>
        </p>
        <p>
          Atom:{" "}
          <span className="font-semibold">
            Califica como lead a personas naturales que no califican.
          </span>
        </p>
        <p>
          HubSpot:{" "}
          <span className="font-semibold">Guarda los leads desde Atom.</span>
        </p>
        <p>
          Filtros:{" "}
          <span className="font-semibold">
            Problema de filtrado desde el anuncio hasta el proceso de
            calificación automatizada.
          </span>
        </p>
        <p>
          Mucha fricción antes de llegar al cliente:{" "}
          <span className="font-semibold">
            Tiempo perdido en llamadas y mensajes de los KAMs con personas que no aplican.
          </span>
        </p>
        {/* <p className="text-xl font-bold text-emerald-400">ROI: 121.06%</p> */}
      </section>
    </div>
  );
}
