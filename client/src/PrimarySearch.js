import { React, useState } from "react";
import "./App.css";
import PostsCard from "./PostsCard";
import { useSelector } from "react-redux";
import EditForm from "./EditForm";
import DropdownOptions from "./DropdownOptions";
import { useNavigate } from "react-router";

function PrimarySearch() {
  const posts = useSelector((state) => state.posts.postList);

  const [searchText, setSearchText] = useState("");

  const nav = useNavigate();

  // Filters searches if matching post = searched content

  const searchResults = [...posts].filter((posts) => {
    return posts.title.toLowerCase().includes(searchText.toLowerCase());
  });

  // Displays search results

  const displayPosts = searchResults.map((post) => (
    <PostsCard key={post.id} post={post} setSearchText={setSearchText} />
  ));

  function navToEdit() {
    nav("/editpost");
  }

  return (
    <div className="posts_container">
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
