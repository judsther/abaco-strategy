import React from 'react'

export default function Intro() {
  return (
    <div className="max-w-5xl mx-auto py-14 px-6">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-extrabold text-slate-900 leading-tight">
          Estrategia Integral de Contenido: Ábaco
        </h1>
        <p className="mt-3 text-lg text-slate-600">
          Q1 2026 — Maximizando Engagement, Conversión y Posicionamiento para
          Fintech B2B
        </p>
      </div>

      {/* Card Principal */}
      <div className="bg-white rounded-3xl shadow-xl p-10 space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-slate-800 mb-4">
            1. Resumen Ejecutivo
          </h2>
          <p className="text-slate-700 leading-relaxed">
            Esta estrategia busca fortalecer la identidad de Ábaco como la
            fintech líder en liquidez para PYMES en El Salvador y Centroamérica.
            Basada en el análisis de datos históricos, el plan redefine los
            pilares de contenido y la distribución por canales para transformar
            desafíos financieros en oportunidades de crecimiento.
          </p>
        </section>

        {/* Puntos Clave */}
        <section>
          <h3 className="text-xl font-semibold text-slate-800 mb-4">
            Puntos Clave
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-50 rounded-2xl p-6">
              <h4 className="font-semibold text-slate-900 mb-2">
                Propuesta de Valor
              </h4>
              <p className="text-slate-700">
                Combinación de soluciones directas con historias de éxito y
                consejos prácticos.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6">
              <h4 className="font-semibold text-slate-900 mb-2">Narrativa</h4>
              <p className="text-slate-700">
                Empoderamiento de las PYMES{" "}
                <span className="italic">
                  ("Tu crecimiento no tiene que esperar")
                </span>
                .
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6">
              <h4 className="font-semibold text-slate-900 mb-2">
                Guía de Estilo
              </h4>
              <p className="text-slate-700">
                Tono unificado centrado en la persuasión, agilidad y claridad.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6">
              <h4 className="font-semibold text-slate-900 mb-2">Canales</h4>
              <p className="text-slate-700">
                Estrategias diferenciadas para Meta, LinkedIn + nuevos canales como YouTube y TikTok.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
