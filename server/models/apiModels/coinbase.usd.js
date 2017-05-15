import dotenv from 'dotenv';
import Promise from 'bluebird';
import coinbaseNode from 'coinbase';

dotenv.load({ silent: true });

const Client = coinbaseNode.Client;
const Coinbase = new Client({
  apiKey: process.env.COINBASE_USD_API_KEY,
  apiSecret: process.env.COINBASE_USD_API_SECRET,
  // accessToken: process.env.COINBASE_DEVELOPER_ACCESS_TOKEN,
});
const usdAcctId = process.env.COINBASE_USD_ACCT_ID;

// ------------------- BUY & Sell BTC Methods -------------------

// Use the "placeOrder" with the "commitBuy" together.
export const placeBuyOrder = orderObj =>
  Promise.fromCallback(cb => Coinbase.buy(orderObj, cb));
export const commitBuy = tx =>
  Promise.fromCallback(cb => tx.commit(null, cb));

export const placeSellOrder = orderObj =>
  Promise.fromCallback(cb => Coinbase.sell(orderObj, cb));
export const commitSell = tx =>
  Promise.fromCallback(cb => tx.commit(null, cb));

// Use the "accountBuys" with "getPendingBuys" together.
export const getPendingBuys = () =>
  Promise.fromCallback(cb => Coinbase.getAccount(usdAcctId, cb));
export const accountBuys = acct =>
  Promise.fromCallback(cb => acct.getBuys(null, cb));

// ------------------- Query Methods -------------------
export const findAccounts = () =>
  Promise.fromCallback(cb => Coinbase.getAccounts({}, cb));

export const findBTCBuyPrice = pair =>
  Promise.fromCallback((cb) => {
    const cross = pair.toUpperCase();
    return Coinbase.getBuyPrice({ currencyPair: `BTC-${cross}` }, cb);
  });

export const findBTCSellPrice = pair =>
  Promise.fromCallback((cb) => {
    const cross = pair.toUpperCase();
    return Coinbase.getSellPrice({ currencyPair: `BTC-${cross}` }, cb);
  });

export const findAccountById = id =>
  Promise.fromCallback(cb => Coinbase.getAccount(id, cb));

export const findUser = () =>
  Promise.fromCallback(cb => Coinbase.getCurrentUser(cb));

export const getPaymentMethods = () =>
  Promise.fromCallback(cb => Coinbase.getPaymentMethods(cb));

// ------------------- Transfer Methods -------------------


// -------------- REFACTOR below --------------
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
  findAccountById(usdAcctId, (err, account) => {
    if (err) return cb(err);
    const params = {
      amount,             // floating
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
