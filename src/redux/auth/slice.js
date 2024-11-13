import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  userData: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

export const slice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,

  reducers: {},
});

export const authReducer = slice.reducer;
