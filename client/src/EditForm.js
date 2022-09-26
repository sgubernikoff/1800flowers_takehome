import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postActions } from "./store/posts-slice";

function EditForm() {
  const clickedPost = useSelector((state) => state.posts.clickedPost);

  const dispatch = useDispatch();

  const [title, setTitle] = useState(clickedPost.title);
  const [body, setBody] = useState(clickedPost.body);

  function handleSubmit() {
    const updatedData = { ...clickedPost, title: title, body: body };
    dispatch(postActions.endEdit(updatedData));
  }

  return (
    <div>
      <h3>Edit Form</h3>
      <div className="form_cont">
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <br></br>
        <label>Body</label>
        <textarea
          type="text"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          rows="7"
        ></textarea>
        <br></br>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default EditForm;
