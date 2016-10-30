/*
https://465f2fb0.ngrok.io/coinbase/verified
https://465f2fb0.ngrok.io/coinbase/notifications
https://465f2fb0.ngrok.io/oauth
*/
import mongoose from 'mongoose';
import * as Coinbase from './coinbase.apiMethods';

const cbAccountSchema = new mongoose.Schema({
  account: {
    cb_id: { type: String },
    name: { type: String },
    balance: {
      ammount: { type: String },
      currency: { type: String },
    },
    public_address: { type: String },
  },
  deposits: {
    pending: [],
    completed: [],
  },
  withdrawals: {
    pending: [],
    completed: [],
  },
  transactions: {
    pending: [],
    completed: [],
  },
});

cbAccountSchema.statics.getBTCprices = (pair, cb) => {
  let buy;
  let sell;

  Coinbase.findBTCBuyPrice(pair)
  .then((cbBuy) => {
    buy = cbBuy;
    return Coinbase.findBTCSellPrice(pair);
  })
  .then((cbSell) => {
    sell = cbSell;
    return cb(null, {
      buy,
      sell,
      pair,
    });
  })
  .catch(err => cb(err));
};


const cbAccount = mongoose.model('cbAccount', cbAccountSchema);

export default cbAccount;
