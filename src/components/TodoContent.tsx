"use client"
import { Suspense, useState, useEffect } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import { Todo } from "@/model/Todo";

export default function TodoContent() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const getTodosAction = async () => {
    const res = await fetch("/api/todo",{
      method: "GET"
    });
    const resValue = await res.json();
    setTodos(resValue.todos);
  }

  useEffect( () => {
    getTodosAction();
  },[]);

  return (
    <div className="todo-content">
      <Suspense fallback={<>loading...</>}>
        <TodoForm type="add" getTodosAction={() => {getTodosAction()}} />
        <TodoList todos={todos} getTodosWhileAction={() => {getTodosAction()}} />
      </Suspense>
    </div>
  );
}
