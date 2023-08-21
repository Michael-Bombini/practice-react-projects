import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="bg-[#002233] text-white py-6 px-8 flex justify-between z-50 sticky top-0 items-center">
      <div className="text-3xl">
        <Link to={"/"}>Home </Link>
      </div>
      <ul className="flex gap-6 text-2xl">
        <li>
          <Link to={"posts"}>Posts </Link>
        </li>
        <li>
          <Link to={"users"}>Users </Link>
        </li>
        <li>
          <Link to={"todos"}>Todos</Link>
        </li>
      </ul>
    </nav>
  );
}
