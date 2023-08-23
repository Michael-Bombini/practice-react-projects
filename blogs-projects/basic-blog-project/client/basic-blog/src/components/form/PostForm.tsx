import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function PostForm() {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [newPost, setNewPost] = useState<number>();
  interface FormData {
    id: number;
    title: string;
    body: string;
    author: string;
  }

  async function postData() {
    try {
      const formData = { title, body, author };
      const resp = await axios.post<FormData>(
        "http://127.0.0.1:3000/posts",
        formData
      );
      setNewPost(resp.data.id);
    } catch (error) {
      console.log(error);
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    postData();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-1/2 mx-auto my-12 gap-8"
    >
      <h1 className="text-6xl font-bold ">New Post</h1>
      <input
        type="text"
        placeholder="Post Title..."
        className="outline-none border-2 border-blue-900 bg-gray-300 text-lg px-2 py-1"
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        name="content"
        id="content"
        cols={30}
        rows={10}
        placeholder="Post Content...."
        className="outline-none border-2 border-blue-900 bg-gray-300 text-lg px-2 py-1"
        onChange={(e) => setBody(e.target.value)}
      ></textarea>
      <input
        type="text"
        placeholder="Author Name"
        className="outline-none border-2 border-blue-900 bg-gray-300 text-lg px-2 py-1 "
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button className="bg-blue-700 text-white px-2 py-2 font-bold">
        SUBMIT
      </button>
      <Link
        className="bg-green-700 text-white px-2 py-2 font-bold my-12"
        to={newPost ? `/post/${newPost}` : "/new-post"}
      >
        See new created post
      </Link>
    </form>
  );
}
