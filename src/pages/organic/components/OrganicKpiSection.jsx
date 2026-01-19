import { useState, Fragment } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function OrganicKpiSection({ title, subtitle, platforms }) {
  const [open, setOpen] = useState(true);

  return (
    <div className="bg-white rounded-3xl shadow-xl p-10 space-y-6">
      {/* Header retractable */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-left"
      >
        <div>
          <h2 className="text-2xl font-bold text-slate-800">{title}</h2>
          <p className="text-slate-600 mt-2">{subtitle}</p>
        </div>
        {open ? (
          <ChevronUp className="w-6 h-6 text-slate-500" />
        ) : (
          <ChevronDown className="w-6 h-6 text-slate-500" />
        )}
      </button>

      {open && (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-slate-100 text-left">
                <th className="p-4 font-semibold text-slate-700">KPI</th>
                <th className="p-4 font-semibold text-slate-700">
                  Descripción
                </th>
                <th className="p-4 font-semibold text-slate-700">Q4 2025</th>
                <th className="p-4 font-semibold text-slate-700">Mes 1 Q1</th>
                <th className="p-4 font-semibold text-slate-700">Mes 2 Q1</th>
                <th className="p-4 font-semibold text-slate-700">Mes 3 Q1</th>
                <th className="p-4 font-semibold text-slate-700">Total Q1</th>
              </tr>
            </thead>

            <tbody className="divide-y">
              {platforms.map((platform, index) => (
                <Fragment key={platform.name}>
                  {/* Separador de plataforma */}
                  <tr key={platform.name}>
                    <td
                      colSpan={7}
                      className={`p-4 font-semibold text-indigo-700 bg-indigo-50 ${
                        index !== 0 ? "border-t-2 border-indigo-200" : ""
                      }`}
                    >
                      {platform.name}
                    </td>
                  </tr>

                  {/* KPIs de la plataforma */}
                  {platform.rows.map((row) => (
                    <tr key={`${platform.name}-${row.kpi}`}>
                      <td className="p-4 font-medium text-slate-800">
                        {row.kpi}
                      </td>
                      <td className="p-4 text-slate-600">{row.description}</td>
                      <td className="p-4 text-slate-500">{row.q4 || "—"}</td>
                      <td className="p-4 text-slate-400">{row.m1q1 || "-"}</td>
                      <td className="p-4 text-slate-400">—</td>
                      <td className="p-4 text-slate-400">—</td>
                      <td className="p-4 text-slate-400">—</td>
                    </tr>
                  ))}
                  </Fragment>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
