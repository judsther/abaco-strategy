import React from "react";

const clientesResumen = [
  {
    nombre: "Alberto Martínez Linares",
    fecha: "2/17/2026",
    ingresoProyectado: "$469.15",
    montoDesembolsado: "$8,578.32",
    linea: "$50,000.00",
    diasPromedio: "34",
    tasaMax: "3.00%",
    asesoriaPromedio: "$33.36",
  },
  {
    nombre: "AMERICAN DOORS, S.A. DE C.V.",
    fecha: "1/12/2026",
    ingresoProyectado: "$54.63",
    montoDesembolsado: "$2,292.56",
    linea: "$10,000.00",
    diasPromedio: "16",
    tasaMax: "2.25%",
    asesoriaPromedio: "$23.19",
  },
  {
    nombre: "BROTEK, S.A. DE C.V.",
    fecha: "1/9/2026",
    ingresoProyectado: "$897.07",
    montoDesembolsado: "$8,174.45",
    linea: "$10,000.00",
    diasPromedio: "67",
    tasaMax: "3.00%",
    asesoriaPromedio: "$116.66",
  },
  {
    nombre: "CARCAMO MARTINEZ Y COMPAÑIA",
    fecha: "1/29/2026",
    ingresoProyectado: "$503.60",
    montoDesembolsado: "$9,428.70",
    linea: "$10,000.00",
    diasPromedio: "45",
    tasaMax: "1.90%",
    asesoriaPromedio: "$192.93",
  },
  {
    nombre: "CARLOS AGUILAR MONTANO",
    fecha: "1/30/2026",
    ingresoProyectado: "$681.61",
    montoDesembolsado: "$15,912.28",
    linea: "$50,000.00",
    diasPromedio: "37",
    tasaMax: "1.90%",
    asesoriaPromedio: "$151.60",
  },
  {
    nombre: "CONSTRUCTORA MEDINA SA DE CV",
    fecha: "2/11/2026",
    ingresoProyectado: "$9,172.80",
    montoDesembolsado: "$194,135.92",
    linea: "$50,000.00",
    diasPromedio: "51",
    tasaMax: "1.50%",
    asesoriaPromedio: "$3,465.92",
  },
  {
    nombre: "Corporacion Figueroa Salazar sa de cv",
    fecha: "2/17/2026",
    ingresoProyectado: "$47.95",
    montoDesembolsado: "$1,261.02",
    linea: "$50,000.00",
    diasPromedio: "30",
    tasaMax: "1.75%",
    asesoriaPromedio: "$22.51",
  },
  {
    nombre: "CORPORACION SALAZAR RIVAS, S.A. DE C.V.",
    fecha: "2/20/2026",
    ingresoProyectado: "$334.09",
    montoDesembolsado: "$6,793.88",
    linea: "$50,000.00",
    diasPromedio: "45",
    tasaMax: "1.50%",
    asesoriaPromedio: "$78.43",
  },
  {
    nombre: "DATAGUARD, S.A. DE C.V.",
    fecha: "2/26/2026",
    ingresoProyectado: "$2,099.67",
    montoDesembolsado: "$57,790.54",
    linea: "$50,000.00",
    diasPromedio: "44",
    tasaMax: "1.25%",
    asesoriaPromedio: "$881.80",
  },
  {
    nombre: "ERNESTO TORRES RAMIREZ",
    fecha: "1/7/2026",
    ingresoProyectado: "$662.85",
    montoDesembolsado: "$10,276.74",
    linea: "$10,000.00",
    diasPromedio: "34",
    tasaMax: "3.60%",
    asesoriaPromedio: "$21.27",
  },
  {
    nombre: "EXPRESATEWEB, S.A. DE C.V.",
    fecha: "2/17/2026",
    ingresoProyectado: "$481.86",
    montoDesembolsado: "$13,591.66",
    linea: "$50,000.00",
    diasPromedio: "20",
    tasaMax: "2.50%",
    asesoriaPromedio: "$26.31",
  },
  {
    nombre: "FALMAR S.A. DE C.V.",
    fecha: "2/26/2026",
    ingresoProyectado: "$5,732.36",
    montoDesembolsado: "$43,446.46",
    linea: "$50,000.00",
    diasPromedio: "113",
    tasaMax: "1.75%",
    asesoriaPromedio: "$460.48",
  },
  {
    nombre: "iRescue SA de CV",
    fecha: "2/23/2026",
    ingresoProyectado: "$535.10",
    montoDesembolsado: "$4,952.04",
    linea: "$50,000.00",
    diasPromedio: "59",
    tasaMax: "3.60%",
    asesoriaPromedio: "$127.40",
  },
  {
    nombre: "Johana Sorto Reyes",
    fecha: "2/11/2026",
    ingresoProyectado: "$382.66",
    montoDesembolsado: "$7,037.28",
    linea: "$50,000.00",
    diasPromedio: "44",
    tasaMax: "2.00%",
    asesoriaPromedio: "$144.00",
  },
  {
    nombre: "KARLA HERNANDEZ LOPEZ",
    fecha: "1/21/2026",
    ingresoProyectado: "$477.88",
    montoDesembolsado: "$2,743.80",
    linea: "$10,000.00",
    diasPromedio: "92",
    tasaMax: "3.60%",
    asesoriaPromedio: "$38.05",
  },
  {
    nombre: "M T INVERSIONES, S.A. DE C.V.",
    fecha: "1/15/2026",
    ingresoProyectado: "$1,726.71",
    montoDesembolsado: "$66,027.04",
    linea: "$75,000.00",
    diasPromedio: "20",
    tasaMax: "2.00%",
    asesoriaPromedio: "$217.46",
  },
  {
    nombre: "MARIA IRAHETA MACUA",
    fecha: "1/26/2026",
    ingresoProyectado: "$69.61",
    montoDesembolsado: "$2,040.50",
    linea: "$50,000.00",
    diasPromedio: "21",
    tasaMax: "3.00%",
    asesoriaPromedio: "$5.16",
  },
  {
    nombre: "NOURISHING INVESTMENTS S.A. DE C.V.",
    fecha: "2/26/2026",
    ingresoProyectado: "$594.82",
    montoDesembolsado: "$9,737.92",
    linea: "$25,000.00",
    diasPromedio: "45",
    tasaMax: "2.50%",
    asesoriaPromedio: "$57.95",
  },
  {
    nombre: "REPRESENTACIONES ELECTRICAS, S.A. DE C.V.",
    fecha: "2/19/2026",
    ingresoProyectado: "$3,243.88",
    montoDesembolsado: "$80,002.33",
    linea: "$100,000.00",
    diasPromedio: "44",
    tasaMax: "1.50%",
    asesoriaPromedio: "$1,220.73",
  },
  {
    nombre: "WILVATEX, S.A. DE C.V.",
    fecha: "1/5/2026",
    ingresoProyectado: "$1,764.19",
    montoDesembolsado: "$22,584.47",
    linea: "$25,000.00",
    diasPromedio: "45",
    tasaMax: "3.00%",
    asesoriaPromedio: "$29.07",
  },
    {
    nombre: "David Reina Morataya",
    fecha: "2/27/2026",
    ingresoProyectado: "–",
    montoDesembolsado: "$3,655.37",
    linea: "$50,000.00",
    diasPromedio: "–",
    tasaMax: "3.50%",
    asesoriaPromedio: "$8.59",
  },
  {
    nombre: "VIRTUAL HOLDING, S.A. DE C.V.",
    fecha: "2/27/2026",
    ingresoProyectado: "$76.19",
    montoDesembolsado: "$1,852.81",
    linea: "$10,000.00",
    diasPromedio: "45",
    tasaMax: "1.50%",
    asesoriaPromedio: "$14.135",
  },
];

