export default function AnalysisCampaigns() {

  return (
      <section className="bg-white rounded-3xl shadow-xl p-10 space-y-6">
    {/* Ads Performance */}
  <h2 className="text-2xl font-bold text-slate-800">
    Rendimiento de Anuncios
  </h2>

  <div className="overflow-x-auto">
    <table className="w-full text-sm text-left">
      <thead>
        <tr className="bg-slate-100 text-slate-700">
          <th className="p-3">Ad Name</th>

          <th className="p-3">Fecha Creación</th>
          <th className="p-3">Spend</th>
          <th className="p-3">Clicks</th>
          <th className="p-3">Impressions</th>
          <th className="p-3">Engagement</th>
        </tr>
      </thead>

      <tbody className="divide-y">
        <tr>
          <td className="p-3">Post: "En Ábaco te adelantamos el pago de facturas y..."</td>
         
          <td className="p-3">2025-10-29</td>
          <td className="p-3">$24.78</td>
          <td className="p-3">354</td>
          <td className="p-3">6,163</td>
          <td className="p-3">6,337</td>
        </tr>

        <tr>
          <td className="p-3">Publicación: "En Ábaco te damos acceso al efectivo de tus..."</td>

          <td className="p-3">2025-12-19</td>
          <td className="p-3">$24.26</td>
          <td className="p-3">1,174</td>
          <td className="p-3">11,890</td>
          <td className="p-3">12,209</td>
        </tr>

        <tr>
          <td className="p-3">Publicación: "El secreto de los negocios ágiles es la LIQUIDEZ...."</td>

          <td className="p-3">2025-11-13</td>
          <td className="p-3">$59.79</td>
          <td className="p-3">391</td>
          <td className="p-3">11,014</td>
          <td className="p-3">13,721</td>
        </tr>

        <tr>
          <td className="p-3">LL-WA-Servicios-Urgencia-Liquidez-24h</td>

          <td className="p-3">2025-11-13</td>
          <td className="p-3">$136.69</td>
          <td className="p-3">835</td>
          <td className="p-3">22,507</td>
          <td className="p-3">764</td>
        </tr>

        <tr>
          <td className="p-3">Publicación: "¿Sabías que a través de nuestra plataforma puedes..."</td>

          <td className="p-3">2025-10-02</td>
          <td className="p-3">$34.48</td>
          <td className="p-3">246</td>
          <td className="p-3">6,007</td>
          <td className="p-3">181</td>
        </tr>

        <tr>
          <td className="p-3">Publicación: "Un flujo de caja débil es como una fuga lenta de..."</td>

          <td className="p-3">2025-11-17</td>
          <td className="p-3">$57.64</td>
          <td className="p-3">192</td>
          <td className="p-3">6,071</td>
          <td className="p-3">4,126</td>
        </tr>

        <tr>
          <td className="p-3">Anuncio de lista 830 potenciales</td>

          <td className="p-3">2025-12-19</td>
          <td className="p-3">$137.73</td>
          <td className="p-3">304</td>
          <td className="p-3">29,547</td>
          <td className="p-3">15,024</td>
        </tr>

        <tr>
          <td className="p-3">LL-WA-Servicios-Urgencia-Liquidez-24h</td>

          <td className="p-3">2025-11-07</td>
          <td className="p-3">$41.43</td>
          <td className="p-3">17</td>
          <td className="p-3">3,937</td>
          <td className="p-3">15</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

  )
    }
