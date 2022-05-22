import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const currentYear = new Date().getFullYear();
const currentMonth = new Date().toLocaleString('en', { month: '2-digit' });

export const fetchBalance = createAsyncThunk(
  'balance/fetchBalance',
  async () => {
    const { data } = await axios.get(
      `/wallet/stats?year=${currentYear}&month=${currentMonth}`,
    );
    const balance = data.payload.balance.balance;
    return balance;
  },
);
