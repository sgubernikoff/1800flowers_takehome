import { React, useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { postActions } from "./store/posts-slice";
import PostsCard from "./PostsCard";
import DropdownOptions from "./DropdownOptions";
import { useNavigate } from "react-router";

function ConventionalSearch() {
  const matchingPost = useSelector((state) => state.posts.matchingPost);
  const posts = useSelector((state) => state.posts.postList);
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [searchText, setSearchText] = useState("");

  // Only use this component when disabling Primary Search search functionality

  // adds search bar content to matchedPost array

  function onSubmit(e) {
    e.preventDefault();
    dispatch(postActions.getSearch(searchText));
  }

  // Filters searches if matching post = searched content

  const searchResults = [...posts].filter((posts) => {
    if (matchingPost.length > 0) {
      return posts.title.toLowerCase().includes(matchingPost.toLowerCase());
    } else;
  });

  // Displays search results

  const displayPosts = searchResults.map((post) => (
    <PostsCard key={post.id} post={post} setSearchText={setSearchText} />
  ));

  function navToEdit() {
    nav("/editpost");
  }

  return (
    <div data-testid="edit">
      <div>
        <h3 className="searcher">Search For Your Title</h3>
        <button className="edit_nav_button" onClick={navToEdit}>
          Edit a Post
        </button>
        <form onSubmit={onSubmit}>
          <input
            className="search-bar"
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <input className="search_submit" type="submit" value="Submit" />
        </form>
        <DropdownOptions
          setSearchText={setSearchText}
          searchText={searchText}
        />
        {matchingPost.length > 0 ? (
          <div className="post_holder">{displayPosts}</div>
        ) : null}
      </div>
    </div>
  );
}

export default ConventionalSearch;
