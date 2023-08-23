import axios from "axios";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface State {
  isEditing: boolean;
  currentAuthor: string;
  currentBody: string;
  currentTitle: string;
  postId: string;
}

export default function PostForm() {
  const location = useLocation();

  const { state } = location;
  const { isEditing, currentAuthor, currentBody, currentTitle, postId } = state || {};

  const [title, setTitle] = useState<string>(currentTitle || '');
  const [body, setBody] = useState<string>(currentBody || '');
  const [author, setAuthor] = useState<string>(currentAuthor || '');
  const [newPost, setNewPost] = useState<string>(postId || '');
  interface FormData {
    id: string;
    title: string;
    body: string;
    author: string;
  }

  async function postData() {
    if (!isEditing) {
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
    } else {
      const formData = { title, body, author };
      const resp = await axios.put<FormData>(
        `http://127.0.0.1:3000/posts/${postId}`,
        formData
      );
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
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        name="content"
        id="content"
        cols={30}
        rows={10}
        placeholder="Post Content...."
        className="outline-none border-2 border-blue-900 bg-gray-300 text-lg px-2 py-1"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      ></textarea>
      <input
        type="text"
        placeholder="Author Name"
        className="outline-none border-2 border-blue-900 bg-gray-300 text-lg px-2 py-1 "
        value={author}
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
