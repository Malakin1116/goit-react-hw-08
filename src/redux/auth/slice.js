import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  userData: null,

  token: null,
  isLoggedIn: false,
  isRefrashing: false,
};

export const slice = createSlice({
  user: {
    name: null,
    email: null,
  },
  initialState: INITIAL_STATE,

  reducers: {},
});

export const authReducer = slice.reducer;
