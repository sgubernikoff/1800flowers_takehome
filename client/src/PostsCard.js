import { React } from "react";
import "./App.css";

function PostsCard({ posts }) {
  console.log(posts);
  return (
    <div>
      <h1>{posts.userId}</h1>
      <h4>{posts.title}</h4>
      <p>{posts.body}</p>
    </div>
  );
}

export default PostsCard;
