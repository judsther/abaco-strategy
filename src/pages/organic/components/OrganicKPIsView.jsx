import OrganicKpiSection from "./OrganicKpiSection";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../../firebase.js";
import { useEffect, useState } from "react";
import KpiInput from "../../../components/KpiInput.jsx";



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
                kpi: "Share Rate",
                description: "% de personas que comparten",
                q4: (
  <KpiInput name="instagram_share_rate_Q425" value={kpis.instagram_share_rate_Q425} onChange={handleChange} />
), m1q1: (
  <KpiInput name="instagram_share_rate_M1Q126" value={kpis.instagram_share_rate_M1Q126} onChange={handleChange} />
), m2q1: (
  <KpiInput name="instagram_share_rate_M2Q126" value={kpis.instagram_share_rate_M2Q126} onChange={handleChange} />
), m3q1: (
  <KpiInput name="instagram_share_rate_M3Q126" value={kpis.instagram_share_rate_M3Q126} onChange={handleChange} />
), totalq1: (
  <KpiInput name="instagram_share_rate_total_Q126" value={kpis.instagram_share_rate_total_Q126} onChange={handleChange} />
),
              },
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
                kpi: "Comments per Post",
                description: "Comentarios promedio por publicación",
                q4: (
  <KpiInput name="facebook_comments_per_post_Q425" value={kpis.facebook_comments_per_post_Q425} onChange={handleChange} />
),
                m1q1: (
  <KpiInput name="facebook_comments_per_post_M1Q126" value={kpis.facebook_comments_per_post_M1Q126} onChange={handleChange} />
),
                m2q1: (
  <KpiInput name="facebook_comments_per_post_M2Q126" value={kpis.facebook_comments_per_post_M2Q126} onChange={handleChange} />
),
                m3q1: (
  <KpiInput name="facebook_comments_per_post_M3Q126" value={kpis.facebook_comments_per_post_M3Q126} onChange={handleChange} />
),
                totalq1: (
  <KpiInput name="facebook_comments_per_post_total_Q126" value={kpis.facebook_comments_per_post_total_Q126} onChange={handleChange} />
),
  
              },
              {
                kpi: "Shares per Post",
                description: "Compartidos promedio por publicación",
                q4: (
  <KpiInput name="facebook_shares_per_post_Q425" value={kpis.facebook_shares_per_post_Q425} onChange={handleChange} />
),
                m1q1: (
  <KpiInput name="facebook_shares_per_post_M1Q126" value={kpis.facebook_shares_per_post_M1Q126} onChange={handleChange} />
),
                m2q1: (
  <KpiInput name="facebook_shares_per_post_M2Q126" value={kpis.facebook_shares_per_post_M2Q126} onChange={handleChange} />
),
                m3q1: (
  <KpiInput name="facebook_shares_per_post_M3Q126" value={kpis.facebook_shares_per_post_M3Q126} onChange={handleChange} />
),
                totalq1: (
  <KpiInput name="facebook_shares_per_post_total_Q126" value={kpis.facebook_shares_per_post_total_Q126} onChange={handleChange} />
),
              },
              {
                kpi: "Video Completion Rate",
                description: "% de usuarios que ven el video completo",
                q4: (
  <KpiInput name="facebook_video_completion_rate_Q425" value={kpis.facebook_video_completion_rate_Q425} onChange={handleChange} />
),
                m1q1: (
  <KpiInput name="facebook_video_completion_rate_M1Q126" value={kpis.facebook_video_completion_rate_M1Q126} onChange={handleChange} />
),
                m2q1: (
  <KpiInput name="facebook_video_completion_rate_M2Q126" value={kpis.facebook_video_completion_rate_M2Q126} onChange={handleChange} />
),
                m3q1: (
  <KpiInput name="facebook_video_completion_rate_M3Q126" value={kpis.facebook_video_completion_rate_M3Q126} onChange={handleChange} />
),
                totalq1: (
  <KpiInput name="facebook_video_completion_rate_total_Q126" value={kpis.facebook_video_completion_rate_total_Q126} onChange={handleChange} />
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
                kpi: "Comments per Post",
                description: "Comentarios promedio por publicación",
                q4: (<KpiInput name="instagram_comments_per_post_Q425" value={kpis.instagram_comments_per_post_Q425} onChange={handleChange} />),
                m1q1: (<KpiInput name="instagram_comments_per_post_M1Q126" value={kpis.instagram_comments_per_post_M1Q126} onChange={handleChange} />),m2q1: (<KpiInput name="instagram_comments_per_post_M2Q126" value={kpis.instagram_comments_per_post_M2Q126} onChange={handleChange} />),m3q1: (<KpiInput name="instagram_comments_per_post_M3Q126" value={kpis.instagram_comments_per_post_M3Q126} onChange={handleChange} />),totalq1: (<KpiInput name="instagram_comments_per_post_total_Q126" value={kpis.instagram_comments_per_post_total_Q126} onChange={handleChange} />),
              },
              {
                kpi: "Saves per Post",
                description: "Guardados promedio por publicación",
                q4: (<KpiInput name="instagram_saves_per_post_Q425" value={kpis.instagram_saves_per_post_Q425} onChange={handleChange} />),
                m1q1: (<KpiInput name="instagram_saves_per_post_M1Q126" value={kpis.instagram_saves_per_post_M1Q126} onChange={handleChange} />),m2q1: (<KpiInput name="instagram_saves_per_post_M2Q126" value={kpis.instagram_saves_per_post_M2Q126} onChange={handleChange} />),m3q1: (<KpiInput name="instagram_saves_per_post_M3Q126" value={kpis.instagram_saves_per_post_M3Q126} onChange={handleChange} />),totalq1: (<KpiInput name="instagram_saves_per_post_total_Q126" value={kpis.instagram_saves_per_post_total_Q126} onChange={handleChange} />),
              },
              {
                kpi: "Story Interaction Rate",
                description: "Respuestas + taps + clics",
                q4: (<KpiInput name="instagram_story_interaction_rate_Q425" value={kpis.instagram_story_interaction_rate_Q425} onChange={handleChange} />),
                m1q1: (<KpiInput name="instagram_story_interaction_rate_M1Q126" value={kpis.instagram_story_interaction_rate_M1Q126} onChange={handleChange} />),m2q1: (<KpiInput name="instagram_story_interaction_rate_M2Q126" value={kpis.instagram_story_interaction_rate_M2Q126} onChange={handleChange} />),m3q1: (<KpiInput name="instagram_story_interaction_rate_M3Q126" value={kpis.instagram_story_interaction_rate_M3Q126} onChange={handleChange} />),totalq1: (<KpiInput name="instagram_story_interaction_rate_total_Q126" value={kpis.instagram_story_interaction_rate_total_Q126} onChange={handleChange} />),
              },
              {
                kpi: "Reel Completion Rate",
                description: "% de usuarios que ven el reel completo",
                q4: (<KpiInput name="instagram_reel_completion_rate_Q425" value={kpis.instagram_reel_completion_rate_Q425} onChange={handleChange} />),
                m1q1: (<KpiInput name="instagram_reel_completion_rate_M1Q126" value={kpis.instagram_reel_completion_rate_M1Q126} onChange={handleChange} />),m2q1: (<KpiInput name="instagram_reel_completion_rate_M2Q126" value={kpis.instagram_reel_completion_rate_M2Q126} onChange={handleChange} />),m3q1: (<KpiInput name="instagram_reel_completion_rate_M3Q126" value={kpis.instagram_reel_completion_rate_M3Q126} onChange={handleChange} />),totalq1: (<KpiInput name="instagram_reel_completion_rate_total_Q126" value={kpis.instagram_reel_completion_rate_total_Q126} onChange={handleChange} />),
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
                q4: (<KpiInput name="linkedin_engagement_rate_Q425" value={kpis.linkedin_engagement_rate_Q425} onChange={handleChange} />),m1q1: (<KpiInput name="linkedin_engagement_rate_M1Q126" value={kpis.linkedin_engagement_rate_M1Q126} onChange={handleChange} />),m2q1: (<KpiInput name="linkedin_engagement_rate_M2Q126" value={kpis.linkedin_engagement_rate_M2Q126} onChange={handleChange} />),m3q1: (<KpiInput name="linkedin_engagement_rate_M3Q126" value={kpis.linkedin_engagement_rate_M3Q126} onChange={handleChange} />),totalq1: (<KpiInput name="linkedin_engagement_rate_total_Q126" value={kpis.linkedin_engagement_rate_total_Q126} onChange={handleChange} />),
              },
              {
                kpi: "Comments per Post",
                description: "Comentarios promedio por publicación",
                q4: (<KpiInput name="linkedin_comments_per_post_Q425" value={kpis.linkedin_comments_per_post_Q425} onChange={handleChange} />),m1q1: (<KpiInput name="linkedin_comments_per_post_M1Q126" value={kpis.linkedin_comments_per_post_M1Q126} onChange={handleChange} />),m2q1: (<KpiInput name="linkedin_comments_per_post_M2Q126" value={kpis.linkedin_comments_per_post_M2Q126} onChange={handleChange} />),m3q1: (<KpiInput name="linkedin_comments_per_post_M3Q126" value={kpis.linkedin_comments_per_post_M3Q126} onChange={handleChange} />),totalq1: (<KpiInput name="linkedin_comments_per_post_total_Q126" value={kpis.linkedin_comments_per_post_total_Q126} onChange={handleChange} />),
              },
              {
                kpi: "Reposts per Post",
                description: "Reposts promedio por publicación",
                q4: (<KpiInput name="linkedin_reposts_per_post_Q425" value={kpis.linkedin_reposts_per_post_Q425} onChange={handleChange} />),m1q1: (<KpiInput name="linkedin_reposts_per_post_M1Q126" value={kpis.linkedin_reposts_per_post_M1Q126} onChange={handleChange} />),m2q1: (<KpiInput name="linkedin_reposts_per_post_M2Q126" value={kpis.linkedin_reposts_per_post_M2Q126} onChange={handleChange} />),m3q1: (<KpiInput name="linkedin_reposts_per_post_M3Q126" value={kpis.linkedin_reposts_per_post_M3Q126} onChange={handleChange} />),totalq1: (<KpiInput name="linkedin_reposts_per_post_total_Q126" value={kpis.linkedin_reposts_per_post_total_Q126} onChange={handleChange} />),
              },
              {
                kpi: "Click-Through Rate (CTR)",
                description: "Clicks / Impressions",
                q4: (<KpiInput name="linkedin_ctr_Q425" value={kpis.linkedin_ctr_Q425} onChange={handleChange} />),m1q1: (<KpiInput name="linkedin_ctr_M1Q126" value={kpis.linkedin_ctr_M1Q126} onChange={handleChange} />),m2q1: (<KpiInput name="linkedin_ctr_M2Q126" value={kpis.linkedin_ctr_M2Q126} onChange={handleChange} />),m3q1: (<KpiInput name="linkedin_ctr_M3Q126" value={kpis.linkedin_ctr_M3Q126} onChange={handleChange} />),totalq1: (<KpiInput name="linkedin_ctr_total_Q126" value={kpis.linkedin_ctr_total_Q126} onChange={handleChange} />),
              },
            ],
          },
        ]}
      />
    </div>
  );
}
