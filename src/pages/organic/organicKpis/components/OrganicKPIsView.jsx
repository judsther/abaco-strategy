import OrganicKpiSection from "./OrganicKpiSection.jsx";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../../../firebase.js";
import { useEffect, useState } from "react";
import KpiInput from "../../../ads/components/KpiInput.jsx";



export default function OrganicKPIsView() {

  const [kpis, setKpis] = useState({});

useEffect(() => {
  const load = async () => {
    const ref = doc(db, "kpis", "organic");
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

  const ref = doc(db, "kpis", "organic");

  await setDoc(
    ref,
    {
      [key]: value,
    },
    { merge: true }
  );
};


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
         q4: (
  <KpiInput
    name="facebook_reach_Q425"
    value={kpis.facebook_reach_Q425}
    onChange={handleChange}
  />
),
m1q1: (
  <KpiInput
    name="facebook_reach_M1Q126"
    value={kpis.facebook_reach_M1Q126}
    onChange={handleChange}
  />
), m2q1: (
  <KpiInput
    name="facebook_reach_M2Q126"
    value={kpis.facebook_reach_M2Q126}
    onChange={handleChange}
  />
), m3q1: (
  <KpiInput
    name="facebook_reach_M3Q126"
    value={kpis.facebook_reach_M3Q126}
    onChange={handleChange}
  />
), totalq1: (
  <KpiInput
    name="facebook_reach_total_Q126"
    value={kpis.facebook_reach_total_Q126}
    onChange={handleChange}
  />
),
   
              },
              {
                kpi: "Impressions",
                description: "Total de veces que se mostró",
               q4: (
  <KpiInput name="facebook_impressions_Q425" value={kpis.facebook_impressions_Q425} onChange={handleChange} />
),
m1q1: (
  <KpiInput name="facebook_impressions_M1Q126" value={kpis.facebook_impressions_M1Q126} onChange={handleChange} />
), m2q1: (
  <KpiInput name="facebook_impressions_M2Q126" value={kpis.facebook_impressions_M2Q126} onChange={handleChange} />
), m3q1: (
  <KpiInput name="facebook_impressions_M3Q126" value={kpis.facebook_impressions_M3Q126} onChange={handleChange} />
), totalq1: (
  <KpiInput name="facebook_impressions_total_Q126" value={kpis.facebook_impressions_total_Q126} onChange={handleChange} />
),

              },
              {
                kpi: "Profile Visits",
                description: "Visitas al perfil",
              q4: (
  <KpiInput name="facebook_profile_visits_Q425" value={kpis.facebook_profile_visits_Q425} onChange={handleChange} />
),
m1q1: (
  <KpiInput name="facebook_profile_visits_M1Q126" value={kpis.facebook_profile_visits_M1Q126} onChange={handleChange} />
), m2q1: (
  <KpiInput name="facebook_profile_visits_M2Q126" value={kpis.facebook_profile_visits_M2Q126} onChange={handleChange} />
), m3q1: (
  <KpiInput name="facebook_profile_visits_M3Q126" value={kpis.facebook_profile_visits_M3Q126} onChange={handleChange} />
), totalq1: (
  <KpiInput name="facebook_profile_visits_total_Q126" value={kpis.facebook_profile_visits_total_Q126} onChange={handleChange} />
),

              },
              {
                kpi: "Follower Growth Rate",
                description: "% de personas que siguen la cuenta en un período",
               q4: (
  <KpiInput name="facebook_follower_growth_rate_Q425" value={kpis.facebook_follower_growth_rate_Q425} onChange={handleChange} />
),
m1q1: (
  <KpiInput name="facebook_follower_growth_rate_M1Q126" value={kpis.facebook_follower_growth_rate_M1Q126} onChange={handleChange} />
), m2q1: (
  <KpiInput name="facebook_follower_growth_rate_M2Q126" value={kpis.facebook_follower_growth_rate_M2Q126} onChange={handleChange} />
), m3q1: (
  <KpiInput name="facebook_follower_growth_rate_M3Q126" value={kpis.facebook_follower_growth_rate_M3Q126} onChange={handleChange} />
), totalq1: (
  <KpiInput name="facebook_follower_growth_rate_total_Q126" value={kpis.facebook_follower_growth_rate_total_Q126} onChange={handleChange} />
),
              },{
                kpi: "Total Page Likes to Date",
                description: "Número total de likes que tiene la página",
                q4: (
  <KpiInput name="facebook_total_page_likes_Q425" value={kpis.facebook_total_page_likes_Q425} onChange={handleChange} />
),
m1q1: (
  <KpiInput name="facebook_total_page_likes_M1Q126" value={kpis.facebook_total_page_likes_M1Q126} onChange={handleChange} />
), m2q1: (
  <KpiInput name="facebook_total_page_likes_M2Q126" value={kpis.facebook_total_page_likes_M2Q126} onChange={handleChange} />
), m3q1: (
  <KpiInput name="facebook_total_page_likes_M3Q126" value={kpis.facebook_total_page_likes_M3Q126} onChange={handleChange} />
), totalq1: (
  <KpiInput name="facebook_total_page_likes_total_Q126" value={kpis.facebook_total_page_likes_total_Q126} onChange={handleChange} />
),
              }
            ],
          },
          {
            name: "Instagram",
            rows: [
              {
                kpi: "Reach",
                description: "Usuarios únicos que vieron el contenido",
                q4: (
  <KpiInput name="instagram_reach_Q425" value={kpis.instagram_reach_Q425} onChange={handleChange} />
), m1q1: (
  <KpiInput name="instagram_reach_M1Q126" value={kpis.instagram_reach_M1Q126} onChange={handleChange} />
), m2q1: (
  <KpiInput name="instagram_reach_M2Q126" value={kpis.instagram_reach_M2Q126} onChange={handleChange} />
), m3q1: (
  <KpiInput name="instagram_reach_M3Q126" value={kpis.instagram_reach_M3Q126} onChange={handleChange} />
), totalq1: (
  <KpiInput name="instagram_reach_total_Q126" value={kpis.instagram_reach_total_Q126} onChange={handleChange} />
),
  
              },
              {
                kpi: "Impressions",
                description: "Total de veces que se mostró",
                q4: (
  <KpiInput name="instagram_impressions_Q425" value={kpis.instagram_impressions_Q425} onChange={handleChange} />
), m1q1: (
  <KpiInput name="instagram_impressions_M1Q126" value={kpis.instagram_impressions_M1Q126} onChange={handleChange} />
), m2q1: (
  <KpiInput name="instagram_impressions_M2Q126" value={kpis.instagram_impressions_M2Q126} onChange={handleChange} />
), m3q1: (
  <KpiInput name="instagram_impressions_M3Q126" value={kpis.instagram_impressions_M3Q126} onChange={handleChange} />
), totalq1: (
  <KpiInput name="instagram_impressions_total_Q126" value={kpis.instagram_impressions_total_Q126} onChange={handleChange} />
),
              },
              {
                kpi: "Profile Visits",
                description: "Visitas al perfil",
                q4: (
  <KpiInput name="instagram_profile_visits_Q425" value={kpis.instagram_profile_visits_Q425} onChange={handleChange} />
), m1q1: (
  <KpiInput name="instagram_profile_visits_M1Q126" value={kpis.instagram_profile_visits_M1Q126} onChange={handleChange} />
), m2q1: (
  <KpiInput name="instagram_profile_visits_M2Q126" value={kpis.instagram_profile_visits_M2Q126} onChange={handleChange} />
), m3q1: (
  <KpiInput name="instagram_profile_visits_M3Q126" value={kpis.instagram_profile_visits_M3Q126} onChange={handleChange} />
), totalq1: (
  <KpiInput name="instagram_profile_visits_total_Q126" value={kpis.instagram_profile_visits_total_Q126} onChange={handleChange} />
),
              },
              {
                kpi: "Follower Growth Rate",
                description: "% de personas que siguen la cuenta en un período",
                q4: (
  <KpiInput name="instagram_follower_growth_rate_Q425" value={kpis.instagram_follower_growth_rate_Q425} onChange={handleChange} />
), m1q1: (
  <KpiInput name="instagram_follower_growth_rate_M1Q126" value={kpis.instagram_follower_growth_rate_M1Q126} onChange={handleChange} />
), m2q1: (
  <KpiInput name="instagram_follower_growth_rate_M2Q126" value={kpis.instagram_follower_growth_rate_M2Q126} onChange={handleChange} />
), m3q1: (
  <KpiInput name="instagram_follower_growth_rate_M3Q126" value={kpis.instagram_follower_growth_rate_M3Q126} onChange={handleChange} />
), totalq1: (
  <KpiInput name="instagram_follower_growth_rate_total_Q126" value={kpis.instagram_follower_growth_rate_total_Q126} onChange={handleChange} />
),
              },
              {
                kpi: "Total Followers to Date",
                description: "Número total de seguidores hasta la fecha",
                q4: (
  <KpiInput name="instagram_total_followers_Q425" value={kpis.instagram_total_followers_Q425} onChange={handleChange} />
), m1q1: (
  <KpiInput name="instagram_total_followers_M1Q126" value={kpis.instagram_total_followers_M1Q126} onChange={handleChange} />
), m2q1: (
  <KpiInput name="instagram_total_followers_M2Q126" value={kpis.instagram_total_followers_M2Q126} onChange={handleChange} />
), m3q1: (
  <KpiInput name="instagram_total_followers_M3Q126" value={kpis.instagram_total_followers_M3Q126} onChange={handleChange} />
), totalq1: (
  <KpiInput name="instagram_total_followers_total_Q126" value={kpis.instagram_total_followers_total_Q126} onChange={handleChange} />
),
              }
            ],
          },
          {
            name: "LinkedIn",
            rows: [
              {
                kpi: "Reach",
                description: "Usuarios únicos que vieron el contenido",
                q4: (<KpiInput name="linkedin_reach_Q425" value={kpis.linkedin_reach_Q425} onChange={handleChange} />),
                m1q1: (<KpiInput name="linkedin_reach_M1Q126" value={kpis.linkedin_reach_M1Q126} onChange={handleChange} />),m2q1: (<KpiInput name="linkedin_reach_M2Q126" value={kpis.linkedin_reach_M2Q126} onChange={handleChange} />),m3q1: (<KpiInput name="linkedin_reach_M3Q126" value={kpis.linkedin_reach_M3Q126} onChange={handleChange} />),totalq1: (<KpiInput name="linkedin_reach_total_Q126" value={kpis.linkedin_reach_total_Q126} onChange={handleChange} />),
              },
              {
                kpi: "Impressions",
                description: "Total de veces que se mostró",
                q4: (<KpiInput name="linkedin_impressions_Q425" value={kpis.linkedin_impressions_Q425} onChange={handleChange} />),m1q1: (<KpiInput name="linkedin_impressions_M1Q126" value={kpis.linkedin_impressions_M1Q126} onChange={handleChange} />),m2q1: (<KpiInput name="linkedin_impressions_M2Q126" value={kpis.linkedin_impressions_M2Q126} onChange={handleChange} />),m3q1: (<KpiInput name="linkedin_impressions_M3Q126" value={kpis.linkedin_impressions_M3Q126} onChange={handleChange} />),totalq1: (<KpiInput name="linkedin_impressions_total_Q126" value={kpis.linkedin_impressions_total_Q126} onChange={handleChange} />),
              },
              {
                kpi: "Profile Visits",
                description: "Visitas al perfil",
                q4: (
  <KpiInput name="linkedin_profile_visits_Q425" value={kpis.linkedin_profile_visits_Q425} onChange={handleChange} />
),
m1q1: (
  <KpiInput name="linkedin_profile_visits_M1Q126" value={kpis.linkedin_profile_visits_M1Q126} onChange={handleChange} />
),m2q1: (
  <KpiInput name="linkedin_profile_visits_M2Q126" value={kpis.linkedin_profile_visits_M2Q126} onChange={handleChange} />
),m3q1: (
  <KpiInput name="linkedin_profile_visits_M3Q126" value={kpis.linkedin_profile_visits_M3Q126} onChange={handleChange} />
),totalq1: (
  <KpiInput name="linkedin_profile_visits_total_Q126" value={kpis.linkedin_profile_visits_total_Q126} onChange={handleChange} />
),
              },
              {
                kpi: "Follower Growth Rate",
                description: "Crecimiento de seguidores",
                q4: (
  <KpiInput name="linkedin_follower_rate_Q425" value={kpis.linkedin_follower_rate_Q425} onChange={handleChange} />
),
m1q1: (
  <KpiInput name="linkedin_follower_rate_M1Q126" value={kpis.linkedin_follower_rate_M1Q126} onChange={handleChange} />
),m2q1: (
  <KpiInput name="linkedin_follower_rate_M2Q126" value={kpis.linkedin_follower_rate_M2Q126} onChange={handleChange} />
),m3q1: (
  <KpiInput name="linkedin_follower_rate_M3Q126" value={kpis.linkedin_follower_rate_M3Q126} onChange={handleChange} />
),totalq1: (
  <KpiInput name="linkedin_follower_rate_total_Q126" value={kpis.linkedin_follower_rate_total_Q126} onChange={handleChange} />
),
              },
              {
                kpi: "Total Followers to Date",
                description: "Total de seguidores acumulados hasta la fecha",
                q4: (<KpiInput name="linkedin_total_followers_Q425" value={kpis.linkedin_total_followers_Q425} onChange={handleChange} />),
                m1q1: (<KpiInput name="linkedin_total_followers_M1Q126" value={kpis.linkedin_total_followers_M1Q126} onChange={handleChange} />),
                m2q1: (<KpiInput name="linkedin_total_followers_M2Q126" value={kpis.linkedin_total_followers_M2Q126} onChange={handleChange} />),
                m3q1: (<KpiInput name="linkedin_total_followers_M3Q126" value={kpis.linkedin_total_followers_M3Q126} onChange={handleChange} />),
                totalq1: (<KpiInput name="linkedin_total_followers_total_Q126" value={kpis.linkedin_total_followers_total_Q126} onChange={handleChange} />),
              }
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
                q4: (
  <KpiInput name="facebook_engagement_rate_Q425" value={kpis.facebook_engagement_rate_Q425} onChange={handleChange} />
),
                m1q1: (
  <KpiInput name="facebook_engagement_rate_M1Q126" value={kpis.facebook_engagement_rate_M1Q126} onChange={handleChange} />
),
                m2q1: (
  <KpiInput name="facebook_engagement_rate_M2Q126" value={kpis.facebook_engagement_rate_M2Q126} onChange={handleChange} />
),
                m3q1: (
  <KpiInput name="facebook_engagement_rate_M3Q126" value={kpis.facebook_engagement_rate_M3Q126} onChange={handleChange} />
),
                totalq1: (
  <KpiInput name="facebook_engagement_rate_total_Q126" value={kpis.facebook_engagement_rate_total_Q126} onChange={handleChange} />
),
              },
              {
                kpi: "Total Interactions",
                description: "Total de reacciones, comentarios y compartidos",
                q4: (
  <KpiInput name="facebook_total_interactions_Q425" value={kpis.facebook_total_interactions_Q425} onChange={handleChange} />
),
                m1q1: (
  <KpiInput name="facebook_total_interactions_M1Q126" value={kpis.facebook_total_interactions_M1Q126} onChange={handleChange} />
),
                m2q1: (
  <KpiInput name="facebook_total_interactions_M2Q126" value={kpis.facebook_total_interactions_M2Q126} onChange={handleChange} />
),
                m3q1: (
  <KpiInput name="facebook_total_interactions_M3Q126" value={kpis.facebook_total_interactions_M3Q126} onChange={handleChange} />
),
                totalq1: (
  <KpiInput name="facebook_total_interactions_total_Q126" value={kpis.facebook_total_interactions_total_Q126} onChange={handleChange} />
),
  
              },
              {
                kpi: "Video 3 Secs Rate",
                description: "% de usuarios que ven el video por más de 3 segundos",
                q4: (
  <KpiInput name="facebook_video_3secs_rate_Q425" value={kpis.facebook_video_3secs_rate_Q425} onChange={handleChange} />
),
                m1q1: (
  <KpiInput name="facebook_video_3secs_rate_M1Q126" value={kpis.facebook_video_3secs_rate_M1Q126} onChange={handleChange} />
),
                m2q1: (
  <KpiInput name="facebook_video_3secs_rate_M2Q126" value={kpis.facebook_video_3secs_rate_M2Q126} onChange={handleChange} />
),
                m3q1: (
  <KpiInput name="facebook_video_3secs_rate_M3Q126" value={kpis.facebook_video_3secs_rate_M3Q126} onChange={handleChange} />
),
                totalq1: (
  <KpiInput name="facebook_video_3secs_rate_total_Q126" value={kpis.facebook_video_3secs_rate_total_Q126} onChange={handleChange} />
),
              },
            ],
          },
          {
            name: "Instagram",
            rows: [
              {
                kpi: "Engagement Rate",
                description: "(Likes + Comments + Saves + Shares) / Reach",
                q4: (<KpiInput name="instagram_engagement_rate_Q425" value={kpis.instagram_engagement_rate_Q425} onChange={handleChange} />),
                m1q1: (<KpiInput name="instagram_engagement_rate_M1Q126" value={kpis.instagram_engagement_rate_M1Q126} onChange={handleChange} />),m2q1: (<KpiInput name="instagram_engagement_rate_M2Q126" value={kpis.instagram_engagement_rate_M2Q126} onChange={handleChange} />),m3q1: (<KpiInput name="instagram_engagement_rate_M3Q126" value={kpis.instagram_engagement_rate_M3Q126} onChange={handleChange} />),totalq1: (<KpiInput name="instagram_engagement_rate_total_Q126" value={kpis.instagram_engagement_rate_total_Q126} onChange={handleChange} />),
              },
              {
                kpi: "Total Interactions",
                description: "Interacciones totales",
                q4: (<KpiInput name="instagram_total_interactions_Q425" value={kpis.instagram_total_interactions_Q425} onChange={handleChange} />),
                m1q1: (<KpiInput name="instagram_total_interactions_M1Q126" value={kpis.instagram_total_interactions_M1Q126} onChange={handleChange} />),m2q1: (<KpiInput name="instagram_total_interactions_M2Q126" value={kpis.instagram_total_interactions_M2Q126} onChange={handleChange} />),m3q1: (<KpiInput name="instagram_total_interactions_M3Q126" value={kpis.instagram_total_interactions_M3Q126} onChange={handleChange} />),totalq1: (<KpiInput name="instagram_total_interactions_total_Q126" value={kpis.instagram_total_interactions_total_Q126} onChange={handleChange} />),
              },
            ],
          },
          {
            name: "LinkedIn",
            rows: [
              {
                kpi: "Engagement Rate Social",
                description:
                  "(Reacciones + Comentarios + Compartidos) / Reach",
                q4: (<KpiInput name="linkedin_engagement_rate_Q425" value={kpis.linkedin_engagement_rate_Q425} onChange={handleChange} />),m1q1: (<KpiInput name="linkedin_engagement_rate_M1Q126" value={kpis.linkedin_engagement_rate_M1Q126} onChange={handleChange} />),m2q1: (<KpiInput name="linkedin_engagement_rate_M2Q126" value={kpis.linkedin_engagement_rate_M2Q126} onChange={handleChange} />),m3q1: (<KpiInput name="linkedin_engagement_rate_M3Q126" value={kpis.linkedin_engagement_rate_M3Q126} onChange={handleChange} />),totalq1: (<KpiInput name="linkedin_engagement_rate_total_Q126" value={kpis.linkedin_engagement_rate_total_Q126} onChange={handleChange} />),
              },
              {
                kpi: "Total Interactions",
                description: "Total de reacciones, comentarios, compartidos y clicks",
                q4: (<KpiInput name="linkedin_total_interactions_Q425" value={kpis.linkedin_total_interactions_Q425} onChange={handleChange} />),m1q1: (<KpiInput name="linkedin_total_interactions_M1Q126" value={kpis.linkedin_total_interactions_M1Q126} onChange={handleChange} />),m2q1: (<KpiInput name="linkedin_total_interactions_M2Q126" value={kpis.linkedin_total_interactions_M2Q126} onChange={handleChange} />),m3q1: (<KpiInput name="linkedin_total_interactions_M3Q126" value={kpis.linkedin_total_interactions_M3Q126} onChange={handleChange} />),totalq1: (<KpiInput name="linkedin_total_interactions_total_Q126" value={kpis.linkedin_total_interactions_total_Q126} onChange={handleChange} />),
              },
              {kpi: "CTR", description: "Interés de lectura: Clicks / Impressions",
               q4: (<KpiInput name="linkedin_ctr_Q425" value={kpis.linkedin_ctr_Q425} onChange={handleChange} />),m1q1: (<KpiInput name="linkedin_ctr_M1Q126" value={kpis.linkedin_ctr_M1Q126} onChange={handleChange} />),m2q1: (<KpiInput name="linkedin_ctr_M2Q126" value={kpis.linkedin_ctr_M2Q126} onChange={handleChange} />),m3q1: (<KpiInput name="linkedin_ctr_M3Q126" value={kpis.linkedin_ctr_M3Q126} onChange={handleChange} />),totalq1: (<KpiInput name="linkedin_ctr_total_Q126" value={kpis.linkedin_ctr_total_Q126} onChange={handleChange} />),},
              {
                kpi: "Top vs. competitors Engagement Rate",
                description:
                  "Puesto que ocupa en el TOP 9 - engagement rate frente a competidores",
                q4: (<KpiInput name="linkedin_top_competitors_engagement_rate_Q425" value={kpis.linkedin_top_competitors_engagement_rate_Q425} onChange={handleChange} />),m1q1: (<KpiInput name="linkedin_top_competitors_engagement_rate_M1Q126" value={kpis.linkedin_top_competitors_engagement_rate_M1Q126} onChange={handleChange} />),m2q1: (<KpiInput name="linkedin_top_competitors_engagement_rate_M2Q126" value={kpis.linkedin_top_competitors_engagement_rate_M2Q126} onChange={handleChange} />),m3q1: (<KpiInput name="linkedin_top_competitors_engagement_rate_M3Q126" value={kpis.linkedin_top_competitors_engagement_rate_M3Q126} onChange={handleChange} />),totalq1: (<KpiInput name="linkedin_top_competitors_engagement_rate_total_Q126" value={kpis.linkedin_top_competitors_engagement_rate_total_Q126} onChange={handleChange} />) 
              }
            ],
          },
        ]}
      />
    </div>
  );
}
