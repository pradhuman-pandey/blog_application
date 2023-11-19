import Post from "../post/index";
import { useEffect, useState } from "react";
import usePostList from "../../hooks/usePostsList";


export default function IndexPage() {
  const [loading, posts] = usePostList();
  if (loading) return <div>Loading...</div>;

  return (
    <>
      {posts.length > 0 &&
        posts.map((post, index) => <Post key={index} {...post} />)}
    </>
  );
}
