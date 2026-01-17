import { NavLink } from "react-router-dom";
import PrimaryButton from "../../../components/PrimaryButton";


export default function OrganicNavigationBtns() {
  return (
    <div>
      <div className="flex flex-wrap gap-3">
        {[
          { to: "/organic-analisis", label: "Análisis" },
          { to: "/organic-strategy", label: "Estrategia" },
          { to: "/organic-tactics-calendar", label: "Plan de Acción" },
        ].map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `
              px-5 py-2 rounded-3xl font-medium transition
              ${
                isActive
                  ? "bg-indigo-800 text-slate-50 shadow"
                  : "border border-indigo-800 text-slate-400 hover:bg-indigo-50"
              }
              `
            }
          >
            {item.label}
          </NavLink>
        ))}

        {/* KPIs mantiene el mismo comportamiento */}
        <PrimaryButton to="/organic-kpis" texto="KPIs" />
      </div>
    </div>
  );
}
