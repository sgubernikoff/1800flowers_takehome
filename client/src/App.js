import { React, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Posts from "./Posts.js";
import "./App.css";
import { useDispatch } from "react-redux";
import { postActions } from "./store/posts-slice";
import EditForm from "./EditForm.js";

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
    <div className="App" data-testid="App">
      <Routes>
        <Route exact path="/" element={<Posts />} />
        <Route exact path="/editpost" element={<EditForm />} />
      </Routes>
    </div>
  );
}

export default App;
