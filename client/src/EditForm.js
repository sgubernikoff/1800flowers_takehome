import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postActions } from "./store/posts-slice";
import { useNavigate } from "react-router";
import DropdownOptions from "./DropdownOptions";

function EditForm() {
  const clickedPost = useSelector((state) => state.posts.clickedPost);
  const matchingPost = useSelector((state) => state.posts.matchingPost);
  const dispatch = useDispatch();
  const [title, setTitle] = useState(clickedPost ? clickedPost.title : "");
  const [body, setBody] = useState(clickedPost ? clickedPost.body : "");
  const id = useRef();
  const userId = useRef();
  const nav = useNavigate();

  // takes edited post data and adds to posts array replacing its old ID. Sorts post by original structure (user ID)

  function handleSubmit() {
    const updatedData = {
      title: title,
      body: body,
      id: id.current,
      userId: userId.current,
    };
    dispatch(postActions.endEdit(updatedData));
    nav("/");
  }

  // when title changes, redux checks if matchedPost = existing title. if it matches, sets body to corresponding post. title/matching post dependency array to prevent infinite loop/fire at right time

  useEffect(() => {
    dispatch(postActions.setMatchingPost(title));
    if (matchingPost && title === matchingPost.title) {
      setBody(matchingPost.body);
      id.current = matchingPost.id;
      userId.current = matchingPost.userId;
    }
  }, [title, matchingPost]);

  function home() {
    nav("/");
  }

  return (
    <div data-testid="edit">
      <h3>Edit Form</h3>
      <div className="form_cont">
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <DropdownOptions searchText={title} setSearchText={setTitle} />
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
      <br></br>
      <button className="edit_nav_button" onClick={home}>
        Back to Home
      </button>
    </div>
  );
}

export default EditForm;
