export default function AcquisitionStrategyQ1() {
  return (
    <div className="min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-6 w-full">
      <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-10 space-y-14">
        {/* Funnel Actual */}
<section>
  <h2 className="text-2xl font-semibold text-slate-900 mb-6">
    Funnel Actual y Conversion Rates
  </h2>

  <p className="text-slate-700 leading-relaxed mb-6 max-w-4xl">
    El desempeño actual del funnel muestra que el principal cuello de botella
    se encuentra en la transición de <strong>Lead General → Lead Calificado</strong>.
    La estrategia de Q1 prioriza mejorar la calidad del tráfico y los filtros
    iniciales, aun cuando esto pueda implicar una reducción en el volumen total
    de clicks.
  </p>

  <div className="overflow-x-auto bg-slate-50 rounded-2xl p-4">
  <table className="w-full border-collapse text-sm">
    <thead>
      <tr className="border-b border-slate-200 text-slate-600">
        <th className="py-3 text-left font-medium">Etapa</th>
        <th className="py-3 text-left font-medium">Fórmula</th>
        <th className="py-3 text-left font-medium">Conversion Rate Actual</th>
        <th className="py-3 text-left font-medium">Objetivo Q1</th>
      </tr>
    </thead>

    <tbody>
      <tr className="border-b border-slate-100">
        <td className="py-3 font-medium">Click → Lead</td>
        <td className="py-3">1,490 / 4,356</td>
        <td className="py-3 text-emerald-600">34.21%</td>
        <td className="py-3 font-semibold">32%</td>
      </tr>

      <tr className="border-b border-slate-100">
        <td className="py-3 font-medium">Lead → Lead Calificado</td>
        <td className="py-3">61 / 1,490</td>
        <td className="py-3 text-rose-600">4.09%</td>
        <td className="py-3 font-semibold text-emerald-700">6%</td>
      </tr>

      <tr className="border-b border-slate-100">
        <td className="py-3 font-medium">Lead Calificado → Cliente</td>
        <td className="py-3">3 / 61</td>
        <td className="py-3">4.92%</td>
        <td className="py-3 font-semibold">5%</td>
      </tr>

      <tr className="border-b border-slate-100">
        <td className="py-3 font-medium">Lead → Cliente</td>
        <td className="py-3">3 / 1,490</td>
        <td className="py-3 font-semibold">0.20%</td>
        <td className="py-3 font-semibold">0.30%</td>
      </tr>

      <tr>
        <td className="py-3 font-medium">Cost per Qualified Lead</td>
        <td className="py-3">Costo real</td>
        <td className="py-3 font-semibold">$11.75</td>
        <td className="py-3 font-semibold">$10.00</td>
      </tr>
    </tbody>
  </table>
</div>

</section>


  <h2 className="text-2xl font-semibold text-slate-900 mb-6">Proyección tras optimización de resultados </h2>
<div className="overflow-x-auto bg-slate-50 rounded-2xl p-4 ">
  <table className="w-full border-collapse text-sm">
    <thead>
      <tr className="border-b border-slate-200 text-slate-600">
        <th className="py-3 text-left font-medium">Mes</th>
        <th className="py-3 text-left font-medium">Leads Generales</th>
        <th className="py-3 text-left font-medium">Leads Calificados</th>
        <th className="py-3 text-left font-medium">Clientes Esperados</th>
        <th className="py-3 text-left font-medium">Estado del Funnel</th>
      </tr>
    </thead>

    <tbody>
      <tr className="border-b border-slate-100">
        <td className="py-3 font-medium">Enero</td>
        <td className="py-3">~900</td>
        <td className="py-3">~54</td>
        <td className="py-3">0</td>
        <td className="py-3">
          Setup técnico, warm-up y pruebas de calidad.
        </td>
      </tr>

      <tr className="border-b border-slate-100">
        <td className="py-3 font-medium">Febrero</td>
        <td className="py-3">~2,550</td>
        <td className="py-3">~153</td>
        <td className="py-3">~9</td>
        <td className="py-3">
          Escalamiento con filtros optimizados.
        </td>
      </tr>

      <tr className="border-b border-slate-100">
        <td className="py-3 font-medium">Marzo</td>
        <td className="py-3">~2,550</td>
        <td className="py-3">~153</td>
        <td className="py-3">~9</td>
        <td className="py-3">
          Optimización basada en señales ganadoras.
        </td>
      </tr>

      <tr>
        <td className="py-3 font-semibold">Total Q1</td>
        <td className="py-3 font-semibold">6,000</td>
        <td className="py-3 font-semibold">360</td>
        <td className="py-3 font-semibold">18</td>
        <td className="py-3 font-semibold">
          Cumplimiento de Meta
        </td>
      </tr>
    </tbody>
  </table>
</div>




<div className="space-y-4 max-w-5xl">
  <ul className="list-disc pl-6 text-slate-700 space-y-3">
    <li>
      <strong>Optimización de Calidad:</strong> El foco principal del Q1 es
      incrementar la conversión de Lead General a Lead Calificado mediante
      mejores filtros, mensajes y segmentación inicial.
    </li>

    <li>
      <strong>Trade-off de Volumen:</strong> Una mejora en la calidad puede
      reducir el total de clicks, pero incrementará la eficiencia real del
      funnel.
    </li>

    <li>
      <strong>Capacidad Operativa:</strong> ATOM y el equipo comercial deben
      estar preparados para gestionar un promedio de 200+ leads semanales sin
      fricción operativa.
    </li>

    <li>
      <strong>Speed to Lead:</strong> La velocidad de contacto inicial impacta
      directamente la conversión final, especialmente en el tramo Lead →
      Calificado.
    </li>

    <li>
      <strong>Asignación Presupuestaria:</strong> El 90% del presupuesto se
      concentrará en febrero y marzo, priorizando experimentos ganadores.
    </li>

    <li>
      <strong>Lag de Conversión:</strong> Parte de los leads de marzo cerrarán
      en abril, por lo que febrero es crítico para asegurar el KPI contable.
    </li>
  </ul>
</div>

</div>
      </div>
    </div>
  );
}

        // <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-10 space-y-12">
        //   {/* Header */}
        //   <header>
        //     <h1 className="text-4xl font-semibold text-slate-900 mb-4">
        //       Estrategia de Adquisición y Proyección de Conversión - Q1
        //     </h1>
        //     <p className="text-slate-700 leading-relaxed max-w-4xl">
        //       Para alcanzar el objetivo institucional de 18 nuevos clientes con
        //       desembolso durante el primer trimestre, se ha definido una hoja de
        //       ruta que considera una tasa de conversión del 1% (Lead a Cliente)
        //       y un inicio escalonado de la pauta digital.
        //     </p>
        //   </header>

        //   {/* Proyección Operativa */}
        //   <section>
        //     <h2 className="text-2xl font-semibold text-slate-900 mb-6">
        //       Proyección Operativa Q1
        //     </h2>

        //     <p className="text-slate-700 leading-relaxed mb-6 max-w-4xl">
        //       Considerando que el mes de enero se centrará en la optimización
        //       técnica y el periodo de aprendizaje de los algoritmos, la
        //       captación se concentrará en el último bimestre del periodo:
        //     </p>

        //     <div className="overflow-x-auto">
        //       <table className="w-full border-collapse text-sm">
        //         <thead>
        //           <tr className="border-b border-slate-200 text-slate-600">
        //             <th className="py-3 text-left font-medium">Mes</th>
        //             <th className="py-3 text-left font-medium">
        //               Leads Requeridos
        //             </th>
        //             <th className="py-3 text-left font-medium">
        //               Clientes Esperados
        //             </th>
        //             <th className="py-3 text-left font-medium">
        //               Estado del Funnel
        //             </th>
        //           </tr>
        //         </thead>

        //         <tbody>
        //           <tr className="border-b border-slate-100">
        //             <td className="py-3 font-medium text-slate-900">Enero</td>
        //             <td className="py-3 text-slate-700">~100</td>
        //             <td className="py-3 text-slate-700">0</td>
        //             <td className="py-3 text-slate-700">
        //               Setup: Optimización de filtros y lanzamiento en última
        //               semana.
        //             </td>
        //           </tr>

        //           <tr className="border-b border-slate-100">
        //             <td className="py-3 font-medium text-slate-900">Febrero</td>
        //             <td className="py-3 text-slate-700">850</td>
        //             <td className="py-3 text-slate-700">9</td>
        //             <td className="py-3 text-slate-700">
        //               Escalamiento: Campañas en rendimiento óptimo tras
        //               aprendizaje.
        //             </td>
        //           </tr>

        //           <tr className="border-b border-slate-100">
        //             <td className="py-3 font-medium text-slate-900">Marzo</td>
        //             <td className="py-3 text-slate-700">850</td>
        //             <td className="py-3 text-slate-700">9</td>
        //             <td className="py-3 text-slate-700">
        //               Optimización: Ajuste basado en experimentos ganadores.
        //             </td>
        //           </tr>

        //           <tr>
        //             <td className="py-3 font-semibold text-slate-900">
        //               Total Q1
        //             </td>
        //             <td className="py-3 font-semibold text-slate-900">1,800</td>
        //             <td className="py-3 font-semibold text-slate-900">18</td>
        //             <td className="py-3 font-semibold text-slate-900">
        //               Cumplimiento de Meta
        //             </td>
        //           </tr>
        //         </tbody>
        //       </table>
        //     </div>
        //   </section>

        //   {/* Implicaciones Estratégicas */}
        //   <section>
        //     <h2 className="text-2xl font-semibold text-slate-900 mb-6">
        //       Implicaciones Estratégicas y Factores Críticos de Éxito
        //     </h2>

        //     <div className="space-y-6 max-w-5xl">
        //       <p className="text-slate-700 leading-relaxed">
        //         <span className="font-semibold">
        //           Capacidad Operativa y Gestión de Demanda:
        //         </span>{" "}
        //         La fuerza de ventas y el flujo automatizado en ATOM (WhatsApp)
        //         deberán estar preparados para procesar un volumen estimado de
        //         212 leads semanales a partir de febrero. La eficiencia en la
        //         automatización será clave para evitar cuellos de botella.
        //       </p>

        //       <p className="text-slate-700 leading-relaxed">
        //         <span className="font-semibold">
        //           Optimización del Tiempo de Respuesta (Speed to Lead):
        //         </span>{" "}
        //         Dada la tasa de conversión del 1%, la velocidad de atención
        //         inicial es crítica. Cualquier retraso en el contacto inicial a
        //         través de los canales digitales impactará directamente en la
        //         reducción de la tasa de cierre.
        //       </p>

        //       <p className="text-slate-700 leading-relaxed">
        //         <span className="font-semibold">
        //           Distribución Presupuestaria Eficiente:
        //         </span>{" "}
        //         Se requiere una concentración de recursos financieros del 90%
        //         del presupuesto total del Q1 entre febrero y marzo (45% cada
        //         mes), destinando el 10% restante al periodo de "warm-up" y
        //         pruebas técnicas de enero.
        //       </p>

        //       <p className="text-slate-700 leading-relaxed">
        //         <span className="font-semibold">
        //           Gestión del Ciclo de Conversión (Lag Time):
        //         </span>{" "}
        //         Debido a que los leads generados en la última fase de marzo
        //         podrían concretar su desembolso en abril, se priorizará un
        //         volumen de captación agresivo durante febrero para asegurar el
        //         cumplimiento del KPI dentro del trimestre contable.
        //       </p>
        //     </div>
        //   </section>

        //   {/* Nota de Gestión */}
        //   <section className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
        //     <h3 className="font-semibold text-slate-900 mb-2">
        //       Nota de Gestión
        //     </h3>
        //     <p className="text-slate-700 leading-relaxed">
        //       Se ha identificado como requisito indispensable que el sistema
        //       ATOM y el equipo comercial validen su capacidad instalada para
        //       gestionar un promedio de 30 leads diarios de manera sostenida
        //       durante el pico de la campaña.
        //     </p>
        //   </section>
        // </div>