export default function PaidAdsKPIsView() {
  return (
    <div className="max-w-7xl mx-auto py-16 px-6 space-y-20">
      {/* Header */}
      <div className="text-start space-y-3">
        <h1 className="text-3xl font-semibold text-slate-900">
          KPIs CLAVE PARA ESTRATEGIA DE PUBLICIDAD PAGADA
        </h1>
        <p className="text-lg text-slate-600"></p>
      </div>

      {/* 1 */}
      <Section
        title="KPIs de Entrega & Alcance"
        subtitle="¿La plataforma está entregando bien los anuncios?"
        items={[
          [
            "Reach",
            "Personas únicas alcanzadas",
            "27,854",
            "Crecimiento constante",
          ],
          ["Impressions", "Exposición total", "174,577"],
          [
            "Frequency",
            "Veces promedio que alguien ve el anuncio",
            "6.27 (2 - 4 saludable)",
            "1.5 – 3.5",
          ],
          ["CPM", "Costo por 1,000 impresiones", "$3.97"],
        ]}
      />

      {/* 2 */}
      <Section
        title="2. KPIs de Atención & Interés"
        subtitle="¿El mensaje engancha?"
        items={[
          ["CTR", "Clicks / Impressions", "2.41%  (1.2 – 2.0% (B2B)"],
          [
            "Hook Rate (video)",
            "Visualizaciones 3s / Impressions",
            "96% (> 25%)",
          ],
          //["Hold Rate", "Retención de video", "> 30–40%"],
        ]}
      />

      {/* 3 */}
      <Section
        title="3. KPIs de Consideración"
        items={[
          ["Landing Page View Rate", "Calidad del tráfico"],
          ["Time on Page", "Interés real"],
          ["Scroll Depth", "Lectura del mensaje"],
          ["Engagement Post-Click", "Valor del contenido"],
        ]}
      />

      {/* 4 */}
      <Section
        title="4. KPIs de Conversión"
        items={[
          ["CPL", "Costo / Lead", "(Llenarlo Isaac)"],
          ["CPA", "Costo / Conversión", "(Llenarlo Isaac)"],
          ["Conversion Rate Click -> Lead", "Conversiones / Clicks", "5.4"],
          [
            "Conversion Rate Lead -> Cliente",
            "Leads / Conversiones",
            "2.9 (6% - 12%)",
          ],

          ["Cost per Qualified Lead", "CPL real", "(Llenar Isaac)"],
          ["ROAS", "Revenue / Ad Spend", "(Llenar Isaac)"],
        ]}
      />

      {/* 5 */}
      <Section
        title="5. KPIs de Escalabilidad"
        items={[
          ["LTV / CAC", "Salud financiera"],
          ["Payback Period", "Tiempo para recuperar inversión"],
          ["Incremental Lift", "Impacto real del ads"],
          ["Attribution Share", "Rol de cada canal"],
        ]}
      />
    </div>
  );
}

function Section({ title, subtitle, items }) {
  return (
    <section className="bg-white rounded-3xl shadow-xl p-10 space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-800">{title}</h2>
        {subtitle && <p className="text-slate-600 mt-1">{subtitle}</p>}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-slate-50 rounded-2xl p-6 space-y-2 shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-lg font-semibold text-slate-900">{item[0]}</h3>
            <p className="text-slate-700">{item[1]}</p>
            {item[2] && (
              <p className="text-sm text-blue-600 font-medium">{item[2]}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
