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

export const authInstance = axios.create({
  baseURL: "https://connections-api.goit.global/",
});
