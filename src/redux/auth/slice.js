import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefrashing: false,
});
