import { Routes, Route, Outlet } from "react-router-dom";
import Index from "./pages/Index";
import Navigation from "./components/ui/Navigation";
import PostsPage from "./pages/PostsPage";
import UsersPage from "./pages/UsersPage";
import TodosPage from "./pages/TodosPage";
import SinglePost from "./pages/SinglePost";
import SingleUser from "./pages/SingleUser";
import _404 from "./pages/_404";
import FormPost from "./pages/FormPost";
export default function App() {
  return (
    <>
      <Navigation />
      <main>
        <Routes>
          <Route path="/" Component={Index} />
          <Route path="/posts" Component={PostsPage} />
          <Route path="/post/:id" Component={SinglePost} />
          <Route path="/users" Component={UsersPage} />
          <Route path="/user/:id" Component={SingleUser} />
          <Route path="/todos" Component={TodosPage} />
          <Route path="/new-post" Component={FormPost} />
          <Route path="*" Component={_404} />
        </Routes>
      </main>
    </>
  );
}
