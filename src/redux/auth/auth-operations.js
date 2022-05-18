
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const logIn = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
      try {
        
      const { data } = await axios.post(
     "wallet-codewriters.herokuapp.com/api/auth/login",
        credentials
      );
      token.set(data.token);
      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk("auth/logout", async () => {
  try {
    await axios.post("wallet-codewriters.herokuapp.com/api/auth/logout");
    token.unset();
  } catch (error) {}
});