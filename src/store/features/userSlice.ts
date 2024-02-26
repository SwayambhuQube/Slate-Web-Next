import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
  value: any;
}

const initialState: User = {
  value: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    assign: (state: User, action: PayloadAction<Object>) => {
      return { ...state, value: action.payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const { assign } = userSlice.actions;

export default userSlice.reducer;
