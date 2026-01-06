import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-slate-900 text-white px-6 py-4 flex justify-between items-center shadow-lg">
      <h1 className="text-xl font-bold">ábaco digital media</h1>

      <div className="flex gap-6">
        <Link className="hover:text-blue-400 transition" to="/">
          Intro
        </Link>
        <Link className="hover:text-blue-400 transition" to="/analisis">
          Analisys
        </Link>
        <Link className="hover:text-blue-400 transition" to="/strategy">
          Strategy
        </Link>
        <Link className="hover:text-blue-400 transition" to="/tactics">
          Tactics
        </Link>
      </div>
    </nav>
  );
}
