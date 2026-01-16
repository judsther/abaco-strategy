export default function ROICalculatorView() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-14 space-y-14">
      {/* Header */}
      <header className="space-y-3">
        <h1 className="text-4xl font-bold text-slate-900">
          ROI — Campañas Digitales
        </h1>
        <p className="text-slate-600 max-w-3xl">
          Evaluación financiera del desempeño de inversión publicitaria basada
          en datos reportados desde Meta, AtomChat y HubSpot.
        </p>
      </header>

      <section className="bg-white rounded-3xl shadow-xl p-10 space-y-6">
        <h2 className="text-2xl font-bold text-slate-900">
          ROI de Campañas Digitales
        </h2>
        <p className="text-slate-600">
          Análisis desde Meta, AtomChat y HubSpot
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-indigo-800 text-white text-left">
                <th className="py-3 px-4 rounded-tl-2xl">Métrica</th>
                <th className="py-3 px-4">Cantidad</th>
                <th className="py-3 px-4">Fuente</th>
                <th className="py-3 px-4 rounded-tr-2xl">CPL</th>
                <th className="py-3 px-4 rounded-tr-2xl">CPA</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr className="hover:bg-slate-50 transition">
                <td className="py-3 px-4 font-semibold">Inversión total</td>
                <td className="py-3 px-4">$716.58</td>
                <td className="py-3 px-4">-</td>
                <td className="py-3 px-4">-</td>
              </tr>

              <tr className="hover:bg-slate-50 transition">
                <td className="py-3 px-4 font-semibold">Medio valor</td>
                <td className="py-3 px-4">1490</td>
                <td className="py-3 px-4">Meta ADS</td>
                <td className="py-3 px-4">$ 0.48</td>
              </tr>

              <tr className="hover:bg-slate-50 transition">
                <td className="py-3 px-4 font-semibold">
                  Conversaciones WhatsApp
                </td>
                <td className="py-3 px-4">644</td>
                <td className="py-3 px-4">AtomChat</td>
                <td className="py-3 px-4">$ 1.10</td>
              </tr>

              <tr className="hover:bg-slate-50 transition">
                <td className="py-3 px-4 font-semibold">
                  Asignadas a vendedor
                </td>
                <td className="py-3 px-4">62</td>
                <td className="py-3 px-4">AtomChat</td>
                <td className="py-3 px-4">$ 11.55</td>
              </tr>

              <tr className="hover:bg-slate-50 transition">
                <td className="py-3 px-4 font-semibold">Leads Hubspot</td>
                <td className="py-3 px-4">61</td>
                <td className="py-3 px-4">Hubspot</td>
                <td className="py-3 px-4">$ 11.74</td>
              </tr>

              <tr className="hover:bg-slate-50 transition">
                <td className="py-3 px-4 font-semibold">Clientes cerrados</td>
                <td className="py-3 px-4">3</td>
                <td className="py-3 px-4">-</td>
                <td className="py-3 px-4">-</td>
                <td className="py-3 px-4">$238.86</td>
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
      </section>
      {/* Hallazgos */}
      <section className="bg-linear-to-br from-slate-900 to-slate-800 text-white rounded-3xl p-10 space-y-4">
        <h2 className="text-2xl font-bold">Hallazgos</h2>
        <p>
          Desempeño de Herramientas:{" "}
          <span className="font-semibold">Datos Irregulares</span>
        </p>
        <p>
          Atom:{" "}
          <span className="font-semibold">
            Califica como lead a personas naturales que no califican.
          </span>
        </p>
        <p>
          HubSpot:{" "}
          <span className="font-semibold">Guarda los leads desde Atom</span>
        </p>
        {/* <p className="text-xl font-bold text-emerald-400">ROI: 121.06%</p> */}
      </section>
    </div>
  );
}
