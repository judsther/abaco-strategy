import OrganicKpiSection from "./OrganicKpiSection";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../../firebase.js";
import { useEffect, useState } from "react";


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
  <input
    className="border rounded px-2 py-1 text-sm w-28"
    value={kpis.facebook_reach_Q425 || ""}
    onChange={(e) => handleChange("facebook_reach_Q425", e.target.value)}
    placeholder="-"
  />
),
m1q1: (
  <input
    className="border rounded px-2 py-1 text-sm w-28"
    value={kpis.facebook_reach_M1Q126 || ""}
    onChange={(e) => handleChange("facebook_reach_M1Q126", e.target.value)}
    placeholder="-"
  />
),
              },
              {
                kpi: "Impressions",
                description: "Total de veces que se mostró",
                q4: (
  <input
    className="border rounded px-2 py-1 text-sm w-28"
    value={kpis.facebook_impressions_Q425 || ""}
    onChange={(e) => handleChange("facebook_impressions_Q425", e.target.value)}
    placeholder="-"
  />
),
m1q1: (
  <input
    className="border rounded px-2 py-1 text-sm w-28"
    value={kpis.facebook_impressions_M1Q126 || ""}
    onChange={(e) => handleChange("facebook_impressions_M1Q126", e.target.value)}
    placeholder="-"
  />
),
              },
              {
                kpi: "Profile Visits",
                description: "Visitas al perfil",
                q4: (
  <input
    className="border rounded px-2 py-1 text-sm w-28"
    value={kpis.facebook_profile_visits_Q425 || ""}
    onChange={(e) => handleChange("facebook_profile_visits_Q425", e.target.value)}
    placeholder="-"
  />
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
  <input
    className="border rounded px-2 py-1 text-sm w-28"
    value={kpis.instagram_reach_Q425 || ""}
    onChange={(e) => handleChange("instagram_reach_Q425", e.target.value)}
    placeholder="-"
  />
),
              },
              {
                kpi: "Impressions",
                description: "Total de veces que se mostró",
                q4: (
  <input
    className="border rounded px-2 py-1 text-sm w-28"
    value={kpis.instagram_impressions_Q425 || ""}
    onChange={(e) => handleChange("instagram_impressions_Q425", e.target.value)}
    placeholder="-"
  />
),
              },
              {
                kpi: "Share Rate",
                description: "% de personas que comparten",
                                q4: (
  <input
    className="border rounded px-2 py-1 text-sm w-28"
    value={kpis.instagram_share_rate_Q425 || ""}
    onChange={(e) => handleChange("instagram_share_rate_Q425", e.target.value)}
    placeholder="-"
  />
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
                q4: (
  <input
    className="border rounded px-2 py-1 text-sm w-28"
    value={kpis.linkedin_reach_Q425 || ""}
    onChange={(e) => handleChange("linkedin_reach_Q425", e.target.value)}
    placeholder="-"
  />
),
              },
              {
                kpi: "Profile Visits",
                description: "Visitas al perfil",
                q4: (
  <input
    className="border rounded px-2 py-1 text-sm w-28"
    value={kpis.linkedin_profile_visits_Q425 || ""}
    onChange={(e) => handleChange("linkedin_profile_visits_Q425", e.target.value)}
    placeholder="-"
  />
),
              },
              {
                kpi: "Follower Growth Rate",
                description: "Crecimiento de seguidores",
                q4: (
  <input
    className="border rounded px-2 py-1 text-sm w-28"
    value={kpis.linkedin_follower_rate_Q425 || ""}
    onChange={(e) => handleChange("linkedin_follower_rate_Q425", e.target.value)}
    placeholder="-"
  />
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
  <input
    className="border rounded px-2 py-1 text-sm w-28"
    value={kpis.facebook_engagement_rate_Q425 || ""}
    onChange={(e) => handleChange("facebook_engagement_rate_Q425", e.target.value)}
    placeholder="-"
  />
),
              },
              {
                kpi: "Comments per Post",
                description: "Comentarios promedio por publicación",
                q4: (
  <input
    className="border rounded px-2 py-1 text-sm w-28"
    value={kpis.facebook_comments_per_post_Q425 || ""}
    onChange={(e) => handleChange("facebook_comments_per_post_Q425", e.target.value)}
    placeholder="-"
  />
),
              },
              {
                kpi: "Shares per Post",
                description: "Compartidos promedio por publicación",
                q4: (
  <input
    className="border rounded px-2 py-1 text-sm w-28"
    value={kpis.facebook_shares_per_post_Q425 || ""}
    onChange={(e) => handleChange("facebook_shares_per_post_Q425", e.target.value)}
    placeholder="-"
  />
),
              },
              {
                kpi: "Video Completion Rate",
                description: "% de usuarios que ven el video completo",
                q4: (
  <input
    className="border rounded px-2 py-1 text-sm w-28"
    value={kpis.facebook_video_completion_rate_Q425 || ""}
    onChange={(e) => handleChange("facebook_video_completion_rate_Q425", e.target.value)}
    placeholder="-"
  />
),
 m1q1: (
  <input
    className="border rounded px-2 py-1 text-sm w-28"
    value={kpis.facebook_video_completion_rate_M1Q126 || ""}
    onChange={(e) => handleChange("facebook_video_completion_rate_Q425", e.target.value)}
    placeholder="-"
  />
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
                q4: (
  <input
    className="border rounded px-2 py-1 text-sm w-28"
    value={kpis.instagram_engagement_rate_Q425 || ""}
    onChange={(e) => handleChange("instagram_engagement_rate_Q425", e.target.value)}
    placeholder="-"
  />
),
              },
              {
                kpi: "Comments per Post",
                description: "Comentarios promedio por publicación",
                q4: (
  <input
    className="border rounded px-2 py-1 text-sm w-28"
    value={kpis.instagram_comments_per_post_Q425 || ""}
    onChange={(e) => handleChange("instagram_comments_per_post_Q425", e.target.value)}
    placeholder="-"
  />
),
              },
              {
                kpi: "Saves per Post",
                description: "Guardados promedio por publicación",
                q4: (
  <input
    className="border rounded px-2 py-1 text-sm w-28"
    value={kpis.instagram_saves_per_post_Q425 || ""}
    onChange={(e) => handleChange("instagram_saves_per_post_Q425", e.target.value)}
    placeholder="-"
  />
),
              },
              {
                kpi: "Story Interaction Rate",
                description: "Respuestas + taps + clics",
                q4: (
  <input
    className="border rounded px-2 py-1 text-sm w-28"
    value={kpis.instagram_story_interaction_rate_Q425 || ""}
    onChange={(e) => handleChange("instagram_story_interaction_rate_Q425", e.target.value)}
    placeholder="-"
  />
),
              },
              {
                kpi: "Reel Completion Rate",
                description: "% de usuarios que ven el reel completo",
                q4: (
  <input
    className="border rounded px-2 py-1 text-sm w-28"
    value={kpis.instagram_reel_completion_rate_Q425 || ""}
    onChange={(e) => handleChange("instagram_reel_completion_rate_Q425", e.target.value)}
    placeholder="-"
  />
),
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
                q4: (
  <input
    className="border rounded px-2 py-1 text-sm w-28"
    value={kpis.linkedin_engagement_rate_Q425 || ""}
    onChange={(e) => handleChange("linkedin_engagement_rate_Q425", e.target.value)}
    placeholder="-"
  />
),
              },
              {
                kpi: "Comments per Post",
                description: "Comentarios promedio por publicación",
                q4: (
  <input
    className="border rounded px-2 py-1 text-sm w-28"
    value={kpis.linkedin_comments_per_post_Q425 || ""}
    onChange={(e) => handleChange("linkedin_comments_per_post_Q425", e.target.value)}
    placeholder="-"
  />
),
              },
              {
                kpi: "Reposts per Post",
                description: "Reposts promedio por publicación",
                q4: (
  <input
    className="border rounded px-2 py-1 text-sm w-28"
    value={kpis.linkedin_reposts_per_post_Q425 || ""}
    onChange={(e) => handleChange("linkedin_reposts_per_post_Q425", e.target.value)}
    placeholder="-"
  />
),
              },
              {
                kpi: "Click-Through Rate (CTR)",
                description: "Clicks / Impressions",
                q4: (
  <input
    className="border rounded px-2 py-1 text-sm w-28"
    value={kpis.linkedin_ctr_Q425 || ""}
    onChange={(e) => handleChange("linkedin_ctr_Q425", e.target.value)}
    placeholder="-"
  />
),
              },
            ],
          },
        ]}
      />
    </div>
  );
}
