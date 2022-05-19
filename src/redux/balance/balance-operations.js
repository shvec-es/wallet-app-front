import { getBalance } from '../../services/balance-api';
import {
  fetchBalancePending,
  fetchBalanceSuccess,
  fetchBalanceError,
} from './balance-actions';

export const fetchBalance = async dispatch => {
  dispatch(fetchBalancePending);
  const balance = await getBalance();
  try {
    dispatch(fetchBalanceSuccess(balance));
  } catch (error) {
    dispatch(fetchBalanceError);
  }
};
