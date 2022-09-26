import { React, useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { postActions } from "./store/posts-slice";
import PostsCard from "./PostsCard";
import EditForm from "./EditForm";

function ConventionalSearch() {
  const matchingPost = useSelector((state) => state.posts.matchingPost);
  const posts = useSelector((state) => state.posts.postList);
  const clickedPost = useSelector((state) => state.posts.clickedPost);
  const dispatch = useDispatch();

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

  const display = searchResults.map((post) => (
    <PostsCard key={post.id} post={post} setSearchText={setSearchText} />
  ));

  return (
    <div>
      {!clickedPost ? (
        <div>
          <h3 className="searcher">Search For Your Title</h3>
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
          {matchingPost.length > 0 ? (
            <div className="post_holder">{display}</div>
          ) : null}
        </div>
      ) : (
        <EditForm />
      )}
    </div>
  );
}

export default ConventionalSearch;
