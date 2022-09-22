import { React, useState } from "react";
import "./App.css";
import PostsCard from "./PostsCard";
import { useSelector } from "react-redux";
import EditForm from "./EditForm";

function Posts() {
  const posts = useSelector((state) => state.posts.postList);
  const clickedPost = useSelector((state) => state.posts.clickedPost);

  const [searchText, setSearchText] = useState("");

  const searchResults = posts.filter((posts) => {
    return posts.title.toLowerCase().includes(searchText.toLowerCase());
  });

  const display = searchResults.map((post) => (
    <PostsCard key={post.id} post={post} setSearchText={setSearchText} />
  ));

  console.log(searchText);

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
            value={searchText}
          />
          <div className="dropdown">
            {posts
              .filter((item) => {
                const searchTerm = searchText.toLowerCase();
                const titleName = item.title.toLowerCase();

                return (
                  searchTerm &&
                  titleName.startsWith(searchTerm) &&
                  titleName !== searchTerm
                );
              })
              .slice(0, 10)
              .map((item) => (
                <div
                  onClick={() => setSearchText(item.title)}
                  className="dropdown-row"
                  key={item.title}
                >
                  {item.title}
                </div>
              ))}
          </div>
          <div className="post_holder">{display}</div>
        </section>
      ) : (
        <EditForm />
      )}
    </div>
  );
}

export default Posts;
