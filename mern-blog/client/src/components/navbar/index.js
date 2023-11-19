import { Link } from "react-router-dom";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useUser from "../../hooks/useUser";

export default function Header() {
  const [loading, userInfo] = useUser();
  const [searchPost, setSearchPost] = useState("");
  const navigate = useNavigate();

  const performLogOut = async (e) => {
    e.preventDefault();
    try {
      await axios.delete("http://localhost:4000/logout");
    } finally {
      localStorage.clear();
      navigate("/");
    }
  };

  return (
    <nav className="border-gray-200 p-5">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <span href="/" className="flex items-center">
          <svg
            className="h-10 mr-3"
            width="51"
            height="70"
            viewBox="0 0 51 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Your SVG paths */}
          </svg>
          <span className="self-center text-lg font-semibold whitespace-nowrap">
            <Link to="/">FlowBite</Link>
          </span>
        </span>
        <div className="flex md:order-2">
          {/* Search Input */}
          <div className="relative mr-3 md:mr-0 hidden md:block">
            {/* Search Icon */}
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Search Icon Path */}
              </svg>
            </div>
            {/* Search Input */}
            <input
              type="text"
              value={searchPost}
              onChange={(e) => setSearchPost(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2"
              placeholder="Search..."
            />
          </div>
          {/* Mobile Menu Toggle Button */}
          <button
            data-collapse-toggle="mobile-menu-3"
            type="button"
            className="md:hidden text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center"
            aria-controls="mobile-menu-3"
            aria-expanded="false"
          >
            {/* Menu Toggle Icons */}
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Menu Icon Paths */}
            </svg>
            <svg
              className="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Close Icon Paths */}
            </svg>
          </button>
        </div>
        {/* Navigation Links */}
        <div
          className="hidden md:flex justify-between items-center w-full md:w-auto md:order-1"
          id="mobile-menu-3"
        >
          <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
            <li>
              <Link to="/" className="text-blue-700 font-bold">
                Home
              </Link>
            </li>
            <li>
              <Link to="/blog" className="text-gray-800 hover:text-blue-700">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/pages" className="text-gray-800 hover:text-blue-700">
                Pages
              </Link>
            </li>
            {loading ? (
              <>
                {/* Loading State */}
                {/* Add Loading Indicator */}
              </>
            ) : userInfo ? (
              <>
                {/* User is Logged In */}
                <li>
                  <Link
                    to="/create-post"
                    className="text-gray-800 hover:text-blue-700"
                  >
                    Create Post
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={performLogOut}
                    className="text-gray-800 hover:text-blue-700"
                  >
                    Logout ({userInfo.username})
                  </Link>
                </li>
              </>
            ) : (
              <>
                {/* User is Not Logged In */}
                <li>
                  <Link
                    to="/login"
                    className="text-gray-800 hover:text-blue-700"
                  >
                    Login
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
