import { getBalance } from '../../services/balance-api';
import {
  fetchBalancePending,
  fetchBalanceSuccess,
  fetchBalanceError,
} from './balance-actions';

export const fetchBalance = async dispatch => {
  dispatch(fetchBalancePending);
  console.log('in balance-operations fetchBalancePending');
  const balance = await getBalance();

  try {
    dispatch(fetchBalanceSuccess(balance));
    console.log('in balance-operations111 success');
  } catch (error) {
    console.log('in balance-operations222 error');
    dispatch(fetchBalanceError);
  }
};
