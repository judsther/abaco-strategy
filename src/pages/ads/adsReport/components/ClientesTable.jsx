const clientes = [
  {
    nombre: "ELECTROMECANICA INDUSTRIAL, S.A. DE C.V.",
    fuente: "Atom",
    rubro: "Servicios electromecánicos industriales",
    fecha: "11/27/2025",
    promedio: "$29,819.60",
    linea: "$25,000",
    detalle: [
      { mes: "Noviembre", monto: "$8,596.22", interes: "1.65%", ingreso: "$114.16", facturas: 4 },
      { mes: "Diciembre", monto: "$5,322.24", interes: "1.65%", ingreso: "$282.24", facturas: 2 },
    ],
    total: { monto: "$13,918.46", ingreso: "$396.40", facturas: 6 }
  },
  {
    nombre: "KEVIN ENRIQUE CABEZAS",
    fuente: "Redes",
    rubro: "Venta de extintores",
    fecha: "9/19/2025",
    promedio: "$4,962.32",
    linea: "$10,000",
    detalle: [
      { mes: "Septiembre", monto: "$3,840.11", interes: "2.00%", ingreso: "-", facturas: 18 },
      { mes: "Octubre", monto: "$958.49", interes: "2.00%", ingreso: "$94.73", facturas: 3 },
      { mes: "Noviembre", monto: "$2,114.28", interes: "2.00%", ingreso: "$96.95", facturas: 6 },
      { mes: "Diciembre", monto: "$1,763.61", interes: "2.00%", ingreso: "$145.05", facturas: 6 },
    ],
    total: { monto: "$8,676.49", ingreso: "$336.45", facturas: 33 }
  },{
  nombre: "INTERMARKET TRADERS, S.A. DE C.V.",
  fuente: "Redes",
  rubro: "Venta al por mayor de productos agrícolas",
  fecha: "10/21/2025",
  promedio: "$38,619.73",
  linea: "$50,000",
  detalle: [
    { mes: "Octubre", monto: "$13,802.40", interes: "3.25%", ingreso: "$155.96", facturas: 25 },
    { mes: "Noviembre", monto: "$5,101.20", interes: "3.25%", ingreso: "$449.38", facturas: 6 },
    { mes: "Diciembre", monto: "$5,732.10", interes: "3.25%", ingreso: "$245.85", facturas: 15 },
  ],
  total: { monto: "$24,635.70", ingreso: "$851.20", facturas: 46 }
}

];

import { Fragment, useState } from "react";

export default function ClientesTable() {
  const [open, setOpen] = useState(null);

  return (
    <section className="bg-white rounded-3xl shadow-xl p-10 space-y-6">
      <h2 className="text-2xl font-bold text-slate-800">
        Resultados por Clientes 
      </h2>

      <table className="w-full text-sm">
        <thead>
          <tr className="bg-slate-100">
            <th className="p-3 text-left">Cliente</th>
            <th className="p-3">Fuente</th>
            <th className="p-3">Rubro</th>
            <th className="p-3 whitespace-pre-wrap">{`Fecha de 
activación`}</th>
            <th className="p-3 whitespace-pre-wrap">{`Promedio de 
ventas según 
IVA`}</th>
            <th className="p-3 whitespace-pre-wrap">{`Línea de
Crédito 
Aprobada`}</th>
          </tr>
        </thead>

        <tbody className="divide-y">
          {clientes.map((c, i) => (
            <Fragment key={i}>
              <tr
                key={i}
                onClick={() => setOpen(open === i ? null : i)}
                className="cursor-pointer hover:bg-slate-50"
              >
                <td className="p-3 font-medium underline">{c.nombre}</td>
                <td className="p-3">{c.fuente}</td>
                <td className="p-3">{c.rubro}</td>
                <td className="p-3">{c.fecha}</td>
                <td className="p-3">{c.promedio}</td>
                <td className="p-3">{c.linea}</td>
              </tr>

              {open === i && (
                <tr className="bg-slate-50">
                  <td colSpan="6" className="p-4">
                    <table className="w-full text-left text-xs border">
                      <thead>
                        <tr className="bg-slate-200 text-left">
                          <th className="p-2">Mes</th>
                          <th className="p-2">Monto Financiado</th>
                          <th className="p-2">Interés</th>
                          <th className="p-2">Ingreso Efectivo</th>
                          <th className="p-2">Facturas Financiadas</th>
                        </tr>
                      </thead>

                      <tbody>
                        {c.detalle.map((d, j) => (
                          <tr key={j} className="border-t">
                            <td className="p-2">{d.mes}</td>
                            <td className="p-2">{d.monto}</td>
                            <td className="p-2">{d.interes}</td>
                            <td className="p-2 text-emerald-600">{d.ingreso}</td>
                            <td className="p-2 ">{d.facturas}</td>
                          </tr>
                        ))}

                        <tr className="font-semibold bg-white border-t">
                          <td className="p-2">Total</td>
                          <td className="p-2">{c.total.monto}</td>
                          <td></td>
                          <td className="p-2 text-emerald-700">{c.total.ingreso}</td>
                          <td className="p-2 ">{c.total.facturas}</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              )}
            </Fragment>
          ))}
        </tbody>
      </table>
    </section>
  );
}
