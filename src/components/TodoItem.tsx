import { Todo } from "../model/Todo";

type Props = {
  todo: Todo;
}

export default function TodoItem(props: Props) {
  const { todo } = props;

  const updateAction = () => {}
  const deleteAction = () => {}

  return (
    <div className="todo-item flex item-end justify-between bg-white border border-slate-200">
      <h3 className="todo-item__title p-4">{todo.title}</h3>
      <div className="todo-item__action">
        <button type="button" className="p-2 bg-yellow-400 text-white">更新</button>
        <button type="button" className="p-2 bg-pink-800 text-white">削除</button>
      </div>
    </div>
  );
}
