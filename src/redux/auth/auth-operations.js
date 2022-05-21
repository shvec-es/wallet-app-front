import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://wallet-codewriters.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
   
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        'https://wallet-codewriters.herokuapp.com/api/auth/signup',
        credentials,
      );
      token.set(data.payload.token);
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post( "https://wallet-codewriters.herokuapp.com/api/auth/login", credentials);
      console.log(data)
      console.log(data.payload.token)
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.get("https://wallet-codewriters.herokuapp.com/api/auth/logout");
    token.unset();
  } catch (error) {
 return error.message;
  }
});