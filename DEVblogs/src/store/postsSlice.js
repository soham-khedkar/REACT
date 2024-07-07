import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allPosts: [],
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.allPosts = action.payload;
    },
    deletePosts: (state) => {
      state.allPosts = []; // Clear allPosts array
    },
    addUserPosts: (state, action) => {
      state.allPosts = [...state.allPosts, ...action.payload]; // Add new posts to allPosts array
    },
  },
});

export const { setPosts, deletePosts, addUserPosts } = postsSlice.actions;

export default postsSlice.reducer;