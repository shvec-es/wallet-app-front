import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authReducer = createReducer(initialState, {
  'auth/register': (state, { payload }) => [...state, payload],
  'auth/login': (state, {payload}) => {
      state.user = payload.user;
    state.token = payload.token;
    state.isLoggedIn = true;
  },
  'auth/logout': (state, action) => {
     state.user = { name: null, email: null };
    state.token = null;
    state.isLoggedIn = false;
  }
});

export default authReducer;
