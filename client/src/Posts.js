import { React, useState } from "react";
import "./App.css";
import ConventionalSearch from "./ConventionalSearch";
import PrimarySearch from "./PrimarySearch";

function Posts() {
  // Choose option between search bars. Primary filters out posts, Conventional includes search button

  return (
    <div className="posts_container">
      <h1 className="inv-header">POSTS</h1>
      {/* <PrimarySearch /> */}
      <ConventionalSearch />
    </div>
  );
}

export default Posts;
