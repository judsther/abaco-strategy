import Comments from "./Comments";

export default function CalendarItem({
  postId1,
  postId2,
  postId3,
  postId4,
  day,
  time,
  pillar,
  format,
  caption1,
  contenido1,
  caption2,
  contenido2,
  caption3,
  contenido3,
  caption4,
  contenido4,
}) {
  return (
    <div className="bg-slate-100 border border-indigo-800 rounded-lg p-6 space-y-2">
      <div className="flex flex-wrap gap-3 text-xl text-indigo-800">
        <span>
          <strong>{day}</strong>
        </span>
        <span>{time}</span>
      </div>
      <div className="space-y-2 text-slate-700">
        <p>
          <strong>Pilar:</strong> {pillar}
        </p>
        <p>
          <strong>Formato:</strong> {format}
        </p>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white text-black p-4 rounded-xl">
            <p className="whitespace-pre-line">
              <strong className="bg-slate-300 p-2 rounded-xl">
                Contenido Semana 1:
              </strong>{" "}
              <br />
              <br />
              {contenido1}
            </p>
            <p className="text-slate-500 font-semibold">Caption:</p>
            <p className="whitespace-pre-line">{caption1}</p>
            {postId1 && <Comments postId={postId1} />}
          </div>
          <div className="bg-white text-black p-4 rounded-xl">
            <p className="whitespace-pre-line">
              <strong className="bg-slate-300 p-2 rounded-xl">
                Contenido Semana 2:
              </strong>{" "}
              <br />
              <br />
              {contenido2}
            </p>
            <p className="text-slate-500 font-semibold">Caption:</p>
            <p className="whitespace-pre-line">{caption2}</p>
            {postId2 && <Comments postId={postId2} />}
          </div>
          <div className="bg-white text-black p-4 rounded-xl">
            <p className="whitespace-pre-line">
              <strong className="bg-slate-300 p-2 rounded-xl">
                Contenido Semana 3:
              </strong>{" "}
              <br />
              <br />
              {contenido3}
            </p>
            <p className="text-slate-500 font-semibold">Caption:</p>
            <p className="whitespace-pre-line">{caption3}</p>
            {postId3 && <Comments postId={postId3} />}
          </div>
          <div className="bg-white text-black p-4 rounded-xl">
            <p className="whitespace-pre-line">
              <strong className="bg-slate-300 p-2 rounded-xl">
                Contenido Semana 4:
              </strong>{" "}
              <br />
              <br />
              {contenido4}
            </p>
            <p className="text-slate-500 font-semibold">Caption:</p>
            <p className="whitespace-pre-line">{caption4}</p>
            {postId4 && <Comments postId={postId4} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export function WeekBlock({ title, children }) {
  return (
    <section className="space-y-10">
      <h3 className="text-3xl font-semibold text-slate-900">{title}</h3>
      <div className="grid gap-20">{children}</div>
    </section>
  );
}
