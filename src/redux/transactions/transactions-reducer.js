import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { getTransactions, getTransactionsSuccess, getTransactionsFailure } from "./transactions-actions";

const result = createReducer([], {
    [getTransactionsSuccess]: (_, {payload}) => payload,
});

export default combineReducers({ result });