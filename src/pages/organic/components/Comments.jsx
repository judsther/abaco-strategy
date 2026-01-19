import { useEffect, useState } from "react";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../../../firebase.js";





export default function Comments({ postId }) {
  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");

useEffect(() => {
  if (!postId) return;

  const q = query(
    collection(db, "posts", postId, "comments"),
    orderBy("createdAt", "asc")
  );

  const unsubscribe = onSnapshot(q, (snapshot) => {
    setComments(
      snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
    );
  });

  return () => unsubscribe();
}, [postId]);

const handleSubmit = async () => {
  if (!text.trim() || !postId) return;

  try {
    await addDoc(collection(db, "posts", postId, "comments"), {
      text,
      author: "Feedback interno",
      createdAt: serverTimestamp(),
    });

    setText("");
  } catch (error) {
    console.error("Error al guardar comentario:", error);
  }
};



  return (
    <div className="mt-6 border-t pt-4 space-y-3">
      <h4 className="font-semibold text-slate-700">Comentarios</h4>

      {comments.map((c) => (
        <div key={c.id} className="bg-slate-50 rounded-xl p-3 text-sm">
          <p className="text-slate-800">{c.text}</p>
        </div>
      ))}

      <textarea
        className="w-full border rounded-xl p-3 text-sm"
        rows={3}
        placeholder="Deja tu feedback aquí…"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        onClick={handleSubmit}
        className="bg-indigo-600 text-white px-4 py-2 rounded-full text-sm"
      >
        Comentar
      </button>
    </div>
  );
}
