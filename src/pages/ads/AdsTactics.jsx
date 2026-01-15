import { Link } from "react-router-dom";
import PrimaryButton from "../../components/PrimaryButton";


export default function AdsTactics() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-12">
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
      <PrimaryButton to={"/ads-kpis"} texto={"KPIs"} />
      <header>
        <h2 className="text-4xl font-semibold text-slate-900">
          Táctica de Campañas Pagadas — Q1 2026
        </h2>
        <p className="text-slate-600 mt-2">
          Arquitectura de campañas, segmentación y validación estratégica
        </p>
      </header>

      <section className="grid md:grid-cols-2 gap-8">
        <CampaignCard
          title="L1 — Impulso a tu Crecimiento"
          objective="Generación de Leads (TOFU / MOFU)"
          message="¿Necesitas CAPITAL de TRABAJO hoy? ¡Ábaco te lo da en -24h!"
          kpi="CPL y número de registros"
        />

        <CampaignCard
          title="L2 — Historias de Éxito"
          objective="Consideración y Confianza (MOFU / BOFU)"
          message="Construye confianza mostrando el impacto real de otras PYMES."
          kpi="Clics, tiempo de visualización, leads de demo"
        />

        <CampaignCard
          title="L3 — Domina tu Flujo de Caja"
          objective="Leads calificados y Autoridad (MOFU)"
          message="WEBINAR GRATUITO: Flujo de Caja sin Estrés"
          kpi="CPR, tasa de asistencia, leads"
        />

        <CampaignCard
          title="L4 — Ábaco Express"
          objective="Conversión Directa (BOFU)"
          message="Liquidez Digital, Crecimiento Real"
          kpi="Costo por registro, conversión, ROI"
        />
      </section>

      <ResearchSection />
    </div>
  );
}
 function ResearchSection() {
  return (
    <section className="bg-white border rounded-xl shadow p-8 space-y-6">
      <h3 className="text-2xl font-bold text-slate-900">
        Research & Validación Estratégica
      </h3>

      <ResearchBlock
        title="Tendencias Fintech B2B para PYMES LATAM"
        items={[
          "Finanzas embebidas y UX optimizada",
          "Automatización e IA en evaluación crediticia",
          "Prioridad en flujo de caja y capital de trabajo",
          "Contenido educativo y liderazgo localizado",
        ]}
      />

      <ResearchBlock
        title="Oportunidades por Formato & Plataforma"
        items={[
          "TikTok B2B: Edu-tainment, storytelling, behind the scenes",
          "YouTube B2B: Tutoriales, entrevistas, webinars",
          "Carruseles y Reels/Shorts: formatos de alto engagement",
        ]}
      />
    </section>
  );
}
function ResearchBlock({ title, items }) {
  return (
    <div className="bg-slate-50 border rounded-lg p-6 space-y-3">
      <h4 className="font-semibold text-slate-900">{title}</h4>
      <ul className="list-disc pl-5 text-slate-700 space-y-1">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
function CampaignCard({ title, objective, message, kpi }) {
  return (
    <div className="bg-white border rounded-xl shadow p-6 space-y-3">
      <h3 className="text-xl font-bold text-slate-900">{title}</h3>
      <p className="text-slate-700">
        <strong>Objetivo:</strong> {objective}
      </p>
      <p className="text-slate-700">
        <strong>Mensaje:</strong> {message}
      </p>
      <p className="text-slate-700">
        <strong>KPI Principal:</strong> {kpi}
      </p>
    </div>
  );
}