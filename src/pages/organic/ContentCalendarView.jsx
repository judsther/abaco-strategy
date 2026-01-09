import PrimaryButton from "../../components/PrimaryButton";

function CalendarItem({
  day,
  time,
  platform,
  pillar,
  format,
  topic,
  objective,
  adaptation,
}) {
  return (
    <div className="bg-slate-50 border rounded-lg p-6 space-y-2">
      <div className="flex flex-wrap gap-3 text-sm text-slate-600">
        <span>
          <strong>{day}</strong>
        </span>
        <span>{time}</span>
        <span>— {platform}</span>
      </div>

      <p>
        <strong>Pilar:</strong> {pillar}
      </p>
      <p>
        <strong>Formato:</strong> {format}
      </p>
      <p>
        <strong>Tema Central:</strong> {topic}
      </p>
      <p>
        <strong>Objetivo Post:</strong> {objective}
      </p>
      <p>
        <strong>Adaptación:</strong> {adaptation}
      </p>
    </div>
  );
}

function WeekBlock({ title, children }) {
  return (
    <section className="space-y-6">
      <h3 className="text-3xl font-bold text-slate-900">{title}</h3>
      <div className="grid md:grid-cols-2 gap-6">{children}</div>
    </section>
  );
}

export default function ContentCalendarView() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-16">
      <PrimaryButton to={"/organic-tactics"} texto={"< Back"} />
      <header className="space-y-4">
        <h2 className="text-4xl font-bold text-slate-900">
          Calendario de Contenidos — Q1 2026
        </h2>
        <p className="text-slate-600 max-w-4xl">
          El siguiente calendario presenta una semana tipo para cada mes (Enero,
          Febrero, Marzo de 2026), ilustrando la aplicación de los pilares de
          contenido, formatos y adaptaciones por canal. Cada semana garantiza un
          mínimo de 3 publicaciones por red social por semana, priorizando la
          reutilización inteligente de contenidos de alta calidad adaptados a la
          naturaleza de cada plataforma.
        </p>
      </header>

      {/* ================== ENERO ================== */}
      <WeekBlock title="Semana Ejemplo — Enero 2026">
        <CalendarItem
          day="Lunes"
          time="11 AM"
          platform="Instagram"
          pillar="1. Liquidez Inteligente & Operativa"
          format="Reel (15-30s)"
          topic="El Costo de la Espera: ¿Cuánto Pierde tu PYME por Cobros Lentos?"
          objective="Generar conciencia sobre un problema común (dolor) y presentar a Ábaco como la solución ágil."
          adaptation="Video corto, dinámico, con texto en pantalla y música de tendencia. Voz en off narrando el problema y la solución concisa."
        />

        <CalendarItem
          day="Lunes"
          time="1 PM"
          platform="Facebook"
          pillar="1. Liquidez Inteligente & Operativa"
          format="Video (30-60s)"
          topic="El Costo de la Espera: ¿Cuánto Pierde tu PYME por Cobros Lentos?"
          objective="Generar conciencia y consideración, con un mensaje más contextualizado y un CTA directo."
          adaptation="Video ligeramente más largo, con el mismo concepto pero con un tono más explicativo y un CTA más visible en el copy y en el video."
        />

        <CalendarItem
          day="Lunes"
          time="10 AM"
          platform="LinkedIn"
          pillar="1. Liquidez Inteligente & Operativa"
          format="Post de Texto con Imagen"
          topic="El Impacto Estratégico de la Liquidez Inmediata en la Operación de tu PYME"
          objective="Posicionar a Ábaco como una solución estratégica para la gestión de liquidez y apalancamiento."
          adaptation="Post de texto enfocado en el análisis de negocio y la estrategia, usando un lenguaje profesional. Imagen con un gráfico simple o la interfaz de Ábaco. Se profundiza en el 'por qué' estratégico."
        />

        <CalendarItem
          day="Martes"
          time="10 AM"
          platform="YouTube"
          pillar="1. Liquidez Inteligente & Operativa"
          format="Video Corto Explicativo (1.5 min)"
          topic="Ábaco en 90 segundos: Tu solución de Liquidez Inteligente"
          objective="Comunicar la propuesta de valor de Ábaco de forma concisa y directa a nuevos usuarios."
          adaptation="Video animado o con presentador que explica rápidamente qué es Ábaco, cómo funciona y los beneficios clave. Ideal para introducción al canal y ads."
        />

        <CalendarItem
          day="Martes"
          time="12 PM"
          platform="TikTok"
          pillar="3. Confianza & Comunidad Ábaco"
          format="Reel/Short (10-15s)"
          topic="Detrás de Escenas: Un Día en Ábaco (Oficina/Equipo)"
          objective="Humanizar la marca, conectar emocionalmente, mostrar el ambiente de trabajo de forma auténtica."
          adaptation="Video rápido, divertido, usando audio de tendencia. Cortes ágiles mostrando miembros del equipo, el ambiente de oficina."
        />
      </WeekBlock>

      {/* ================== FEBRERO ================== */}
      <WeekBlock title="Semana Ejemplo — Febrero 2026">
        <CalendarItem
          day="Lunes"
          time="11 AM"
          platform="Instagram"
          pillar="1. Liquidez Inteligente & Operativa"
          format="Carrusel (3-5 slides)"
          topic="3 Mitos Comunes sobre el Financiamiento Digital para PYMES"
          objective="Educar y desmitificar conceptos erróneos, posicionando a Ábaco como una alternativa confiable."
          adaptation="Carrusel visual con cada slide abordando un mito y su realidad. Tono informativo y empoderador."
        />

        <CalendarItem
          day="Lunes"
          time="1 PM"
          platform="Facebook"
          pillar="1. Liquidez Inteligente & Operativa"
          format="Carrusel (3-5 slides)"
          topic="3 Mitos Comunes sobre el Financiamiento Digital para PYMES"
          objective="Reforzar la educación y generar discusión sobre el financiamiento digital."
          adaptation="Mismo carrusel de IG, con un copy de Facebook que invita más a la discusión en comentarios."
        />

        <CalendarItem
          day="Lunes"
          time="9 AM"
          platform="LinkedIn"
          pillar="1. Liquidez Inteligente & Operativa"
          format="Post de Texto con Encuesta"
          topic="Desafíos de Flujo de Caja: ¿Cuál es tu Mayor Obstáculo Hoy?"
          objective="Identificar dolores específicos de la audiencia, generar engagement y demostrar empatía. Sirve como investigación de mercado."
          adaptation="Pregunta abierta o encuesta sobre los retos de liquidez. Usar los 'dolores' de la estrategia. Esto también sirve como research."
        />

        <CalendarItem
          day="Martes"
          time="12 PM"
          platform="TikTok"
          pillar="2. Crecimiento Ágil & Estratégico"
          format="Reel/Short (15-20s)"
          topic="PYME Story: De Facturas Lentas a Crecimiento Rápido con Ábaco"
          objective="Contar una historia de éxito de forma rápida y atractiva para captar la atención de emprendedores."
          adaptation="Video con transiciones rápidas y texto en pantalla, narrando el 'antes y después' de una PYME que usó Ábaco. Inspiracional y directo."
        />

        <CalendarItem
          day="Martes"
          time="11 AM"
          platform="Instagram"
          pillar="2. Crecimiento Ágil & Estratégico"
          format="Carrusel (5-7 slides)"
          topic="Historia de Éxito: [Nombre PYME] y cómo Ábaco Impulsó su [Logro Específico]"
          objective="Generar prueba social, inspirar y mostrar el impacto real de Ábaco."
          adaptation="Carrusel visual con fotos de la empresa/dueños, citas clave y resultados. Narrativa 'Problema-Solución-Resultado'."
        />

        <CalendarItem
          day="Miércoles"
          time="10 AM"
          platform="YouTube"
          pillar="2. Crecimiento Ágil & Estratégico"
          format="Video Entrevista (5-10 min)"
          topic="Caso de Éxito Detallado: [Nombre PYME] - La Estrategia de Crecimiento con Liquidez Ágil"
          objective="Proporcionar prueba social profunda, generar confianza y consideración."
          adaptation="Entrevista completa con el líder de la PYME, detallando el desafío, la solución de Ábaco y los resultados cuantificables. Incluir imágenes de la empresa."
        />
      </WeekBlock>

      {/* ================== MARZO ================== */}
      <WeekBlock title="Semana Ejemplo — Marzo 2026">
        <CalendarItem
          day="Lunes"
          time="11 AM"
          platform="Instagram"
          pillar="1. Liquidez Inteligente & Operativa"
          format="Carrusel (4-6 slides)"
          topic="Transforma tus Cuentas por Cobrar en Capital para Invertir: La Guía Ábaco"
          objective="Educar sobre el 'cómo' y el 'para qué' de la liquidez con Ábaco, impulsando la conversión."
          adaptation="Carrusel con gráficos sencillos explicando el proceso de adelanto de facturas y los beneficios directos en términos de inversión y crecimiento."
        />

        <CalendarItem
          day="Lunes"
          time="1 PM"
          platform="Facebook"
          pillar="1. Liquidez Inteligente & Operativa"
          format="Carrusel (4-6 slides)"
          topic="Transforma tus Cuentas por Cobrar en Capital para Invertir: La Guía Ábaco"
          objective="Reforzar el mensaje educativo con un CTA directo y opciones de interacción."
          adaptation="Mismo carrusel de Instagram, pero con un copy más detallado que impulse la acción y la interacción con preguntas."
        />

        <CalendarItem
          day="Lunes"
          time="10 AM"
          platform="LinkedIn"
          pillar="1. Liquidez Inteligente & Operativa"
          format="Post con Link a Webinar/Evento"
          topic="Webinar Gratuito: 'Dominando tu Flujo de Caja en Entornos Volátiles'"
          objective="Generar leads altamente calificados, posicionar como experto y ofrecer valor educativo profundo."
          adaptation="Promoción de un webinar donde un experto de Ábaco o un invitado hable sobre gestión de flujo de caja, con un enfoque práctico y cómo Ábaco puede ser una herramienta. Requiere registro."
        />

        <CalendarItem
          day="Martes"
          time="10 AM"
          platform="YouTube"
          pillar="2. Crecimiento Ágil & Estratégico"
          format="Video Testimonial Animado (2-3 min)"
          topic="La historia de [PYME Exitosa]: Cómo Ábaco impulsó su crecimiento."
          objective="Ofrecer prueba social y un caso de uso inspirador en un formato visualmente atractivo."
          adaptation="Video animado que narra la historia de una PYME, destacando el problema, la solución con Ábaco y los resultados. Tono inspirador y aspiracional."
        />

        <CalendarItem
          day="Viernes"
          time="1 PM"
          platform="Instagram"
          pillar="1. Liquidez Inteligente & Operativa"
          format="Reel (15s)"
          topic="La Ruta Más Rápida Hacia tu Liquidez: El Proceso Ábaco"
          objective="Simplificar el proceso de registro y uso de Ábaco, animando a la acción."
          adaptation="Reel corto con una animación o gráficos simples que muestren el proceso paso a paso (Registro -> Subir Factura -> Recibir Dinero). Rápido y claro."
        />
      </WeekBlock>
    </div>
  );
}

