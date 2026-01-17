import { NavLink } from "react-router-dom";

export default function PrimaryButton({ to, texto }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `
        inline-flex items-center justify-center
        px-6 py-1
        text-sm font-semibold
        rounded-full
        transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-slate-100 focus:ring-offset-2
        ${
          isActive
            ? `
              bg-slate-800 text-white
              shadow-md
              `
            : `
              border border-slate-700
              text-slate-600
              bg-white
              hover:bg-indigo-50
              `
        }
        `
      }
    >
      {texto}
    </NavLink>
  );
}
