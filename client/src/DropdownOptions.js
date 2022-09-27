import { React, useState } from "react";
import "./App.css";
import { useSelector } from "react-redux";

function DropdownOptions({ searchText, setSearchText }) {
  const posts = useSelector((state) => state.posts.postList);

  return (
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
  );
}

export default DropdownOptions;
