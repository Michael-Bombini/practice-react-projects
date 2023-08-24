import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

interface State {
  isEditing: boolean;
  currentAuthor: string;
  currentBody: string;
  currentTitle: string;
  postId: string;
}

interface FormData {
  id: string;
  title: string;
  body: string;
  author: string;
}

interface Errors {
  title?: string;
  body?: string;
  author?: string;
}

export default function PostForm() {
  const location = useLocation();
  const { state } = location;
  const { isEditing, currentAuthor, currentBody, currentTitle, postId }: State =
    state || {};

  const [title, setTitle] = useState<string>(currentTitle || "");
  const [body, setBody] = useState<string>(currentBody || "");
  const [author, setAuthor] = useState<string>(currentAuthor || "");
  const [newPost, setNewPost] = useState<string>(postId || "");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errors, setErrors] = useState<Errors>({});

  async function postData() {
    setIsSubmitting(true);
    setErrors({}); // Clear previous errors
    try {
      if (!title || !body || !author) {
        setErrors({
          title: !title ? "Title is required" : '',
          body: !body ? "Body is required" : '',
          author: !author ? "Author is required" : '',
        });
        throw new Error("Form validation failed");
      }

      const formData = { title, body, author };
      const url = isEditing
        ? `http://127.0.0.1:3000/posts/${postId}`
        : "http://127.0.0.1:3000/posts";

      const method = isEditing ? "put" : "post";

      const resp = await axios[method]<FormData>(url, formData);

      if (!isEditing) {
        setNewPost(resp.data.id);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        setIsSubmitting(false);
        setTitle("");
        setBody("");
        setAuthor("");
      }, 2000);
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
        className={`outline-none border-2 ${
          errors.title ? "border-red-500" : "border-blue-900"
        } bg-gray-300 text-lg px-2 py-1`}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      {errors.title && <p className="text-red-500">{errors.title}</p>}
      <textarea
        name="content"
        id="content"
        cols={30}
        rows={10}
        placeholder="Post Content...."
        className={`outline-none border-2 ${
          errors.body ? "border-red-500" : "border-blue-900"
        } bg-gray-300 text-lg px-2 py-1`}
        value={body}
        onChange={(e) => setBody(e.target.value)}
      ></textarea>
      {errors.body && <p className="text-red-500">{errors.body}</p>}
      <input
        type="text"
        placeholder="Author Name"
        className={`outline-none border-2 ${
          errors.author ? "border-red-500" : "border-blue-900"
        } bg-gray-300 text-lg px-2 py-1`}
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      {errors.author && <p className="text-red-500">{errors.author}</p>}
      <button
        className={`bg-blue-700 text-white px-2 py-2 font-bold ${
          isSubmitting ? "cursor-not-allowed opacity-70 animate-pulse" : ""
        }`}
        disabled={isSubmitting}
      >
        {isEditing ? "UPDATE" : "SUBMIT"}
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
