import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", title: "First Post!", content: "Hello!" },
  { id: "2", title: "Second Post", content: "More text" },
];

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (title, content, userID) => {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            user: userID,
          },
        };
      },
    },
    postUpdated(state, action) {
      const { id, title, content } = action.payload;
      const existingPost = state.find((post) => post.id === id);
      if (existingPost) {
        existingPost.title = title;
        existingPost.content = content;
      }
    },
    postDeleted(state, action) {
      const { id } = action.payload;
      return state.filter((item) => item.id !== id);
    },
  },
});
export const { postAdded, postUpdated, postDeleted } = postSlice.actions;
export default postSlice.reducer;
