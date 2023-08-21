import { useQuery } from "react-query";
import UserCard from "../components/user/UserCard";
import TodoItem from "../components/todo/TodoItem";

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export default function TodosPage() {
  async function fetchTodos() {
    const resp = await fetch("http://127.0.0.1:3000/todos");
    const data: Todo[] = await resp.json();
    return data;
  }

  const {
    isLoading,
    error,
    data: todos,
  } = useQuery<Todo[]>("todos", fetchTodos, {
    staleTime: 60000, //1 minuto
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>An error occurred: {(error as Error).message}</p>;
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-6xl text-black font-bold py-6">Todos</h1>
      <ul className="flex flex-col gap-6 px-8">
        {todos.map((todo) => (
          <TodoItem title={todo.title} completed={todo.completed} />
        ))}
      </ul>
    </div>
  );
}
