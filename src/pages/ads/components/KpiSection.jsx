import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function KpiSection({ title, subtitle, rows }) {
  const [open, setOpen] = useState(true);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200">
      {/* Header */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center p-6 text-left"
      >
        <div>
          <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
          <p className="text-slate-600 text-sm mt-1">{subtitle}</p>
        </div>
        <ChevronDown
          className={`h-5 w-5 text-slate-500 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Content */}
      {open && (
        <div className="overflow-x-auto px-6 pb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-slate-200 text-slate-600">
                <th className="py-3 text-left font-medium">KPI</th>
                <th className="py-3 text-left font-medium">Descripción</th>
                <th className="py-3 text-left font-medium">Q4 2025</th>
                <th className="py-3 text-left font-medium">Mes 1 Q1</th>
                <th className="py-3 text-left font-medium">Mes 2 Q1</th>
                <th className="py-3 text-left font-medium">Mes 3 Q1</th>
                <th className="py-3 text-left font-medium">Total Q1</th>
              </tr>
            </thead>

            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={index}
                  className="border-b last:border-b-0 border-slate-100"
                >
                  <td className="py-3 font-semibold text-slate-900">
                    {row.kpi}
                  </td>
                  <td className="py-3 text-slate-700">{row.description}</td>
                  <td className="py-3 text-slate-900">{row.q4}</td>
                  <td className="py-3 text-slate-400 italic">{row.m1q1}</td>
                  <td className="py-3 text-slate-400 italic">{row.m2q1}</td>
                  <td className="py-3 text-slate-400 italic">{row.m3q1}</td>
                  <td className="py-3 text-slate-400 italic">{row.totalq1}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
