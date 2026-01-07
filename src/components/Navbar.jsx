import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-slate-900 text-white px-6 py-4 flex justify-between items-center shadow-lg relative">
      <h1 className="text-xl font-bold">ábaco digital media</h1>

      <div className="flex gap-8 items-center">
        <Link className="hover:text-blue-400 transition" to="/intro">
          Intro
        </Link>

        <Link className="hover:text-blue-400 transition" to="/analisis">
          Analysis
        </Link>

        <Link className="hover:text-blue-400 transition" to="/strategy">
          Strategy
        </Link>

        {/* Dropdown Tactics */}
        <div className="relative">
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
        </div>
      </div>
    </nav>
  );
}
