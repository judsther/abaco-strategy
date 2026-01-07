
export default function Analysis() {
  return (
    <div className="max-w-6xl mx-auto py-14 px-6 space-y-12">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold text-slate-900 mb-2">
          Hallazgos Clave de Engagement
        </h2>
        <p className="text-slate-600">
          Insights derivados del análisis de rendimiento de contenido.
        </p>
      </div>

      {/* Categorías */}
      <div className="bg-white rounded-3xl shadow-xl p-8 space-y-6">
        <h3 className="text-2xl font-bold text-slate-800">
          Categorías de Alto Rendimiento
        </h3>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-slate-200 rounded-xl overflow-hidden text-sm">
            <thead className="bg-slate-100 text-slate-600">
              <tr>
                <th className="border border-slate-200 px-4 py-3 text-left">
                  Categoría
                </th>
                <th className="border border-slate-200 px-4 py-3 text-left">
                  Descripción
                </th>
                <th className="border border-slate-200 px-4 py-3 text-left">
                  Engagement Rate (Promedio)
                </th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              {[
                [
                  "Propuesta de Valor Directa",
                  "Financiamiento rápido y sin esperas (menos de 24h).",
                  "10.10% (Imagen)",
                ],
                [
                  "Conexión Histórica",
                  "Uso de hechos (ej. Tulipomanía) como gancho para la solución.",
                  "10.00% (Video)",
                ],
                [
                  "Educativo Práctico",
                  "Consejos de liquidez y flujo de caja vinculados a Ábaco.",
                  "8.62% (Carrusel)",
                ],
                [
                  "Humanización / Cultura",
                  "El equipo detrás de la plataforma y cultura organizacional.",
                  "8.33% (Imagen)",
                ],
                [
                  "Casos de Éxito",
                  "Historias reales de PYMES (ej. Mirna, Aceros y Equipos).",
                  "~8.00% (Carrusel)",
                ],
              ].map((row, index) => (
                <tr key={index} className="hover:bg-slate-50 transition">
                  {row.map((cell, i) => (
                    <td key={i} className="border border-slate-200 px-4 py-3">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Patrones */}
      <div className="bg-white rounded-3xl shadow-xl p-8 space-y-4">
        <h3 className="text-2xl font-bold text-slate-800">
          Patrones Detectados
        </h3>

        <ul className="list-disc list-inside text-slate-700 space-y-2 leading-relaxed">
          <li>
            El éxito ocurre cuando se vincula a Ábaco con la aceleración de
            metas.
          </li>
          <li>
            El contenido técnico abstracto (Prueba Ácida, RCC) presenta bajo
            rendimiento: Aunque en otros productos financieros el contenido
            técnico abstracto es tendencia, en el caso de nuestro producto no
            logra transmitir el mensaje completo o se comprende parcialmente
            generando ruido.
          </li>
          <li>
            Las emociones que más resuenan son:{" "}
            <span className="font-semibold">Alivio</span>,{" "}
            <span className="font-semibold">Tranquilidad</span> y{" "}
            <span className="font-semibold">Control</span>.
          </li>
          <li>
            El <span className="font-semibold">Carrusel</span> es el formato
            líder para educación y casos de éxito (fomenta guardados); el{" "}
            <span className="font-semibold">Video</span> funciona mejor para
            narrativas históricas o testimonios cortos.
          </li>
        </ul>
      </div>
    </div>
  );
}


