import { Link } from "react-router-dom";
// import { useState } from "react";

export default function Navbar() {
  // const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white text-slate-500 px-6 py-4 flex justify-between items-center shadow-lg relative">
      <h1 className="text-xl font-bold">ábaco digital media</h1>

      <div className="flex gap-8 items-center">
        <Link
          className="border border-indigo-800 rounded-4xl px-4 py-1 hover:text-slate-800 transition"
          to="/intro"
        >
          Home
        </Link>

        <Link
          className="border border-indigo-800 rounded-4xl px-4 py-1 hover:text-slate-800 transition"
          to="/organic-analisis"
        >
          Orgánico
        </Link>

        <Link
          className="border border-indigo-800 rounded-4xl px-4 py-1 hover:text-slate-800 transition"
          to="ads-report"
        >
          Publicidad
        </Link>

        <Link
          className="border border-indigo-300 rounded-4xl px-4 py-1 text-slate-400 hover:text-slate-700 hover:border-indigo-800 transition"
          to="/organic-tactics-calendar"
        >
          Calendario
        </Link>

        {/* Dropdown Tactics */}
        {/* <div className="relative">
          <div
            className="cursor-pointer hover:text-blue-400 transition"
            onMouseEnter={() => setOpen(true)}
          >
            Tactics ▾
          </div>

          {open && (
            <div
              className="absolute top-full mt-2 right-0 bg-slate-800 rounded-xl shadow-xl overflow-hidden w-40 z-50"
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
            >
              <Link
                to="/tactics/organic"
                className="block px-5 py-3 hover:bg-slate-700 transition"
              >
                Organic
              </Link>
              <Link
                to="/tactics/ads"
                className="block px-5 py-3 hover:bg-slate-700 transition"
              >
                Ads
              </Link>
            </div>
          )}
        </div> */}
      </div>
    </nav>
  );
}
