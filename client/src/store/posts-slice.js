import { createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
  name: "posts",
  initialState: { postList: [] },
  reducers: {
    getPosts(state, action) {
      state.postList = action.payload;
    },
  },
});

export const postActions = postsSlice.actions;

export default postsSlice;
