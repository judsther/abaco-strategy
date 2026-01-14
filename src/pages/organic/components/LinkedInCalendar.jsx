

export default function LinkedInCalendar() {

  return (
    <div className=" space-y-14">
      {/* Header */}
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold text-slate-900">
          LinkedIn - Mensual Q1
        </h1>
      </header>

      {/* Vocerías semanales */}
      <section className="bg-white rounded-3xl shadow-xl p-10 space-y-6">
        <h2 className="text-2xl font-bold text-slate-800">
          Liderazgo de Opinión por Semana
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            { week: "Semana 1", name: "Juan Carlos" },
            { week: "Semana 2", name: "Edwin" },
            { week: "Semana 3", name: "Bárbara" },
            { week: "Semana 4", name: "Enrique" },
          ].map((item, i) => (
            <div key={i} className="bg-slate-50 rounded-2xl p-6 text-center">
              <p className="text-slate-500 text-sm">{item.week}</p>
              <p className="font-semibold text-slate-900 mt-2">{item.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Líneas de contenido */}
      <section className="bg-white rounded-3xl shadow-xl p-10 space-y-6">
        <h2 className="text-2xl font-bold text-slate-800">
          Tipologías de Contenido Prioritarias
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Casos de Éxito",
            "Testimonials",
            "Cultura Organizacional",
            "Bienvenidas de nuevos empleados",
            "All Hands",
            "Mini bios de cada CEO",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-slate-50 rounded-2xl p-6 text-slate-800 font-medium text-center"
            >
              {item}
            </div>
          ))}
        </div>
      </section>
      {/* Voceros de Producto */}
      <section className="bg-white rounded-3xl shadow-xl p-10 space-y-6">
        <h2 className="text-2xl font-bold text-slate-800">
          Voceros de Producto & Comunicación Institucional
        </h2>

        <p className="text-slate-700 leading-relaxed">
          Moisés, Carlos y Alejandro lideran la comunicación educativa del
          producto. El contenido podrá publicarse como post directo desde la
          página de Ábaco, firmado por ellos y acompañado de una foto de los 3
          para reforzar cercanía, autoridad y expertise.
        </p>

        <p className="text-slate-700 leading-relaxed">
          Comunicar sistemáticamente los eventos a los que asistan en
          representación de Ábaco, considerando siempre la generación de
          contenido asociado para fortalecer la presencia de marca. <br />
          <strong>Herramientas: </strong>
          Google Calendar - Slack - 
        </p>
      </section>

      {/* Rol estratégico de Alejandro */}
      <section className="bg-white rounded-3xl shadow-xl p-10 space-y-6">
        <h2 className="text-2xl font-bold text-slate-800">
          Rol Estratégico de Founders
        </h2>

        <p className="text-slate-700 leading-relaxed">
          Anunciar desde sus perfiles cada nuevo feature del producto, cada
          logro de Ábaco, cada nuevo partnership y los hitos relevantes de la
          compañía, mencionando y redirigiendo consistentemente hacia la página
          de Ábaco.
        </p>

        <p className="text-slate-700 leading-relaxed">
          Alejandro como rostro recurrente en la página institucional.
          (Consultar su disposición para grabar contenido en video de forma
          periódica)
        </p>
      </section>
    </div>
  );
}

