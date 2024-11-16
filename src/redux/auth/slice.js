import { createSlice } from "@reduxjs/toolkit";
import {
  apiRegisterUser,
  apiLoginUser,
  apiGetCurrentUser,
  apiLogoutUser,
  refreshUser,
} from "./operations";

const INITIAL_STATE = {
  user: {
    name: null,
    email: null,
  },
  isLoading: false,
  error: null,

  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

export const slice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,

  extraReducers: (builder) => {
    builder
      .addCase(apiRegisterUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(apiRegisterUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(apiRegisterUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })

      .addCase(apiLoginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(apiLoginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(apiLoginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })

      .addCase(apiGetCurrentUser.pending, (state) => {
        state.isRefreshing = true;
        state.error = null;
      })
      .addCase(apiGetCurrentUser.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.user = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(apiGetCurrentUser.rejected, (state, action) => {
        state.isRefreshing = false;
        state.error = action.payload;
      })

      .addCase(apiLogoutUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(apiLogoutUser.fulfilled, () => {
        return INITIAL_STATE;
      })
      .addCase(apiLogoutUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.user = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
        state.token = null;
        state.isLoggedIn = false;
      });
  },
});

export const authReducer = slice.reducer;
