import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import * as actions from './transactions-actions';

axios.defaults.baseURL = 'https://wallet-codewriters.herokuapp.com';

const getTransactions = () => async dispatch => {
  dispatch(actions.getTransactions());
  try {
    const { data } = await axios.get('/wallet/transactions');
    dispatch(actions.getTransactionsSuccess(data));
  } catch (error) {
    dispatch(actions.getTransactionsFailure(error));
    console.log(error);
    //треба буде обробити помилку
  }
};
const addTransaction = createAsyncThunk(
  'transactions/ADD_TRANSACTION',
  async (
    { typeTransaction, sum, date, description, category },
    { rejectWithValue },
  ) => {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyODY0YThhNGQ1MDg2N2Q5OTUyMGUzYyIsImlhdCI6MTY1Mjk4ODY5MCwiZXhwIjoxNjUyOTkyMjkwfQ.Sl1sdoWK5rjn-DrU79FVW742vWU1fbom02r52m5_RVE';
    try {
      if (typeTransaction) {
        const { data } = await axios.post(
          '/wallet/transaction',
          { typeTransaction, sum, date, description },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        return data.payload;
      } else {
        const { data } = await axios.post(
          '/wallet/transaction',
          { typeTransaction, sum, date, description, category },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        return data.payload;
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const operations = { getTransactions, addTransaction };
