import { Link } from "react-router-dom";

interface pagesLinks {
  link: string;
  text: string;
}

export default function index() {
  const pagesLinks: pagesLinks[] = [
    {
      link: "user-card",
      text: "User Cards",
    },
    {
      link: "array-letters",
      text: "Array Letters",
    },
    {
      link: "name-counter",
      text: "Name Counter",
    },
    {
      link: "use-effect",
      text: "Use Effect",
    },
    {
      link: "user-list",
      text: "User List",
    },
    {
      link: "simple-todo",
      text: "Simple Todolist",
    },
    {
      link: "use-fetch",
      text: "Use Fetch",
    },
    {
      link: "use-array",
      text: "Use Array",
    },
    {
      link: "use-localstorage",
      text: "Use LocalStorage",
    },
    {
      link: "form-validation",
      text: "Form Validation",
    },
    {
      link: "advanced-todo",
      text: "Advanced Todolist",
    },
  ];

  return (
    <main>
      <h1 className="text-center text-white text-3xl font-bold">Exercises</h1>

      <div className="max-w-screen-md mx-auto my-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-12">
          {pagesLinks.map((link) => (
            <Link
              to={link.link}
              className="bg-white text-center rounded-sm"
              key={link.link}
            >
              {link.text}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
