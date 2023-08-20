import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Navigation from "./components/ui/Navigation";
import PostsPage from "./pages/PostsPage";
import UsersPage from "./pages/UsersPage";
import TodosPage from "./pages/TodosPage";

export default function App() {
  return (
    <>
      <Navigation />
      <main>
        <Routes>
          <Route path="/" Component={Index} />
          <Route path="/posts" Component={PostsPage} />
          <Route path="/users" Component={UsersPage} />
          <Route path="/todos" Component={TodosPage} />
        </Routes>
      </main>
    </>
  );
}
