import { useState } from "react";
import { Navigate } from "react-router-dom";
import Editor from "../editor/index";
import axios from "../../services/axios/index";
import useUser from "../../hooks/useUser";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [loading, userInfo] = useUser();
  async function createNewPost(ev) {
    const data = new FormData();
    data.set("userId", userInfo.id);
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.set("file", files[0]);
    ev.preventDefault();
    const response = await fetch("http://localhost:4000/post", {
      method: "POST",
      body: data,
      credentials: "include",
    });
    if (response.ok) {
      setRedirect(true);
    }
  }

  if (redirect) {
    return <Navigate to={"/metablog"} />;
  }
  return (
    <>
    <div className="grid justify-center items-center mt-2 gap-8 ">
    <h1 style={{textAlign:"center", fontSize:"1.4rem", fontWeight:"200"}}>Create New Post </h1>
      <form
        onSubmit={createNewPost}
        className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-6 border rounded-lg shadow-lg"
        style={{width:"80vw",}}
      >
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
          className="w-full mb-4 p-2 border rounded focus:outline-none focus:border-blue-500"
        />
        <input
          type="text"
          placeholder="Summary"
          value={summary}
          onChange={(ev) => setSummary(ev.target.value)}
          className="w-full mb-4 p-2 border rounded focus:outline-none focus:border-blue-500"
        />
        <input
          type="file"
          onChange={(ev) => setFiles(ev.target.files)}
          className="w-full mb-4 p-2 border rounded focus:outline-none focus:border-blue-500"
        />
        <Editor value={content} onChange={(ev) => setContent(ev.target.value)} className="mb-4" />
        <button
          type="submit"
          className="w-full mt-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
        >
          Create Post
        </button>
      </form>
    </div>
    </>
  );
}
