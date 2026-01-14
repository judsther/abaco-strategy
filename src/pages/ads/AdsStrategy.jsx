import { Link } from "react-router-dom";
import PrimaryButton from "../../components/PrimaryButton";

export default function AdsStrategy() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 space-y-10">
      <div className="flex space-x-2.5">
        <p>
          <Link
            className="text-white hover:text-blue-400 bg-indigo-800 p-2 px-4 rounded-2xl transition"
            to="/ads-report"
          >
            Reporte
          </Link>
        </p>
        <p>
          <Link
            className="text-white hover:text-blue-400 bg-indigo-800 p-2 px-4 rounded-2xl transition"
            to="/ads-strategy"
          >
            Estrategia
          </Link>
        </p>
        <p>
          <Link
            className="text-white hover:text-blue-400 bg-indigo-800 p-2 px-4 rounded-2xl transition"
            to="/ads-tactics"
          >
            Tácticas
          </Link>
        </p>
      </div>
      <PrimaryButton to={"/ads-kpis"} texto={"KPIs"} />
      <div className="min-h-screen from-black via-zinc-900 to-black">
        {/* Header */}
        <div className="flex justify-between items-start mb-16">
          <div>
            <h1 className="text-4xl font-semibold">OKR Growth Q1 2026</h1>
            <p className="text-slate-600 mt-1">Aceleración y Expansión</p>
          </div>
          <div className="text-xs  border border-zinc-700 px-4 py-1 rounded-full">
            2026-01-05
          </div>
        </div>

        {/* Misión Crítica */}
        <section className="mb-20 max-w-4xl">
          <p className="text-xs tracking-widest text-zinc-400 mb-3">
            MISIÓN CRÍTICA
          </p>
          <h2 className="text-2xl leading-relaxed text-zinc-700">
            El área de Growth (Comercial, Ventas y Marketing) tiene la misión
            crítica de validar un modelo de adquisición de clientes que sea
            escalable, rentable y esté preparado para la expansión.
          </h2>
        </section>

        {/* Objetivos */}
        <div className="mb-16">
          <p className="text-zinc-700 mb-6">Los objetivos en el Q1 2026 son:</p>

          <div className="grid grid-cols-3 gap-10 text-sm">
            {[
              [
                "01",
                "Escalar la Adquisición",
                "Superar el ritmo histórico y sentar las bases para los 185 nuevos clientes del año.",
              ],
              [
                "02",
                "Preparar la Demanda de Capital",
                "Generar un pipeline de clientes robusto para absorber el nuevo fondo de Accial.",
              ],
              [
                "03",
                "Expansión Regional",
                "Validar la operación y la adquisición de clientes en Guatemala.",
              ],
            ].map(([id, title, desc]) => (
              <div key={id} className="space-y-2">
                <p className="text-indigo-400">{id}</p>
                <p className="font-medium">{title}</p>
                <p className="text-zinc-700">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Growth - Marketing */}
        <div className="mb-10 flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-semibold">Growth — Marketing</h2>
            <p className="text-zinc-700 mt-1">
              Generación de Demanda y Marca Q1 2026
            </p>
          </div>
          <div className="text-xs text-zinc-700 border border-zinc-700 px-4 py-1 rounded-full">
            2026-01-05
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 gap-8">
          <Card
            title="Validar modelo de adquisición escalable"
            body="Escalar generación de demanda: Incrementar leads calificados de ~1,500 a ~2,200 en Q1 (+47% QoQ) y elevar tasa de conversión funnel a ~1%."
            target="~2,200 leads calificados, conversión ~1% lead-to-client."
            why="Abastecer a Ventas para lograr 47 clientes nuevos. Validar que Marketing puede escalar rentablemente."
          />

          <Card
            title="Preparar la demanda para el fondeo Accial"
            body="Orquestar campañas para construir un banco de prospectos precalificados con potencial de crédito agregado ≥90% de la línea Accial."
            target="Demand generation coverage ≥90% de la línea Accial."
            why="Evitar dinero ocioso. Asegurar clientes listos cuando se abre el grifo del fondeo."
            accent
          />

          <Card
            title="Acompañar la expansión a Guatemala"
            body="Generar al menos 20 prospectos calificados originados por marketing local y documentar canales/mensajes más efectivos."
            target="≥20 leads calificados GT, Brand Launch en mercado local."
            why="Validar canales de adquisición en nueva geografía. No basta con replicar lo de El Salvador."
          />

          <Card
            title="Maximizar beneficio de marca (Accial/Oiko)"
            body="Lograr al menos una mención destacada en prensa o medios de negocios sobre los acuerdos de fondeo antes de finalizar Q1."
            target="1+ publicación en prensa Tier-1, actualización de activos de marca."
            why="Capitalizar la confianza institucional para atraer clientes grandes y futuros inversionistas."
          />
        </div>
      </div>
    </section>
  );
}

function Card({ title, body, target, why, accent }) {
  return (
    <div
      className={`rounded-2xl p-6 backdrop-blur bg-white/5 border ${
        accent ? "border-indigo-500/30" : "border-white/10"
      } shadow-xl`}
    >
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-zinc-700 mb-6">{body}</p>

      <div className="text-xs space-y-1">
        <p>
          <span className="text-zinc-700">TARGET</span> — {target}
        </p>
        <p>
          <span className="text-zinc-700">WHY</span> — {why}
        </p>
      </div>
    </div>
  );
}

// function Block({ title, children }) {
//   return (
//     <div className="bg-white border rounded-xl p-8 shadow space-y-4">

//       <h2 className="text-xl font-bold">{title}</h2>
//       {children}
//     </div>
//   );
// }
