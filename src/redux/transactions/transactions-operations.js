import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";
import * as actions from "./transactions-actions";
import { toast } from 'react-toastify';

import ApiServices from 'services/ApiServices';

axios.defaults.baseURL = "http://wallet-codewriters.herokuapp.com";

 const getTransactions = () => async dispatch => {
    dispatch(actions.getTransactions());
    try {
        const { data } = await axios.get("/wallet/transactions",{
            //заглушка з ручним записом токену поки не працює авторизація
            headers: {
              'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyODU1OGNkZDhiODMwMjM5OWVkODBlYSIsImlhdCI6MTY1Mjk2MjIwMCwiZXhwIjoxNjUyOTY1ODAwfQ.zUfkFRR6eLZrofrcQZpKZaE8Zq5Ginrmd3L_ufv-VGU`
            }
          });
        dispatch(actions.getTransactionsSuccess(data.payload.transactions));
        console.log(data.payload.transactions);
    } catch (error) {
        dispatch(actions.getTransactionsFailure(error.message));
        // console.log(error);
        toast(`${error.message}`, {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }
}

//  const getBalance = () => async dispatch => {
//     dispatch(actions.getBalance());
//     try {
//         const { data } = await axios.get("/wallet/stats");
//         dispatch(actions.getBalanceSuccess(data.payload.balance));
//         console.log(data.payload.balance);
//     } catch (error) {
//         dispatch(actions.getBalanceFailure(error.message));
//          console.log(error);
//     }
// }

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

const fetchTransactionsStatistics = createAsyncThunk( 
    'transactions/fetchTransactionStatistics',
    async ({month, year, token}, rejectWithValue) => {
        try {
            const data = await ApiServices.getStats({ month, year }, token);
            console.log(data)
            console.log('month', month)
            return data
        } catch (error) {
            rejectWithValue(error)
        }
    }
)

export const operations = { getTransactions, addTransaction, fetchTransactionsStatistics };
