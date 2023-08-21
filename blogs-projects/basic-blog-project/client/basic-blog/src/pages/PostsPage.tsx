import { useQuery } from "react-query";
import PostCard from "../components/post/PostCard";
import PostLoading from "../components/post/PostLoading";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function PostsPage() {
  async function fetchPosts() {
    const resp = await fetch("http://127.0.0.1:3000/posts");
    const data: Post[] = await resp.json();
    return data;
  }

  const {
    isLoading,
    error,
    data: posts,
  } = useQuery<Post[]>("posts", fetchPosts, {
    staleTime: 60000, //1 minuto
  });

  if (isLoading) {
    return <PostLoading />;
  }

  if (error) {
    return <p>An error occurred: {(error as Error).message}</p>;
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-6xl text-black font-bold py-6">Posts</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            title={post.title}
            userId={post.userId}
            postId={post.id}
            body={post.body}
          />
        ))}
      </ul>
    </div>
  );
}
