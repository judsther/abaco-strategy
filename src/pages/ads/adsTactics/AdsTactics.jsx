
import AdsNurturing from "./components/AdsNurturing";
import TabButton from "../../organic/components/TabButton";
import { useState } from "react";
import AdsMeta from "./components/AdsMeta";
import AdsNavigationBtns from "../components/AdsNavigationBtns";
import AdsAtom from "./components/AdsAtom";
import AdsX from "./components/AdsX";

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
            label="ATOM - Next Steps"
            value="atom"
            active={active}
            setActive={setActive}
          /> 
           <TabButton
            label="X"
            value="x"
            active={active}
            setActive={setActive}
          /> 
        </div> 

        {/* Vista dinámica */}
        <div>
          {active === "adsmeta" && <AdsMeta />}
          {active === "email" && <AdsNurturing />}
          {active === "atom" && <AdsAtom />}
          {active === "x" && <AdsX />}
        </div>
      

    </div>
  );
}
