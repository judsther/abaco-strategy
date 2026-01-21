
export default function AdsAtom() {
  return (
    <section className="bg-white rounded-3xl shadow-sm border border-slate-200 p-10 space-y-8">
      <header>
        <h2 className="text-2xl font-semibold text-slate-900">
          Próximas Acciones para Mejorar Filtro y Conversión
        </h2>
        <p className="text-slate-600 mt-1">
          Atomización de Ads y Operación Comercial — KAMs
        </p>
      </header>

      <div className="relative pl-8 space-y-6">
        {/* Línea vertical */}
        <div className="absolute left-3 top-0 h-full w-px bg-indigo-200" />

        {[
          <>
            <span className="font-semibold">Filtro en Ads:</span> Descripciones más
            claras enfocadas en B2B con disclaimer explícito{" "}
            <span className="italic">“No crédito personal”.</span>
          </>,
          <>
            <span className="font-semibold">Mensaje de liquidez:</span> Mantener el
            enfoque directo en liquidez, priorizando el video de{" "}
            <span className="italic">
              “3 beneficios de adelantar facturas con Ábaco”
            </span>
            , que fue el de mejor CTR.
          </>,
          <>
            <span className="font-semibold">Formatos de anuncio:</span> Agregar
            combinaciones de{" "}
            <span className="italic">static + carousel</span> dentro del ad set:
            mensajes directos (static) y consejos prácticos sobre cómo utilizar el
            capital de facturas adelantadas (carousel).
          </>,
          <>
            <span className="font-semibold">Pre-calificación en ATOM:</span> ATOM
            debe realizar preguntas clave antes de marcar un lead como calificado,
            manteniendo baja fricción pero filtrando crédito personal:
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>¿Vendes a otras empresas a crédito?</li>
              <li>Monto aproximado de facturación mensual.</li>
              <li>Nombre completo.</li>
              <li>Correo corporativo.</li>
            </ul>
          </>,
          <>
            <span className="font-semibold">KPI Speed to Lead (KAMs):</span>{" "}
            Tiempo promedio de primera respuesta{" "}
            <span className="font-semibold text-emerald-600">
              &lt; 10 minutos
            </span>{" "}
            para minimizar fricción en la conversión.
          </>,
          <>
            <span className="font-semibold">Capacidad por KAM:</span> Con un volumen
            de <span className="font-semibold">153 leads calificados mensuales</span>{" "}
            entre 4 KAMs, cada asesor debe gestionar aproximadamente:
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>
                <span className="font-semibold">~38 leads mensuales</span>
              </li>
              <li>
                <span className="font-semibold">~10 leads semanales</span>
              </li>
              <li>
                <span className="font-semibold">~2 leads diarios</span>
              </li>
            </ul>
          </>,
        ].map((content, i) => (
          <div key={i} className="relative flex gap-6">
            {/* Nodo */}
            <div className="relative z-10 mt-2">
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-indigo-600 ring-4 ring-indigo-100" />
            </div>

            {/* Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-slate-700 leading-relaxed w-full hover:shadow-sm transition">
              {content}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
