import axios from 'axios';
//import { getBalance } from '../../services/balance-api';
import {
  fetchBalancePending,
  fetchBalanceSuccess,
  fetchBalanceError,
} from './balance-actions';

const currentYear = new Date().getFullYear();
const currentMonth = new Date().toLocaleString('en', { month: '2-digit' });

export const fetchBalance = async dispatch => {
  dispatch(fetchBalancePending);
  const { data } = await axios.get(
    `/wallet/stats?year=${currentYear}&month=${currentMonth}`,
  );
  const balance = data.payload.balance.balance;
  try {
    dispatch(fetchBalanceSuccess(balance));
  } catch (error) {
    dispatch(fetchBalanceError);
  }
};
