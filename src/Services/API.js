import { create } from 'apisauce';

const createAPI = (baseURL = process.env.BASE_URL) => {
  const api = create({
    baseURL,
    headers: { 'Cache-control': 'no-cache' },
  });
  // --------------------------------------------------------
  const saveNewUser = info => api.post('api/users', info);

  const getUser = uid => api.get(`api/users/${uid}`);

  // --------------------------------------------------------
  const getAllBanks = () =>
  api.get('api/banks/');

  const getExchangeRate = pair =>
  api.get('api/coinbase/btc/coinbase/rate', pair);

  const sendText = text =>
  api.post(`api/twilio/text_btc/${text}`);

  const sendToken = (token, info) =>
  api.post('api/stripe/donation', { token, info });
  // --------------------------------------------------------

  return {
    // users
    getUser,
    saveNewUser,
    // info
    getExchangeRate,
    getAllBanks,
    // feature actions
    sendText,
    sendToken,
  };
};

export default { createAPI };
