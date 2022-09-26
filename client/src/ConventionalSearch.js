import { React } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { postActions } from "./store/posts-slice";
import PostsCard from "./PostsCard";

function ConventionalSearch({ searchText, setSearchText }) {
  const matchingPost = useSelector((state) => state.posts.matchingPost);
  const posts = useSelector((state) => state.posts.postList);
  const dispatch = useDispatch();

  function onSubmit(e) {
    e.preventDefault();
    dispatch(postActions.getSearch(searchText));
  }

  const searchResults = [...posts].filter((posts) => {
    return posts.title.toLowerCase().includes(matchingPost);
  });

  const display = searchResults.map((post) => (
    <PostsCard key={post.id} post={post} setSearchText={setSearchText} />
  ));

  return (
    <div>
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
  );
}

export default ConventionalSearch;
