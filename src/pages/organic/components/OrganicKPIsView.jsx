export default function KPIsView() {
  return (
    <div className="space-y-16">
      {/* Título Principal */}
      <div className="text-start">
        <h1 className="text-3xl font-semibold text-slate-900">
          Indicadores Clave de Desempeño (KPIs)
        </h1>
        <p className="mt-3 text-lg text-slate-600">
          Medición de impacto, crecimiento y calidad del contenido
        </p>
      </div>

      {/* Tabla 1 */}
      <div className="bg-white rounded-3xl shadow-xl p-10 space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">
            KPIs de Alcance & Visibilidad
          </h2>
          <p className="text-slate-600 mt-2">
            ¿Nos están viendo las personas correctas?
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-slate-100 text-left">
                <th className="p-4 font-semibold text-slate-700">KPI</th>
                <th className="p-4 font-semibold text-slate-700">Qué mide</th>
                <th className="p-4 font-semibold text-slate-700">
                  Por qué importa
                </th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="p-4 font-medium text-slate-800">Reach</td>
                <td className="p-4 text-slate-600">
                  Usuarios únicos que vieron el contenido
                </td>
                <td className="p-4 text-slate-600">Crecimiento de audiencia</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-slate-800">Impressions</td>
                <td className="p-4 text-slate-600">
                  Total de veces que se mostró el contenido
                </td>
                <td className="p-4 text-slate-600">Frecuencia de exposición</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-slate-800">
                  Profile Visits
                </td>
                <td className="p-4 text-slate-600">Visitas al perfil</td>
                <td className="p-4 text-slate-600">Interés en la marca</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-slate-800">
                  Follower Growth Rate
                </td>
                <td className="p-4 text-slate-600">
                  Nuevos seguidores / total seguidores
                </td>
                <td className="p-4 text-slate-600">Salud de crecimiento</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-slate-800">Share Rate</td>
                <td className="p-4 text-slate-600">
                  % de personas que comparten
                </td>
                <td className="p-4 text-slate-600">
                  Viralidad y valor percibido
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Tabla 2 */}
      <div className="bg-white rounded-3xl shadow-xl p-10 space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">
            KPIs de Engagement
          </h2>
          <p className="text-slate-600 mt-2">¿Les importa el contenido?</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-slate-100 text-left">
                <th className="p-4 font-semibold text-slate-700">KPI</th>
                <th className="p-4 font-semibold text-slate-700">Fórmula</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="p-4 font-medium text-slate-800">
                  Engagement Rate
                </td>
                <td className="p-4 text-slate-600">
                  (Likes + Comments + Saves + Shares) / Reach
                </td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-slate-800">
                  Comments per Post
                </td>
                <td className="p-4 text-slate-600">Comentarios promedio</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-slate-800">
                  Saves per Post
                </td>
                <td className="p-4 text-slate-600">Guardados promedio</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-slate-800">
                  Completion Rate (video)
                </td>
                <td className="p-4 text-slate-600">
                  % que ve el video completo
                </td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-slate-800">Watch Time</td>
                <td className="p-4 text-slate-600">
                  Tiempo promedio de reproducción
                </td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-slate-800">
                  Story Interaction Rate
                </td>
                <td className="p-4 text-slate-600">
                  Respuestas + taps + clics
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 bg-slate-50 rounded-xl p-5 text-slate-700 text-sm italic">
          💡 Los saves y shares pesan más que los likes en casi todas las
          plataformas.
        </div>
      </div>
    </div>
  );
}
