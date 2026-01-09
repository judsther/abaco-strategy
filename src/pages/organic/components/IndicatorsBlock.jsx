export default function IndicatorsBlock() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-16">
      <header className="space-y-4">
        <h2 className="text-4xl font-bold text-slate-900">
          Bloques Táctica — Indicadores
        </h2>
        <p className="text-slate-600 max-w-3xl">
          Definición estructurada de bloques tácticos, indicadores de
          rendimiento y objetivos estratégicos para la ejecución integral de la
          estrategia de marketing de Ábaco.
        </p>
      </header>

      <section className="space-y-10">
        {/* BLOQUE 1 */}
        <div className="bg-white border rounded-xl shadow p-8 space-y-4">
          <h3 className="text-2xl font-bold text-slate-900">
            1. Todos los Canales
          </h3>

          <div>
            <h4 className="font-semibold text-slate-800">Indicadores</h4>
            <p className="text-slate-700 mt-1">
              Engagement Rate, Alcance, Impresiones, Nuevos Seguidores,
              Guardados, Compartidos, Reproducciones de Video, Clics en
              Biografía/Link en Post.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-slate-800">
              Objetivo Estratégico
            </h4>
            <p className="text-slate-700 mt-1">
              Brand Awareness, Top-of-Funnel (TOFU) Engagement, Construcción de
              Comunidad y Autoridad.
            </p>
          </div>
        </div>

        {/* BLOQUE 2
        <div className="bg-white border rounded-xl shadow p-8 space-y-4">
          <h3 className="text-2xl font-bold text-slate-900">
            2. Contenido Pagado (Meta Ads, LinkedIn Ads, TikTok Ads)
          </h3>

          <div>
            <h4 className="font-semibold text-slate-800">Indicadores</h4>
            <p className="text-slate-700 mt-1">
              Costo por Clic (CPC), Tasa de Clics (CTR), Costo por Lead (CPL),
              Número de Leads Generados, Costo por Adquisición (CPA - si se
              conecta a conversión final).
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-slate-800">
              Objetivo Estratégico
            </h4>
            <p className="text-slate-700 mt-1">
              Generación de Leads Calificados (MOFU/BOFU), Aceleración de
              Conversión, Alcance Dirigido.
            </p>
          </div>
        </div> */}

        {/* BLOQUE 3 */}
        <div className="bg-white border rounded-xl shadow p-8 space-y-4">
          <h3 className="text-2xl font-bold text-slate-900">
            2. Contenido Educativo / Largo Formato (YouTube, Blog)
          </h3>

          <div>
            <h4 className="font-semibold text-slate-800">Indicadores</h4>
            <p className="text-slate-700 mt-1">
              Tiempo de Visualización Promedio, Vistas Completadas, Suscriptores
              del Canal, Tráfico Web desde YouTube, Comentarios con preguntas de
              valor, Generación de Leads (con CTAs claros).
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-slate-800">
              Objetivo Estratégico
            </h4>
            <p className="text-slate-700 mt-1">
              Construcción de Autoridad y Liderazgo de Pensamiento (MOFU),
              Nutrición de Leads, SEO.
            </p>
          </div>
        </div>

        {/* BLOQUE 4 */}
        <div className="bg-white border rounded-xl shadow p-8 space-y-4">
          <h3 className="text-2xl font-bold text-slate-900">
            3. Casos de Éxito / Testimonios (Multi-canal)
          </h3>

          <div>
            <h4 className="font-semibold text-slate-800">Indicadores</h4>
            <p className="text-slate-700 mt-1">
              Engagement Rate, Guardados, Visitas a Página de Caso de Éxito,
              Consultas generadas por referencia, Tasa de Clics en CTA.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-slate-800">
              Objetivo Estratégico
            </h4>
            <p className="text-slate-700 mt-1">
              Prueba Social (MOFU/BOFU), Generación de Confianza, Aceleración de
              Decisión.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
