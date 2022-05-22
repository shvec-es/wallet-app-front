import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import ApiServices from '../../services/ApiServices';

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
const {data} = await axios.post("https://wallet-codewriters.herokuapp.com/api/auth/signup", credentials)
     token.set(data.payload.token)
      return data

    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
const {data} = await axios.post("https://wallet-codewriters.herokuapp.com/api/auth/login", credentials)
     token.set(data.payload.token)
      return data.payload
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const logOut = createAsyncThunk('auth/logout', async () => {
  try {
  
    await axios.get("https://wallet-codewriters.herokuapp.com/api/auth/logout")
    token.unset()
  } catch (error) {
    return error.message;
  }
});


export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.authReducer.token;
    console.log("persistedToken", persistedToken)
    if (persistedToken === null) {
      return;
    }
    token.set(persistedToken);
    try {
      const { data } = await axios.get(
        'http://wallet-codewriters.herokuapp.com/api/users/current',
      );
      return data;
    } catch (error) {
      return error.message;
    }
  },
);

