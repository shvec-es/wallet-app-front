
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
      "https://wallet-codewriters.herokuapp.com/users/login",
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
    await axios.post();
    token.unset();
  } catch (error) {}
});