import { useQuery } from "react-query";
import PostCard from "../components/post/PostCard";
import PostLoading from "../components/post/PostLoading";
import { useState } from "react";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Geo {
  lat: string;
  lng: string;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export default function PostsPage() {
  const [filterUser, setFilterUser] = useState<number>();

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

  async function fetchUsers() {
    const resp = await fetch("http://127.0.0.1:3000/users");
    const data: User[] = await resp.json();
    return data;
  }

  const {
    isLoading: userIsLoading,
    error: userHasError,
    data: users,
  } = useQuery<User[]>("users", fetchUsers, {
    staleTime: 60000, //1 minuto
  });

  if (isLoading || userIsLoading) {
    return <PostLoading />;
  }

  if (error || userHasError) {
    return <p>An error occurred: {(error as Error).message}</p>;
  }

  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-6xl text-black font-bold py-6">
          Posts {filterUser || ""}
        </h1>
        <select
          name=""
          id=""
          className="bg-blue-700 text-white px-3 py-1"
          onChange={(e) => setFilterUser(+e.target.value)}
        >
          <option value="">Filter Users</option>
          {users.map((user) => {
            return <option value={user.id}>{user.name}</option>;
          })}
        </select>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {posts
          .filter((p) => p.userId === filterUser)
          .map((post) => (
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
