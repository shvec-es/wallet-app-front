import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  getTransactions,
  getTransactionsSuccess,
  getTransactionsFailure,
  addTransaction,
  addTransactionSuccess,
  addTransactionFailure,
} from './transactions-actions';

const result = createReducer([], {
  [getTransactionsSuccess]: (_, { payload }) => payload,
  [addTransactionSuccess]: (state, { payload }) => ({ payload, ...state }),
});

export default combineReducers({ result });
