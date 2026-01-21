
import { useEffect, useState } from "react";
import AdsNavigationBtns from "./AdsNavigationBtns";
import KpiInput from "../../components/KpiInput";
import KpiSection from "./components/KpiSection";
import { db } from "../../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";



export default function PaidAdsKPIsView() {
    const [kpis, setKpis] = useState({});
  
  useEffect(() => {
    const load = async () => {
      const ref = doc(db, "kpis", "ads");
      const snap = await getDoc(ref);
  
      if (snap.exists()) {
        setKpis(snap.data());
      }
    };
  
    load();
  }, []);
  
  const handleChange = async (key, value) => {
    setKpis((prev) => ({
      ...prev,
      [key]: value,
    }));
  
    const ref = doc(db, "kpis", "ads");
  
    await setDoc(
      ref,
      {
        [key]: value,
      },
      { merge: true }
    );
  };
  return (
    <div className="max-w-7xl mx-auto py-12 px-6 space-y-12">
      {/* Navigation */}
      <AdsNavigationBtns />
      {/* Header */}
      <div className="text-start space-y-3">
        <h1 className="text-3xl font-semibold text-slate-900">
          Monitor de Rendimiento y Conversión: Seguimiento de Metas y Baseline
          Trimestral
        </h1>
        <h4 className="text-md text-slate-400">
          Análisis histórico Q4 (3 clientes de 61 leads calificados reportados por Atom) y
          seguimiento en tiempo real Q1.
        </h4>
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
            // q4: "27,854 (crecimiento constante)",
            q4:(<KpiInput name="ads_reach_Q425" value={kpis.ads_reach_Q425} onChange={handleChange} />),
            m1q1: (<KpiInput name="ads_reach_M1Q126" value={kpis.ads_reach_M1Q126} onChange={handleChange} />), m2q1: (<KpiInput name="ads_reach_M2Q126" value={kpis.ads_reach_M2Q126} onChange={handleChange} />), m3q1: (<KpiInput name="ads_reach_M3Q126" value={kpis.ads_reach_M3Q126} onChange={handleChange} />), totalq1: (<KpiInput name="ads_reach_total_Q126" value={kpis.ads_reach_total_Q126} onChange={handleChange} />),
          },
          {
            kpi: "Impressions",
            description: "Exposición total",
            // q4: "174,577",
            q4:(<KpiInput name="ads_impressions_Q425" value={kpis.ads_impressions_Q425} onChange={handleChange} />),
            m1q1: (<KpiInput name="ads_impressions_M1Q126" value={kpis.ads_impressions_M1Q126} onChange={handleChange} />), m2q1: (<KpiInput name="ads_impressions_M2Q126" value={kpis.ads_impressions_M2Q126} onChange={handleChange} />), m3q1: (<KpiInput name="ads_impressions_M3Q126" value={kpis.ads_impressions_M3Q126} onChange={handleChange} />), totalq1: (<KpiInput name="ads_impressions_total_Q126" value={kpis.ads_impressions_total_Q126} onChange={handleChange} />),
          },
          {
            kpi: "Frequency",
            description: "Veces promedio que alguien ve el anuncio",
            // q4: "6.27 (2–4 saludable)",
            q4:(<KpiInput name="ads_frequency_Q425" value={kpis.ads_frequency_Q425} onChange={handleChange} />),
            m1q1: (<KpiInput name="ads_frequency_M1Q126" value={kpis.ads_frequency_M1Q126} onChange={handleChange} />), m2q1: (<KpiInput name="ads_frequency_M2Q126" value={kpis.ads_frequency_M2Q126} onChange={handleChange} />), m3q1: (<KpiInput name="ads_frequency_M3Q126" value={kpis.ads_frequency_M3Q126} onChange={handleChange} />), totalq1: (<KpiInput name="ads_frequency_total_Q126" value={kpis.ads_frequency_total_Q126} onChange={handleChange} />),
          },
          {
            kpi: "CPM",
            description: "Costo por 1,000 impresiones",
            // q4: "$3.97",
            q4:(<KpiInput name="ads_CPM_Q425" value={kpis.ads_CPM_Q425} onChange={handleChange} />),
            m1q1: (<KpiInput name="ads_CPM_M1Q126" value={kpis.ads_CPM_M1Q126} onChange={handleChange} />), m2q1: (<KpiInput name="ads_CPM_M2Q126" value={kpis.ads_CPM_M2Q126} onChange={handleChange} />), m3q1: (<KpiInput name="ads_CPM_M3Q126" value={kpis.ads_CPM_M3Q126} onChange={handleChange} />), totalq1: (<KpiInput name="ads_CPM_total_Q126" value={kpis.ads_CPM_total_Q126} onChange={handleChange} />),
          },
        ]}
      />

      {/* 2 */}
      <KpiSection
        title="KPIs de Atención & Interés"
        subtitle="¿El mensaje engancha?"
        rows={[
          {
            kpi: "CTR",
            description: "Clicks / Impressions",
            // q4: "2.41% (Benchmark B2B: 1.2 – 2.0%)",
            q4:(<KpiInput name="ads_CTR_Q425" value={kpis.ads_CTR_Q425} onChange={handleChange} />),
            m1q1: (<KpiInput name="ads_CTR_M1Q126" value={kpis.ads_CTR_M1Q126} onChange={handleChange} />), m2q1: (<KpiInput name="ads_CTR_M2Q126" value={kpis.ads_CTR_M2Q126} onChange={handleChange} />), m3q1: (<KpiInput name="ads_CTR_M3Q126" value={kpis.ads_CTR_M3Q126} onChange={handleChange} />), totalq1: (<KpiInput name="ads_CTR_total_Q126" value={kpis.ads_CTR_total_Q126} onChange={handleChange} />),
          },
          {
            kpi: "Hook Rate (Video)",
            description: "Visualizaciones ≥ 3s / Impressions",
            // q4: "96% (Óptimo > 25%)",
            q4:(<KpiInput name="ads_HookRate_Q425" value={kpis.ads_HookRate_Q425} onChange={handleChange} />),
            m1q1: (<KpiInput name="ads_HookRate_M1Q126" value={kpis.ads_HookRate_M1Q126} onChange={handleChange} />), m2q1: (<KpiInput name="ads_HookRate_M2Q126" value={kpis.ads_HookRate_M2Q126} onChange={handleChange} />), m3q1: (<KpiInput name="ads_HookRate_M3Q126" value={kpis.ads_HookRate_M3Q126} onChange={handleChange} />), totalq1: (<KpiInput name="ads_HookRate_total_Q126" value={kpis.ads_HookRate_total_Q126} onChange={handleChange} />),
          },
          {
            kpi: "Hold Rate (Video)",
            description: "Retención promedio del video",
            // q4: "— (no medido en Q4)",
            q4:(<KpiInput name="ads_HoldRate_Q425" value={kpis.ads_HoldRate_Q425} onChange={handleChange} />),
            m1q1: (<KpiInput name="ads_HoldRate_M1Q126" value={kpis.ads_HoldRate_M1Q126} onChange={handleChange} />), m2q1: (<KpiInput name="ads_HoldRate_M2Q126" value={kpis.ads_HoldRate_M2Q126} onChange={handleChange} />), m3q1: (<KpiInput name="ads_HoldRate_M3Q126" value={kpis.ads_HoldRate_M3Q126} onChange={handleChange} />), totalq1: (<KpiInput name="ads_HoldRate_total_Q126" value={kpis.ads_HoldRate_total_Q126} onChange={handleChange} />),
          },
        ]}
      />

      {/* 3 */}
      <KpiSection
        title="KPIs de Consideración"
        subtitle="¿El usuario evalúa el valor de la propuesta?"
        rows={[
          {
            kpi: "Landing Page View Rate",
            description: "Calidad del tráfico después del click",
            q4: (<KpiInput name="landing_page_view_rate_Q425" value={kpis.landing_page_view_rate_Q425} onChange={handleChange} />),
            m1q1: (<KpiInput name="landing_page_view_rate_M1Q126" value={kpis.landing_page_view_rate_M1Q126} onChange={handleChange} />), m2q1: (<KpiInput name="landing_page_view_rate_M2Q126" value={kpis.landing_page_view_rate_M2Q126} onChange={handleChange} />), m3q1: (<KpiInput name="landing_page_view_rate_M3Q126" value={kpis.landing_page_view_rate_M3Q126} onChange={handleChange} />), totalq1: (<KpiInput name="landing_page_view_rate_total_Q126" value={kpis.landing_page_view_rate_total_Q126} onChange={handleChange} />),
          },
          {
            kpi: "Time on Page",
            description: "Nivel de interés real en el contenido",
            q4: (<KpiInput name="time_on_page_Q425" value={kpis.time_on_page_Q425} onChange={handleChange} />),
            m1q1: (<KpiInput name="time_on_page_M1Q126" value={kpis.time_on_page_M1Q126} onChange={handleChange} />), m2q1: (<KpiInput name="time_on_page_M2Q126" value={kpis.time_on_page_M2Q126} onChange={handleChange} />), m3q1: (<KpiInput name="time_on_page_M3Q126" value={kpis.time_on_page_M3Q126} onChange={handleChange} />), totalq1: (<KpiInput name="time_on_page_total_Q126" value={kpis.time_on_page_total_Q126} onChange={handleChange} />),
          },
          {
            kpi: "Scroll Depth",
            description: "Qué tanto se consume el mensaje",
            q4: (<KpiInput name="scroll_depth_Q425" value={kpis.scroll_depth_Q425} onChange={handleChange} />),
            m1q1: (<KpiInput name="scroll_depth_M1Q126" value={kpis.scroll_depth_M1Q126} onChange={handleChange} />), m2q1: (<KpiInput name="scroll_depth_M2Q126" value={kpis.scroll_depth_M2Q126} onChange={handleChange} />), m3q1: (<KpiInput name="scroll_depth_M3Q126" value={kpis.scroll_depth_M3Q126} onChange={handleChange} />), totalq1: (<KpiInput name="scroll_depth_total_Q126" value={kpis.scroll_depth_total_Q126} onChange={handleChange} />),
          },
          {
            kpi: "Engagement Post-Click",
            description: "Interacciones luego de llegar a la landing",
            q4: (<KpiInput name="engagement_post_click_Q425" value={kpis.engagement_post_click_Q425} onChange={handleChange} />),
            m1q1: (<KpiInput name="engagement_post_click_M1Q126" value={kpis.engagement_post_click_M1Q126} onChange={handleChange} />), m2q1: (<KpiInput name="engagement_post_click_M2Q126" value={kpis.engagement_post_click_M2Q126} onChange={handleChange} />), m3q1: (<KpiInput name="engagement_post_click_M3Q126" value={kpis.engagement_post_click_M3Q126} onChange={handleChange} />), totalq1: (<KpiInput name="engagement_post_click_total_Q126" value={kpis.engagement_post_click_total_Q126} onChange={handleChange} />),
          },
        ]}
      />

      {/* 4 */}
      <KpiSection
        title="KPIs de Conversión"
        subtitle="¿La inversión genera resultados de negocio?"
        rows={[
          {
            kpi: "CPL",
            description: "Costo por Lead",
            // q4: "$0.48 (716.58 / 1,490 leads)",
            q4:(<KpiInput name="CPL_Q425" value={kpis.CPL_Q425} onChange={handleChange} />  ), m1q1: (<KpiInput name="CPL_M1Q126" value={kpis.CPL_M1Q126} onChange={handleChange} />), m2q1: (<KpiInput name="CPL_M2Q126" value={kpis.CPL_M2Q126} onChange={handleChange} />), m3q1: (<KpiInput name="CPL_M3Q126" value={kpis.CPL_M3Q126} onChange={handleChange} />), totalq1: (<KpiInput name="CPL_total_Q126" value={kpis.CPL_total_Q126} onChange={handleChange} />),
          },
          {
            kpi: "CPA",
            description: "Costo por Conversión / Cliente",
            // q4: "$238.86",
            q4:(<KpiInput name="CPA_Q425" value={kpis.CPA_Q425} onChange={handleChange} />), m1q1: (<KpiInput name="CPA_M1Q126" value={kpis.CPA_M1Q126} onChange={handleChange} />), m2q1: (<KpiInput name="CPA_M2Q126" value={kpis.CPA_M2Q126} onChange={handleChange} />), m3q1: (<KpiInput name="CPA_M3Q126" value={kpis.CPA_M3Q126} onChange={handleChange} />), totalq1: (<KpiInput name="CPA_total_Q126" value={kpis.CPA_total_Q126} onChange={handleChange} />),
          },
          {
            kpi: "Conversion Rate Click → Lead",
            description: "Leads (1,490) / Clicks (4,356)",
            // q4: "1.40%",
            q4:(<KpiInput name="conversion_rate_click_to_lead_Q425" value={kpis.conversion_rate_click_to_lead_Q425} onChange={handleChange} />),
            m1q1: (<KpiInput name="conversion_rate_click_to_lead_M1Q126" value={kpis.conversion_rate_click_to_lead_M1Q126} onChange={handleChange} />), m2q1: (<KpiInput name="conversion_rate_click_to_lead_M2Q126" value={kpis.conversion_rate_click_to_lead_M2Q126} onChange={handleChange} />), m3q1: (<KpiInput name="conversion_rate_click_to_lead_M3Q126" value={kpis.conversion_rate_click_to_lead_M3Q126} onChange={handleChange} />), totalq1: (<KpiInput name="conversion_rate_click_to_lead_total_Q126" value={kpis.conversion_rate_click_to_lead_total_Q126} onChange={handleChange} />),
          },{
            kpi: "Conversion Rate Lead → Lead Calificado",
            description: "Qualified Lead (61) / Leads (1,490)",
            q4:(<KpiInput name="conversion_rate_lead_to_qualified_lead_Q425" value={kpis.conversion_rate_lead_to_qualified_lead_Q425} onChange={handleChange} />),
            m1q1: (<KpiInput name="conversion_rate_lead_to_qualified_lead_M1Q126" value={kpis.conversion_rate_lead_to_qualified_lead_M1Q126} onChange={handleChange} />), m2q1: (<KpiInput name="conversion_rate_lead_to_qualified_lead_M2Q126" value={kpis.conversion_rate_lead_to_qualified_lead_M2Q126} onChange={handleChange} />), m3q1: (<KpiInput name="conversion_rate_lead_to_qualified_lead_M3Q126" value={kpis.conversion_rate_lead_to_qualified_lead_M3Q126} onChange={handleChange} />), totalq1: (<KpiInput name="conversion_rate_lead_to_qualified_lead_total_Q126" value={kpis.conversion_rate_lead_to_qualified_lead_total_Q126} onChange={handleChange} />),
          },
          {
            kpi: "Conversion Rate Lead Calificado → Cliente",
            description: "Clientes (3) / Leads Calificados (61)",
            q4:(<KpiInput name="conversion_rate_qualified_lead_to_client_Q425" value={kpis.conversion_rate_qualified_lead_to_client_Q425} onChange={handleChange} />),
            m1q1: (<KpiInput name="conversion_rate_qualified_lead_to_client_M1Q126" value={kpis.conversion_rate_qualified_lead_to_client_M1Q126} onChange={handleChange} />), m2q1: (<KpiInput name="conversion_rate_qualified_lead_to_client_M2Q126" value={kpis.conversion_rate_qualified_lead_to_client_M2Q126} onChange={handleChange} />), m3q1: (<KpiInput name="conversion_rate_qualified_lead_to_client_M3Q126" value={kpis.conversion_rate_qualified_lead_to_client_M3Q126} onChange={handleChange} />), totalq1: (<KpiInput name="conversion_rate_qualified_lead_to_client_total_Q126" value={kpis.conversion_rate_qualified_lead_to_client_total_Q126} onChange={handleChange} />),
          },
          {
            kpi: "Conversion Rate Lead → Cliente",
            description: "Clientes (3) / Leads (1,490)",
            q4:(<KpiInput name="conversion_rate_lead_to_client_Q425" value={kpis.conversion_rate_lead_to_client_Q425} onChange={handleChange} />),
            m1q1: (<KpiInput name="conversion_rate_lead_to_client_M1Q126" value={kpis.conversion_rate_lead_to_client_M1Q126} onChange={handleChange} />), m2q1: (<KpiInput name="conversion_rate_lead_to_client_M2Q126" value={kpis.conversion_rate_lead_to_client_M2Q126} onChange={handleChange} />), m3q1: (<KpiInput name="conversion_rate_lead_to_client_M3Q126" value={kpis.conversion_rate_lead_to_client_M3Q126} onChange={handleChange} />), totalq1: (<KpiInput name="conversion_rate_lead_to_client_total_Q126" value={kpis.conversion_rate_lead_to_client_total_Q126} onChange={handleChange} />),
          },
          {
            kpi: "Cost per Qualified Lead",
            description: "Costo real por lead calificado",
            q4:(<KpiInput name="cost_per_qualified_lead_Q425" value={kpis.cost_per_qualified_lead_Q425} onChange={handleChange} />), m1q1: (<KpiInput name="cost_per_qualified_lead_M1Q126" value={kpis.cost_per_qualified_lead_M1Q126} onChange={handleChange} />), m2q1: (<KpiInput name="cost_per_qualified_lead_M2Q126" value={kpis.cost_per_qualified_lead_M2Q126} onChange={handleChange} />), m3q1: (<KpiInput name="cost_per_qualified_lead_M3Q126" value={kpis.cost_per_qualified_lead_M3Q126} onChange={handleChange} />), totalq1: (<KpiInput name="cost_per_qualified_lead_total_Q126" value={kpis.cost_per_qualified_lead_total_Q126} onChange={handleChange} />),
          },
          {
            kpi: "ROAS",
            description: "Revenue / Ad Spend",
            q4:(<KpiInput name="ROAS_Q425" value={kpis.ROAS_Q425} onChange={handleChange} />), m1q1: (<KpiInput name="ROAS_M1Q126" value={kpis.ROAS_M1Q126} onChange={handleChange} />), m2q1: (<KpiInput name="ROAS_M2Q126" value={kpis.ROAS_M2Q126} onChange={handleChange} />), m3q1: (<KpiInput name="ROAS_M3Q126" value={kpis.ROAS_M3Q126} onChange={handleChange} />), totalq1: (<KpiInput name="ROAS_total_Q126" value={kpis.ROAS_total_Q126} onChange={handleChange} />),
          },
        ]}
      />

      {/* 5 */}
      <KpiSection
        title="KPIs de Escalabilidad"
        subtitle="¿El modelo es sostenible y escalable en el tiempo?"
        rows={[
          {
            kpi: "CAC",
            description: "Salud financiera del modelo de adquisición",
            q4: (<KpiInput name="CAC_Q425" value={kpis.CAC_Q425} onChange={handleChange} />),
            m1q1: (<KpiInput name="CAC_M1Q126" value={kpis.CAC_M1Q126} onChange={handleChange} />), m2q1: (<KpiInput name="CAC_M2Q126" value={kpis.CAC_M2Q126} onChange={handleChange} />), m3q1: (<KpiInput name="CAC_M3Q126" value={kpis.CAC_M3Q126} onChange={handleChange} />), totalq1: (<KpiInput name="CAC_total_Q126" value={kpis.CAC_total_Q126} onChange={handleChange} />),
          },
          {
            kpi: "Payback Period",
            description: "Tiempo necesario para recuperar la inversión",
            q4: (<KpiInput name="payback_period_Q425" value={kpis.payback_period_Q425} onChange={handleChange} />), m1q1: (<KpiInput name="payback_period_M1Q126" value={kpis.payback_period_M1Q126} onChange={handleChange} />), m2q1: (<KpiInput name="payback_period_M2Q126" value={kpis.payback_period_M2Q126} onChange={handleChange} />), m3q1: (<KpiInput name="payback_period_M3Q126" value={kpis.payback_period_M3Q126} onChange={handleChange} />), totalq1: (<KpiInput name="payback_period_total_Q126" value={kpis.payback_period_total_Q126} onChange={handleChange} />),
          },
          {
            kpi: "Incremental Lift",
            description: "Impacto incremental real de la pauta",
            q4: (<KpiInput name="incremental_lift_Q425" value={kpis.incremental_lift_Q425} onChange={handleChange} />), m1q1: (<KpiInput name="incremental_lift_M1Q126" value={kpis.incremental_lift_M1Q126} onChange={handleChange} />), m2q1: (<KpiInput name="incremental_lift_M2Q126" value={kpis.incremental_lift_M2Q126} onChange={handleChange} />), m3q1: (<KpiInput name="incremental_lift_M3Q126" value={kpis.incremental_lift_M3Q126} onChange={handleChange} />), totalq1: (<KpiInput name="incremental_lift_total_Q126" value={kpis.incremental_lift_total_Q126} onChange={handleChange} />),
          },
          {
            kpi: "Attribution Share",
            description: "Contribución de cada canal al resultado final",
            q4: (<KpiInput name="attribution_share_Q425" value={kpis.attribution_share_Q425} onChange={handleChange} />), m1q1: (<KpiInput name="attribution_share_M1Q126" value={kpis.attribution_share_M1Q126} onChange={handleChange} />), m2q1: (<KpiInput name="attribution_share_M2Q126" value={kpis.attribution_share_M2Q126} onChange={handleChange} />), m3q1: (<KpiInput name="attribution_share_M3Q126" value={kpis.attribution_share_M3Q126} onChange={handleChange} />), totalq1: (<KpiInput name="attribution_share_total_Q126" value={kpis.attribution_share_total_Q126} onChange={handleChange} />),
          },
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
