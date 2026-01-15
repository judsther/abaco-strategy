import { Link, Outlet } from "react-router-dom";
import ROICalculatorView from "./components/ROICalculatorView";
import PrimaryButton from "../../components/PrimaryButton";

export default function AdsReport() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-10">
      {/* Navigation */}
            <div className="flex flex-wrap gap-3">
              {[
                { to: "/ads-report", label: "Reporte" },
                { to: "/ads-strategy", label: "Estrategia" },
                { to: "/ads-tactics", label: "Tácticas" },
              ].map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="bg-white text-slate-700 px-5 py-2 border border-indigo-500 rounded-3xl shadow hover:bg-indigo-700 transition"
                >
                  {item.label}
                </Link>
              ))}
              <PrimaryButton to={"/ads-kpis"} texto={"KPIs"} />
            </div>
      <header className="space-y-3">
        <h1 className="text-4xl font-semibold text-slate-900">
          Reporte de Rendimiento y Leads Reales
        </h1>
        <p className="text-slate-600">
          Ábaco Capital — Factoraje B2B · Sep–Dic 2025 · Generado: 2026-01-05
        </p>
      </header>

      <Outlet />

      

        {/* ACTIVOS PUBLICITARIOS */}
        <div className="bg-white border rounded-xl shadow p-8 space-y-6">
          <h3 className="text-2xl font-bold text-slate-900">
            Análisis Profundo de Activos Publicitarios (Top Performers)
          </h3>

          <div className="overflow-x-auto">
            <table className="min-w-full border rounded-lg overflow-hidden">
              <thead className="bg-slate-100 text-slate-600">
                <tr>
                  <th className="border px-4 py-2">Pos.</th>
                  <th className="border px-4 py-2 text-left">Post / Campaña</th>
                  <th className="border px-4 py-2">Leads</th>
                  <th className="border px-4 py-2 text-left">
                    Enfoque Estratégico
                  </th>
                </tr>
              </thead>
              <tbody className="text-slate-700">
                {[
                  [
                    1,
                    "Adelantamos el pago de facturas",
                    114,
                    
                    "Solución directa de flujo de caja",
                  ],
                  [
                    2,
                    "Acceso al efectivo",
                    50,
                    
                    "Capital para crecimiento empresarial",
                  ],
                  [
                    3,
                    "Negocios ágiles = LIQUIDEZ",
                    28,
                    
                    "Gestión financiera estratégica",
                  ],
                  [
                    4,
                    "Urgencia Liquidez 24h",
                    28,
                    
                    "Necesidad de rapidez",
                  ],
                  [
                    5,
                    "Plataforma <24h",
                    9,
                    
                    "Velocidad de financiamiento",
                  ],
                  [6, "Flujo de caja débil", 6, "Contenido educativo"],
                  [
                    7,
                    "Lista 830 potenciales",
                    4,
                   
                    "Rendimiento crítico — pausar",
                  ],
                  [8, "Lookalike urgencia", 2, "Baja conversión"],
                ].map(([pos, name, leads, focus]) => (
                  <tr key={pos}>
                    <td className="border px-4 py-2 text-center font-semibold">
                      {pos}
                    </td>
                    <td className="border px-4 py-2">{name}</td>
                    <td className="border px-4 py-2 text-center">{leads}</td>
                    
                    <td className="border px-4 py-2">{focus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
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

      <ROICalculatorView/>
    </div>
  );
}