export default function ClientesTable2() {
  return (
    <section className="bg-white rounded-3xl shadow-xl p-10 space-y-6">
      <h2 className="text-2xl font-bold text-slate-800">
        Resumen General de Clientes YTD
      </h2>

      <table className="w-full text-sm">
        <thead>
          <tr className="bg-slate-100">
            <th className="p-3 text-left">Cliente</th>
            <th className="p-3">Fecha Primer Desembolso</th>
            <th className="p-3">Ingreso Proyectado</th>
            <th className="p-3">Monto Desembolsado</th>
            <th className="p-3">Línea Máxima</th>
            <th className="p-3">Promedio Días</th>
            <th className="p-3">Tasa Máxima</th>
            <th className="p-3">Promedio Asesoría</th>
          </tr>
        </thead>

        <tbody className="divide-y">
          {clientesResumen.map((c, i) => (
            <tr key={i} className="hover:bg-slate-50">
              <td className="p-3 text-indigo-600 font-medium">{c.nombre}</td>
              <td className="p-3">{c.fecha}</td>
              <td className="p-3 text-emerald-600 font-medium">
                {c.ingresoProyectado}
              </td>
              <td className="p-3">{c.montoDesembolsado}</td>
              <td className="p-3">{c.linea}</td>
              <td className="p-3">{c.diasPromedio}</td>
              <td className="p-3">{c.tasaMax}</td>
              <td className="p-3">{c.asesoriaPromedio}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}