

export default function AdsNurturing() {
  return (
    <div>
      <section className="bg-white rounded-3xl shadow-xl p-10 space-y-8">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-slate-900">
            Plan de Email Marketing
          </h2>
          <p className="text-slate-600">
            Secuencia automatizada de nutrición y conversión
          </p>
        </div>

        <div className="space-y-6">
          {/* Día 0 */}
          <div className="border-l-4 border-indigo-800 bg-slate-50 rounded-xl p-6 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-slate-900">
                Día 0 (Inmediato)
              </h3>
              <span className="text-sm font-medium text-indigo-800 bg-indigo-100 px-3 py-1 rounded-full">
                Onboarding
              </span>
            </div>
            <p className="text-slate-700">Bienvenida + Qué esperar de Ábaco.</p>
          </div>

          {/* Día 2 */}
          <div className="border-l-4 border-indigo-800 bg-slate-50 rounded-xl p-6 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-slate-900">Día 2</h3>
              <span className="text-sm font-medium text-indigo-800 bg-indigo-100 px-3 py-1 rounded-full">
                Educativo
              </span>
            </div>
            <p className="text-slate-700">
              Caso de éxito o "Para qué usan el dinero otras PYMES" (Educativo).
            </p>
          </div>

          {/* Día 4 */}
          <div className="border-l-4 border-indigo-800 bg-slate-50 rounded-xl p-6 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-slate-900">Día 4</h3>
              <span className="text-sm font-medium text-indigo-800 bg-indigo-100 px-3 py-1 rounded-full">
                Objeciones
              </span>
            </div>
            <p className="text-slate-700">
              Ábaco vs factoraje tradicional (Derribando objeciones).
            </p>
          </div>

          {/* Día 7 */}
          <div className="border-l-4 border-indigo-800 bg-slate-50 rounded-xl p-6 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-slate-900">Día 7</h3>
              <span className="text-sm font-medium text-indigo-800 bg-indigo-100 px-3 py-1 rounded-full">
                Conversión
              </span>
            </div>
            <p className="text-slate-700">
              (Tu correo): Recordatorio de beneficios y llamado a la acción
              directo.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
