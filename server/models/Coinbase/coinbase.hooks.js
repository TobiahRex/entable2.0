import CoinbaseAccount from './coinbases';

const buyCreated = (event, cb) => {
  let dbAcctRef;
  CoinbaseAccount.find({ payment_method: event.data.payment_method })
  .then((dbAcct) => {
    dbAcctRef = dbAcct;
    dbAcctRef.transactions.pending.push(event);
    return dbAcctRef.save();
  })
  .then(() => cb(null, {
    EVENT_ALERT: `A '${event.type}' was received from Coinbase, and saved successfully.`,
    user: dbAcctRef._id,
  }))
  .catch(error => cb({ EVENT_ERROR: `A '${event.type}' event was received from Coinbase, however it was not successfully saved to the database.`, error }));
};

const buyCompleted = (event, cb) => {
  let dbAcctRef;
  CoinbaseAccount.find({ payment_method: event.data.payment_method })
  .then((dbAcct) => {
    dbAcctRef = dbAcct;
    dbAcctRef.transactions = dbAcct.transactions.pending.filter(dbEvent =>
    dbEvent.id !== event.id);
    return dbAcct.save();
  })
  .then(() => cb(null, { EVENT_ALERT: `A '${event.type}' event was received from Coinbase and successfully saved.`, user: dbAcctRef._id }))
  .catch(error => cb({ EVENT_ERROR: `A '${event.type}' event was received from Coinbase, however it was not successfully saved to the database.`, error }));
};
