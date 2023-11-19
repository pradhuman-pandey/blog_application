import { useState, useEffect } from "react";
import usePostsList from "../../hooks/usePostsList";
import { Link } from "react-router-dom";
export default function HomePage() {
  const [loading, posts] = usePostsList();
  const [filteredLikedPosts, setFilteredLikedPosts] = useState([]);

  const getFilteredViewedPosts = () => {
    const filteredPosts = posts.sort((a, b) => b.Likes - a.Likes).slice(0, 6);
    setFilteredLikedPosts(filteredPosts);
    console.log(filteredPosts);
  };

  useEffect(() => {
    getFilteredViewedPosts();
  }, [posts]);

  return (
    <div className="lg:flex items-stretch md:mt-12 ">
      <div className="lg:w-1/2">
        <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6">
          <div className="sm:w-1/2 relative">
            <div>
              <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                {filteredLikedPosts[0]?.createdAt.split("T")[0]}
              </p>
              <div className="absolute bottom-0 left-0 p-6">
                <h2 className="text-xl font-semibold 5 text-white">
                  {filteredLikedPosts[0]?.title}
                </h2>
                <p className="text-base leading-4 text-white mt-2">
                  {filteredLikedPosts[0]?.summary}
                </p>
                <Link
                  href="javascript:void(0)"
                  className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                  to={`/post/${filteredLikedPosts[0]?._id}`}
                >
                  <p className="pr-2 text-sm font-medium leading-none">
                    Read More
                  </p>
                  <svg
                    className="fill-stroke"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.75 12.5L10.25 8L5.75 3.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <img
              src={`http://localhost:4000/${filteredLikedPosts[0]?.cover}`}
              className="w-full"
              alt="chair"
            />
          </div>
          <div className="sm:w-1/2 sm:mt-0 mt-4 relative">
            <div>
              <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                {filteredLikedPosts[1]?.createdAt.split("T")[0]}
              </p>
              <div className="absolute bottom-0 left-0 p-6">
                <h2 className="text-xl font-semibold 5 text-white">
                  {filteredLikedPosts[1]?.title}
                </h2>
                <p className="text-base leading-4 text-white mt-2">
                  {filteredLikedPosts[1]?.summary}
                </p>
                <Link
                  to={`/post/${filteredLikedPosts[0]?._id}`}
                  href="javascript:void(0)"
                  className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                >
                  <p className="pr-2 text-sm font-medium leading-none">
                    Read More
                  </p>
                  <svg
                    className="fill-stroke"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.75 12.5L10.25 8L5.75 3.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <img
              src={`http://localhost:4000/${filteredLikedPosts[1]?.cover}`}
              className="w-full"
              alt="wall design"
            />
          </div>
        </div>
        <div className="relative">
          <div>
            <p className="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
              {filteredLikedPosts[2]?.createdAt.split("T")[0]}
            </p>
            <div className="absolute bottom-0 left-0 md:p-10 p-6">
              <h2 className="text-xl font-semibold 5 text-white">
                {filteredLikedPosts[2]?.title}
              </h2>
              <p className="text-base leading-4 text-white mt-2">
                {filteredLikedPosts[2]?.summary}
              </p>
              <Link
                to={`/post/${filteredLikedPosts[0]?._id}`}
                href="javascript:void(0)"
                className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
              >
                <p className="pr-2 text-sm font-medium leading-none">
                  Read More
                </p>
                <svg
                  className="fill-stroke"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.75 12.5L10.25 8L5.75 3.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <img
            src={`http://localhost:4000/${filteredLikedPosts[2]?.cover}`}
            alt="sitting place"
            className="w-full mt-8 md:mt-6 hidden sm:block"
          />
          <img
            className="w-full mt-4 sm:hidden"
            src={`http://localhost:4000/${filteredLikedPosts[2]?.cover}`}
            alt="sitting place"
          />
        </div>
      </div>
      <div className="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between">
        <div className="relative">
          <div>
            <p className="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
              {filteredLikedPosts[3]?.createdAt.split("T")[3]}
            </p>
            <div className="absolute bottom-0 left-0 md:p-10 p-6">
              <h2 className="text-xl font-semibold 5 text-white">
                {filteredLikedPosts[3]?.title}
              </h2>
              <p className="text-base leading-4 text-white mt-2">
                {filteredLikedPosts[3]?.summary}
              </p>
              <Link
                to={`/post/${filteredLikedPosts[0]?._id}`}
                href="javascript:void(0)"
                className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
              >
                <p className="pr-2 text-sm font-medium leading-none">
                  Read More
                </p>
                <svg
                  className="fill-stroke"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.75 12.5L10.25 8L5.75 3.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <img
            src={`http://localhost:4000/${filteredLikedPosts[3]?.cover}`}
            alt="sitting place"
            className="w-full sm:block hidden"
          />
          {/* <!-- <img className="w-full sm:hidden" src="https://source.unsplash.com/random/480x360?8" alt="sitting place" /> --> */}
        </div>
        <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4">
          <div className="relative w-full">
            <div>
              <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                {filteredLikedPosts[4]?.createdAt.split("T")[0]}
              </p>
              <div className="absolute bottom-0 left-0 p-6">
                <h2 className="text-xl font-semibold 5 text-white">
                  {filteredLikedPosts[4]?.title}
                </h2>
                <p className="text-base leading-4 text-white mt-2">
                  {filteredLikedPosts[4]?.summary}
                </p>
                <Link
                  to={`/post/${filteredLikedPosts[0]?._id}`}
                  href="javascript:void(0)"
                  className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                >
                  <p className="pr-2 text-sm font-medium leading-none">
                    Read More
                  </p>
                  <svg
                    className="fill-stroke"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.75 12.5L10.25 8L5.75 3.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <img
              src={`http://localhost:4000/${filteredLikedPosts[4]?.cover}`}
              className="w-full"
              alt="chair"
            />
          </div>
          <div className="relative w-full sm:mt-0 mt-4">
            <div>
              <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                {filteredLikedPosts[5]?.createdAt.split("T")[0]}
              </p>
              <div className="absolute bottom-0 left-0 p-6">
                <h2 className="text-xl font-semibold 5 text-white">
                  {filteredLikedPosts[5]?.title}
                </h2>
                <p className="text-base leading-4 text-white mt-2">
                  {filteredLikedPosts[5]?.summary}
                </p>
                <Link
                  to={`/post/${filteredLikedPosts[5]?._id}`}
                  href="javascript:void(0)"
                  className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                >
                  <p className="pr-2 text-sm font-medium leading-none">
                    Read More
                  </p>
                  <svg
                    className="fill-stroke"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.75 12.5L10.25 8L5.75 3.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <img
              src={`http://localhost:4000/${filteredLikedPosts[5]?.cover}`}
              className="w-full"
              alt="chair"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
