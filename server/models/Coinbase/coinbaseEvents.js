import Promise from 'bluebird';
import coinbaseNode from 'coinbase';
import dotenv from 'dotenv';

dotenv.load({ silent: true });
const Client = coinbaseNode.Client;
const coinbase = new Client({
  apiKey: process.env.COINBASE_BTC_API_KEY,
  apiSecret: process.env.COINBASE_BTC_API_SECRET,
});
const coinbaseId = process.env.COINBASE_ACCT_ID;

export const findAccounts = () =>
Promise.fromCallback(cb => coinbase.getAccounts({}, cb));

export const findBTCBuyPrice = pair =>
Promise.fromCallback((cb) => {
  const cross = pair.toUpperCase();
  return coinbase.getBuyPrice({ currencyPair: `BTC-${cross}` }, cb);
});  // findBTCBuyPrice('usd');

export const findAccountById = id =>
Promise.fromCallback(cb => coinbase.getAccount(id, cb));
// findAccountById('46d59554-234c-5cc6-9eb3-83c6e9d0cf1b');

export const findUser = () =>
Promise.fromCallback(cb => coinbase.getCurrentUser(cb));

export const sendBitcoin = (address, reqBody, desc) =>
Promise.fromCallback(cb => findAccounts()
.then(account =>
  account.sendMoney({
    to: address,            // email, bitcoin, or ethereum address
    currency: 'BTC',
    amount: reqBody.amout,  // floating
    description: desc,      // string
  }, cb)
)
.catch(cb));

export const requestBitcoin = (cb, address, amount, desc) => {
  findAccountById(coinbaseId, (err, account) => {
    if (err) return cb(err);
    const params = {
      amount,             // f800loating
      to: address,        // email
      currency: 'BTC',
      description: desc,  // string
    };
    return account.requestMoney(params, (err2, txn) => {
      if (err2) return cb(err2);
      process.stdout.write('my txn id is: ', txn.id);
      return cb(null, txn);
    });
  });
};
