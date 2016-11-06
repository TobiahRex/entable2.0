import stripeNode from 'stripe';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config({ silent: true });
const stripe = stripeNode(process.env.STRIPE_LIVE_SECRET_KEY);

const stripeAcctSchema = new mongoose.Schema({
  donation: {
    info: {
      date: { type: Date, default: Date.now },
      currency: { type: String, default: 'USD' },
      amount: { type: Number, default: 0 },
    },
    charge_info: {},
    pending: { type: Boolean },
    // a token has been created by stripe.
    charged: { type: Boolean },
    // the token from stripe has been charge.
    conversion_pending: { type: Boolean },
    // has been sent to FIAT account for conversion.
    conversion_completed: { type: Boolean },
    // has been converted to Bitcoin on Coinbase.
  },
});

stripeAcctSchema.statics.saveDonationInfo = donationInfo =>
StripeAcct.create({
  donation: {
    info: donationInfo,
    pending: true,
  },
});

stripeAcctSchema.statics.saveChargeInfo = (id, chargeInfo, cb) =>
StripeAcct.findById(id)
.then((dbStripeAcctRef) => {
  const dbStripeAcct = dbStripeAcctRef;
  dbStripeAcct.charge_info = chargeInfo;
  dbStripeAcct.donation.pending = false;
  dbStripeAcct.donation.charged = true;
  return dbStripeAcct.save();
})
.then(savedStripeAcct => cb(null, savedStripeAcct))
.catch(() => cb({ ERROR: 'Could not save information to Database.' }));

stripeAcctSchema.statics.txfrToBank = amount =>
stripe.transfer.create({
  amount,
  currency: 'usd',
  destination: 'default_for_currency',
}, {
  stripe_account: process.env.STRIPE_DEFAULT_BANK_ACCT_ID,
});

stripeAcctSchema.statics.txfrToDebitCard = amount =>
stripe.transfer.create({
  amount,
  currency: 'usd',
  method: 'instant',
}, {
  stripe_account: process.env.STRIPE_DEFAULT_DEBIT_CARD_ACCT_ID,
});

stripeAcctSchema.statics.saveEvent = eventObj =>
StripeAcct.create(eventObj);

stripeAcctSchema.statics.verifyAndSave = (reqBody, cb) => {
  stripe.events.retrieve(reqBody.id)
  .then(event => StripeAcct.saveEvent(event))
  .then(() => cb(null, { SUCCESS: 'Event saved.' }))
  .catch(err => cb({ ERROR: 'Could not save that information.' }));
};

const StripeAcct = mongoose.model('StripeEvent', stripeAcctSchema);

export default StripeAcct;
