import { useState, useEffect } from "react";
import usePostList from "../../hooks/usePostsList";
import {Link} from 'react-router-dom';
export default function HomeSlider() {
  const [loading, posts] = usePostList();
  const [filteredPost, setFilteredPost] = useState([]);

  useEffect(() => {
    const BestPost = posts.sort((a, b) => b.views - a.views);
    //  console.log(BestPost[0]);
    setFilteredPost(BestPost[0]);
  }, [posts]);

  if (loading) return <p>Loading...</p>;
  return (
    <Link to={`/post/${filteredPost?._id}`}>
    <div className="main">
      <div className="side_home_img">
        <div className="home_post_img">Technology</div>
        <p>{filteredPost?.title}</p>
        <div
          className="profile_img"
          style={{
            display: "flex",
            gap: "15px",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <img
            src={`http://localhost:4000/${filteredPost?.cover}`}
            alt=""
            style={{ height: "30px", width: "30px", borderRadius: "50%" }}
          />
          <div
            className="name"
            style={{ fontSize: "1rem", fontWeight: "200", color: "#97989f" }}
          >
            {filteredPost?.author?.username}
          </div>
          <div
            className="blog_date"
            style={{ fontSize: "1rem", fontWeight: "200", color: "#97989f" }}
          >
            {filteredPost?.updatedAt.split("T")[0]}
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
}
