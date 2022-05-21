import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { operations } from './transactions-operations';

const transactionsList = createReducer([], {
  [operations.fetchTransactions.fulfilled]: (_, { payload }) => payload,
  [operations.addTransaction.fulfilled]: (state, { payload }) => [
    payload,
    ...state,
  ],
});

const transactionsListLoading = createReducer(false, {
  [operations.fetchTransactions.pending]: () => true,
  [operations.fetchTransactions.fulfilled]: () => false,
  [operations.fetchTransactions.rejected]: () => false,
});

const transactionsListError = createReducer(null, {
  [operations.fetchTransactions.fulfilled]: (_, { payload }) => null,
  [operations.fetchTransactions.rejected]: (_, { payload }) => payload,
});

const transactionDelete = createReducer(null, {
  [operations.deleteTransaction.fulfilled]: (_, {payload}) => payload,
});

const transactionDeleteLoading = createReducer(false, {
  [operations.deleteTransaction.pending]: () => true,
  [operations.deleteTransaction.fulfilled]: () => false,
  [operations.deleteTransaction.rejected]: () => false,
});

const transactionDeleteError = createReducer(null, {
  [operations.deleteTransaction.fulfilled]: (_, {payload}) => null,
  [operations.deleteTransaction.rejected]: (_, {payload}) => payload,
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
  transactionsList,
  transactionsListLoading,
  transactionsListError,
  transactionsIsLoading,
  transactionsStatistics,
  transactionsStatisticsIsLoading,
  error,
  transactionDelete,
  transactionDeleteLoading,
  transactionDeleteError,
});
