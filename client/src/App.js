import { React, useState, useEffect } from "react";
import Posts from "./Posts.js";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);

  function getPosts() {
    fetch("/posts")
      .then((res) => res.json())
      .then((posts) => setPosts(posts));
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="App">
      <Posts posts={posts} />
    </div>
  );
}

export default App;
