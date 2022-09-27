import { createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
  name: "posts",
  initialState: { postList: [], clickedPost: null, matchingPost: [] },
  reducers: {
    // framework to add fetched data to postList array
    getPosts(state, action) {
      state.postList = action.payload;
    },
    // framework to add searched data to matchingPost array
    getSearch(state, action) {
      state.matchingPost = action.payload;
    },
    setMatchingPost(state, action) {
      const post = state.postList.find((p) => p.title === action.payload);
      state.matchingPost = post;
    },
    // framework to add selected post as clickedPost object
    startEdit(state, action) {
      state.clickedPost = action.payload;
    },
    // framework to add edited data to postList array, filter the old id out and sort the new array
    endEdit(state, action) {
      const filteredPost = state.postList.filter(
        (post) => post.id !== action.payload.id
      );
      const updatedPosts = [...filteredPost, action.payload];
      const sortedPosts = updatedPosts.sort((a, b) => a.id - b.id);
      state.postList = sortedPosts;
      state.clickedPost = null;
      state.matchingPost = [];
    },
  },
});

export const postActions = postsSlice.actions;

export default postsSlice;
