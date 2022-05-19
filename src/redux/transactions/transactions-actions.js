import { createAction } from '@reduxjs/toolkit';

//get для отримання даних з сервера (копілот придумав цей комет - ВАУ))))
export const getTransactions = createAction('transactions/GET_TRANSACTIONS');
export const getTransactionsSuccess = createAction(
  'transactions/GET_TRANSACTIONS_SUCCESS',
);
export const getTransactionsFailure = createAction(
  'transactions/GET_TRANSACTIONS_FAILURE',
);

//add для додавання даних на сервер
export const addTransaction = createAction(
  'transactions/ADD_TRANSACTION',
  value => ({
    payload: { newTransaction: { value } },
  }),
);
export const addTransactionSuccess = createAction(
  'transactions/ADD_TRANSACTION_SUCCESS',
);
export const addTransactionFailure = createAction(
  'transactions/ADD_TRANSACTION_FAILURE',
);
