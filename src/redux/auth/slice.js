import { createSlice } from "@reduxjs/toolkit";
import {
  apiRegisterUser,
  apiLoginUser,
  apiGetCurrentUser,
  apiLogoutUser,
} from "./operations";

const INITIAL_STATE = {
  userData: {
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
        state.userData = action.payload.user;
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
        state.userData = action.payload.user;
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
        state.userData = action.payload;
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
      });
  },
});

export const selectUserData = (state) => state.auth.userData;
export const selectUserDataIsLoading = (state) => state.auth.isLoading;
export const selectUserDataError = (state) => state.auth.error;
export const selectUserDataIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectUserDataIsRefreshing = (state) => state.auth.isRefrashing;
export const selectUserDataToken = (state) => state.auth.token;

export const authReducer = slice.reducer;
