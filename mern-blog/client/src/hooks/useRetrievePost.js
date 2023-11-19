import { useState, useEffect } from "react";
import axios from 'axios';
export default function useRetrievePost(id) {
  const [postInfo, setPostInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getPost = async (id) => {
      const response = await axios.get(`http://localhost:4000/post/${id}`);
      console.log(response);
      const data = await response.data;
      setLoading(false);
      setPostInfo(data);
    };
    getPost(id);
  }, []);

  return [loading, postInfo];
}
