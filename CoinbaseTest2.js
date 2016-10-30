import * as Coinbase from './CoinbaseTest';

// Coinbase.findUser()
// .then(console.log)
// .catch(console.error)

Coinbase.findAccounts()
.then((accounts) => {
  const cbAccounts = [];
  accounts.forEach((acct, i) => {
    const acctsDictionary = {};
    acctsDictionary.index = (i + 1);
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
  return console.log('Accounts: \n', cbAccounts);
})
.catch(console.error);
//
// Coinbase.findBTCBuyPrice('usd')
// .then(console.log)
// .catch(console.err);
