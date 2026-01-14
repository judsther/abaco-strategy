import CalendarItem, { WeekBlock } from "./CalendarItems";

export default function TiktokCalendar() {
  return (
    <div>
      {/* ================== ENERO ================== */}
      <WeekBlock title="TikTok / YouTube Shorts - Mes 1 Q1">
        <p className="text-slate-700">
          Contenido educativo que informa sobre el factoraje y los beneficios de
          su correcto uso{" "}
        </p>
        <p className="whitespace-pre-wrap text-slate-400 font-semibold -mt-16">
          {`Liquidez Inteligente & Operativa 
Foco en agilidad y eliminación de esperas.
          
Crecimiento Ágil & Estratégico 
Cómo usar el capital para invertir y escalar. Confianza & Comunidad Ábaco Transparencia, equipo y valores humanos. 

Liderazgo Fintech & Innovación 
Tendencias digitales y visión de futuro en Centroamérica.`}
        </p>
        <CalendarItem
          day="Miércoles"
          time="6 PM"
          platform="TikTok / YouTube Shorts"
          pillar="Crecimiento Ágil & Estratégico "
          format="Video vertical (30s - 1min)"
          contenido1={`
            `}
          caption1={`
            `}
          contenido2={`
            `}
          caption2={`
            `}
          contenido3={`
            `}
          caption3={`
            `}
          contenido4={`
            `}
          caption4={`
            `}
        />
      </WeekBlock>
      <p className="space-x-4">
        Referencias:{" "}
        <a
          className="text-indigo-300 hover:text-indigo-400"
          href="https://www.tiktok.com/@osotrava/video/7065895141432675590?lang=en&q=factoraje&t=1768420063534"
        >
          @osotrava
        </a>
        <a
          className="text-indigo-300 hover:text-indigo-400"
          href="https://www.tiktok.com/@emprelectorespodcast/video/7523317526785166599?lang=en&q=factoraje&t=1768420063534"
        >
          @emprelectorespodcast
        </a>
        <a
          className="text-indigo-300 hover:text-indigo-400"
          href="https://www.tiktok.com/@fisherman.wm/video/7397571807949131014?lang=en"
        >
          @fisherman.wm
        </a>
      </p>
    </div>
  );
}
