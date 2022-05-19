import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { getTransactions, getTransactionsSuccess, getTransactionsFailure } from "./transactions-actions";

import { operations } from './transactions-operations';

const result = createReducer({}, {
    [getTransactionsSuccess]: (_, {payload}) => payload,
});

const transactionsStatistics = createReducer([],{
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