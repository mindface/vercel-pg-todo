import TodoItem from "./TodoItem";

export default function TodoList() {
  const tasks = [
    {
      id: 1,
      title: "test001",
      body: "test001"
    },
    {
      id: 2,
      title: "test002",
      body: "test002"
    },
    {
      id: 3,
      title: "test003",
      body: "test003"
    },
  ]

  return (
    <div className="todo-list">
      {tasks.map((item) => <TodoItem key={item.id} todo={item} />)}
    </div>
  );
}
