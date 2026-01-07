import { Link } from "react-router-dom";

export default function LeadsStrategy() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 space-y-10">
      <div className="flex space-x-2.5 mt-4">
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
      <Block title="Objetivos Q1 2026">
        <ul className="list-disc pl-6">
          <li>Leads Reales ≥ 2,000</li>
          <li>CPL ≤ $1.00</li>
          <li>Inversión Base: $500</li>
        </ul>
      </Block>

      <Block title="Estructura de Campañas Q1 2026">
        <p>Campaña 1: Escalar Ad Estrella — $200 — 909 leads proyectados</p>
        <p>Campaña 2: Variaciones Creativas — $150 — 340 leads</p>
        <p>Campaña 3: Liquidez Urgente — $100 — 50 leads</p>
      </Block>

      <Block title="Segmentación y Optimización">
        <p>Priorizar Mujeres 25–34 y 35–44 (mayor CTR y menor CPC).</p>
        <p>Maximizar Android y Audience Network.</p>
        <p>Reducir Desktop y Messenger.</p>
        <p>Optimizar Instagram con formatos nativos.</p>
      </Block>

      <Block title="Proyección Q1 2026">
        <ul className="list-disc pl-6">
          <li>Leads ≥ 2,000</li>
          <li>CPL ≤ $1.00</li>
          <li>ROI positivo y escalable</li>
        </ul>
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
