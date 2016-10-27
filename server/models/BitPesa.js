import coinbase from 'coinbase';

const coinbaseId = process.env.COINBASE_ID;
const Client = coinbase.Client;
const client = new Client({
  apiKey: process.env.COINBASE_API_KEY,
  apiSecret: process.env.COINBASE_API_SECRET,
});

export const findAccounts = () => {
  client.getAccounts({}, (err, accounts) => {
    accounts.forEach((acct) => {
      process.stdout.write('my bal: ', acct.balance.amount, '\nname: ', acct.name, '\n');
    });
  });
};

export const findAccountById = (id) => {
  coinbase.getAccount(id, (err, acct) => {
    process.stdout.write('bal: ', acct.balance.amount, '\ncurrency: ', acct.balance.currency, '\n');
  });
};

export const sendBitcoin = (cb, address, amount, desc) => {
  findAccountById(coinbaseId, (err, account) => {
    if (err) return cb(err);
    const params = {
      amount,             // floating
      to: address,        // email
      currency: 'BTC',
      description: desc,  // string
    };
    return account.sendMoney(params, (err2, txn) => {
      if (err2) return cb(err2);
      process.stdout.write('my txn id is: ', txn.id);
      return cb(null, txn);
    });
  });
};
