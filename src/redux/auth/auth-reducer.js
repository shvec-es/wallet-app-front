import { createReducer, combineReducers } from '@reduxjs/toolkit';
import{register, logIn, logOut} from './auth-operations'
const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
 
};

const authReducer = createReducer(initialState, {
 [register.fulfilled]: (state, {payload}) => {
    state.user = payload.user;
    state.token = payload.token;
    state.isLoggedIn = true;
  },
  [logIn.fulfilled]: (state, {payload}) => {
    state.user = payload.user;
    state.token = payload.token;
    state.isLoggedIn = true;
  },
  [logOut.fulfilled]: (state, _) => {
    state.user = { name: null, email: null };
    state.token = null;
    state.isLoggedIn = false;
  },
});

const errorReducer = createReducer(null, {
  [logOut.pending]: () => null,
  [logOut.rejected]: (_, { payload }) => payload
})

export default combineReducers({
  authReducer,
  errorReducer
});
