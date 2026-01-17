
import Recommendations from "./components/Recommend";
import Identity from "./components/Identity";
import OrganicNavigationBtns from "./components/OrganicNavigationBtns";

export default function OrganicStrategy() {
  return (
    <div className="max-w-6xl mx-auto py-14 px-6 space-y-12">
      <OrganicNavigationBtns/>
      <Recommendations />
      <Identity />
    </div>
  );
}
