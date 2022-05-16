import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  user: { email: null, password: null, name: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authReducer = createReducer(initialState, {});

export default authReducer;
