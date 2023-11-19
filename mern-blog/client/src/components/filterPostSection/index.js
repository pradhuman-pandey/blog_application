// import usePostsList from "../../hooks/usePostsList";
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// export default function FilteredPostSection() {
//   const [loading, posts] = usePostsList();
//   const [filterPost, setFilterPost] = useState([]);
//   const categories = [
//     "Technology",
//     "Education",
//     "Career",
//     "News",
//     "Arts",
//     "Culture",
//     "Traveling",
//   ];
//   const getPosts = (item) => {
//     const filteredPosts = posts.filter((post) => {
//       return post.title.toLowerCase().includes(item);
//     });
//     setFilterPost(filteredPosts.splice(0, 3));
//   };

//   useEffect(() => {
//     getPosts();
//   }, [posts]);

//   if (loading) return <div>Loading...</div>;

//   return (
//     <div className="flex flex-wrap w-full md:grid-cols-1">
//       {/* Left Column */}
//       <div className="w-7/12">
//         {/* Card 1 */}
//         {/* {filterPost.map((post,index) => (
//           // <div className="p-4" style={{ backgroundColor: "#f1f1f1" }} key={index}>
//           //   <div
//           //     className="dark:bg-gray-800 dark:text-gray-50 p-6 max-h-10xl"
//           //     style={{ display: "grid", gap: "20px" }}
//           //   >
//           //     <div
//           //       className="container grid grid-cols-12 max-w-4xl dark:bg-gray-900"
//           //       style={{ boxShadow: "rgba(149, 157, 165, 0.4) 0px 8px 24px" }}
//           //     >
//           //       <div
//           //         className="bg-no-repeat bg-cover dark:bg-gray-700 col-span-full lg:col-span-4"
//           //         style={{
//           //           backgroundImage:
//           //             `url('https://localhost:4000/post/${post?._id}')`,
//           //           backgroundPosition: "center center",
//           //           backgroundBlendMode: "multiply",
//           //           backgroundSize: "cover",
//           //         }}
//           //       ></div>
//           //       <div
//           //         className="flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-10"
//           //         style={{ backgroundColor: "white" }}
//           //       >
//           //         <div className="flex justify-start">
//           //           <span className="px-2 py-1 text-xs rounded-full dark:bg-violet-400 dark:text-gray-900">
//           //             Label
//           //           </span>
//           //         </div>
//           //         <h1 className="text-3xl font-semibold">
//           //           Lorem ipsum dolor sit.
//           //         </h1>
//           //         <p className="flex-1 pt-2">
//           //           Lorem ipsum dolor sit amet consectetur adipisicing elit.
//           //           Iste, reprehenderit adipisci tempore voluptas laborum quod.
//           //         </p>
//           //         <a
//           //           rel="noopener noreferrer"
//           //           href="#"
//           //           className="inline-flex items-center pt-2 pb-6 space-x-2 text-sm dark:text-violet-400"
//           //         >
//           //           <span>Read more</span>
//           //           <svg
//           //             xmlns="http://www.w3.org/2000/svg"
//           //             viewBox="0 0 20 20"
//           //             fill="currentColor"
//           //             className="w-4 h-4"
//           //           >
//           //             <path
//           //               fillRule="evenodd"
//           //               d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
//           //               clipRule="evenodd"
//           //             ></path>
//           //           </svg>
//           //         </a>
//           //         <div className="flex items-center justify-between pt-2">
//           //           <div className="flex space-x-2">
//           //             <svg
//           //               xmlns="http://www.w3.org/2000/svg"
//           //               viewBox="0 0 20 20"
//           //               fill="currentColor"
//           //               className="w-5 h-5 dark:text-gray-400"
//           //             >
//           //               <path
//           //                 fillRule="evenodd"
//           //                 d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
//           //                 clipRule="evenodd"
//           //               ></path>
//           //             </svg>
//           //             <span className="self-center text-sm">
//           //               by Leroy Jenkins
//           //             </span>
//           //           </div>
//           //           <span className="text-xs">3 min read</span>
//           //         </div>
//           //       </div>
//           //     </div>
//           //   </div>
//           // </div>
//         ))} */}
//       </div>
//       {/* Right Column */}
//       <div className="w-5/12 bg-white rounded shadow-lg">
//         <div className="flex items-center space-x-4 p-8 mb-5">
//           <div>
//             <h4 className="font-semibold text-lg text-black-800 capitalize font-poppins tracking-wide">
//               Discover of what matters to you
//             </h4>
//           </div>
//         </div>
//         <ul className=" text-sm flex flex-wrap p-6" style={{ gap: "1.4rem" }}>
//           {categories.map((category,index) => (
//             <li onClick={getPosts(category)} key={index}>
//               <a
//                 href="#"
//                 className="flex items-center space-x-6 text-gray-800 p-4 rounded-md font-medium"
//                 style={{ backgroundColor: "#f2f2f2", padding: "15px 30px" }}
//               >
//                 <span>{category}</span>
//               </a>
//             </li>
//           ))}
//           {/* More list items */}
//         </ul>
//       </div>
//     </div>
//   );
// }
