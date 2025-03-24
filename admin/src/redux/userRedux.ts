import { createSlice } from "@reduxjs/toolkit";
import { User } from "../models/user";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null as User | null,
  },
  reducers: {
    login: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export const { login } = userSlice.actions;
export default userSlice.reducer;
