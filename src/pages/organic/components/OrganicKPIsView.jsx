import OrganicKpiSection from "./OrganicKpiSection";


export default function OrganicKPIsView() {
  return (
    <div className="space-y-16">
      {/* Título Principal */}
      <div className="text-start">
        <h1 className="text-3xl font-semibold text-slate-900">
          Indicadores Clave de Desempeño Orgánico
        </h1>
        <p className="mt-3 text-lg text-slate-600">
          Medición de impacto, crecimiento y calidad del contenido
        </p>
      </div>

      {/* ===================== 1. ALCANCE & VISIBILIDAD ===================== */}
      <OrganicKpiSection
        title="KPIs de Alcance & Visibilidad"
        subtitle="¿Nos están viendo las personas correctas?"
        platforms={[
          {
            name: "Facebook",
            rows: [
              {
                kpi: "Reach",
                description: "Usuarios únicos que vieron el contenido",
                q4: "—",
              },
              {
                kpi: "Impressions",
                description: "Total de veces que se mostró",
                q4: "—",
              },
              {
                kpi: "Profile Visits",
                description: "Visitas al perfil",
                q4: "—",
              },
            ],
          },
          {
            name: "Instagram",
            rows: [
              {
                kpi: "Reach",
                description: "Usuarios únicos que vieron el contenido",
                q4: "—",
              },
              {
                kpi: "Impressions",
                description: "Total de veces que se mostró",
                q4: "—",
              },
              {
                kpi: "Share Rate",
                description: "% de personas que comparten",
                q4: "—",
              },
            ],
          },
          {
            name: "LinkedIn",
            rows: [
              {
                kpi: "Reach",
                description: "Usuarios únicos que vieron el contenido",
                q4: "—",
              },
              {
                kpi: "Profile Visits",
                description: "Visitas al perfil",
                q4: "—",
              },
              {
                kpi: "Follower Growth Rate",
                description: "Crecimiento de seguidores",
                q4: "—",
              },
            ],
          },
        ]}
      />

      <OrganicKpiSection
        title="KPIs de Engagement"
        subtitle="¿Les importa el contenido?"
        platforms={[
          {
            name: "Facebook",
            rows: [
              {
                kpi: "Engagement Rate",
                description: "(Reacciones + Comentarios + Compartidos) / Reach",
                q4: "—",
              },
              {
                kpi: "Comments per Post",
                description: "Comentarios promedio por publicación",
                q4: "—",
              },
              {
                kpi: "Shares per Post",
                description: "Compartidos promedio por publicación",
                q4: "—",
              },
              {
                kpi: "Video Completion Rate",
                description: "% de usuarios que ven el video completo",
                q4: "—",
              },
            ],
          },
          {
            name: "Instagram",
            rows: [
              {
                kpi: "Engagement Rate",
                description: "(Likes + Comments + Saves + Shares) / Reach",
                q4: "—",
              },
              {
                kpi: "Comments per Post",
                description: "Comentarios promedio por publicación",
                q4: "—",
              },
              {
                kpi: "Saves per Post",
                description: "Guardados promedio por publicación",
                q4: "—",
              },
              {
                kpi: "Story Interaction Rate",
                description: "Respuestas + taps + clics",
                q4: "—",
              },
              {
                kpi: "Reel Completion Rate",
                description: "% de usuarios que ven el reel completo",
                q4: "—",
              },
            ],
          },
          {
            name: "LinkedIn",
            rows: [
              {
                kpi: "Engagement Rate",
                description:
                  "(Reacciones + Comentarios + Compartidos + Clicks) / Impressions",
                q4: "—",
              },
              {
                kpi: "Comments per Post",
                description: "Comentarios promedio por publicación",
                q4: "—",
              },
              {
                kpi: "Reposts per Post",
                description: "Reposts promedio por publicación",
                q4: "—",
              },
              {
                kpi: "Click-Through Rate (CTR)",
                description: "Clicks / Impressions",
                q4: "—",
              },
            ],
          },
        ]}
      />
    </div>
  );
}
