/*
https://465f2fb0.ngrok.io/coinbase/verified
https://465f2fb0.ngrok.io/coinbase/notifications
https://465f2fb0.ngrok.io/oauth
*/
import dotenv from 'dotenv';
import Promise from 'bluebird';
import coinbaseNode from 'coinbase';

dotenv.load({ silent: true });

const Client = coinbaseNode.Client;
const CoinbaseUSD = new Client({
  apiKey: process.env.COINBASE_VAULT_API_KEY,
  apiSecret: process.env.COINBASE_VAULT_API_KEY,
  // accessToken: process.env.COINBASE_DEVELOPER_ACCESS_TOKEN,
});
const coinbase = new Client({
  apiKey: process.env.COINBASE_VAULT_API_KEY,
  apiSecret: process.env.COINBASE_VAULT_API_KEY,
  // accessToken: process.env.COINBASE_DEVELOPER_ACCESS_TOKEN,
});
const coinbase = new Client({
  // apiKey: process.env.COINBASE_VAULT_API_KEY,
  // apiSecret: process.env.COINBASE_VAULT_API_KEY,
  accessToken: process.env.COINBASE_DEVELOPER_ACCESS_TOKEN,
});

export const findAccounts = () =>
Promise.fromCallback(cb => coinbase.getAccounts({}, cb));

export const findBTCBuyPrice = pair =>
Promise.fromCallback((cb) => {
  const cross = pair.toUpperCase();
  return coinbase.getBuyPrice({ currencyPair: `BTC-${cross}` }, cb);
});

export const orderBuy = (orderObj) =>
Promise(cb => {
  coinbase.
})


// Use the "accountBuys" with "getPendingBuys" together.
export const getPendingBuys = () =>
Promise.fromCallback(cb => coinbase.getAccount(process.env.COINBASE_BTC_ACCT_ID, cb));

export const accountBuys = acct =>
Promise.fromCallback(cb => acct.getBuys(null, cb));
// ------------------------------------------------

export const findAccountById = id =>
Promise.fromCallback(cb => coinbase.getAccount(id, cb));

export const findUser = () =>
Promise.fromCallback(cb => coinbase.getCurrentUser(cb));

export const getPaymentMethods = () =>
Promise.fromCallback(cb => coinbase.getPaymentMethods(cb));
