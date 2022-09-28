import { React, useState } from "react";
import "./App.css";
import PostsCard from "./PostsCard";
import { useSelector, useDispatch } from "react-redux";
import DropdownOptions from "./DropdownOptions";
import { useNavigate } from "react-router";
import { postActions } from "./store/posts-slice";

function PrimarySearch() {
  const posts = useSelector((state) => state.posts.postList);

  const [searchText, setSearchText] = useState("");

  const nav = useNavigate();
  const dispatch = useDispatch();

  // Filters searches if matching post = searched content

  const searchResults = [...posts].filter((posts) => {
    return posts.title.toLowerCase().includes(searchText.toLowerCase());
  });

  // Displays search results

  const displayPosts = searchResults.map((post) => (
    <PostsCard key={post.id} post={post} setSearchText={setSearchText} />
  ));

  // Clears form if you go from a selected post to general edit form

  function navToEdit() {
    nav("/editpost");
    dispatch(postActions.startEdit(""));
  }

  return (
    <div className="posts_container" data-testid="edit">
      <h3 className="searcher">Search For Your Title</h3>
      <button className="edit_nav_button" onClick={navToEdit}>
        Edit a Post
      </button>
      <section>
        <input
          className="search-bar"
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
        />
        <DropdownOptions
          setSearchText={setSearchText}
          searchText={searchText}
        />
        <div className="post_holder">{displayPosts}</div>
      </section>
    </div>
  );
}

export default PrimarySearch;
