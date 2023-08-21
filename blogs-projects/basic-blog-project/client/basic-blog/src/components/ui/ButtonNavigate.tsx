import { Link } from "react-router-dom";

interface Props {
  routeName: "post" | "user";
  userId?: number;
  postId?: number;
}

export default function ButtonNavigate({ routeName, userId, postId }: Props) {
  const routeId = postId ? postId : userId;

  return (
    <Link
      className="px-2 py-1 rounded-md bg-[#0077B3] text-white text-2xl"
      to={`/${routeName}/${routeId}`}
    >
      View
    </Link>
  );
}
