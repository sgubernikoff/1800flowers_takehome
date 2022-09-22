import { React, useState } from "react";
import "./App.css";
import PostsCard from "./PostsCard";
import { useSelector } from "react-redux";

function Posts() {
  const posts = useSelector((state) => state.posts.postList);

  const [searchText, setSearchText] = useState("");

  const searchResults = posts.filter((posts) => {
    return posts.title.toLowerCase().includes(searchText.toLowerCase());
  });

  const display = searchResults.map((posts) => (
    <PostsCard key={posts.id} posts={posts} />
  ));
  return (
    <div>
      <h1 className="inv-header">POSTS</h1>
      <section>
        <h3 className="searcher">Search For Your Title</h3>
        <input
          className="search-bar"
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearchText(e.target.value)}
        />
        <div className="post_holder">{display}</div>
      </section>
    </div>
  );
}

export default Posts;
