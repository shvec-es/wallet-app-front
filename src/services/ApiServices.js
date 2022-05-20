import axios from 'axios';

axios.defaults.baseURL = 'https://wallet-codewriters.herokuapp.com';

class ApiServices {
  async signIn(userData) {
    try {
      const { data } = await axios.post('/api/auth/login', userData);
      console.log(data.payload);
      return data.payload;
    } catch (e) {
      console.log(e.message);
    }
  }

  async logout(token) {
    try {
      const req = await axios.get('/api/auth/logout', {
        headers: { Authorization: `Bearer ${token}` },
      });
      return req.data;
    } catch (e) {
      console.log(e.message);
    }
  }

  async signUp(userData) {
    try {
      const { data } = await axios.post('/api/auth/signup', userData);
      console.log(data.payload);
      return data.payload.user;
    } catch (e) {
      console.log(e.message);
    }
  }

  async getCategories(token) {
    try {
      const req = await axios.get('/wallet/transaction/categories', {
        headers: { Authorization: `Bearer ${token}` },
      });
      return req.data.payload;
    } catch (e) {
      console.log(e.message);
    }
  }

  async getTransactions(token) {
    try {
      const req = await axios.get('/wallet/transactions', {
        headers: { Authorization: `Bearer ${token}` },
      });
      return req.data.payload.transactions;
    } catch (e) {
      console.log(e.message);
    }
  }

  async getStats({ month, year }, token) {
    try {
      const req = await axios.get(`wallet/stats?month=${month}&year=${year}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return req.data.payload;
    } catch (e) {
      console.log(e.message);
    }
  }

  async createTransaction(userData, token) {
    if (userData.description === '') {
      delete userData.description;
    }

    try {
      const { data } = await axios.post('/wallet/transaction', userData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return data;
    } catch (e) {
      console.log(e.message);
    }
  }
}

export default new ApiServices();
