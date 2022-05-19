import { createAction } from '@reduxjs/toolkit';

export const fetchBalancePending = createAction(
  'balance/FETCH_BALANCE_PENDING',
);
export const fetchBalanceSuccess = createAction(
  'balance/FETCH_BALANCE_SUCCESS',
);
export const fetchBalanceError = createAction('balance/FETCH_BALANCE_ERROR');
