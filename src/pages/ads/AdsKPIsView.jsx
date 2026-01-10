export default function PaidAdsKPIsView() {
  return (
    <div className="max-w-7xl mx-auto py-16 px-6 space-y-20">
      {/* Header */}
      <div className="text-start space-y-3">
        <h1 className="text-3xl font-semibold text-slate-900">
          🎯 KPIs CLAVE PARA ESTRATEGIA DE PUBLICIDAD PAGADA
        </h1>
        <p className="text-lg text-slate-600">
          Los KPIs se medirán en los 5 niveles del funnel.
        </p>
      </div>

      {/* 1 */}
      <section className="bg-white rounded-3xl shadow-xl p-10 space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">
            🧱 1. KPIs de Entrega & Alcance
          </h2>
          <p className="text-slate-600 mt-1">
            ¿La plataforma está entregando bien los anuncios?
          </p>
        </div>

        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-slate-100 text-left">
              <th className="p-4">KPI</th>
              <th className="p-4">Qué mide</th>
              <th className="p-4">Referencia sana</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            <tr>
              <td className="p-4">Reach</td>
              <td className="p-4">Personas únicas alcanzadas</td>
              <td className="p-4">Crecimiento constante</td>
            </tr>
            <tr>
              <td className="p-4">Impressions</td>
              <td className="p-4">Exposición total</td>
              <td className="p-4">Frecuencia controlada</td>
            </tr>
            <tr>
              <td className="p-4">Frequency</td>
              <td className="p-4">Veces promedio que alguien ve el anuncio</td>
              <td className="p-4">1.5 – 3.5</td>
            </tr>
            <tr>
              <td className="p-4">CPM</td>
              <td className="p-4">Costo por 1,000 impresiones</td>
              <td className="p-4">Debe optimizarse</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* 2 */}
      <section className="bg-white rounded-3xl shadow-xl p-10 space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">
            🧲 2. KPIs de Atención & Interés
          </h2>
          <p className="text-slate-600 mt-1">¿El mensaje engancha?</p>
        </div>

        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-slate-100 text-left">
              <th className="p-4">KPI</th>
              <th className="p-4">Fórmula</th>
              <th className="p-4">Indicador</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            <tr>
              <td className="p-4">CTR</td>
              <td className="p-4">Clicks / Impressions</td>
              <td className="p-4">&gt; 0.8–1.2% (B2B)</td>
            </tr>
            <tr>
              <td className="p-4">Hook Rate (video)</td>
              <td className="p-4">Vistas 3s / Impressions</td>
              <td className="p-4">&gt; 25%</td>
            </tr>
            <tr>
              <td className="p-4">Hold Rate</td>
              <td className="p-4">Retención de video</td>
              <td className="p-4">&gt; 30–40%</td>
            </tr>
            <tr>
              <td className="p-4">Thumbstop Ratio</td>
              <td className="p-4">Pausas al scrollear</td>
              <td className="p-4">Creativo efectivo</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* 3 */}
      <section className="bg-white rounded-3xl shadow-xl p-10 space-y-6">
        <h2 className="text-2xl font-bold text-slate-800">
          🧠 3. KPIs de Consideración
        </h2>

        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-slate-100 text-left">
              <th className="p-4">KPI</th>
              <th className="p-4">Qué indica</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            <tr>
              <td className="p-4">Landing Page View Rate</td>
              <td className="p-4">Calidad del tráfico</td>
            </tr>
            <tr>
              <td className="p-4">Time on Page</td>
              <td className="p-4">Interés real</td>
            </tr>
            <tr>
              <td className="p-4">Scroll Depth</td>
              <td className="p-4">Lectura del mensaje</td>
            </tr>
            <tr>
              <td className="p-4">Engagement Post-Click</td>
              <td className="p-4">Valor del contenido</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* 4 */}
      <section className="bg-white rounded-3xl shadow-xl p-10 space-y-6">
        <h2 className="text-2xl font-bold text-slate-800">
          💰 4. KPIs de Conversión
        </h2>

        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-slate-100 text-left">
              <th className="p-4">KPI</th>
              <th className="p-4">Fórmula</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            <tr>
              <td className="p-4">CPL</td>
              <td className="p-4">Costo / Lead</td>
            </tr>
            <tr>
              <td className="p-4">CPA</td>
              <td className="p-4">Costo / Conversión</td>
            </tr>
            <tr>
              <td className="p-4">Conversion Rate</td>
              <td className="p-4">Conversiones / Clicks</td>
            </tr>
            <tr>
              <td className="p-4">Cost per Qualified Lead</td>
              <td className="p-4">CPL real</td>
            </tr>
            <tr>
              <td className="p-4">ROAS</td>
              <td className="p-4">Revenue / Ad Spend</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* 5 */}
      <section className="bg-white rounded-3xl shadow-xl p-10 space-y-6">
        <h2 className="text-2xl font-bold text-slate-800">
          🧾 5. KPIs de Escalabilidad
        </h2>

        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-slate-100 text-left">
              <th className="p-4">KPI</th>
              <th className="p-4">Qué indica</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            <tr>
              <td className="p-4">LTV / CAC</td>
              <td className="p-4">Salud financiera</td>
            </tr>
            <tr>
              <td className="p-4">Payback Period</td>
              <td className="p-4">Tiempo para recuperar inversión</td>
            </tr>
            <tr>
              <td className="p-4">Incremental Lift</td>
              <td className="p-4">Impacto real del ads</td>
            </tr>
            <tr>
              <td className="p-4">Attribution Share</td>
              <td className="p-4">Rol de cada canal</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}
