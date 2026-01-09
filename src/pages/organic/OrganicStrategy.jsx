
import Recommendations from "./components/Recommend";
import Identity from "./components/Identity";
import { Link } from "react-router-dom";

export default function OrganicStrategy() {
  return (
    <div className="max-w-6xl mx-auto py-14 px-6 space-y-12">
      <div className="flex space-x-2.5">
        <p>
          <Link
            className="text-white hover:text-blue-400 bg-indigo-800 p-2 px-4 rounded-2xl transition"
            to="/organic-analisis"
          >
            Análisis
          </Link>
        </p>
        <p>
          <Link
            className="text-white hover:text-blue-400 bg-indigo-800 p-2 px-4 rounded-2xl transition"
            to="/organic-strategy"
          >
            Estrategia
          </Link>
        </p>
        <p>
          <Link
            className="text-white hover:text-blue-400 bg-indigo-800 p-2 px-4 rounded-2xl transition"
            to="/organic-tactics"
          >
            Tácticas
          </Link>
        </p>
      </div>
      <Recommendations />
      <Identity />
    </div>
  );
}
