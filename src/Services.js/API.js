import { create } from 'apisauce';

const createAPI = (baseurl = process.env.BASE_URL) => {
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
