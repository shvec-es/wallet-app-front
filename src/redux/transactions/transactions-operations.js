import axios from "axios";
import * as actions from "./transactions-actions";

axios.defaults.baseURL = "https://61e83932e32cd90017acc131.mockapi.io/api/v1";

const getTransactions = () => async dispatch => {
    dispatch(actions.getTransactions());
    try {
        const { data } = await axios.get("/transactions");
        dispatch(actions.getTransactionsSuccess(data));
    } catch (error) {
        dispatch(actions.getTransactionsFailure(error));
        console.log(error);
        //треба буде обробити помилку  
    }
}

//addTransaction (copilot edition)
const addTransaction = (transaction) => async dispatch => {
    dispatch(actions.addTransaction());
    try {
        const { data } = await axios.post("/transactions", transaction);
        dispatch(actions.addTransactionSuccess(data));
        console.log('додано успішно');
    } catch (error) {
        dispatch(actions.addTransactionFailure(error));
        console.log(error);
    }
}


export const operations = { getTransactions, addTransaction }

