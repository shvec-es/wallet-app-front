import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authReducer = createReducer(initialState, {
  'auth/register': (state, { payload }) => [...state, payload],
});

export default authReducer;
