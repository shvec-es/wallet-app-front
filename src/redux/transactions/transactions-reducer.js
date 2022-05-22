import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { operations } from './transactions-operations';

const transactionsList = createReducer([], {
  [operations.fetchTransactions.fulfilled]: (_, { payload }) => payload,
  [operations.addTransaction.fulfilled]: (state, { payload }) => [
    payload,
    ...state,
  ],
  [operations.deleteTransaction.fulfilled]: (state, { payload }) =>
    state.filter(item => item._id !== payload),
});

const isLoading = createReducer(false, {
  [operations.fetchTransactions.pending]: () => true,
  [operations.fetchTransactions.fulfilled]: () => false,
  [operations.fetchTransactions.rejected]: () => false,
  [operations.addTransaction.pending]: () => true,
  [operations.addTransaction.fulfilled]: () => false,
  [operations.addTransaction.rejected]: () => false,
});

const transactionsStatistics = createReducer(
  {
    sortingTransactions: [],
    balance: {
      income: '',
      consumption: '',
      balance: '',
    },
    date: [],
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

const transactionsStatisticsIsLoading = createReducer(false, {
  [operations.fetchTransactionsStatistics.pending]: () => true,
  [operations.fetchTransactionsStatistics.fulfilled]: () => false,
  [operations.fetchTransactionsStatistics.rejected]: () => false,
});

const error = createReducer(null, {
  [operations.fetchTransactions.pending]: () => null,
  [operations.fetchTransactions.fulfilled]: () => null,
  [operations.fetchTransactions.rejected]: () => true,
  [operations.fetchTransactionsStatistics.pending]: () => null,
  [operations.fetchTransactionsStatistics.fulfilled]: () => null,
  [operations.fetchTransactionsStatistics.rejected]: () => true,
  [operations.addTransaction.pending]: () => null,
  [operations.addTransaction.fulfilled]: () => null,
  [operations.addTransaction.rejected]: () => true,
  [operations.deleteTransaction.pending]: () => null,
  [operations.deleteTransaction.fulfilled]: () => null,
  [operations.deleteTransaction.rejected]: () => true,
});

export default combineReducers({
  transactionsList,
  isLoading,
  transactionsStatistics,
  transactionsStatisticsIsLoading,
  error,
});
