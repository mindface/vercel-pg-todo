"use client"
import TodoItem from "./TodoItem";
import { Todo } from "@/model/Todo";

type Props = {
  todos: Todo[];
  getTodosWhileAction: () => void;
}

export default function TodoList(props: Props) {
  const { todos, getTodosWhileAction } = props;

  return (
    <div className="todo-list">
      {todos.map((item) => <TodoItem key={item.id} todo={item} getTodosWhileAction={() => {getTodosWhileAction()}} />)}
    </div>
  );
}
