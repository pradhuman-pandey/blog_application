import usePostsList from "../../hooks/usePostsList";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function CareerUpdatesSection() {
  const [loading, posts] = usePostsList();
  const [filterPost, setFilterPost] = useState([]);
  const [latestPosts, setLatestPosts] = useState([]);
  const [popularPosts, setPopularPosts] = useState([]);
  const getAllPosts = () => {
    const filteredPosts = posts.filter((post) => {
      return (
        post.title.toLowerCase().includes("education") ||
        post.title.toLowerCase().includes("technology")
      );
    });
    // console.log(filteredPosts.splice(0,3));
    setFilterPost(filteredPosts.splice(0, 3));
  };

  const getLatestPosts = () => {
    const LatestfilteredPosts = posts
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      .slice(0, 4);
    setLatestPosts(LatestfilteredPosts);
    setPopularPosts([]);
  };
  const getPopularPosts = () => {
    const PopularfilteredPosts = posts
      .sort((a, b) => b.views - a.views)
      .slice(0, 4);
    setPopularPosts(PopularfilteredPosts);
    setLatestPosts([]);
  };

  useEffect(() => {
    getAllPosts();
  }, [posts]);

  if (loading) return <div>Loading...</div>;

  return (
    <section className="px-5 py-10 dark:bg-gray-800 dark:text-gray-100">
      <h1
        style={{
          fontSize: "large",
          fontSize: "2rem",
          fontWeight: "bold",
          marginBottom: "5%",
        }}
      >
        Career Updates
      </h1>
      <div className="grid grid-cols-12 mx-auto gap-y-6 md:gap-10">
        {/* Left Column */}
        <div className="flex flex-col justify-evenly col-span-12  space-y-8 md:space-y-16 md:col-span-3">
          {/* Career Updates Items */}
          {/* Item 1 */}
          <h3 className="flex items-center space-x-2 dark:text-gray-400">
            <span className="flex-shrink-0 w-2 h-2 uppercase rounded-full dark:bg-violet-400"></span>
            <span className="text-xs font-bold tracking uppercase">
              Exclusive
            </span>
          </h3>
          {filterPost.map((post,index) => (
            <div className="flex flex-col space-y-2 " key={index}>
              <img
                src={`http://localhost:4000/${post?.cover}`}
                style={{ height: "50%" }}
                width={"100%"}
              />
              <Link
                rel="noopener noreferrer"
                to={`http://localhost/4000/${post?._id}`}
                className="font-serif hover:underline"
              >
                {post?.title}
              </Link>
              <p
                className="text-xs dark:text-gray-400"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                {post?.createdAt.split("T")[0]}
                <Link
                  rel="noopener noreferrer"
                  to={`http://localhost/4000/${post?._id}`}
                  className="hover:underline dark:text-violet-400"
                >
                  {post?.author?.username}
                </Link>
              </p>
            </div>
          ))}
          {/* See More Exclusives */}
          <div className="flex flex-col w-full space-y-2">
            <div className="flex w-full h-1 bg-opacity-10 dark:bg-violet-400">
              <div className="w-1/2 h-full dark:bg-violet-400"></div>
            </div>
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center justify-between w-full"
            >
              <span className="text-xs font-bold tracking uppercase">
                See more exclusives
              </span>
              <svg
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 stroke-current dark:text-violet-400"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
        </div>
        {/* Middle Column */}
        <div
          className="relative flex col-span-12 bg-center bg-no-repeat bg-cover dark:bg-gray-500 xl:col-span-6 lg:col-span-5 md:col-span-9 min-h-96"
          style={{
            backgroundImage:
              "url('https://source.unsplash.com/random/239x319')",
          }}
        >
          {/* Image Overlay Content */}
          <span className="absolute px-1 pb-2 text-xs font-bold uppercase border-b-2 left-6 top-6 dark:border-violet-400 dark:text-gray-100">
            paris, france
          </span>
          <a className="flex flex-col items-center justify-end p-6 text-center sm:p-8 group dark:via-transparent flex-grow-1 bg-gradient-to-b dark:from-gray-900 dark:to-gray-900">
            <span className="flex items-center mb-4 space-x-2 dark:text-violet-400">
              <span className="relative flex-shrink-0 w-2 h-2 rounded-full dark:bg-violet-400">
                <span className="absolute flex-shrink-0 w-3 h-3 rounded-full -left-1 -top-1 animate-ping dark:bg-violet-400"></span>
              </span>
              <span className="text-sm font-bold">Live</span>
            </span>
            <h1
              rel="noopener noreferrer"
              href="#"
              className="font-serif text-2xl font-semibold group-hover:underline dark:text-gray-100"
            >
              Morbi mattis justo est, ac consectetur dui eleifend vitae. Donec
              venenatis?
            </h1>
          </a>
        </div>
        {/* Right Column */}
        <div className="hidden py-2 xl:col-span-3 lg:col-span-4 md:hidden lg:block">
          {/* Sorting Buttons */}
          <div className="mb-8 space-x-5 border-b-2 border-opacity-10 dark:border-violet-400">
            <button
              onClick={getLatestPosts}
              type="button"
              className="pb-5 text-xs font-bold uppercase border-b-2 dark:border-violet-400"
            >
              Latest
            </button>
            <button
              onClick={getPopularPosts}
              type="button"
              className="pb-5 text-xs font-bold uppercase border-b-2 dark:border-transparent dark:text-gray-400"
            >
              Popular
            </button>
          </div>
          {/* Recent Articles */}
          <div className="flex flex-col divide-y divide-gray-700">
            {/* Article 1 */}
            {(latestPosts.length === 0 ? popularPosts : latestPosts).map(
              (post) => (
                <div className="flex px-1 py-4">
                  <img
                    alt="img"
                    src={`http://localhost:4000/${post?.cover}`}
                    className="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500"
                    
                  />
                  <div className="flex flex-col flex-grow">
                    <Link
                      rel="noopener noreferrer"
                      to={`http://localhost/4000/${post?._id}`}
                      className="font-serif hover:underline"
                    >
                      {post?.title}
                    </Link>
                    <p className="mt-auto text-xs dark:text-gray-400">
                      {post?.createdAt.split("T")[0]}
                      <Link
                        rel="noopener noreferrer"
                        to={`http://localhost/4000/${post?._id}`}
                        className="block dark:text-blue-400 lg:ml-2 lg:inline hover:underline"
                      >
                        {post?.author?.username}
                      </Link>
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
