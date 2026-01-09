import PrimaryButton from "../components/PrimaryButton";


export default function Intro() {
  return (
    <div className="max-w-7xl mx-auto py-14 px-6">
      <div className="grid lg:grid-cols-2 gap-12">
        {/* =================== COLUMNA IZQUIERDA =================== */}
        <div>
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-semibold text-slate-900 leading-tight">
              Informe y Estrategia Integral de Medios Digitales
            </h1>
            <p className="mt-3 text-lg text-slate-600">
              Q1 2026 — Maximizando Engagement, Conversión y Posicionamiento
              para Fintech B2B
            </p>
          </div>

          {/* Card Principal */}
          <div className=" space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">
                Resumen Ejecutivo
              </h2>
              <p className="text-slate-700 leading-relaxed">
                Esta estrategia busca transformar las métricas históricas en
                decisiones y acciones informadas basadas en datos reales. El
                plan redefine los pilares de contenido y la distribución por
                canales.
              </p>
            </section>

            {/* Puntos Clave */}
            <section>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                Puntos Clave
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-50 rounded-2xl p-6">
                  <h4 className="font-semibold text-slate-900 mb-2">
                    Propuesta de Valor
                  </h4>
                  <p className="text-slate-700">
                    Combinación de soluciones directas con historias de éxito y
                    consejos prácticos.
                  </p>
                </div>

                <div className="bg-slate-50 rounded-2xl p-6">
                  <h4 className="font-semibold text-slate-900 mb-2">
                    Narrativa
                  </h4>
                  <p className="text-slate-700">
                    Empoderamiento de las PYMES{" "}
                    <span className="italic">
                      ("Tu crecimiento no tiene que esperar")
                    </span>
                    .
                  </p>
                </div>

                <div className="bg-slate-50 rounded-2xl p-6">
                  <h4 className="font-semibold text-slate-900 mb-2">
                    Guía de Estilo
                  </h4>
                  <p className="text-slate-700">
                    Tono unificado centrado en la persuasión, agilidad y
                    claridad.
                  </p>
                </div>

                <div className="bg-slate-50 rounded-2xl p-6">
                  <h4 className="font-semibold text-slate-900 mb-2">Canales</h4>
                  <p className="text-slate-700">
                    Estrategias diferenciadas para Meta, LinkedIn + nuevos
                    canales como YouTube y TikTok.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* =================== COLUMNA DERECHA =================== */}
        <div className="flex items-center">
          <div className="w-full bg-linear-to-r from-indigo-600 to-indigo-300 rounded-3xl shadow-xl p-[1.5px]">
            <section className="bg-linear-30 from-slate-600 to-slate-800 p-8 rounded-3xl">
              <h1 className=" text-center text-4xl font-semibold text-slate-50 leading-tight mb-12">
                Rutas
              </h1>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-50 rounded-2xl p-6 flex flex-col justify-between">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">
                      Orgánico
                    </h4>
                    <p className="text-slate-700">
                      Resultado del análisis de contenido orgánico Sep - Dic
                      2025, nueva ruta de ejecución y calendario de contenido
                      Q1.
                    </p>
                  </div>
                  <div className="mt-6">
                    <PrimaryButton to={"/organic-analisis"} texto={"Ver"} />
                  </div>
                </div>

                <div className="bg-slate-50 rounded-2xl p-6 flex flex-col justify-between">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">
                      Publicidad
                    </h4>
                    <p className="text-slate-700">
                      Resultado de los KPI de la inversión Sep - Dic 2025 (Meta)
                      y nueva ruta de ejecución para el Q1.
                    </p>
                  </div>
                  <div className="mt-6">
                    <PrimaryButton to={"/ads-report"} texto={"Ver"} />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
