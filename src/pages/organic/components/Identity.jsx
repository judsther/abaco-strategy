

export default function Identity() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-6 space-y-12">
      <div>
        <h2 className="text-3xl font-semibold text-slate-900 mb-2">
          Guía de Identidad y Estilo
        </h2>
        <p className="text-slate-600">
          Definición de tono, narrativa y marco persuasivo de la comunicación de
          Ábaco.
        </p>
      </div>

      {/* Tono de Marca */}
      <div className="bg-white rounded-3xl shadow-xl p-8 space-y-4">
        <h3 className="text-2xl font-bold text-slate-800">Tono de Marca</h3>
        <p className="text-slate-700 text-lg">
          Empoderador, <span className="font-semibold">Ágil</span>,{" "}
          <span className="font-semibold">Confiable</span> y{" "}
          <span className="font-semibold">Centrado en la Solución</span>.
        </p>
      </div>

      {/* Narrativa Estratégica */}
      <div className="bg-white rounded-3xl shadow-xl p-8 space-y-6">
        <h3 className="text-2xl font-bold text-slate-800">
          Narrativa Estratégica{" "}
          <span className="text-slate-500">(Transformación del Dolor)</span>
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-50 rounded-2xl p-6">
            <h4 className="font-semibold text-slate-900 mb-2">
              De Parálisis a Fluidez
            </h4>
            <p className="text-slate-700 italic">
              “No dejes que tu operación se detenga. Tu capital siempre fluye.”
            </p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-6">
            <h4 className="font-semibold text-slate-900 mb-2">
              De Frustración a Velocidad
            </h4>
            <p className="text-slate-700 italic">
              “Cada día sin tu dinero es un día menos para crecer.”
            </p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-6">
            <h4 className="font-semibold text-slate-900 mb-2">
              De Incertidumbre a Seguridad
            </h4>
            <p className="text-slate-700 italic">
              “Financia tu crecimiento sin arriesgar tu futuro ni endeudarte.”
            </p>
          </div>
        </div>
      </div>

      {/* Glosario */}
      <div className="bg-white rounded-3xl shadow-xl p-8 space-y-6">
        <h3 className="text-2xl font-bold text-slate-800">
          Glosario y Redacción Persuasiva
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-50 rounded-2xl p-6">
            <h4 className="font-semibold text-slate-900 mb-3">Liquidez</h4>
            <ul className="text-slate-700 space-y-1">
              <li>• Fluidez financiera</li>
              <li>• Capital disponible</li>
              <li>• Respaldo</li>
            </ul>
          </div>

          <div className="bg-slate-50 rounded-2xl p-6">
            <h4 className="font-semibold text-slate-900 mb-3">Control</h4>
            <ul className="text-slate-700 space-y-1">
              <li>• Gestión eficiente</li>
              <li>• Dominio de finanzas</li>
              <li>• Paz financiera</li>
            </ul>
          </div>

          <div className="bg-slate-50 rounded-2xl p-6">
            <h4 className="font-semibold text-slate-900 mb-3">Velocidad</h4>
            <ul className="text-slate-700 space-y-1">
              <li>• Agilidad operativa</li>
              <li>• Rapidez en desembolsos</li>
              <li>• Dinamismo</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Estrategia por Canales */}
      <div className="bg-indigo-800 rounded-3xl shadow-xl p-8 space-y-6">
        <h3 className="text-2xl font-bold text-white">
          Estrategia por Canales
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-50 rounded-2xl p-6 space-y-2">
            <h4 className="font-semibold text-slate-900">Instagram</h4>
            <p className="text-sm text-slate-500">Awareness / Consideración</p>
            <p className="text-slate-700">
              Reels rápidos, historias visuales de éxito y tips de ahorro de
              tiempo.
              <span className="block mt-1 italic text-slate-600">
                Tono emocional y visual.
              </span>
            </p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-6 space-y-2">
            <h4 className="font-semibold text-slate-900">Facebook</h4>
            <p className="text-sm text-slate-500">Comunidad / Leads</p>
            <p className="text-slate-700">
              Webinars, Lives de Q&amp;A y testimonios extendidos.
              <span className="block mt-1 italic text-slate-600">
                Tono didáctico y comunitario.
              </span>
            </p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-6 space-y-2">
            <h4 className="font-semibold text-slate-900">LinkedIn</h4>
            <p className="text-sm text-slate-500">Autoridad / B2B</p>
            <p className="text-slate-700">
              Artículos de opinión sobre el sector Fintech, análisis de mercado
              y networking estratégico.
              <span className="block mt-1 italic text-slate-600">
                Tono profesional y analítico.
              </span>
            </p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-6 space-y-2">
            <h4 className="font-semibold text-slate-900">YouTube</h4>
            <p className="text-sm text-slate-500">Educación / Autoridad</p>
            <p className="text-slate-700 italic">
              (Definir formatos de largo alcance: entrevistas, casos profundos,
              cápsulas educativas, guías de usuario, posicionamiento SEO.)
            </p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-6 space-y-2 md:col-span-2">
            <h4 className="font-semibold text-slate-900">TikTok</h4>
            <p className="text-sm text-slate-500">
              Descubrimiento / Top of Funnel
            </p>
            <p className="text-slate-700 italic">
              (Definir estrategia de micro-contenido: hooks financieros,
              storytelling rápido y contenido de alto impacto visual.)
            </p>
          </div>
        </div>
      </div>

      {/* Nuevos Pilares de Contenido */}
      <div className="bg-white rounded-3xl shadow-xl p-8 space-y-6">
        <h3 className="text-2xl font-bold text-slate-800">
          Nuevos Pilares de Contenido
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-50 rounded-2xl p-6">
            <h4 className="font-semibold text-slate-900 mb-2">
              Liquidez Inteligente &amp; Operativa
            </h4>
            <p className="text-slate-700">
              Foco en agilidad y eliminación de esperas.
            </p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-6">
            <h4 className="font-semibold text-slate-900 mb-2">
              Crecimiento Ágil &amp; Estratégico
            </h4>
            <p className="text-slate-700">
              Cómo usar el capital para invertir y escalar.
            </p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-6">
            <h4 className="font-semibold text-slate-900 mb-2">
              Confianza &amp; Comunidad Ábaco
            </h4>
            <p className="text-slate-700">
              Transparencia, equipo y valores humanos.
            </p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-6">
            <h4 className="font-semibold text-slate-900 mb-2">
              Liderazgo Fintech &amp; Innovación
            </h4>
            <p className="text-slate-700">
              Tendencias digitales y visión de futuro en Centroamérica.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
