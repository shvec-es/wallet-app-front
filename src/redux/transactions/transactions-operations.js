import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

import ApiServices from 'services/ApiServices';

axios.defaults.baseURL = "http://wallet-codewriters.herokuapp.com";
//тимчасова заглушка здля токена поки немає логіну
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyODU1OGNkZDhiODMwMjM5OWVkODBlYSIsImlhdCI6MTY1MzA3Mzc4MiwiZXhwIjoxNjUzMDc3MzgyfQ.tVUQ3G0iiICE9aLooTfEERc3SGVx_yrAtpCtS89aoQ0'

const fetchTransactions = createAsyncThunk(
  'transactions/fetchTransactions',
  async () => {
    try {
        const { data } = await axios.get("/wallet/transactions",{
        headers: {'Authorization': `Bearer ${token}`}})
        return data.payload;
    } catch (error) {
        toast(`${error.message}`, {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: true,
            closeOnClick: true,
            });
    }
});

const addTransaction = createAsyncThunk(
  'transactions/addTransaction',
  async (
    { typeTransaction, sum, date, description, category },
    { rejectWithValue },
  ) => {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyODY0YThhNGQ1MDg2N2Q5OTUyMGUzYyIsImlhdCI6MTY1MzA1MzYyMywiZXhwIjoxNjUzMDU3MjIzfQ.LkTWMm7I6GE2ZETwEmcscI-b7zsSg_RoRVXeCLPll_s';
    try {
      if (typeTransaction || category === '') {
        const data = await ApiServices.createTransaction(
          { typeTransaction, sum, date, description },
          token,
        );
        // toast.success('Transaction add successfuly!');
        return data.payload;
      } else {
        const data = await ApiServices.createTransaction(
          { typeTransaction, sum, date, description, category },
          token,
        );
        // toast.success('Transaction add successfuly!');
        return data.payload;
      }
    } catch (error) {
      toast.error('Something wrong! Transaction not added!');
      return rejectWithValue(error.message);
    }
  },
);

const fetchTransactionsStatistics = createAsyncThunk(
  'transactions/fetchTransactionStatistics',
  async ({ month, year, token }, rejectWithValue) => {
    try {
      return await ApiServices.getStats({ month, year }, token);
    } catch (error) {
      rejectWithValue(error);
    }
  },
);

export const operations = {
  fetchTransactions,
  addTransaction,
  fetchTransactionsStatistics,
};
