import { useCallback, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreatePost from "./components/createPost";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { usePost } from "./hooks/usePost";
import "./index.css"

function App() {

  const {post,findAll,findOne} = usePost();

  const handleGetPostButton = useCallback(async (title:string) => {
    await findOne(title)
},[findOne])

  useEffect(() => {
      findAll();
  },[findAll])

  return (
    <>
      <Router>
      <Header items={handleGetPostButton} />
        <Routes>
          <Route path="/" element={<Main items={post}/>} />
          <Route path="/create" element={<CreatePost />} />
        </Routes>
      </Router>
      <Footer/>
    </>

  );
}

export default App;
