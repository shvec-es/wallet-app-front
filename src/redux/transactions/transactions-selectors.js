const getAllTransactions = state => state.transactions.transactionsList;

const filtredTransactions = state => {
    const { transactionsList } = state.transactions;
     transactionsList.sort((a, b) => {
        return a.date.localeCompare(b.date);
})}

const getTransactionsStatistics = state =>
  state.transactions.transactionsStatistics;
const getTransactionsIsLoading = state =>
  state.transactions.transactionsIsLoading;
const getError = state => state.transactions.error;

export {
  getAllTransactions,
  filtredTransactions,
  getTransactionsStatistics,
  getTransactionsIsLoading,
  getError,
};
