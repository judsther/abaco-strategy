import TiktokCalendar from "./TiktokCalendar";



export default function YTTTCalendar() {
  return (
    <div className="space-y-14">

      {/* Header */}
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold text-slate-900">
        YouTube & TikTok - Mes 1 Q1
        </h1>
        <p className="text-slate-600 max-w-3xl">
          Plan de activación de video para el primer mes, enfocado en educación,
          conversión y fortalecimiento de marca.
        </p>
      </header>

      {/* YouTube */}
      <section className="bg-white rounded-3xl shadow-xl p-10 space-y-6">
        <h2 className="text-2xl font-bold text-slate-800">
          YouTube — Mes 1
        </h2>

        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>
            1 video principal de formato largo en estilo
            tutorial, presentado por un CEO o por Miguel, donde se explique de
            forma clara y paso a paso el proceso de registro y solicitud de
            financiamiento dentro de la plataforma.
          </p>

          <p>
            El video tendrá un look institucional y profesional, intercalando
            tomas entre el presentador y la pantalla del sistema, mostrando cómo
            completar cada campo y cómo navegar cada etapa del formulario.
          </p>

          <p>
            Este video funcionará como pieza central de onboarding para leads.
            Cada vez que un usuario complete el formulario proveniente de Ads,
            HubSpot disparará un email de bienvenida que incluirá:
          </p>

          <ul className="list-disc list-inside pl-4 space-y-1">
            <li>Enlace directo al video tutorial.</li>
            <li>Motivación para que el lead complete por sí mismo la solicitud de financiamiento.</li>
            <li>Opción alternativa: <span className="font-semibold">“Contacta a un asesor”</span> con enlace directo a WhatsApp.</li>
          </ul>
        </div>
      </section>

      {/* TikTok */}
  <TiktokCalendar/>

    </div>
  );
}

