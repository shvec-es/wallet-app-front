import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

import ApiServices from 'services/ApiServices';

axios.defaults.baseURL = "http://wallet-codewriters.herokuapp.com";
//тимчасова заглушка здля токена поки немає логіну

const fetchTransactions = createAsyncThunk(
  'transactions/fetchTransactions',
  async () => {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyODU1OGNkZDhiODMwMjM5OWVkODBlYSIsImlhdCI6MTY1MzEyOTcyOSwiZXhwIjoxNjUzMTMzMzI5fQ.sw-ELZZov4aO3N93gv8PWOZBXDyB9mKROXSZTc5FjR8';
    try {
        return await ApiServices.getTransactions(token)
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
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyODU1OGNkZDhiODMwMjM5OWVkODBlYSIsImlhdCI6MTY1MzEyODI0MiwiZXhwIjoxNjUzMTMxODQyfQ.E07-z7KKBua9hmKvljJAC71KPqK8lP9NQLEVmkFqTnM';
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
