// import { createSelector } from "reselect";

const getAllTransactions = state => state.transactions.result;
const getTransactionsStatistics = state =>
  state.transactions.transactionsStatistics;
const getTransactionsIsLoading = state =>
  state.transactions.transactionsIsLoading;
const getError = state => state.transactions.error;

export {
  getAllTransactions,
  getTransactionsStatistics,
  getTransactionsIsLoading,
  getError,
};
