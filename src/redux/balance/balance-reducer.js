import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { fetchBalance } from './balance-operations';

const balance = createReducer(null, {
  [fetchBalance.fulfilled]: (_, { payload }) => payload,
  [fetchBalance.pending]: _ => null,
  [fetchBalance.rejected]: _ => null,
});

const balanceLoading = createReducer(true, {
  [fetchBalance.pending]: () => true,
  [fetchBalance.fulfilled]: () => false,
  [fetchBalance.rejected]: () => false,
});

const balanceError = createReducer(null, {
  [fetchBalance.pending]: _ => null,
  [fetchBalance.fulfilled]: _ => null,
  [fetchBalance.rejected]: (_, { payload }) => payload,
});

export default combineReducers({
  balance,
  balanceLoading,
  balanceError,
});
