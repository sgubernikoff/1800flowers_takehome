import { createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
  name: "posts",
  initialState: { postList: [], clickedPost: null, matchingPost: [] },
  reducers: {
    getPosts(state, action) {
      state.postList = action.payload;
    },
    getSearch(state, action) {
      state.matchingPost = action.payload;
    },
    startEdit(state, action) {
      state.clickedPost = action.payload;
    },
    endEdit(state, action) {
      const filteredPost = state.postList.filter(
        (a) => a.id !== state.clickedPost.id
      );
      const updatedPosts = [...filteredPost, action.payload];
      const sortedPosts = updatedPosts.sort((a, b) => a.id - b.id);
      state.postList = sortedPosts;
      state.clickedPost = null;
    },
  },
});

export const postActions = postsSlice.actions;

export default postsSlice;
