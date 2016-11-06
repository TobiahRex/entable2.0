import { create } from 'apisauce';

const createAPI = (baseURL = process.env.BASE_URL) => {
  const api = create({
    baseURL,
    headers: { 'Cache-control': 'no-cache' },
  });

  const getAllBanks = () => api.get('api/banks/');

  const getExchangeRate = pair =>
  api.get('api/coinbase/btc/coinbase/rate', pair);

  const sendText = text => api.post(`api/twilio/text_btc/${text}`);

  const sendToken = token => api.post(`api/stripe/donation/${token}`);

  return {
    getExchangeRate,
    getAllBanks,
    sendText,
    sendToken,
  };
};

export default { createAPI };
