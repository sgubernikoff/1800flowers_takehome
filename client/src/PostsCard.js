import { React } from "react";
import "./App.css";

function PostsCard({ posts }) {
  console.log(posts);
  return (
    <div className="post_card">
      <h1>User ID: {posts.userId}</h1>
      <div className="title_hold">
        <h4>Title: {posts.title}</h4>
      </div>
      <p>{posts.body}</p>
      <button>Edit</button>
    </div>
  );
}

export default PostsCard;
