import CoinbaseAccount from '../models/apiModels/coinbases';

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

const saveNotification = (eventObj, cb) => {
  switch (eventObj.type) {
    case 'wallet:buys:created': return buyCreated(eventObj, cb);
    case 'wallet:buys:completed': return buyCompleted(eventObj, cb);
    default: return cb({ EVENT_ERROR: 'Could not determine hook type, Check "saveHook" method.' });
  }
};

export default saveNotification;
