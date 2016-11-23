import { create } from 'apisauce';

const createAPI = (baseURL = process.env.BASE_URL) => {
  const api = create({
    baseURL,
    headers: { 'Cache-control': 'no-cache' },
  });
  // --------------------------------------------------------
  const saveNewUser = ({ info }) => {
    console.log('save new user info: \n', info);
    console.log('phone type: ', typeof info.phone);
    return api.post('api/users', info)
  };

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
