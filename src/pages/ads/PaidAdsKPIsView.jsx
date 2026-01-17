
import AdsNavigationBtns from "./AdsNavigationBtns";
import KpiSection from "./components/KpiSection";

export default function PaidAdsKPIsView() {
  return (
    <div className="max-w-7xl mx-auto py-12 px-6 space-y-12">
      {/* Navigation */}
      <AdsNavigationBtns />
      {/* Header */}
      <div className="text-start space-y-3">
        <h1 className="text-3xl font-semibold text-slate-900">
          KPIs CLAVE PARA ESTRATEGIA DE PUBLICIDAD PAGADA (Según el número de
          leads reportados por Atom en HubSpot 61 de 3 clientes)
        </h1>
        <p className="text-lg text-slate-600"></p>
      </div>

      {/* 1 */}
      <KpiSection
        title="KPIs de Entrega & Alcance"
        subtitle="¿La plataforma está entregando bien los anuncios?"
        rows={[
          {
            kpi: "Reach",
            description: "Personas únicas alcanzadas",
            q4: "27,854 (crecimiento constante)",
          },
          {
            kpi: "Impressions",
            description: "Exposición total",
            q4: "174,577",
          },
          {
            kpi: "Frequency",
            description: "Veces promedio que alguien ve el anuncio",
            q4: "6.27 (2–4 saludable)",
          },
          {
            kpi: "CPM",
            description: "Costo por 1,000 impresiones",
            q4: "$3.97",
          },
        ]}
      />

      {/* 2 */}
      <KpiSection
        title="2. KPIs de Atención & Interés"
        subtitle="¿El mensaje engancha?"
        rows={[
          {
            kpi: "CTR",
            description: "Clicks / Impressions",
            q4: "2.41% (Benchmark B2B: 1.2 – 2.0%)",
          },
          {
            kpi: "Hook Rate (Video)",
            description: "Visualizaciones ≥ 3s / Impressions",
            q4: "96% (Óptimo > 25%)",
          },
          {
            kpi: "Hold Rate (Video)",
            description: "Retención promedio del video",
            q4: "— (no medido en Q4)",
          },
        ]}
      />

      {/* 3 */}
      <KpiSection
        title="3. KPIs de Consideración"
        subtitle="¿El usuario evalúa el valor de la propuesta?"
        rows={[
          {
            kpi: "Landing Page View Rate",
            description: "Calidad del tráfico después del click",
            q4: "—",
          },
          {
            kpi: "Time on Page",
            description: "Nivel de interés real en el contenido",
            q4: "—",
          },
          {
            kpi: "Scroll Depth",
            description: "Qué tanto se consume el mensaje",
            q4: "—",
          },
          {
            kpi: "Engagement Post-Click",
            description: "Interacciones luego de llegar a la landing",
            q4: "—",
          },
        ]}
      />

      {/* 4 */}
      <KpiSection
        title="4. KPIs de Conversión"
        subtitle="¿La inversión genera resultados de negocio?"
        rows={[
          {
            kpi: "CPL",
            description: "Costo por Lead",
            q4: "$11.74 (716.58 / 61 leads)",
          },
          {
            kpi: "CPA",
            description: "Costo por Conversión / Cliente",
            q4: "$238.86",
          },
          {
            kpi: "Conversion Rate Click → Lead",
            description: "Leads (61) / Clicks (4,356)",
            q4: "1.40%",
          },
          {
            kpi: "Conversion Rate Lead → Cliente",
            description: "Clientes (3) / Leads (61)",
            q4: "4.91% (Benchmark 6% – 12%)",
          },
          {
            kpi: "Cost per Qualified Lead",
            description: "Costo real por lead calificado",
            q4: "$11.74",
          },
          {
            kpi: "ROAS",
            description: "Revenue / Ad Spend",
            q4: "Pendiente de revenue",
          },
        ]}
      />

      {/* 5 */}
      <Section
        title="5. KPIs de Escalabilidad"
        items={[
          ["LTV / CAC", "Salud financiera"],
          ["Payback Period", "Tiempo para recuperar inversión"],
          ["Incremental Lift", "Impacto real del ads"],
          ["Attribution Share", "Rol de cada canal"],
        ]}
      />
    </div>
  );
}

function Section({ title, subtitle, items }) {
  return (
    <section className="bg-white rounded-3xl shadow-xl p-10 space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-800">{title}</h2>
        {subtitle && <p className="text-slate-600 mt-1">{subtitle}</p>}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-slate-50 rounded-2xl p-6 space-y-2 shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-lg font-semibold text-slate-900">{item[0]}</h3>
            <p className="text-slate-700">{item[1]}</p>
            {item[2] && (
              <p className="text-sm text-blue-600 font-medium">{item[2]}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
