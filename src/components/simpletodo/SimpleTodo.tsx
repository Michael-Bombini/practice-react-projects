import { useState } from "react";
import SimpleTodoItem from "./SimpleTodoItem";

interface Todo {
  id: string;
  name: string;
  completed: boolean;
}

export default function SimpleTodo() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const [newTodo, setNewTodo] = useState<string>("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!newTodo.trim()) {
      return;
    }
    setTodos((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        name: newTodo,
        completed: false,
      },
    ]);
  }
  return (
    <div className="container mx-auto text-white">
      <div className="flex flex-col items-center">
        {todos.map((todo) => (
          <SimpleTodoItem
            id={todo.id}
            name={todo.name}
            completed={todo.completed}
          />
        ))}
      </div>
      <div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-8"
        >
          <input
            type="text"
            className="text-black"
            placeholder="Add todo"
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button className="bg-white px-2 py-1 text-black font-bold">
            Add todo
          </button>
        </form>
      </div>
    </div>
  );
}
