import { Link } from "react-router-dom";
import PrimaryButton from "../../components/PrimaryButton";


export default function AdsNavigationBtns() {
  return (
    <div>
      <div className="flex flex-wrap gap-3">
        {[
          { to: "/ads-report", label: "Análisis" },
          { to: "/ads-strategy", label: "Estrategia (OKR)" },
          { to: "/ads-tactics", label: "Plan de Acción" },
        ].map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="bg-white text-slate-700 px-5 py-2 border border-indigo-500 rounded-3xl shadow hover:bg-indigo-700 transition"
          >
            {item.label}
          </Link>
        ))}
        <PrimaryButton to={"/ads-kpis"} texto={"KPIs"} />
      </div>
    </div>
  );
}
