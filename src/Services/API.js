import { create } from 'apisauce';

const createAPI = (baseurl = 'http://localhost:8000/') => {
  const api = create({
    baseurl,
    headers: {
      'Cache-control': 'no-cache',
    },
  });

  const getExchangeRate = pair =>
  api.get('api/coinbase/btc/coinbase/rate', pair);

  return {
    getExchangeRate,
  };
};

export default { createAPI };
