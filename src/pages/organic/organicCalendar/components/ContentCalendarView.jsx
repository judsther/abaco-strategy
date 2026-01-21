import { useState } from "react";


import MetaCalendar from "./MetaCalendar";
import LinkedInCalendar from "./LinkedInCalendar";
import YTTTCalendar from "./YTTTCalendar";
import TabButton from "../../components/TabButton";
import OrganicNavigationBtns from "../../components/OrganicNavigationBtns";

export default function ContentCalendarView() {
  const [active, setActive] = useState("meta");

  return (
    <div className="max-w-6xl mx-auto py-14 px-6 space-y-12">
      <OrganicNavigationBtns />

      {/* Header */}
      <header className="space-y-4">
        <h2 className="text-4xl font-bold text-slate-900">
          Calendario de Contenidos — Q1 2026
        </h2>
        <p className="text-slate-600 max-w-4xl">
          El siguiente calendario presenta una programación semanal por mes (4
          semanas), ilustrando la aplicación de los pilares de contenido,
          formatos y adaptaciones por canal. Cada semana garantiza un mínimo de
          3 publicaciones en Meta y LinkedIn y contenido especial en los nuevos
          canales Youtube y TikTok, priorizando la reutilización inteligente de
          contenidos de alta calidad adaptados a la naturaleza de cada
          plataforma.
        </p>

        {/* Selector de canal */}
        <div className="flex flex-wrap gap-4 pt-6">
          <TabButton
            label="Meta"
            value="meta"
            active={active}
            setActive={setActive}
          />
          <TabButton
            label="LinkedIn"
            value="linkedin"
            active={active}
            setActive={setActive}
          />
          <TabButton
            label="YouTube / TikTok"
            value="yttt"
            active={active}
            setActive={setActive}
          />
        </div>
      </header>

      {/* Vista dinámica */}
      <div>
        {active === "meta" && <MetaCalendar />}
        {active === "linkedin" && <LinkedInCalendar />}
        {active === "yttt" && <YTTTCalendar />}
      </div>
    </div>
  );
}

// <CalendarItem
//   day="Jueves"
//   time="6 PM"
//   platform="YouTube"
//   pillar="1. Liquidez Inteligente & Operativa"
//   format="Video Corto Explicativo (1.5 min)"
//   topic="Ábaco en 90 segundos: Tu solución de Liquidez Inteligente"
//   objective="Comunicar la propuesta de valor de Ábaco de forma concisa y directa a nuevos usuarios."
//   adaptation="Video mixto entre animado un presentador humano que explica rápidamente qué es Ábaco, cómo funciona y los beneficios clave. Ideal para introducción al canal y ads."
// />

// <CalendarItem
//   day="Martes"
//   time="12 PM"
//   platform="TikTok"
//   pillar="3. Confianza & Comunidad Ábaco"
//   format="Reel/Short (10-15s)"
//   topic="Detrás de Escenas: Un Día en Ábaco (Oficina/Equipo)"
//   objective="Humanizar la marca, conectar emocionalmente, mostrar el ambiente de trabajo de forma auténtica."
//   adaptation="Video rápido, divertido, usando audio de tendencia. Cortes ágiles mostrando miembros del equipo, el ambiente de oficina."
// />
