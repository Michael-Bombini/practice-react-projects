import { Route, Routes, useNavigate } from "react-router-dom";
import index from "./pages";
import UserCardPage from "./pages/UserCardPage";
import ArrayLettersPage from "./pages/ArrayLettersPage";
import NameCounterPage from "./pages/NameCounterPage";
import UseEffectPage from "./pages/UseEffectPage";
import UserListPage from "./pages/UserListPage";
import SimpleTodoPage from "./pages/SimpleTodoPage";
import UseFetchPage from "./pages/UseFetchPage";
import UseArrayPage from "./pages/UseArrayPage";

export default function App() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-blue-900">
      <button
        className="rounded bg-white text-black px-3 py-2 my-4 mx-2"
        onClick={() => navigate(-1)}
      >
        Go Back
      </button>
      <Routes>
        <Route path="/" Component={index} />
        <Route path="/user-card" Component={UserCardPage} />
        <Route path="/array-letters" Component={ArrayLettersPage} />
        <Route path="/name-counter" Component={NameCounterPage} />
        <Route path="/use-effect" Component={UseEffectPage} />
        <Route path="/user-list" Component={UserListPage} />
        <Route path="/simple-todo" Component={SimpleTodoPage} />
        <Route path="/use-fetch" Component={UseFetchPage} />
        <Route path="/use-array" Component={UseArrayPage} />
      </Routes>
    </div>
  );
}
