// import { createSelector } from "reselect";
import { createSelector } from '@reduxjs/toolkit';

const getAllTransactions = state => state.transactions.result;
const getTransactionsStatistics = state =>
  state.transactions.transactionsStatistics;
const getTransactionsIsLoading = state =>
  state.transactions.transactionsIsLoading;
const getError = state => state.transactions.error;

export const getMonths = createSelector(
  [getTransactionsStatistics],
  (statistics) => {
    const allMonths = statistics.date.map(date => date.month);
    const uniqueMonths = allMonths.filter((month, index, array) => array.indexOf(month) === index)
    return uniqueMonths.sort();
}
);

export const getYears = createSelector(
  [getTransactionsStatistics],
  (statistics) => {
    const allYears = statistics.date.map(date => date.year);
    const uniqueYears = allYears.filter((year, index, array) => array.indexOf(year) === index);
    return uniqueYears.sort();
}
);

export {
  getAllTransactions,
  getTransactionsStatistics,
  getTransactionsIsLoading,
  getError,
};
