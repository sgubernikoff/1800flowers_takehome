import { React } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { postActions } from "./store/posts-slice";

function PostsCard({ post, setSearchText }) {
  const dispatch = useDispatch();

  //Adds selected post card to clicked post array

  function handleClick() {
    dispatch(postActions.startEdit(post));
    setSearchText("");
  }

  return (
    <div className="post_card">
      <h1>User ID: {post.userId}</h1>
      <div className="title_hold">
        <h4>Title: {post.title}</h4>
      </div>
      <p>{post.body}</p>
      <button className="edit_button" onClick={handleClick}>
        Edit
      </button>
    </div>
  );
}

export default PostsCard;
