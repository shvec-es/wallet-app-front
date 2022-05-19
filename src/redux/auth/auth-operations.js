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

const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    console.log(credentials);
    try {
      const { data } = await axios.post(
        'https://wallet-codewriters.herokuapp.com/api/auth/signup',
        credentials,
      );
      token.set(data.token);
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  },
);

const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post();
    token.unset();
  } catch (error) {}
});
const authOperations = { register, logIn, logOut };
export default authOperations;
