export default function KpiInput({ name, value, onChange, placeholder = "-" }) {
  return (
    <input
      className="border-s px-2 py-1 text-sm w-28"
      value={value ?? ""}
      onChange={(e) => onChange(name, e.target.value)}
      placeholder={placeholder}
    />
  );
}
