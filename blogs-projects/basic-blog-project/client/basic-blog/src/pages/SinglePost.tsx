import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import PostLoading from "../components/post/PostLoading";
import Comment from "../components/comment/Comment";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
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

export default function SinglePost() {
  const { id } = useParams();
  console.log(id);

  async function fetchPost() {
    const resp = await fetch(`http://127.0.0.1:3000/posts/${id}`);
    const data: Post = await resp.json();
    return data;
  }

  async function fetchComments() {
    const resp = await fetch(`http://127.0.0.1:3000/posts/${id}/comments`);
    const data: Comment[] = await resp.json();
    return data;
  }

  async function fetchUser() {
    const resp = await fetch(`http://127.0.0.1:3000/users/${id}`);
    const data: User = await resp.json();
    return data;
  }

  const {
    isLoading: postLoading,
    error: postError,
    data: post,
  } = useQuery<Post>(`post${id}`, fetchPost, {
    staleTime: 60000, //1 minuto
  });

  const {
    isLoading: commentLoading,
    error: commentError,
    data: comments,
  } = useQuery<Comment[]>(`comment${id}`, fetchComments, {
    staleTime: 60000, //1 minuto
  });

  const {
    isLoading: userLoading,
    error: userError,
    data: user,
  } = useQuery<User>(`user${id}`, fetchUser, {
    staleTime: 60000, //1 minuto
  });

  if (postLoading || commentLoading || userLoading) {
    return <PostLoading />;
  }

  if (postError || commentError) {
    return <p>An error occurred: {(postError as Error).message}</p>;
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-6xl text-black font-bold py-6">{post.title}</h1>
      <p className="text-xl">{post.body}</p>
      <div className="flex flex-col gap-6 my-6">
      <div className="text-2xl">By: <Link to={`/user/${post.userId}`} className="underline text-blue-700">{user.name}</Link></div>
        <h2 className="text-3xl text-black font-bold py-6">Comments</h2>
        {comments.map((comment) => {
          return <Comment key={comment.id} comment={comment.body} email={comment.email} />;
        })}
      </div>
    </div>
  );
}
