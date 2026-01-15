export default function ROICalculatorView() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-14 space-y-14">
      {/* Header */}
      <header className="space-y-3">
        <h1 className="text-4xl font-bold text-slate-900">
          Calculadora de ROI — Campañas Digitales
        </h1>
        <p className="text-slate-600 max-w-3xl">
          Evaluación financiera del desempeño de inversión publicitaria basada
          en datos reales confirmados desde Meta, AtomChat y HubSpot.
        </p>
      </header>

      {/* Datos Base */}
      <section className="bg-white rounded-3xl shadow-xl p-10 space-y-6">
        <h2 className="text-2xl font-bold text-slate-800">Datos Base</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-slate-100 text-slate-700">
                <th className="p-3 text-left">Métrica</th>
                <th className="p-3 text-left">Cantidad</th>
                <th className="p-3 text-left">Fuente</th>
                <th className="p-3 text-left">CAC</th>
                <th className="p-3 text-left">Comentario</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="p-3 font-semibold">Inversión total</td>
                <td className="p-3">$716.58</td>
                <td className="p-3">—</td>
                <td className="p-3">—</td>
                <td className="p-3"></td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">Medio valor</td>
                <td className="p-3">1490</td>
                <td className="p-3">Meta ADS</td>
                <td className="p-3">$0.48</td>
                <td className="p-3"></td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">Conversaciones WhatsApp</td>
                <td className="p-3">644</td>
                <td className="p-3">AtomChat</td>
                <td className="p-3">$1.10</td>
                <td className="p-3"></td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">Leads "alto valor"</td>
                <td className="p-3">241</td>
                <td className="p-3">Meta ADS</td>
                <td className="p-3">$2.97</td>
                <td className="p-3">Meta no rastreó las 644 conversaciones</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">Asignadas a vendedor</td>
                <td className="p-3">62</td>
                <td className="p-3">AtomChat</td>
                <td className="p-3">$11.55</td>
                <td className="p-3"></td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">Leads HubSpot</td>
                <td className="p-3">61</td>
                <td className="p-3">HubSpot</td>
                <td className="p-3">$11.74</td>
                <td className="p-3"></td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">Clientes cerrados</td>
                <td className="p-3">5</td>
                <td className="p-3">—</td>
                <td className="p-3">$143.31</td>
                <td className="p-3"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Clientes */}
      <section className="bg-white rounded-3xl shadow-xl p-10 space-y-6">
        <h2 className="text-2xl font-bold text-slate-800">
          Clientes Activos Desembolsados
        </h2>

        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-100">
              <th className="p-3 text-left">Cliente</th>
              <th className="p-3 text-left">Fuente</th>
              <th className="p-3 text-left">Ingreso</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            <tr>
              <td className="p-3">ELECTROMECANICA INDUSTRIAL, S.A. DE C.V.</td>
              <td className="p-3">Atom</td>
              <td className="p-3">$396.40</td>
            </tr>
            <tr>
              <td className="p-3">KEVIN ENRIQUE CABEZAS</td>
              <td className="p-3">Redes</td>
              <td className="p-3">$336.45</td>
            </tr>
            <tr>
              <td className="p-3">INTERMARKET TRADERS, S.A. DE C.V.</td>
              <td className="p-3">Redes</td>
              <td className="p-3">$851.20</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Resultado */}
      <section className="bg-linear-to-br from-slate-900 to-slate-800 text-white rounded-3xl p-10 space-y-4">
        <h2 className="text-2xl font-bold">Resultado Financiero</h2>
        <p>
          Ingreso total: <span className="font-semibold">$1,584.05</span>
        </p>
        <p>
          Inversión: <span className="font-semibold">$716.58</span>
        </p>
        <p>
          Ganancia neta: <span className="font-semibold">$867.47</span>
        </p>
        <p className="text-xl font-bold text-emerald-400">ROI: 121.06%</p>
        <p className="text-sm opacity-90">
          Por cada dólar invertido se ganó{" "}
          <span className="font-semibold">$1.21</span> adicional.
        </p>
      </section>
    </div>
  );
}
