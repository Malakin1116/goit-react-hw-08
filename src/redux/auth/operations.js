import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const authInstance = axios.create({
  baseURL: "https://connections-api.goit.global/",
});

export const setToken = (token) => {
  authInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  authInstance.defaults.headers.common.Authorization = "";
};

export const apiRegisterUser = createAsyncThunk(
  "auth/registerUser",
  async (formData, thunkAPI) => {
    try {
      const { data } = await authInstance.post("/users/signup", formData);
      setToken(data.token);
      console.log("data: ", data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const apiLoginUser = createAsyncThunk(
  "auth/loginUser",
  async (formData, thunkAPI) => {
    try {
      const { data } = await authInstance.post("/users/login", formData);
      setToken(data.token);
      console.log("data: ", data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const apiGetCurrentUser = createAsyncThunk(
  "auth/GetCurrent",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;

    if (!token) {
      return thunkAPI.rejectWithValue("No token");
    }

    try {
      setToken(token);
      const { data } = await authInstance.get("/users/current");

      console.log("data: ", data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const apiLogoutUser = createAsyncThunk(
  "auth/LogoutUser",
  async (_, thunkAPI) => {
    try {
      const { data } = await authInstance.post("/users/logout");
      clearToken();
      console.log("data: ", data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;

    if (!token) {
      return thunkAPI.rejectWithValue("Token not found");
    }

    try {
      setToken(token);
      const { data } = await authInstance.get("/users/current");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
