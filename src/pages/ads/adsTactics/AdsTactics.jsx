
import AdsNurturing from "./components/AdsNurturing";
import TabButton from "../../organic/components/TabButton";
import { useState } from "react";
import AdsMeta from "./components/AdsMeta";
import AdsNavigationBtns from "../components/AdsNavigationBtns";
import AdsAtom from "./components/AdsAtom";

export default function AdsTactics() {
    const [active, setActive] = useState("adsmeta");
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-14">
      {/* Navigation */}
     <AdsNavigationBtns/>


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
           <TabButton
            label="ATOM - Next Actions"
            value="atom"
            active={active}
            setActive={setActive}
          /> 
        </div> 

        {/* Vista dinámica */}
        <div>
          {active === "adsmeta" && <AdsMeta />}
          {active === "email" && <AdsNurturing />}
          {active === "atom" && <AdsAtom />}
        </div>
      

    </div>
  );
}
