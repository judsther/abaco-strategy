import OrganicKPIsView from "./components/OrganicKPIsView";
import OrganicNavigationBtns from "../components/OrganicNavigationBtns";



export default function OrganicKpis() {
  return (
    <div className="max-w-6xl mx-auto py-14 px-6 space-y-12">
      <OrganicNavigationBtns/>
      <OrganicKPIsView/>
    </div>
  )
}
