import { useState, useEffect } from "react";
import axios from '../services/axios/index';
export default function useUser() {
  const [loading, setLoading] = useState(true);
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    const getUserProfile = async () =>{
      const token = localStorage.getItem('X-BLOG-TOKEN')
      console.log(token);
      const response = await axios.get("http://localhost:4000/profile");
      console.log(response.data);
      setUserInfo(response.data);
      setLoading(false);
    }
    getUserProfile();
  }, []);

  return [loading, userInfo];
}
