// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// // axios.defaults.baseURL = "https://connections-api.goit.global";

// export const fetchContacts = createAsyncThunk(
//   "contacts/fetchAll",
//   async (_, ThunkAPI) => {
//     try {
//       const res = await axios.get("/contacts");
//       return res.data;
//     } catch (error) {
//       return ThunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const addContact = createAsyncThunk(
//   "contacts/addContact",
//   async (newTask, thunkAPI) => {
//     try {
//       const res = await axios.post("/contacts", newTask);
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const deleteContact = createAsyncThunk(
//   "contacts/deleteContact",
//   async (taskId, thunkAPI) => {
//     try {
//       const res = await axios.delete(`/contacts/${taskId}`);
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
import { authInstance } from "../auth/operations";

// axios.defaults.baseURL = "https://connections-api.goit.global";

export const apiGetContacts = createAsyncThunk(
  "contacts/getAllContacts",
  async (_, ThunkAPI) => {
    try {
      const res = await authInstance.get("/contacts");
      return res.data;
    } catch (error) {
      return ThunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (formData, thunkAPI) => {
    try {
      const res = await authInstance.post("/contacts", formData);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (taskId, thunkAPI) => {
    try {
      const res = await authInstance.delete(`/contacts/${taskId}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
