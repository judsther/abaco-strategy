import { useState } from "react";

export default function RoleEvolution() {
  const [visibleSteps, setVisibleSteps] = useState(1);

  const steps = [
    {
      title: "Mi Rol Actual",
      content: (
        <>
          Actualmente:
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Propongo estrategias de marketing que integra redes/emails.</li>
            <li>Propongo el contenido (mensaje) de Email marketing para leads semanal.</li>
            <li>Creación de contenido para los canales de redes sociales.</li>
            <li>Coordinación de campañas de co-marketing.</li>
            <li>Reportes de KPIs de Ads y redes sociales orgánico.</li>
          </ul>
        </>
      ),
    },
    {
      title: "Proyectos Estratégicos Asumidos",
      content: (
        <>
          Se me han encomendado proyectos estratégicos:
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Presentar estrategia integral de marketing 2026.</li>
            <li>Planear y organizar un flujo de Email que acompaña el customer journey (registro → desembolso → cobro).</li>
            <li>Coordinar alianza externa para campaña conjunta.</li>
          </ul>
          
        </>
      ),
    },
    {
      title: "Challenges Personales",
      content: (
        <>
          Conflicto entre estrategia y ejecución:
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Si estructuro estrategia, baja la calidad y frecuencia del contenido.</li>
            <li>Si ejecuto contenido, descuido proyectos estratégicos.</li>
            <li>Hay cierto contenido que se puede programar cuando es solo de diseño (carrusels/statics). Pero hay otro que es mas pensado y requiere seguimiento constante en la ejecución (ej. contenido para linkedin, buscar mayor alcance con videos tipo trends para reels, entrevistas/storytelling)</li>
            <li>No hay seguimiento dedicado a la implementación estratégica.</li>
          </ul>
        </>
      ),
    },
    {
      title: "Efectos",
      content: (
        <>
          Parte de la estrategia presentada en enero aún no se ejecuta,
          no por falta de claridad, sino por falta de tiempo operativo estructurado.
          <br />
          Contenido para LinkedIn y nuevos canales (YT/TT) no ha sido implemantado por falta de organización para creación de contenido de calidad.
          <br />
        
        </>
      ),
    },
    {
      title: "Evolución del rol",
      content: (
        <>
          Visualizo una definición más clara:
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>El Head lidera dirección estratégica y priorización.</li>
            <li>Yo me enfoco en ejecución y calidad del contenido requerido por canal o por proyecto.</li>
            <li>Responsabilidad clara por canal y entregables.</li>
            <li>Seguimiento periódico de cumplimiento estratégico.</li>
          </ul>
        </>
      ),
    },
    {
      title: "Resultado Esperado (90 días)",
      content: (
        <>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Mayor consistencia en contenido.</li>
            <li>Ejecución real de la estrategia diseñada.</li>
            <li>Mejor calidad narrativa en cada canal.</li>
            <li>Menos dispersión, más impacto.</li>
          </ul>
        </>
      ),
    },
  ];

  const showNext = () => {
    if (visibleSteps < steps.length) {
      setVisibleSteps(visibleSteps + 1);
    }
  };

  return (
    <section className="bg-white rounded-3xl shadow-sm border border-slate-200 p-10 space-y-10">

      <header>
        <h2 className="text-2xl font-semibold text-slate-900">
          Presentación de Rol · Marketing Coordinator
        </h2>
        <p className="text-slate-600 mt-1">
          Contexto actual · Retos · KPIs · Visión a futuro.
        </p>
      </header>

      <div className="relative pl-8 space-y-8">
        {/* Línea vertical */}
        <div className="absolute left-10 top-0 h-full w-px bg-indigo-200" />

        {steps.slice(0, visibleSteps).map((step, i) => (
          <div key={i} className="relative flex gap-6">

            {/* Nodo */}
            <div className="relative z-10 mt-2">
              <span
                className={`flex h-5 w-5 items-center justify-center rounded-full transition-all duration-300
                  ${
                    i === visibleSteps - 1
                      ? "bg-indigo-600 ring-4 ring-indigo-100 scale-110"
                      : "bg-indigo-400 ring-4 ring-indigo-50"
                  }`}
              />
            </div>

            {/* Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-slate-700 leading-relaxed w-full transition hover:shadow-sm">
              <h3 className="font-semibold text-slate-900 mb-2">
                {step.title}
              </h3>
              {step.content}
            </div>
          </div>
        ))}
      </div>

      {/* Botón avanzar */}
      {visibleSteps < steps.length && (
        <div className="pt-6">
          <button
            onClick={showNext}
            className="px-6 py-3 rounded-2xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
          >
            Siguiente Punto
          </button>
        </div>
      )}
    </section>
  );
}