"use client"
import { Todo } from "@/model/Todo";
import TodoForm from "./TodoForm";

type Props = {
  todo: Todo;
  getTodosWhileAction: () => void
}

export default function TodoItem(props: Props) {
  const { todo, getTodosWhileAction } = props;

  return (
    <div className="todo-item flex item-end justify-between bg-white border border-slate-200">
      <div className="todo-item__action">
        <TodoForm type="update" item={todo} getTodosAction={() => {getTodosWhileAction()}} />
      </div>
    </div>
  );
}
