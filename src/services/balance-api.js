import axios from 'axios';

axios.defaults.baseURL = 'https://wallet-codewriters.herokuapp.com';
const d = new Date();
const currMonth = '0' + (d.getMonth() + 1);
const currYear = d.getFullYear();

let JWTToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyODNiNjM1NjdiYjk0YTVhOGY5Y2QzMyIsImlhdCI6MTY1Mjg4Mjg4MywiZXhwIjoxNjUyODg2NDgzfQ.wW-u4CU6sllKUHXqgxv3HzvTgEhVQMYrM1caCLrU3EI';
async function getBalance() {
  const { data } = await axios.get(
    `/wallet/stats?year=${currYear}&month=${currMonth}`,
    {
      headers: { Authorization: `Bearer ${JWTToken}` },
    },
  );
  return data.payload.balance.balance;
}

export { getBalance };
