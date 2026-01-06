

 function RecommendationCard({ title, items }) {
   return (
     <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-4">
       <h3 className="text-xl font-bold text-slate-800">{title}</h3>

       <ul className="space-y-3 text-slate-700">
         {items.map((item, index) => (
           <li key={index} className="leading-relaxed">
             <span className="font-semibold">{item.title}:</span>{" "}
             {item.description}
           </li>
         ))}
       </ul>
     </div>
   );
 }

export default function Recommendations() {
  const data = [
    {
      section: "A. Para Pauta (Paid Media)",
      items: [
        {
          title: "Casos de Éxito en Video",
          description:
            'Narrativas de "Problema-Solución-Resultado" para generar prueba social.',
        },
        {
          title: "Ofertas Directas",
          description:
            '"Liquidez en 24h" con verbos de acción. Ideal para captar leads fríos.',
        },
        {
          title: "Educación de Consideración",
          description:
            'Carruseles de "3 tips para optimizar flujo de caja".',
        },
      ],
    },
    {
      section: "B. Optimización Orgánica",
      items: [
        {
          title: "Cultura y Equipo",
          description:
            "Entrevistas cortas para fortalecer la confianza y el employer branding.",
        },
        {
          title: "Liderazgo de Pensamiento",
          description:
            "Simplificar conceptos técnicos usando analogías del día a día de una PYME.",
        },
        {
          title: "Datos Curiosos con Propósito",
          description:
            "Solo si la conexión con el producto es obvia y útil.",
        },
      ],
    },
    {
      section: "C. Eliminar o Reformular",
      items: [
        {
          title: "Trivia Desconectada",
          description:
            "Ej. Historias de billetes gigantes o Monopoly que no venden la solución.",
        },
        {
          title: "Tecnicismos Abstractos",
          description:
            'Cambiar "Ciclo de Conversión" por "¿Cómo te afecta esperar por tu dinero?".',
        },
        {
          title: "Updates Genéricos",
          description:
            'Los "All Hands" deben mostrar cómo la innovación interna beneficia al cliente.',
        },
      ],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold mb-10 text-slate-900">
        Recomendaciones de Contenido 
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {data.map((section, index) => (
          <RecommendationCard
            key={index}
            title={section.section}
            items={section.items}
          />
        ))}
      </div>
    </div>
  );
}
