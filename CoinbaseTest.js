/*
https://465f2fb0.ngrok.io/coinbase/verified
https://465f2fb0.ngrok.io/coinbase/notifications
https://465f2fb0.ngrok.io/oauth
*/
import dotenv from 'dotenv';
import Promise from 'bluebird';
import coinbaseNode from 'coinbase';
import request from 'request';

dotenv.load({ silent: true });
const cbBaseUrl = 'https://api.coinbase.com/v2';
const Client = coinbaseNode.Client;
const coinbase = new Client({
  apiKey: process.env.COINBASE_API_KEY,
  apiSecret: process.env.COINBASE_API_SECRET,
});
const cbAccounts = [];
let priceBTCUSD = '';

export const findAccounts = () => {
  coinbase.getAccounts({}, (err, accounts) => {
    accounts.forEach((acct) => {
      const acctsDictionary = {};
      acctsDictionary.id = acct.id;
      acctsDictionary.name = acct.name;
      acctsDictionary.primary = acct.primary;
      acctsDictionary.type = acct.type;
      acctsDictionary.currency = acct.currency;
      acctsDictionary.balance = acct.balance;
      acctsDictionary.resource_path = acct.resource_path;
      acctsDictionary.caFile = [...acct.coinbase.caFile];
      cbAccounts.push(acctsDictionary);
    });
  });
};


export const findBTCBuyPrice = pair =>
Promise.fromCallback((cb) => {
  const cross = pair.toUpperCase();
  return coinbase.getBuyPrice({ currencyPair: `BTC-${cross}` }, cb);
});
// findBTCBuyPrice('usd');

export const findAccountById = id =>
  Promise.fromCallback(cb => coinbase.getAccount(id, cb));
// findAccountById('46d59554-234c-5cc6-9eb3-83c6e9d0cf1b');

export const findUser = () =>
  Promise.fromCallback(cb => coinbase.getCurrentUser(cb));
