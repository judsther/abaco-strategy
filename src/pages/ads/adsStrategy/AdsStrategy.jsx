
import AdsNavigationBtns from "../components/AdsNavigationBtns";
import AcquisitionStrategyQ1 from "./components/AcquisitionStrategyQ1";

export default function AdsStrategy() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 space-y-12">
      {/* Navigation */}
      <AdsNavigationBtns />

      <div className="px-6 w-full">
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-10 space-y-10">
          {/* Header */}
          <header>
            <h1 className="text-4xl font-semibold text-slate-900">
              Objetivo Estratégico
            </h1>
          </header>

          {/* Objetivo */}
          <section className="bg-slate-50 rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-slate-900 mb-3">
              Objetivo
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Optimizar el ecosistema de captación digital de leads de Ábaco
              para establecer una base de medición confiable que garantice el
              escalamiento de nuevos clientes.
            </p>
          </section>

          {/* Key Results */}
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">
              Key Results (KRs)
            </h2>

            <div className="space-y-6">
              {/* KR1 */}
              <div className="border border-slate-200 rounded-2xl p-6">
                <h3 className="font-semibold text-slate-900 mb-2">
                  KR1 (Infraestructura):
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Lograr el 100% de la optimización de filtros y sincronización
                  en la integración Meta-Atom-HubSpot para asegurar trazabilidad
                  total.
                </p>
              </div>

              {/* KR2 */}
              <div className="border border-slate-200 rounded-2xl p-6">
                <h3 className="font-semibold text-slate-900 mb-2">
                  KR2 (Experimentación):
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Validar la eficiencia de 6 embudos experimentales (Públicos
                  Advantage, LAL e Intereses vs. Landing Page y WhatsApp) para
                  identificar el camino con mejor costo de adquisición (CAC).
                </p>
              </div>

              {/* KR3 */}
              <div className="border border-slate-200 rounded-2xl p-6">
                <h3 className="font-semibold text-slate-900 mb-2">
                  KR3 (Baseline):
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Definir el conversion rate real de las etapas: Lead → Lead
                  Calificado → Cliente, basado en los resultados de la
                  experimentación del Q1.
                </p>
              </div>

              {/* KR4 */}
              <div className="border border-slate-200 rounded-2xl p-6">
                <h3 className="font-semibold text-slate-900 mb-2">
                  KR3 (Resultado)
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Lograr un acumulado de 18 desembolsos al cierre del Q1,
                  apuntándole a una tasa de conversión mínima del 1% sobre el
                  tráfico generado en febrero y marzo. (meta proporcional al 40%
                  de la cuota anual).
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <AcquisitionStrategyQ1/>
    </section>

  
  );
}


// O1: Fortalecer la infraestructura tecnológica de captación para asegurar la integridad y calidad de los datos de entrada.

// O2: Descifrar el potencial real de conversión del producto Ábaco para establecer una línea base de crecimiento basada en evidencia.

// O3: Escalar la adquisición de clientes a través de pauta digital para alcanzar la cuota de contribución al crecimiento anual de la empresa.

/**
Objetivo: 
 
Optimizar el ecosistema de captación digital de Ábaco para establecer una base de medición confiable que garantice el escalamiento de nuevos clientes.

Key Results (KRs)
KR1 (Técnico): Lograr el 100% de la implementación y optimización de filtros en la integración Meta-Atom-HubSpot durante el primer mes para eliminar el ruido en la data.

KR2 (Analítico): Definir la tasa de conversión baseline de los tres estadios del funnel (Lead → Lead Calificado → Cliente) con datos reales del Q1.

KR3 (Resultado): Alcanzar 18 nuevos clientes con desembolso provenientes de pauta en Meta Business (meta proporcional al 40% de la cuota anual).
 */