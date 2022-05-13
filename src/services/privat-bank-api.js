const BASE_URL = 'https://api.privatbank.ua/p24api';

const getCurrency = () => {
  const searchParams = new URLSearchParams({
    coursid: 5,
  });

  const url = `${BASE_URL}/pubinfo?json&exchange&${searchParams}`;

  return fetch(url);
};

export default getCurrency;
