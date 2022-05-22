import axios from 'axios';
//import { getBalance } from '../../services/balance-api';
import {
  fetchBalancePending,
  fetchBalanceSuccess,
  fetchBalanceError,
} from './balance-actions';

axios.defaults.baseURL = 'https://wallet-codewriters.herokuapp.com';
const date = new Date();
const currMonth = '0' + (date.getMonth() + 1);
const currYear = date.getFullYear();

export const fetchBalance = async dispatch => {
  dispatch(fetchBalancePending);
  const { data } = await axios.get(
    `/wallet/stats?year=${currYear}&month=${currMonth}`,
  );
  const balance = data.payload.balance.balance;
  try {
    dispatch(fetchBalanceSuccess(balance));
  } catch (error) {
    dispatch(fetchBalanceError);
  }
};
