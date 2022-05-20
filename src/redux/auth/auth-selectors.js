export const getIsLoggedIn = state => state.auth.authReducer.isLoggedIn;
export const getUserName = state => state.auth.user.name;
export const getIsError = state => state.auth.errorReducer

