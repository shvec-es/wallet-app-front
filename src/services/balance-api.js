import axios from 'axios';

axios.defaults.baseURL = 'https://wallet-codewriters.herokuapp.com';

const date = new Date();
const currMonth = '0' + (date.getMonth() + 1);
const currYear = date.getFullYear();

async function getBalance() {
  const { data } = await axios.get(
    `/wallet/stats?year=${currYear}&month=${currMonth}`,
  );
  return data.payload.balance.balance;
}

export { getBalance };
