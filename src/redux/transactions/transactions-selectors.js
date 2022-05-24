import { createSelector } from '@reduxjs/toolkit';

const getAllTransactions = state => state.transactions.transactionsList;
const getIsLoading = state => state.transactions.isLoading;


const getTransactionsStatistics = state =>
  state.transactions.transactionsStatistics;
const getTransactionsIsLoading = state =>
  state.transactions.transactionsIsLoading;
const getError = state => state.transactions.error;

export const getMonths = createSelector(
  [getTransactionsStatistics],
  statistics => {
    const allMonths = statistics.date.map(date => date.month);
    const uniqueMonths = allMonths.filter(
      (month, index, array) => array.indexOf(month) === index,
    );
    const sortedMonths = uniqueMonths.sort();
    return sortedMonths.map(month => ({
      value: month,
      displayValueEng: getMonthName(month, 'eng'),
      displayValueUkr: getMonthName(month, 'ukr'),
    }));
  },
);

function getMonthName(monthNumber, location) {
  const normalizedMonthNumber = monthNumber - 1;
  const date = new Date(1, normalizedMonthNumber, 1);
  const locationOpt = location === 'eng' ? 'en-us' : 'uk-UA';
  return date.toLocaleString(locationOpt, { month: 'long' });
}

export const getYears = createSelector(
  [getTransactionsStatistics],
  statistics => {
    const allYears = statistics.date.map(date => date.year);
    const uniqueYears = allYears.filter(
      (year, index, array) => array.indexOf(year) === index,
    );
    const sortedYears = uniqueYears.sort();
    return sortedYears.map(year => ({
      value: year,
      displayValueEng: year,
      displayValueUkr: year,
    }));
  },
);

const getStatisticsLoading = state => state.transactions.transactionsStatisticsIsLoading;

export {
  getAllTransactions,
  getIsLoading,
  getTransactionsStatistics,
  getTransactionsIsLoading,
  getError,
  getStatisticsLoading,
};
