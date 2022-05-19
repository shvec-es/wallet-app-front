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
import { operations } from './transactions-operations';

const result = createReducer([], {
  [getTransactionsSuccess]: (_, { payload }) => payload,
  [addTransactionSuccess]: (state, { payload }) => ({ payload, ...state }),
});

const transactionsStatistics = createReducer({
  sortingTransactions: [
    { name: 'main expences', sum: 100, color: '#FFDD33' },
    { name: 'housing', sum: 86, color: '#FF5E33' },
    { name: 'products', sum: 40, color: '#2BF956' },
  ],
  balance: {
    income: '',
    consumption: '',
   balance: '',
}
},{
    [operations.fetchTransactionsStatistics.fulfilled]: (state, { payload }) => {
        return payload;
}}
)

const transactionsStatisticsIsLoading = createReducer(false, {
  [operations.fetchTransactionsStatistics.pending]: () => true,
  [operations.fetchTransactionsStatistics.fulfilled]: () => false,
  [operations.fetchTransactionsStatistics.rejected]: () => false,
});

const error = createReducer(null, {
  [operations.fetchTransactionsStatistics.pending]: () => null,
  [operations.fetchTransactionsStatistics.fulfilled]: () => null,
  [operations.fetchTransactionsStatistics.rejected]: () => true,
});

export default combineReducers({ result, transactionsStatistics,  transactionsStatisticsIsLoading, error});
