"use client";
import { useState } from "react";

export default function TodoForm() {
  const [title,setTitle] = useState("");
  const [body,setBody] = useState("");

  const addAction = () => {}

  return (
    <div className="todo-item flex item-end justify-between bg-white p-4 border border-slate-200">
      <input type="text" className="input p-2 border" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" className="input p-2 border" value={body} onChange={(e) => setBody(e.target.value)} />
      <button type="button" className="p-2 bg-blue-500 text-white" onClick={addAction}>追加</button>
    </div>
  );
}
