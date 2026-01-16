import PrimaryButton from "../components/PrimaryButton";

export default function Intro() {
  return (
    <div className="min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* =================== COLUMNA IZQUIERDA =================== */}
          <div>
            {/* Header */}
            <div className="mb-12">
              <h1 className="text-4xl font-semibold text-slate-900 leading-tight">
                Centro Estratégico de Marketing Digital 2026
              </h1>
              <p className="mt-3 text-lg text-slate-600">
                Análisis, estrategia y contenido.
              </p>
            </div>

            {/* Card Principal */}
            <div className="space-y-10">
              <section>
                <h2 className="text-2xl font-bold text-slate-800 mb-4">
                  Introducción
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  El Centro Estratégico de Marketing Digital unifica análisis
                  histórico, estrategia multicanal y gestión de contenido en una
                  herramienta práctica orientada a resultados.
                </p>
              </section>

              {/* Flujo Estratégico */}
              <section>
                <h3 className="text-xl font-semibold text-slate-800 mb-6">
                  Flujo de cada Ruta.
                </h3>

                <ul className="space-y-4 border-l-2 border-indigo-200 pl-6">
                  <li>
                    <h4 className="font-semibold text-slate-900">
                      1. Análisis
                    </h4>
                    <p className="text-slate-700">
                      Evaluación del desempeño histórico de contenido y
                      publicidad para detectar oportunidades reales.
                    </p>
                  </li>

                  <li>
                    <h4 className="font-semibold text-slate-900">
                      2. Nueva Estrategia (OKR)
                    </h4>
                    <p className="text-slate-700">
                      Definición de objetivos claros y medibles alineados al
                      crecimiento del negocio.
                    </p>
                  </li>

                  <li>
                    <h4 className="font-semibold text-slate-900">
                      3. Plan de Acción
                    </h4>
                    <p className="text-slate-700">
                      Tácticas y tareas concretas que guían la ejecución diaria
                      para alcanzar los objetivos.
                    </p>
                  </li>

                  <li>
                    <h4 className="font-semibold text-slate-900">
                      4. KPIs de Seguimiento
                    </h4>
                    <p className="text-slate-700">
                      Indicadores clave que permiten medir avances y optimizar
                      decisiones en tiempo real.
                    </p>
                  </li>
                </ul>
              </section>
            </div>
          </div>

          {/* =================== COLUMNA DERECHA =================== */}
          <div className="flex items-center">
            <div className="w-full bg-linear-to-r from-indigo-600 to-indigo-300 rounded-3xl shadow-xl p-[1.5px]">
              <section className="bg-linear-30 from-slate-600 to-slate-800 p-8 rounded-3xl">
                <h1 className="text-center text-4xl font-semibold text-slate-50 mb-12">
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
                        2025, nueva ruta de ejecución y calendario Q1.
                      </p>
                    </div>
                    <div className="mt-6">
                      <PrimaryButton to="/organic-analisis" texto="Ver" />
                    </div>
                  </div>

                  <div className="bg-slate-50 rounded-2xl p-6 flex flex-col justify-between">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">
                        Publicidad
                      </h4>
                      <p className="text-slate-700">
                        Análisis de KPI de inversión Meta Sep - Dic 2025 y nueva
                        ruta de ejecución Q1.
                      </p>
                    </div>
                    <div className="mt-6">
                      <PrimaryButton to="/ads-report" texto="Ver" />
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
