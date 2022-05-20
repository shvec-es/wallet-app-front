import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  // getTransactions,
  getTransactionsSuccess,
  // getTransactionsFailure,
} from './transactions-actions';
import { operations } from './transactions-operations';

const result = createReducer([], {
  [getTransactionsSuccess]: (_, { payload }) => payload,
  [operations.addTransaction.fulfilled]: (state, { payload }) => [
    payload,
    ...state,
  ],
});

const transactionsStatistics = createReducer(
  {
    sortingTransactions: [
      { name: 'main expences', sum: 100, color: '#FFDD33' },
      { name: 'housing', sum: 86, color: '#FF5E33' },
      { name: 'products', sum: 40, color: '#2BF956' },
    ],
    balance: {
      income: '',
      consumption: '',
      balance: '',
    },
  },
  {
    [operations.fetchTransactionsStatistics.fulfilled]: (
      state,
      { payload },
    ) => {
      return payload;
    },
  },
);

const transactionsIsLoading = createReducer(false, {
  [operations.addTransaction.pending]: () => true,
  [operations.addTransaction.fulfilled]: () => false,
  [operations.addTransaction.rejected]: () => false,
});

const transactionsStatisticsIsLoading = createReducer(false, {
  [operations.fetchTransactionsStatistics.pending]: () => true,
  [operations.fetchTransactionsStatistics.fulfilled]: () => false,
  [operations.fetchTransactionsStatistics.rejected]: () => false,
});

const error = createReducer(null, {
  [operations.fetchTransactionsStatistics.pending]: () => null,
  [operations.fetchTransactionsStatistics.fulfilled]: () => null,
  [operations.fetchTransactionsStatistics.rejected]: () => true,
  [operations.addTransaction.pending]: () => null,
  [operations.addTransaction.fulfilled]: () => null,
  [operations.addTransaction.rejected]: () => true,
});

export default combineReducers({
  result,
  transactionsIsLoading,
  transactionsStatistics,
  transactionsStatisticsIsLoading,
  error,
});
