import {useState, useEffect} from 'react';
import axios from 'axios';
export default function usePostList() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const postList = async () =>{
      const response = await axios.get("http://localhost:4000/post");
      console.log(response);
      const allposts = await response.data;
      setPosts(allposts);
      setLoading(false);
    }
    postList();
  }, []);
  return [loading, posts];
}
