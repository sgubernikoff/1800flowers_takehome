import { React, useEffect } from "react";
import Posts from "./Posts.js";
import "./App.css";
import { useDispatch } from "react-redux";
import { postActions } from "./store/posts-slice";

function App() {
  const dispatch = useDispatch();

  function getPosts() {
    fetch("/posts")
      .then((res) => res.json())
      .then((posts) => dispatch(postActions.getPosts(posts)));
  }

  // Only calls fetch once with dependency array []

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="App">
      <Posts />
    </div>
  );
}

export default App;
