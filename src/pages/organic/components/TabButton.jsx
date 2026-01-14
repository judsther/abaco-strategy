export default function TabButton({ label, value, active, setActive }) {
  const isActive = active === value;

  return (
    <button
      onClick={() => setActive(value)}
      className={`px-6 py-2 rounded-full font-medium transition-all border
        ${
          isActive
            ? "bg-slate-900 text-white border-slate-900 shadow-md"
            : "bg-white text-slate-700 border-slate-200 hover:border-slate-400"
        }`}
    >
      {label}
    </button>
  );
}
