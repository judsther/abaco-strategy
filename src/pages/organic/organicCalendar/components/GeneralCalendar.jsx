import CalendarItems, { WeekBlock } from "./CalendarItems";

export default function MetaCalendarMarzo() {
  return (
    <div className="space-y-20">

      {/* ============================ SEMANA 1 ============================ */}
      <WeekBlock title="Semana 1">
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Carrousel 1 */}
          <CalendarItems
            day="Carrousel 1"
            time="6 PM"
            platform="Instagram / Facebook"
            pillar="Liquidez Inteligente & Operativa"
            format="Carrousel"
            contenido1={`3 Principios para desbloquear la liquidez de tu empresa

Mira tus Facturas como Capital: Deja de esperar. Tu capital ya está ahí, solo necesita un impulso.

Agiliza tus Cobros: Elimina la burocracia y transforma tus cuentas por cobrar en efectivo al instante.

Decide el Futuro: Con liquidez constante, tomas el control para invertir, crecer y liderar tu negocio.`}
            caption1={`Tu empresa merece crecer sin pausas. Descubre cómo transformar el valor de tus cuentas por cobrar en el combustible que necesitas. La liquidez no es solo dinero; es poder de decisión. 
#FinanciamientoPymes #ElSalvador`}
            postId1="marzo-2026-carrousel-1"
          />

          {/* Dato 1 */}
          <CalendarItems
            day="Dato 1"
            time="6 PM"
            platform="Instagram / Facebook"
            pillar="Datos Curiosos"
            format="Static"
            contenido1={`El capital atrapado en facturas puede ser hasta el 30% de los activos de una empresa.`}
            caption1={`Hasta el 30% de tus activos que podría estar impulsando tu crecimiento. Conoce cómo liberar el valor de tus facturas y transformarlo en loquidez operativa en horas. Link en nuestra Bio.`}
            postId1="marzo-2026-dato-1"
          />

          {/* Foto 1 */}
          <CalendarItems
            day="Fotografía 1"
            time="8 PM"
            platform="Instagram / Facebook / LinkedIn"
            pillar="Confianza & Comunidad Ábaco"
            format="Fotografía"
            contenido1={`Imagen: Foto de Juan Carlos frente a su computadora con dos o 3 personas de su equipo detrás de él viendo la pantalla.`}
            caption1={`El equipo de Tecnología de Ábaco siempre está trabajando para que tu experiencia en nuestra plataforma sea ágil y segura. Tu adelantas tus facturas en horas, nosotros hacemos el trabajo complicado. Procesos 100% digitales con el corazón humano que tu negocio merece.
#TechArea`}
            postId1="marzo-2026-foto-1"
          />

          {/* Comercial 1 */}
          <CalendarItems
            day="Static Comercial 1"
            time="8 PM"
            platform="Instagram / Facebook"
            pillar="Comercial/Promocional Oferta Directa"
            format="Single Image"
            contenido1={`Adelanta tus facturas hoy mismo. Tu capital inmediato te espera.`}
            caption1={`No pierdas más días de liquidez. Regístrate gratis en abacocapital.co, sube tus facturas y recibe tu dinero en horas.`}
            postId1="marzo-2026-static-1"
          />
        </div>
      </WeekBlock>

      {/* ============================ SEMANA 2 ============================ */}
      <WeekBlock title="Semana 2">
        <div className="grid lg:grid-cols-2 gap-10">

          <CalendarItems
            day="Carrousel 2"
            time="6 PM"
            platform="Instagram / Facebook"
            pillar="Liquidez Inteligente & Operativa"
            format="Carrousel"
            contenido2={`5 Pilares para un Flujo de Caja óptimo en tu PYME

Conocer tus Ciclos: Identifica cuándo entra y sale tu dinero para anticipar necesidades.

Optimizar tus Cuentas por Cobrar: No dejes tu capital atrapado. Adelanta tus facturas.

Negociar con Poder: Con efectivo inmediato, obtienes mejores condiciones con proveedores.

Invertir con Confianza: El capital liberado es tu motor para stock, marketing y expansión.

Adoptar la Agilidad Digital: Transforma el papeleo en velocidad para tu flujo de caja.`}
            caption2={`Un flujo de caja imparable es la base de todo negocio exitoso. Con estos 5 puntos, no solo gestionas tu liquidez, la dominas. 
            #PYMES #ElSalvador`}
            postId2="marzo-2026-carrousel-2"
          />

          <CalendarItems
            day="Dato 2"
            time="6 PM"
            platform="Instagram / Facebook"
            pillar="Datos Curiosos"
            format="Static"
            contenido2={`El tiempo promedio de cobro de facturas en LATAM supera los 60 días. Rompe ese ciclo con liquidez inmediata.`}
            caption2={`Tu flujo de caja no tiene por qué depender de los largos plazos de pago. Con Ábaco, adelantas tus facturas y mantienes tu operación fluyendo sin interrupciones.`}
            postId2="marzo-2026-dato-2"
          />
 <CalendarItems
            day="Fotografía 2"
            time="8 PM"
            platform="Instagram / Facebook / LinkedIn"
            pillar="Confianza & Comunidad Ábaco"
            format="Fotografía"
            contenido2={`Imagen: Foto de algunos miembros del equipo de Comercial en acción [dos sentadas a la par frente a computador una viendo a la otra y el otro de pie viendo y señalando la laptop de una].`}
            caption2={`Más allá de las transacciones, nuestros asesores financieros construyen relaciones. Gracias por confiar en nosotros para ser el aliado estratégico que tu empresa necesita para crecer. Nuestro 
#ComercialArea`}
            postId2="marzo-2026-foto-2"
          />

          <CalendarItems
            day="Static Comercial 2"
            time="8 PM"
            platform="Instagram / Facebook"
            pillar="Comercial/Promocional Oferta Directa"
            format="Single Image"
            contenido2={`¿Necesitas liquidez URGENTE? Hazlo posible con Ábaco.`}
            caption2={`Con CashX de Ábaco, obtén el adelanto que necesitas sin trámites complicados. Visita el link en bio y solicita tu adelanto de facturas.`}
            postId2="marzo-2026-static-2"
          />
        </div>
      </WeekBlock>

      {/* ============================ SEMANA 3 y 4 ============================ */}
      {/* Para no hacer esto gigantesco aquí, replica exactamente el mismo patrón
          usando Carrousel 3 + Dato 3 + Foto 3 + Comercial 3 como Semana 3
          y Carrousel 4 + Dato 4 + Foto 4 + Comercial 4 como Semana 4 */}

          {/* ============================ SEMANA 3 ============================ */}
<WeekBlock title="Semana 3">
  <div className="grid lg:grid-cols-2 gap-10">

    {/* Carrousel 3 */}
    <CalendarItems
      day="Carrousel 3"
      time="6 PM"
      platform="Instagram / Facebook"
      pillar="Liquidez Inteligente & Operativa"
      format="Carrousel"
      contenido3={`Guía: Gestión de facturas enfocada en crecimiento para PYMES.

#1. Conviértelas en ventaja competitiva: Dile que sí a ese cliente grande con plazos de pago largos y no pierdas oportunidades.

#2. Reconoce el valor oculto: Tus facturas por cobrar son activos listos para convertirse en efectivo con el factoraje ágil de Ábaco.

#3. Impulsa tu Crecimiento: Usa esa liquidez inmediata para comprar stock, invertir en campañas o expandirte.`}
      caption3={`La gestión de facturas no tiene por qué ser compleja. Con esta guía, conviertes la espera en oportunidad y cada factura en un paso más hacia el crecimiento de tu PYME. #PYMES #ElSalvador`}
      postId3="marzo-2026-carrousel-3"
    />

    {/* Dato 3 */}
    <CalendarItems
      day="Dato 3"
      time="6 PM"
      platform="Instagram / Facebook"
      pillar="Datos Curiosos"
      format="Static"
      contenido3={`Invertir en tecnología financiera ahorra hasta un 40% en costos operativos para PYMES.`}
      caption3={`La digitalización no es un gasto, es una inversión inteligente. Descubre cómo nuestras soluciones de financiamiento digital optimizan tu liquidez y potencian tu rentabilidad.`}
      postId3="marzo-2026-dato-3"
    />

    {/* Foto 3 */}
    <CalendarItems
      day="Fotografía 3"
      time="8 PM"
      platform="Instagram / Facebook / LinkedIn"
      pillar="Confianza & Comunidad Ábaco"
      format="Fotografía"
      contenido3={`Foto del Equipo de Contaduría`}
      caption3={`El área de contaduría Ábaco mantiene el orden y la transparencia en todas nuestras operaciones. Con su ayuda podemos ofrecer el impulso que la comunidad empresarial salvadoreña necesita.
         #AccountingArea`}
      postId3="marzo-2026-foto-3"
    />

    {/* Comercial 3 */}
    <CalendarItems
      day="Static Comercial 3"
      time="8 PM"
      platform="Instagram / Facebook"
      pillar="Comercial/Promocional Oferta Directa"
      format="Single Image"
      contenido3={`Financia tus facturas y controla tu flujo de caja. Condiciones exclusivas para tu empresa.`}
      caption3={`Descubre las mejores condiciones de crédito adaptadas a tu negocio. Regístrate en el link en nuestra bio para una asesoría personalizada y comienza a crecer sin ataduras.`}
      postId3="marzo-2026-static-3"
    />

  </div>
</WeekBlock>

{/* ============================ SEMANA 4 ============================ */}
<WeekBlock title="Semana 4">
  <div className="grid lg:grid-cols-2 gap-10">

    {/* Carrousel 4 */}
    <CalendarItems
      day="Carrousel 4"
      time="6 PM"
      platform="Instagram / Facebook"
      pillar="Liquidez Inteligente & Operativa"
      format="Carrousel"
      contenido4={`De papel a liquidez: 3 Pasos para digitalizar tu flujo de caja

1. Centraliza tus cuentas por cobrar con herramientas digitales. Obtienes mayor visibilidad y optimización de tiempo.

2. Sustituye los procesos bancarios lentos. Busca alternativas digitales de financiamiento inmediato y sin filas.

3. Convierte tus facturas por cobrar en liquidez en tiempo récord con alternativas de factoraje 100% digital y ágil en plataformas como Ábaco.`}
      caption4={`Tu empresa no puede esperar. La evolución al financiamiento digital pone el control en tus manos, eliminando el papeleo y las demoras. Así es como la tecnología impulsa tu liquidez y tu libertad. #TecnologíaPYMES #ElSalvador`}
      postId4="marzo-2026-carrousel-4"
    />

    {/* Dato 4 */}
    <CalendarItems
      day="Dato 4"
      time="6 PM"
      platform="Instagram / Facebook"
      pillar="Datos Curiosos"
      format="Static"
      contenido4={`Texto imagen: El 70% de las empresas que usan factoring reportan mayor capacidad de inversión.`}
      caption4={`El financiamiento de facturas es una herramienta poderosa para escalar. Únete a las empresas que están reinvirtiendo en su futuro y liderando sus mercados.`}
      postId4="marzo-2026-dato-4"
    />

    {/* Foto 4 */}
    <CalendarItems
      day="Fotografía 4"
      time="8 PM"
      platform="Instagram / Facebook / LinkedIn"
      pillar="Confianza & Comunidad Ábaco"
      format="Fotografía"
      contenido4={`Imagen: Foto de algunos miembros del área de cobranza.`}
      caption4={`Nos sentimos honrados de impulsar a la comunidad empresarial salvadoreña. Nuestro equipo de cobranza está comprometido con ayudar a cada empresa a cumplir con sus objetivos de crecimiento a través de soluciones flexibles y humanas. #CobranzaArea`}
      postId4="marzo-2026-foto-4"
    />

    {/* Comercial 4 */}
    <CalendarItems
      day="Static Comercial 4"
      time="8 PM"
      platform="Instagram / Facebook"
      pillar="Comercial/Promocional Oferta Directa"
      format="Single Image"
      contenido4={`Transforma tus ventas al crédito en tu ventaja competitiva sin arriesgar tu flujo de caja.`}
      caption4={`¿Listo para dar el siguiente paso? Nuestra plataforma digital te conecta con tu capital en horas. Registra tu empresa y empieza a cobrar tus facturas a tu tiempo.`}
      postId4="marzo-2026-static-4"
    />

  </div>
</WeekBlock>

      {/* ============================ SEMANA 5 ============================ */}
      <WeekBlock title="Semana 5">
        <div className="grid lg:grid-cols-2 gap-10">
          <CalendarItems
            day="Carrousel 5"
            time="6 PM"
            platform="Instagram / Facebook"
            pillar="Liquidez Inteligente & Operativa"
            format="Carrousel"
            contenido5={`3 fugas de liquidez que están drenando el crecimiento de tu empresa (y cómo sellarlas hoy).

1. Rechazar contratos de clientes grandes porque sus plazos de pago son muy largos. Solución: Acepta el contrato, toma ventaja y adelanta tu efectivo.

2. Perder semanas en filas y trámites bancarios para obtener capital de trabajo.    Solución: Cámbiate una plataforma digital que te financia en horas.

3. Operar solo con lo que tienes en el banco hoy, sin proyectar tus cuentas por cobrar. Solución: Visualiza tus facturas como efectivo disponible para reinvertir ya.`}
            caption5={`En El Salvador, muchas PYMES con gran potencial mueren en el "éxito": tienen las manos llenas de facturas, pero los bolsillos vacíos de efectivo. 

Estos 3 errores no son fallas de administración, son fugas de oportunidad que te impiden crecer. Con el financiamiento digital de Ábaco, puedes darle a tus clientes la flexibilidad que necesitan mientras tú recibes la liquidez que tu empresa exige.`}
            postId5="marzo-2026-carrousel-5"
          />
        </div>
      </WeekBlock>

    </div>
  );
}