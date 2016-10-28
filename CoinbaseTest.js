/*
https://465f2fb0.ngrok.io/coinbase/verified
https://465f2fb0.ngrok.io/coinbase/notifications
https://465f2fb0.ngrok.io/oauth
*/
import dotenv from 'dotenv';
import coinbase from 'coinbase';
import request from 'request';

dotenv.load({ silent: true });
const cbBaseUrl = 'https://api.coinbase.com/v2';
const Client = coinbase.Client;
const client = new Client({
  accessToken: process.env.COINBASE_DEVELOPER_ACCESS_TOKEN,
  refreshToken: undefined,
});
const cbAccounts = [];
let priceBTCUSD = '';

function findAccounts() {
  client.getAccounts({}, (err, accounts) => {
    accounts.forEach((acct) => {
      const acctsDictionary = {};
      acctsDictionary.id = acct.id;
      acctsDictionary.name = acct.name;
      acctsDictionary.primary = acct.primary;
      acctsDictionary.type = acct.type;
      acctsDictionary.currency = acct.currency;
      acctsDictionary.balance = acct.balance;
      acctsDictionary.resource_path = acct.resource_path;
      acctsDictionary.caFile = [...acct.client.caFile];
      cbAccounts.push(acctsDictionary);
    });
    console.log('\n-----------------------\n');
    console.log('accountsArray: \n', cbAccounts);
  });
}

function findAccountById(id) {
  client.getAccount(id, (err, acct) => {
    console.log('acct: \n', acct);
  });
}
// findAccountById('46d59554-234c-5cc6-9eb3-83c6e9d0cf1b');

function findBTCBuyPrice(pair) {
  const cross = pair.toUpperCase();
  client.getBuyPrice({ currencyPair: `BTC-${cross}` }, (err, obj) => {
    if (obj.data.currency === cross) return (priceBTCUSD = obj.data.amount);
    console.log('Price: \n', obj);
  });
}
// findBTCBuyPrice('usd');

function getUserInfo() {
  const options = {
    url: `${cbBaseUrl}/user`,
    headers: {
      method: 'GET',
      Authorization: `Bearer ${process.env.COINBASE_DEVELOPER_ACCESS_TOKEN}`,
      'Content-Type': 'application/json',
      'CB-VERSION': '2016-08-10',
      'CB-ACCESS-TIMESTAMP': Date.now(),
    },
  };

  request(options, (err, res) => console.log(err ? `ERROR: ${err}` : `SUCCESS >>> ${JSON.stringify(res)}`));
}
getUserInfo();
