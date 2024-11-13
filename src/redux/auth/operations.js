// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// axios.defaults.baseURL = "https://connections-api.goit.global";

// export const register = createAsyncThunk(
//   "auth/register",
//   async (newUsers, thunkAPI) => {
//     try {
//       const res = await axios.post("/users", newUsers);
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

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

      //     "user": {
      //         "name": "ILOVEYOU",
      //         "email": "malas4d@gmail.com"
      //     },
      //     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM1MWY2NWM0OTVlZDZlMjVmMzk4ODQiLCJpYXQiOjE3MzE1MzQ2OTN9.EuQ3n2OBoilcGA_HaqWMBEkoto1gjYLjBiJuwX1f1VI"

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
