
export default function Organic() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-16">
      {/* HEADER */}
      <section>
        <h2 className="text-4xl font-bold text-slate-900 mb-3">
          Calendario Estratégico de Contenidos
        </h2>
        <p className="text-slate-600">
          Plan editorial Q1 2026 — Optimizado para Awareness, Consideración y
          Conversión
        </p>
      </section>

      <CalendarSection title="Enero 2026 — Awareness">
        <CalendarDay day="Lunes">
          Instagram 11 AM — Reel: ¿Cuánto pierde tu PYME por cobros lentos?
          Facebook 1 PM — Video contextual LinkedIn 10 AM — Post análisis de
          liquidez
        </CalendarDay>
        <CalendarDay day="Martes">
          YouTube 10 AM — Short: Ábaco en 90 segundos TikTok 12 PM — Behind the
          scenes Instagram 2 PM — Carrusel equipo
        </CalendarDay>
        <CalendarDay day="Miércoles">
          TikTok 6 PM — Desafío PYME YouTube 10 AM — Tutorial flujo de caja
          LinkedIn 9 AM — Carrusel PDF
        </CalendarDay>
        <CalendarDay day="Jueves">
          YouTube 10 AM — FAQ Seguridad LinkedIn 11 AM — Artículo Fintech 2026
        </CalendarDay>
        <CalendarDay day="Viernes">
          Instagram 1 PM — Imagen/Reel oferta TikTok 5 PM — Short crecimiento
          ágil
        </CalendarDay>
      </CalendarSection>

      <CalendarSection title="Febrero 2026 — Consideración">
        <CalendarDay day="Lunes">
          IG/FB 11 AM — Carrusel mitos LinkedIn 9 AM — Encuesta
        </CalendarDay>
        <CalendarDay day="Martes">
          TikTok 12 PM — Story Instagram 11 AM — Caso de éxito Facebook 1 PM —
          Video testimonial
        </CalendarDay>
        <CalendarDay day="Miércoles">
          YouTube 10 AM — Entrevista LinkedIn 11 AM — Artículo comparativo
        </CalendarDay>
        <CalendarDay day="Jueves">
          YouTube 10 AM — Tutorial proyección TikTok 5 PM — Mito vs Realidad
        </CalendarDay>
        <CalendarDay day="Viernes">
          IG/FB 1 PM — Reel señales LinkedIn 10 AM — Blog estratégico YouTube 1
          PM — Video inspirador
        </CalendarDay>
      </CalendarSection>

      <CalendarSection title="Marzo 2026 — Conversión">
        <CalendarDay day="Lunes">
          IG/FB 11 AM — Carrusel cuentas por cobrar LinkedIn 10 AM — Webinar
          flujo de caja
        </CalendarDay>
        <CalendarDay day="Martes">
          YouTube 10 AM — Testimonial animado TikTok 6 PM — Q&A Ábaco
        </CalendarDay>
        <CalendarDay day="Miércoles">
          Instagram 12 PM — Reel equipo LinkedIn 10 AM — Artículo CEO
        </CalendarDay>
        <CalendarDay day="Jueves">
          YouTube 11 AM — Ábaco en 60s TikTok 5 PM — Valores en acción
        </CalendarDay>
        <CalendarDay day="Viernes">
          Facebook 2 PM — Imagen oferta Instagram 1 PM — Reel paso a paso
          LinkedIn 11 AM — Debate B2B YouTube 1 PM — Demo plataforma
        </CalendarDay>
      </CalendarSection>
      <section className="bg-white border rounded-xl shadow p-8 space-y-8">
        <div>
          <h3 className="text-2xl font-bold text-slate-900">
            Producción de Contenido — Enero 2026 (Semana 1)
          </h3>
          <p className="text-slate-600 mt-1">
            Ejecución detallada aplicando narrativa, tono y estructura
            estratégica.
          </p>
        </div>

        <ContentCard
          title="Contenido 1 — El Costo de la Espera"
          meta="Instagram Reel · ID: Ene-1-IG-Reel"
        >
          <p>
            <strong>Tema:</strong> ¿Cuánto pierde tu PYME por cobros lentos?
          </p>

          <ul className="list-disc pl-5 space-y-1 mt-2 text-slate-700">
            <li>
              Visual 1: Dueño frustrado — ¿Tu PYME esperando por sus cobros?
            </li>
            <li>Visual 2: Facturas — Cada día que esperas…</li>
            <li>Visual 3: Oportunidades perdidas</li>
            <li>Visual 4: Frena tu Crecimiento Ágil</li>
            <li>Visual 5: Interfaz Ábaco — ¡No más esperas!</li>
            <li>Visual 6: Dueño sonriente — Liquidez en menos de 24h</li>
          </ul>

          <p className="mt-3 text-slate-700">
            <strong>Caption:</strong> ⚠️ Cada día que tu PYME espera por sus
            cobros está perdiendo oportunidades...
          </p>

          <p className="mt-2 text-slate-700">
            <strong>Hashtags:</strong> #LiquidezInteligente #FinanciamientoPYMES
            #ElSalvador #CrecimientoAgil #CapitalDeTrabajo
          </p>

          <p className="mt-2 text-slate-700">
            <strong>CTA:</strong> Visita nuestro perfil y libera tu liquidez hoy
            mismo.
          </p>
        </ContentCard>

        <ContentCard
          title="Contenido 2 — Impacto Estratégico"
          meta="LinkedIn · ID: Ene-1-LI-Post"
        >
          <p>Comparativa: Tiempo de espera vs Oportunidades de inversión</p>
          <ul className="list-disc pl-5 mt-2 text-slate-700 space-y-1">
            <li>Invertir estratégicamente</li>
            <li>Gestionar imprevistos</li>
            <li>Competir con agilidad</li>
          </ul>
          <p className="mt-2 text-slate-700">
            <strong>CTA:</strong> Visita abacocapital.co
          </p>
        </ContentCard>

        <ContentCard
          title="Contenido 3 — Ábaco en 90 Segundos"
          meta="YouTube · ID: Ene-1-YT-Video"
        >
          <p>Factura → Plataforma Ábaco → Dinero en cuenta</p>
          <p className="mt-2 text-slate-700">
            100% digital · Sin deuda · Sin garantías complicadas
          </p>
        </ContentCard>

        <ContentCard
          title="Contenido 4 — Detrás de Escenas"
          meta="TikTok · ID: Ene-2-TT-Reel"
        >
          <p>POV: Un día en la oficina — equipo, innovación y cultura Ábaco</p>
        </ContentCard>

        <ContentCard
          title="Contenido 5 — Guía de Flujo de Caja"
          meta="LinkedIn Carrusel · ID: Ene-3-LI-Carousel"
        >
          <ul className="list-disc pl-5 text-slate-700 space-y-1">
            <li>Proyección Activa</li>
            <li>Negocia y Optimiza</li>
            <li>Activa tu Capital Oculto</li>
          </ul>
          <p className="mt-2 text-slate-700">
            <strong>CTA:</strong> Comenta “GUÍA”
          </p>
        </ContentCard>

        <ContentCard
          title="Contenido 6 — FAQ & Seguridad"
          meta="YouTube · ID: Ene-4-YT-Video"
        >
          <p>Encriptación · Transparencia · Aprobación en menos de 24h</p>
        </ContentCard>
      </section>

      <section className="bg-white border rounded-xl shadow p-8">
        <h3 className="text-2xl font-bold mb-3">Comunidad & Fidelización</h3>
        <p className="text-slate-700">
          Reconocer y celebrar a la comunidad mediante mensajes de
          agradecimiento y contenido visual con clientes reales y el equipo
          Ábaco.
        </p>
      </section>
    </div>
  );
}

function CalendarSection({ title, children }) {
  return (
    <section className="bg-white border rounded-xl shadow p-8 space-y-6">
      <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{children}</div>
    </section>
  );
}

function CalendarDay({ day, children }) {
  return (
    <div className="border rounded-lg p-5 bg-slate-50">
      <h4 className="font-semibold text-slate-900 mb-2">{day}</h4>
      <p className="text-slate-700 text-sm leading-relaxed whitespace-pre-line">
        {children}
      </p>
      
    </div>
  );
}

function ContentCard({ title, meta, children }) {
  return (
    <div className="border rounded-lg p-6 bg-slate-50 space-y-2">
      <div className="flex justify-between items-center">
        <h4 className="font-semibold text-slate-900">{title}</h4>
        <span className="text-xs text-slate-500">{meta}</span>
      </div>
      <div className="text-sm leading-relaxed">{children}</div>
    </div>
  );
}
