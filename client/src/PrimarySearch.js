import { React, useState } from "react";
import "./App.css";
import PostsCard from "./PostsCard";
import { useSelector } from "react-redux";
import EditForm from "./EditForm";
import DropdownOptions from "./DropdownOptions";

function PrimarySearch() {
  const posts = useSelector((state) => state.posts.postList);

  const [searchText, setSearchText] = useState("");

  // Filters searches if matching post = searched content

  const searchResults = [...posts].filter((posts) => {
    return posts.title.toLowerCase().includes(searchText.toLowerCase());
  });

  // Displays search results

  const displayPosts = searchResults.map((post) => (
    <PostsCard key={post.id} post={post} setSearchText={setSearchText} />
  ));

  return (
    <div className="posts_container">
      <section>
        <h3 className="searcher">Search For Your Title</h3>
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
