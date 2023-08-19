import { useState } from "react";
import AdvancedTodoItem from "./AdvancedTodoItem";
import useLocalStorage from "../uselocalstorage/useLocalStorage";

interface Todo {
  id: string;
  name: string;
  completed: boolean;
}

export default function AdvancedTodo() {
  const [todos, setTodos] = useLocalStorage<Todo[]>("todos", []);

  const [newTodo, setNewTodo] = useState<string>("");

  const [filterText, setFilterText] = useState<string>("");

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

  function handleComplete(id: string) {
    const updatedTodos = todos.map((todo) => {
      return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
    });
    setTodos(updatedTodos);
  }

  function handleDelete(id: string) {
    const updatedTodos = todos.filter((todo) => {
      return todo.id !== id ? todo : "";
    });

    setTodos(updatedTodos);
  }

  function handleEdit(id: string, editedText: string) {
    const updatedTodos = todos.map((todo) => {
      return todo.id === id ? { ...todo, name: editedText } : todo;
    });

    setTodos(updatedTodos);
  }

  return (
    <div className="container mx-auto text-white">
      <div className="flex flex-col items-center">
        <input
          type="text"
          placeholder="search todo name"
          className="text-black font-bold w-1/2 py-2 text-center"
          onChange={(e) => setFilterText(e.target.value)}
        />
        {todos
          .filter((todo) => todo.name.includes(filterText))
          .map((todo) => (
            <AdvancedTodoItem
              id={todo.id}
              name={todo.name}
              completed={todo.completed}
              onComplete={handleComplete}
              onDelete={handleDelete}
              onEdit={handleEdit}
              key={todo.id}
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
