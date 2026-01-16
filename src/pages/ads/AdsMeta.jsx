

export default function AdsMeta() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-14">
      {/* Header */}
      <div className="border-l-4 border-indigo-800 pl-6 space-y-1">
        <h1 className="text-4xl font-extrabold text-slate-900">Ads Q1 Mes 1</h1>
        <p className="text-slate-600 text-lg">Presupuesto: —</p>
      </div>

      {/* Objetivos */}
      <section className="bg-white rounded-3xl shadow-xl p-10 space-y-4">
        <h2 className="text-2xl font-bold text-indigo-800">Objetivos</h2>
        <div className="grid md:grid-cols-2 gap-6 text-slate-700">
          <p>Generación de Leads: ---</p>
          <p>Leads Calificados: ---</p>
        </div>
      </section>

      {/* Ads Set */}
      <section className="bg-white rounded-3xl shadow-xl p-10 space-y-8">
        <h2 className="text-2xl font-bold text-indigo-800">Ads Set</h2>

        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-slate-900">Video</h3>

          <div className="bg-slate-50 rounded-2xl p-6 space-y-3">
            <p className="font-semibold text-slate-800">Guion:</p>
            <p>3 beneficios de adelantar tus facturas por cobrar con Ábaco.</p>
            <p>
              1: Liquidez en minutos. Olvida los procesos bancarios eternos; con
              ábaco subes tu factura a nuestra plataforma y recibes tu dinero de
              forma ágil.
            </p>
            <p>
              2: Cero burocracia. Todo es 100% digital, diseñado para
              empresarios que no tienen tiempo que perder.
            </p>
            <p>
              3: Control total. Tú decides qué facturas adelantar y cuándo,
              manteniendo el mando de tus finanzas.
            </p>

            <div className="pt-4 space-y-2">
              <p>
                Cierre 1: No esperes 30 o 60 días para cobrar lo que ya
                vendiste. Regístrate hoy y uno de nuestros asesores te
                contactará enseguida.
              </p>
              <p>
                Cierre 2: No esperes 30 o 60 días para cobrar lo que ya
                vendiste. Escríbenos a WhatsApp y obtén liquidez hoy.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-200 space-y-2">
              <p className="font-semibold">Visuales:</p>
              <p>
                Miguel hablando, gráficos de texto para cada punto e imágenes de
                la plataforma intercaladas. Con Subtitulos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Static */}
      <section className="bg-white rounded-3xl shadow-xl p-10 space-y-6">
        <h3 className="text-xl font-semibold text-indigo-800">Static</h3>

        <div className="bg-slate-50 rounded-2xl p-6 space-y-2">
          <p>Texto:</p>
          <p>Grande: ¡Cobra tus facturas hoy mismo!</p>
          <p>
            Subtexto: No esperes 30, 60 o 90 días. Recibe el dinero de tus
            cuentas por cobrar en horas.
          </p>
          <p>Botón (CTA): Ver más</p>

          <div className="pt-4 border-t border-slate-200 space-y-2">
            <p>Visual:</p>
            <p>Usar un fondo limpio con el texto en un color que resalte.</p>
            <p>
              Una mano sosteniendo un celular con una notificación de "Pago
              Recibido"
            </p>
          </div>
        </div>
      </section>

      {/* Carrusel */}
      <section className="bg-white rounded-3xl shadow-xl p-10 space-y-6">
        <h3 className="text-xl font-semibold text-indigo-800">Carrusel</h3>

        <div className="bg-slate-50 rounded-2xl p-6 space-y-3">
          <p>Texto:</p>

          <div className="space-y-2">
            <p className="font-semibold">Slide 1:</p>
            <p>Únete a las empresas que no esperan para crecer.</p>
            <p>
              Convierte tus facturas en capital inmediato y mantén tu impulso.
            </p>
          </div>

          <div className="space-y-2 pt-4">
            <p className="font-semibold">Slide 2:</p>
            <p>El secreto de los negocios ágiles es su LIQUIDEZ. Con Ábaco:</p>
            <p>✅ Gana más: Aprovecha descuentos por pronto pago.</p>
            <p>✅ Anticípate: Adquiere inventario estratégico hoy.</p>
            <p>✅ Lidera: Opera con total paz mental y seguridad.</p>
          </div>

          <div className="space-y-2 pt-4">
            <p className="font-semibold">Slide 3:</p>
            <p>
              Sube tus facturas a nuestra plataforma y recibe tu efectivo en
              horas.
            </p>
            <p>Sin burocracia ni filas. Solo tu dinero trabajando para ti.</p>
          </div>

          <div className="pt-4 border-t border-slate-200 space-y-2">
            <p>Visuales:</p>
            <p>
              Slide 1: Empresario salvadoreño viendo gráficas de crecimiento.
            </p>
            <p>Slides 2: iconos limpios y elegantes por cada punto.</p>
            <p>Slide 3: Mockup plataforma.</p>
          </div>
        </div>
      </section>

      {/* Descripción */}
      <section className="bg-indigo-800 text-white rounded-3xl shadow-xl p-10 space-y-3">
        <p>Descripción principal:</p>
        <p>
          No esperes 60 días para cobrar. Convierte tus facturas en liquidez hoy
          mismo y mantén el impulso de tu negocio con Ábaco.
        </p>
        <p>*Financiamiento para Pymes. No créditos personales.</p>
      </section>

      {/* Campañas */}
      <section className="bg-white rounded-3xl shadow-xl p-10 space-y-6">
        <h3 className="text-xl font-semibold text-indigo-800">Campañas</h3>

        <div className="grid md:grid-cols-3 gap-6 text-slate-700">
          <div className="bg-slate-50 p-5 rounded-xl space-y-1">
            <p className="font-semibold">Campana 1</p>
            <p>Público Objetivo: Advantage</p>
            <p>CTA Escribir Whatsapp</p>
          </div>

          <div className="bg-slate-50 p-5 rounded-xl space-y-1">
            <p className="font-semibold">Campana 2</p>
            <p>Público Objetivo: Lookalike</p>
            <p>CTA Escribir Whatsapp</p>
          </div>

          <div className="bg-slate-50 p-5 rounded-xl space-y-1">
            <p className="font-semibold">Campana 3</p>
            <p>Público Objetivo: Intereses</p>
            <p>CTA Escribir Whatsapp</p>
          </div>

          <div className="bg-slate-50 p-5 rounded-xl space-y-1">
            <p className="font-semibold">Campana 1</p>
            <p>Público Objetivo: Advantage</p>
            <p>Llenar el formulario</p>
          </div>

          <div className="bg-slate-50 p-5 rounded-xl space-y-1">
            <p className="font-semibold">Campana 2</p>
            <p>Público Objetivo: Lookalike</p>
            <p>Llenar el formulario</p>
          </div>

          <div className="bg-slate-50 p-5 rounded-xl space-y-1">
            <p className="font-semibold">Campana 3</p>
            <p>Público Objetivo: Intereses</p>
            <p>Llenar Formulario</p>
          </div>
        </div>
      </section>
    </div>
  );
}
