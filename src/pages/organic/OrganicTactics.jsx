import { Link } from "react-router-dom";
import PrimaryButton from "../../components/PrimaryButton";
import IndicatorsBlock from "./components/IndicatorsBlock";

export default function OrganicTactics() {
  return (
    <div className="max-w-6xl mx-auto py-14 px-6 space-y-12">
      <div className="flex space-x-2.5">
        <p>
          <Link
            className="text-white hover:text-blue-400 bg-indigo-800 p-2 px-4 rounded-2xl transition"
            to="/organic-analisis"
          >
            Análisis
          </Link>
        </p>
        <p>
          <Link
            className="text-white hover:text-blue-400 bg-indigo-800 p-2 px-4 rounded-2xl transition"
            to="/organic-strategy"
          >
            Estrategia
          </Link>
        </p>
        <p>
          <Link
            className="text-white hover:text-blue-400 bg-indigo-800 p-2 px-4 rounded-2xl transition"
            to="/organic-tactics"
          >
            Tácticas
          </Link>
        </p>
      </div>
      <PrimaryButton to={"/organic-tactics-calendar"} texto={"Calendario"} />
      <div className="max-w-6xl mx-auto space-y-10">
        {/* TÍTULO PRINCIPAL */}
        <div className="bg-white rounded-2xl shadow p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Arquitectura Táctica: Ábaco Q1 2026 - Acelerando la Liquidez y el
            Crecimiento de PYMES en LATAM
          </h1>
          <p className="text-gray-700 leading-relaxed">
            Esta arquitectura táctica detalla el plan de ejecución para el
            primer trimestre de 2026, diseñado para extender la estrategia de
            marketing y contenidos previamente establecida. Se enfoca en la
            acción, la diversificación de canales y la optimización basada en el
            rendimiento histórico, con el objetivo de maximizar el engagement,
            la generación de leads y la consolidación de Ábaco como líder en
            financiamiento fintech B2B para PYMES.
          </p>
        </div>

        {/* ENERO */}
        <div className="bg-white rounded-2xl shadow p-8 space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900">Enero 2026</h2>

          <div>
            <h3 className="font-semibold text-gray-800 mb-2">
              Objetivo Principal
            </h3>
            <p className="text-gray-700">
              Incrementar Brand Awareness y Engagement en nuevas plataformas, y
              reforzar el valor central de Ábaco.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-2">
              Indicadores Clave
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Alcance (Reach)</li>
              <li>Impresiones</li>
              <li>
                Engagement Rate (Likes, Comentarios, Compartidos, Guardados)
              </li>
              <li>Nuevos Seguidores (TikTok, YouTube)</li>
              <li>Reproducciones de Video</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-2">
              Conexión Estrategia
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Fase inicial de 'Creación y Prueba' (Días 31-60). Introduce nuevos
              pilares (Liquidez Inteligente, Confianza & Comunidad) en formatos
              nativos para TikTok y YouTube. Amplía la presencia de marca y
              capta nuevas audiencias en el TOFU, aprovechando el alto
              engagement de contenidos de propuesta de valor y humanización, y
              los datos curiosos con conexión directa a la solución.
            </p>
          </div>
        </div>

        {/* FEBRERO */}
        <div className="bg-white rounded-2xl shadow p-8 space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900">Febrero 2026</h2>

          <div>
            <h3 className="font-semibold text-gray-800 mb-2">
              Objetivo Principal
            </h3>
            <p className="text-gray-700">
              Generación de Consideración y Leads Calificados, posicionando a
              Ábaco como la solución preferente.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-2">
              Indicadores Clave
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Clics a Landing Page</li>
              <li>Registros en Plataforma/Formularios</li>
              <li>
                Tiempo de Permanencia en Contenido Educativo (YouTube, Blog)
              </li>
              <li>Crecimiento de Leads en CRM</li>
              <li>Comentarios con preguntas de interés</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-2">
              Conexión Estrategia
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Continúa la 'Creación y Prueba' y avanza a 'Optimización y
              Escala'. Se enfoca en los pilares 'Crecimiento Ágil' y 'Liderazgo
              Fintech'. Utiliza contenido educativo práctico y casos de éxito
              para nutrir audiencias en el MOFU, impulsando el interés activo y
              la acción hacia la plataforma de Ábaco. Prepara terreno para
              campañas pagadas de lead gen.
            </p>
          </div>
        </div>

        {/* MARZO */}
        <div className="bg-white rounded-2xl shadow p-8 space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900">Marzo 2026</h2>

          <div>
            <h3 className="font-semibold text-gray-800 mb-2">
              Objetivo Principal
            </h3>
            <p className="text-gray-700">
              Impulsar la Conversión, Fortalecer la Autoridad de Marca y
              Optimizar el Retorno de Inversión (ROI).
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-2">
              Indicadores Clave
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Costo por Lead (CPL)</li>
              <li>Tasa de Conversión (Sitio web/Plataforma)</li>
              <li>Número de Solicitudes de Financiamiento Completadas</li>
              <li>Share of Voice (Menciones de marca)</li>
              <li>Valor de Guardados/Compartidos de casos de éxito</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-2">
              Conexión Estrategia
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Fase final de 'Optimización y Escala' (Días 61-90). Ejecuta
              campañas de pauta con enfoque en BOFU. Prioriza casos de éxito
              detallados y contenido de liderazgo de pensamiento que validen la
              decisión de los clientes. Refuerza la credibilidad y empuja a la
              conversión final, aprovechando la confianza construida en meses
              anteriores, incluyendo el lado humano de la marca.
            </p>
          </div>
        </div>
        <IndicatorsBlock />
      </div>
    </div>
  );
}
