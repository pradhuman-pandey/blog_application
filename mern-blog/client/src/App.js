import "./App.css";
import Post from "./components/post/index";
import Header from "./components/navbar/index";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/MetaBlog/index";
import IndexPage from "./components/postSection/index";
import LoginPage from "./pages/Login/index";
import RegisterPage from "./pages/Register/index";
// import { UserContextProvider } from './providers/index';
import CreatePost from "./components/createPost/index";
import PostPage from "./components/postDetails/index";
import EditPost from "./components/editPost/index";
import ProtectedRoutes from "./components/protectedRoutes/index";
import MetaBlog from "./pages/MetaBlog/index";

function App() {
  return (
    // <UserContextProvider>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/index-page" element={<IndexPage />} />
      <Route path="/metablog" element={<MetaBlog />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/" element={<ProtectedRoutes />}>
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="/edit/:id" element={<EditPost />} />
      </Route>
    </Routes>
    // </UserContextProvider>
  );
}

export default App;
