"use client";
import { useState, useEffect } from "react";
import { Todo } from "@/model/Todo";

type Props = {
  type: string;
  item?: Todo;
  getTodosAction?: () => void;
}

export default function TodoForm(props: Props) {
  const { type, item, getTodosAction } = props;
  const [title,setTitle] = useState("");
  const [body,setBody] = useState("");
  const _getTodosAction = (getTodosAction ?? (() => {}));

  const addAction = async () => {
    const addItem = {
      title,
      body,
    }
    try {
      const res = await fetch("/api/todo",{
        method:"POST",
        body: JSON.stringify(addItem)
      });
      const resValue = await res.json();
      _getTodosAction();
    } catch (error) {
      console.error(error);
    }
  }

  const updateAction = async () => {
    const addItem = {
      title,
      body,
    }
    if(!item) return;
    try {
      const res = await fetch(`/api/todo/${item.id}`,{
        method:"PATCH",
        body: JSON.stringify(addItem)
      });
      const resValue = await res.json();
      _getTodosAction();
    } catch (error) {
      console.error(error);
    }
  };
  const deleteAction = async () => {
    if(!item) return;
    try {
      const res = await fetch(`/api/todo/${item.id}`,{
        method:"DELETE",
      });
      const resValue = await res.json();
      _getTodosAction();
    } catch (error) {
      console.error(error);
    }
  };

  if(type === "update" && item) {
    useEffect(() => {
      setTitle(item?.title);
      setBody(item?.body);
    },[]);
  }

  return (
    <div className="todo-item flex item-end justify-between bg-white p-4 border border-slate-200">
      <input type="text" className="input p-2 border" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" className="input p-2 border" value={body} onChange={(e) => setBody(e.target.value)} />
      { type === "add" && <button type="button" className="p-2 bg-blue-500 text-white" onClick={addAction}>追加</button>}
      { type !== "add" && <button type="button" className="p-2 bg-yellow-400 text-white" onClick={updateAction}>更新</button>}
      { type !== "add" && <button type="button" className="p-2 bg-pink-800 text-white" onClick={deleteAction}>削除</button>}      
    </div>
  );
}
