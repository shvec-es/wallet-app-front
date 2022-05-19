import axios from "axios";
import * as actions from "./transactions-actions";
import { toast } from 'react-toastify';

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

//addTransaction (copilot edition)
 const addTransaction = (transaction) => async dispatch => {
    dispatch(actions.addTransaction());
    try {
        const { data } = await axios.post("/wallet/transaction", transaction);
        dispatch(actions.addTransactionSuccess(data));
        console.log('додано успішно');
    } catch (error) {
        dispatch(actions.addTransactionFailure(error));
        console.log(error);
    }
}


export const operations = { getTransactions, addTransaction }

