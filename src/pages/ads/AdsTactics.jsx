import { Link } from "react-router-dom";
import PrimaryButton from "../../components/PrimaryButton";
import AdsNurturing from "./AdsNurturing";
import TabButton from "../organic/components/TabButton";
import { useState } from "react";
import AdsMeta from "./AdsMeta";

export default function AdsTactics() {
    const [active, setActive] = useState("email");
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-14">
      {/* Navigation */}
      <div className="flex flex-wrap gap-3">
        {[
          { to: "/ads-report", label: "Reporte" },
          { to: "/ads-strategy", label: "Estrategia" },
          { to: "/ads-tactics", label: "Tácticas" },
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


      {/* Selector de canal */}
      <div className="flex flex-wrap gap-4 pt-6">
        <TabButton
            label="Ads Meta"
            value="adsmeta"
            active={active}
            setActive={setActive}
          />
        <TabButton
          label="Email"
          value="email"
          active={active}
          setActive={setActive}
        />
          {/* <TabButton
            label="YouTube / TikTok"
            value="yttt"
            active={active}
            setActive={setActive}
          /> */}
        </div> 

        {/* Vista dinámica */}
        <div>
          {active === "adsmeta" && <AdsMeta />}
          {active === "email" && <AdsNurturing />}
          {/* {active === "yttt" && <YTTTCalendar />} */}
        </div>
      

    </div>
  );
}
