import { create } from 'apisauce';

const createAPI = (baseURL = 'http://localhost:8000/') => {
  const api = create({
    baseURL,
    headers: {
      'Cache-control': 'no-cache',
    },
  });

  const getAllBanks = () => api.get('api/banks/');

  const getExchangeRate = pair =>
  api.get('api/coinbase/btc/coinbase/rate', pair);

  return {
    getExchangeRate,
    getAllBanks,
  };
};

export default { createAPI };
