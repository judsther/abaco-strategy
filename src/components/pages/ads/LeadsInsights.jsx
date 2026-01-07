import { Link } from "react-router-dom";

export default function LeadsInsights() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 space-y-10">
      <div className="flex space-x-2.5">
        <p>
          <Link
            className="text-white hover:text-blue-400 bg-indigo-800 p-2 px-4 rounded-2xl transition"
            to="/tactics/ads-report"
          >
            Report
          </Link>
        </p>
        <p>
          <Link
            className="text-white hover:text-blue-400 bg-indigo-800 p-2 rounded-2xl transition"
            to="/tactics/ads-insights"
          >
            Insights
          </Link>
        </p>
        <p>
          <Link
            className="text-white hover:text-blue-400 bg-indigo-800 p-2 rounded-2xl transition"
            to="/tactics/ads-strategy"
          >
            Strategy
          </Link>
        </p>
      </div>
      <Block title="Descubrimiento Clave: Discrepancia entre Conversión y Calidad">
        <p>
          De 35,446 acciones registradas como conversiones, solo 241 fueron
          leads reales (0.25%). El resto se distribuye entre intención media y
          engagement sin valor.
        </p>

        <table className="w-full border mt-4">
          <thead className="bg-slate-100">
            <tr>
              <th className="border p-2">Nivel</th>
              <th className="border p-2">Cantidad</th>
              <th className="border p-2">%</th>
              <th className="border p-2">Observación</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">Leads Reales</td>
              <td className="border p-2">241</td>
              <td className="border p-2">0.25%</td>
              <td className="border p-2">Clientes genuinos</td>
            </tr>
            <tr>
              <td className="border p-2">Intención Media</td>
              <td className="border p-2">1,490</td>
              <td className="border p-2">1.6%</td>
              <td className="border p-2">Requieren nurturing</td>
            </tr>
            <tr>
              <td className="border p-2">Engagement sin Valor</td>
              <td className="border p-2">93,277</td>
              <td className="border p-2">98.15%</td>
              <td className="border p-2">Interacciones irrelevantes</td>
            </tr>
          </tbody>
        </table>

        <p className="mt-4 font-semibold">
          CPL Real: $2.87 vs CPL Reportado: $0.02 → Optimización debe centrarse
          en calidad.
        </p>
      </Block>

      <Block title="Métricas Reales Sep–Dic 2025">
        <ul className="list-disc pl-6">
          <li>Inversión Total: $692.22</li>
          <li>Leads Reales: 241</li>
          <li>CPL Real: $2.87</li>
          <li>Mejor CPL: $0.22</li>
        </ul>
      </Block>

      <Block title="Análisis de Activos Publicitarios Top">
        <p>
          Ad estrella: "En Ábaco te adelantamos el pago de facturas..." — CPL
          $0.22
        </p>
        <p>
          Patrones ganadores: Adelantamos, Acceso, Efectivo, Liquidez, Crecer
        </p>
        <p>Campañas perdedoras: CPL &gt; $10 → Pausa inmediata</p>
      </Block>
    </section>
  );
}

function Block({ title, children }) {
  return (
    <div className="bg-white border rounded-xl p-8 shadow space-y-4">
      <h2 className="text-xl font-bold">{title}</h2>
      {children}
    </div>
  );
}
