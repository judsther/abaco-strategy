import ClientesTable from "./ClientesTable";

export default function ROICalculatorView() {
  return (
    <div className=" py-14 space-y-14">
      {/* Header */}
      <header className="space-y-3">
        <h1 className="text-4xl font-bold text-slate-900">
          Reporte Financiero Campañas Digitales
        </h1>
        <p className="text-slate-600 max-w-3xl">
          Evaluación financiera del desempeño de inversión publicitaria basada
          en datos reportados desde Meta, AtomChat y HubSpot.
        </p>
      </header>

      {/* Clientes */}
      <ClientesTable/>
      {/* Resumen Q4 */}
<section className="bg-white rounded-3xl shadow-xl p-10 space-y-6">
  <h2 className="text-2xl font-bold text-slate-800">
    Resumen Sep - Dec 2025 Marketing
  </h2>

  <div className="overflow-x-auto">
    <table className="w-full text-sm text-left">
      <thead>
        <tr className="bg-slate-100 text-slate-700">
          <th className="p-3">Mes</th>
          <th className="p-3">Ingreso Total</th>
          <th className="p-3">Inversión</th>
          <th className="p-3">Ganancia Neta</th>
          <th className="p-3">ROI</th>
          <th className="p-3">Clientes Nuevos</th>
          <th className="p-3">Leads Atom/Hubspot</th>
        </tr>
      </thead>

      <tbody className="divide-y">
        <tr>
          <td className="p-3 font-medium">Oct 2025</td>
          <td className="p-3">$250.69</td>
          <td className="p-3">$59.26</td>
          <td className="p-3 text-emerald-600">$191.43</td>
          <td className="p-3">323.03%</td>
          <td className="p-3">2</td>
          <td className="p-3">5</td>
        </tr>

        <tr>
          <td className="p-3 font-medium">Nov 2025</td>
          <td className="p-3">$660.49</td>
          <td className="p-3">$295.55</td>
          <td className="p-3 text-emerald-600">$364.94</td>
          <td className="p-3">123.48%</td>
          <td className="p-3">1</td>
          <td className="p-3">25</td>
        </tr>

        <tr>
          <td className="p-3 font-medium">Dic 2025</td>
          <td className="p-3">$673.14</td>
          <td className="p-3">$361.77</td>
          <td className="p-3 text-emerald-600">$311.37</td>
          <td className="p-3">86.07%</td>
          <td className="p-3">0</td>
          <td className="p-3">31</td>
        </tr>

        <tr className="bg-slate-50 font-semibold">
          <td className="p-3">Total Q4</td>
          <td className="p-3">$1,584.32</td>
          <td className="p-3">$716.58</td>
          <td className="p-3 text-emerald-700">$867.47</td>
          <td className="p-3">121.06%</td>
          <td className="p-3">3</td>
          <td className="p-3">61</td>
        </tr>
      </tbody>
    </table>
  </div>
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
      
    </div>
  );
}
