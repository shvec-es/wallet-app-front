// import { createSelector } from "reselect";

const getAllTransactions = state => state.transactions.result;
const getTransactionsStatistics = state => state.transactions.transactionsStatistics;

export { getAllTransactions,  getTransactionsStatistics};