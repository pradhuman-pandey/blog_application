import usePostsList from "../../hooks/usePostsList";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function PostComponent() {
  const [loading, posts] = usePostsList();
  const [updatePost, setUpdatePost] = useState([]);
  const getAllPosts = () => {
    const allposts = posts
      .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
      .splice(0, 6);
    setUpdatePost(allposts);
  };

  useEffect(() => {
    getAllPosts();
  }, [posts]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="section_blogs">
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div
          className="p-4 mx-auto space-y-3 sm:space-y-12"
          style={{ width: "100vw" }}
        >
          <Link
            rel="noopener noreferrer"
            to={`/post/${updatePost[0]?._id}`}
            className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900"
          >
            <img
               src={"http://localhost:4000/" + updatePost[0]?.cover}
              alt=""
              className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
            />
            <div className="p-6 space-y-2 lg:col-span-5">
              <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
                {updatePost[0]?.title}
              </h3>
              <span className="text-xs dark:text-gray-400">
                {updatePost[0]?.createdAt.split("T")[0]}
              </span>
              <p>{updatePost[0]?.summary}</p>
            </div>
          </Link>
          <div className="grid justify-between grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {updatePost.map((post) => (
              <Link
                rel="noopener noreferrer"
                to={`/post/${post._id}`}
                className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900"
                style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
              >
                <img
                  role="presentation"
                  className="object-cover w-full rounded h-44 dark:bg-gray-500"
                  src={"http://localhost:4000/" + post?.cover}
                />
                <div className="p-6 space-y-2">
                  <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                    {post.title}
                  </h3>
                  <span className="text-xs dark:text-gray-400">
                    {post.createdAt.split("T")[0]}
                  </span>
                  <p>
                   {post.summary}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-900 dark:text-gray-400"
            >
              Load more posts...
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
