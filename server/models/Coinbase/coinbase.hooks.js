import CoinbaseAccount from './coinbases';

const buyCreated = (event, cb) => {
  let acctRef;
  CoinbaseAccount.find({ payment_method: event.data.payment_method.id })
  .then((dbAccount) => {
    acctRef = dbAccount._id;
    dbAccount.transactions.pending.push(event);
    return dbAccount.save();
  })
  .then(() => cb(null, {
    EVENT_ALERT: `A '${event.type}' was received from Coinbase, and saved successfully.`,
    user: acctRef._id,
  }))
  .catch(error => cb({ EVENT_ERROR: `A '${event.type}' event was received from Coinbase, however it was not successfully saved to the database.`, error }));
};

const buyCompleted = (event, cb) => {
  let acctRef;
  CoinbaseAccount.find({ payment_method: event.data.payment_method })
  .then(dbAccount => {
    dbAccount.transactions = dbAccount.transactions.pending.filter((dbEvent) => dbEvent.id !== event.id);
    return dbAccount.save();
  })
  .then(() => cb(null, { EVENT_ALERT: 'A ' }))
}
