import { configureStore } from "@reduxjs/toolkit";
import campaignReducer from "./features/campaignSlice";
export const store = configureStore({
  reducer: {
    campaign: campaignReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
