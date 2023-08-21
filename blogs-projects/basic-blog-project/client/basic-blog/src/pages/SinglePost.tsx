import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import PostLoading from "../components/post/PostLoading";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function SinglePost() {
  const { id } = useParams();
  console.log(id);

  async function fetchPost() {
    const resp = await fetch(`http://127.0.0.1:3000/posts/${id}`);
    const data: Post = await resp.json();
    return data;
  }

  const {
    isLoading,
    error,
    data: post,
  } = useQuery<Post>(`post${id}`, fetchPost, {
    staleTime: 60000, //1 minuto
  });

  if (!post) {
  }

  if (isLoading) {
    return <PostLoading />;
  }

  if (error) {
    return <p>An error occurred: {(error as Error).message}</p>;
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-6xl text-black font-bold py-6">{post.title}</h1>
      <p className="text-xl">{post.body}</p>
    </div>
  );
}
