import { Link } from "react-router-dom";

export default function PrimaryButton({ to, texto }) {
  return (
    <Link
      to={to}
      className="
        inline-flex items-center justify-center
        px-6 py-1
        text-sm font-semibold
        text-white
        bg-indigo-800
        rounded-full
        shadow-md
        transition-all duration-200
        hover:bg-indigo-700
        hover:shadow-lg
        active:scale-[0.98]
        focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
      "
      >
      {texto}
    </Link>
  );
}
