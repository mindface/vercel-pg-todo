import { Suspense } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

export default function TodoContent() {

  return (
    <div className="todo-content">
      <Suspense fallback={<>loading...</>}>
        <TodoForm />
        <TodoList />
      </Suspense>
    </div>
  );
}
