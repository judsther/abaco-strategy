import Comments from "../../components/Comments";

export default function CalendarItems({
  day,
  time,
  platform,
  pillar,
  format,

  // Formato tipo contenido1, contenido2...
  contenido1,
  caption1,
  postId1,

  contenido2,
  caption2,
  postId2,

  contenido3,
  caption3,
  postId3,

  contenido4,
  caption4,
  postId4,

  contenido5,
  caption5,
  postId5,
}) {
  // Convertimos automáticamente a array interno
  const posts = [
    { contenido: contenido1, caption: caption1, postId: postId1 },
    { contenido: contenido2, caption: caption2, postId: postId2 },
    { contenido: contenido3, caption: caption3, postId: postId3 },
    { contenido: contenido4, caption: caption4, postId: postId4 },
    { contenido: contenido5, caption: caption5, postId: postId5 },
  ].filter((post) => post.contenido); // elimina vacíos

  return (
 
    <div className="bg-white border border-indigo-200 rounded-2xl p-8 shadow-sm space-y-8">
  
  {/* HEADER SUPERIOR */}
  <div className="flex items-center justify-between gap-6">
    
    {/* Lado izquierdo */}
    <div>
      <h4 className="text-2xl font-semibold text-indigo-700">
        {day}
      </h4>
      <p className="text-slate-500 text-sm mt-1">{time}</p>
    </div>

    {/* Lado derecho */}
    <div className=" gap-6 text-sm">
      {platform && (
        <div>
          <p className="text-slate-400 uppercase tracking-wide text-xs">
            Canal
          </p>
          <p className="font-medium text-slate-800">{platform}</p>
        </div>
      )}

      <div>
        <p className="text-slate-400 uppercase tracking-wide text-xs">
          Pilar
        </p>
        <p className="font-medium text-slate-800">{pillar}</p>
      </div>

      <div>
        <p className="text-slate-400 uppercase tracking-wide text-xs">
          Formato
        </p>
        <p className="font-medium text-slate-800">{format}</p>
      </div>
    </div>
  </div>

  {/* CONTENIDOS */}
  <div className=" gap-8">
    {posts.map((post, index) => (
      <div
        key={post.postId || index}
        className="bg-slate-50 border border-slate-200 p-6 rounded-xl space-y-5"
      >
        <div>
          <span className="text-xs font-semibold bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full">
            Contenido {index + 1}
          </span>

          <p className="whitespace-pre-line mt-4 text-slate-700 leading-relaxed">
            {post.contenido}
          </p>
        </div>

        {post.caption && (
          <div>
            <p className="text-slate-400 text-xs uppercase tracking-wide mb-1">
              Caption
            </p>
            <p className="whitespace-pre-line text-slate-700 leading-relaxed">
              {post.caption}
            </p>
          </div>
        )}

        {post.postId && (
          <div className="pt-4 border-t border-slate-200">
            <Comments postId={post.postId} />
          </div>
        )}
      </div>
    ))}
  </div>
</div>
  );
}
export function WeekBlock({ title, children }) {
  return (
    <section className="space-y-12">
      <h3 className="text-4xl font-bold text-slate-900">
        {title}
      </h3>

      <div className="space-y-16">
        {children}
      </div>
    </section>
  );
}