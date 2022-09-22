import { React, useState } from "react";
import "./App.css";
import PostsCard from "./PostsCard";
import { useDispatch, useSelector } from "react-redux";
import EditForm from "./EditForm";

function Posts() {
  const posts = useSelector((state) => state.posts.postList);
  const clickedPost = useSelector((state) => state.posts.clickedPost);

  const [searchText, setSearchText] = useState("");
  console.log(posts);
  const searchResults = posts.filter((posts) => {
    return posts.title.toLowerCase().includes(searchText.toLowerCase());
  });

  const display = searchResults.map((post) => (
    <PostsCard key={post.id} post={post} />
  ));
  return (
    <div>
      <h1 className="inv-header">POSTS</h1>
      {!clickedPost ? (
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
      ) : (
        <EditForm />
      )}
    </div>
  );
}

export default Posts;
