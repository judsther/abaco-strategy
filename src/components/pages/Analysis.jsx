
export default function Analysis() {
  return (
    <div className="p-8">
      <h2 className="text-4xl">Hallazgos Clave de Engagement</h2>
      <br />
      <h4 className="text-2xl">Categorías de Alto Rendimiento</h4>
      <br />
      <div className="flex justify-start">
        <table className=" min-w-full border border-gray-300 rounded-lg overflow-hidden">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="border px-4 py-2 text-left">Categoría</th>
              <th className="border px-4 py-2 text-left">Descripción</th>
              <th className="border px-4 py-2 text-left">
                Engagement Rate (Promedio)
              </th>
            </tr>
          </thead>
          <tbody className="text-start">
            <tr>
              <td className="border px-4 py-2">Propuesta de Valor Directa</td>
              <td className="border px-4 py-2">
                Financiamiento rápido y sin esperas (menos de 24h).
              </td>
              <td className="border px-4 py-2">10.10% (Imagen)</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Conexión Histórica</td>
              <td className="border px-4 py-2">
                Uso de hechos (ej. Tulipomanía) como gancho para la solución.
              </td>
              <td className="border px-4 py-2">10.00% (Video)</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Educativo Práctico</td>
              <td className="border px-4 py-2">
                Consejos de liquidez y flujo de caja vinculados a Ábaco.
              </td>
              <td className="border px-4 py-2">8.62% (Carrusel)</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Humanización / Cultura</td>
              <td className="border px-4 py-2">
                El equipo detrás de la plataforma y cultura organizacional.
              </td>
              <td className="border px-4 py-2">8.33% (Imagen)</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Casos de Éxito</td>
              <td className="border px-4 py-2">
                Historias reales de PYMES (ej. Mirna, Aceros y Equipos).
              </td>
              <td className="border px-4 py-2">~8.00% (Carrusel)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <br />
      <br />
      <div>
        <p className="text-start">
          Patrones Detectados Temáticos: 
          <br />
          El éxito ocurre cuando se vincula a
          Ábaco con la aceleración de metas. 
          <br />El contenido técnico abstracto
          (Prueba Ácida, RCC) tiene bajo rendimiento. 
          <br />Emocionales: Resuenan
          sentimientos de Alivio, Tranquilidad y Control. 
          <br />Formatos: El Carrusel
          es el rey para educación y casos de éxito (fomenta "guardados"); el
          Video funciona para narrativas históricas o testimonios cortos.
        </p>
      </div>
    </div>
  );
}
