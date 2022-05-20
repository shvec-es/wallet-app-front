import { createAction } from '@reduxjs/toolkit';

//get для отримання даних з сервера (копілот придумав цей комет - ВАУ))))
export const getTransactions = createAction('transactions/GET_TRANSACTIONS');
export const getTransactionsSuccess = createAction(
  'transactions/GET_TRANSACTIONS_SUCCESS',
);
export const getTransactionsFailure = createAction(
  'transactions/GET_TRANSACTIONS_FAILURE',
);
