import { Link, Outlet } from "react-router-dom";

export default function AdsReport() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-10">
      <div className="flex space-x-2.5">
        <p>
          <Link
            className="text-white hover:text-blue-400 bg-indigo-800 p-2 px-4 rounded-2xl transition"
            to="/ads-report"
          >
            Reporte
          </Link>
        </p>
        <p>
          <Link
            className="text-white hover:text-blue-400 bg-indigo-800 p-2 px-4 rounded-2xl transition"
            to="/ads-strategy"
          >
            Estrategia
          </Link>
        </p>
        <p>
          <Link
            className="text-white hover:text-blue-400 bg-indigo-800 p-2 px-4 rounded-2xl transition"
            to="/ads-tactics"
          >
            Tácticas
          </Link>
        </p>
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

      <section className="space-y-12">
        {/* MÉTRICAS GENERALES */}
        <div className="bg-white border rounded-xl shadow p-8 space-y-6">
          <h3 className="text-2xl font-bold text-slate-900">
            Métricas de Rendimiento Real — Sep–Dic 2025
          </h3>

          <p className="text-slate-600">
            Resultados financieros obtenidos tras la validación de calidad de
            los leads.
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full border rounded-lg overflow-hidden">
              <thead className="bg-slate-100 text-slate-600">
                <tr>
                  <th className="border px-4 py-2 text-left">Métrica</th>
                  <th className="border px-4 py-2 text-left">Valor</th>
                  <th className="border px-4 py-2 text-left">Definición</th>
                </tr>
              </thead>
              <tbody className="text-slate-700">
                <tr>
                  <td className="border px-4 py-2 font-medium">
                    Inversión Total
                  </td>
                  <td className="border px-4 py-2">$692.22</td>
                  <td className="border px-4 py-2">
                    Gasto total en campañas de Meta Ads durante el periodo.
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-medium">
                    Leads Reales Generados
                  </td>
                  <td className="border px-4 py-2">241</td>
                  <td className="border px-4 py-2">
                    Contactos calificados como clientes potenciales genuinos.
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-medium">CPL Real</td>
                  <td className="border px-4 py-2">$2.87</td>
                  <td className="border px-4 py-2">
                    Inversión total dividida entre los leads reales generados.
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-medium">Mejor CPL</td>
                  <td className="border px-4 py-2 text-emerald-600 font-semibold">
                    $0.22
                  </td>
                  <td className="border px-4 py-2">
                    CPL logrado por el anuncio de mayor rendimiento.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

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
                  <th className="border px-4 py-2">CPL</th>
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
                    "$0.22",
                    "Solución directa de flujo de caja",
                  ],
                  [
                    2,
                    "Acceso al efectivo",
                    50,
                    "$0.49",
                    "Capital para crecimiento empresarial",
                  ],
                  [
                    3,
                    "Negocios ágiles = LIQUIDEZ",
                    28,
                    "$2.14",
                    "Gestión financiera estratégica",
                  ],
                  [
                    4,
                    "Urgencia Liquidez 24h",
                    28,
                    "$4.88",
                    "Necesidad de rapidez",
                  ],
                  [
                    5,
                    "Plataforma <24h",
                    9,
                    "$3.83",
                    "Velocidad de financiamiento",
                  ],
                  [6, "Flujo de caja débil", 6, "$9.61", "Contenido educativo"],
                  [
                    7,
                    "Lista 830 potenciales",
                    4,
                    "$34.43",
                    "Rendimiento crítico — pausar",
                  ],
                  [8, "Lookalike urgencia", 2, "$20.71", "Baja conversión"],
                ].map(([pos, name, leads, cpl, focus]) => (
                  <tr key={pos}>
                    <td className="border px-4 py-2 text-center font-semibold">
                      {pos}
                    </td>
                    <td className="border px-4 py-2">{name}</td>
                    <td className="border px-4 py-2 text-center">{leads}</td>
                    <td className="border px-4 py-2 text-center">{cpl}</td>
                    <td className="border px-4 py-2">{focus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

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
    </div>
  );
}


