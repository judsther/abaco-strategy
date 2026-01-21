import PrimaryButton from "../../../components/PrimaryButton";
import OrganicNavigationBtns from "../components/OrganicNavigationBtns";
import ContentCalendarView from "./components/ContentCalendarView";


export default function OrganicTactics() {
  return (
    <div className="max-w-6xl mx-auto py-14 px-6 space-y-12">
      <OrganicNavigationBtns/>
      <PrimaryButton to={"/organic-tactics-calendar"} texto={"Calendario"} />
      <div className="max-w-6xl mx-auto space-y-10">
        {/* TÍTULO PRINCIPAL */}
        <ContentCalendarView/>
       
      </div>
    </div>
  );
}
