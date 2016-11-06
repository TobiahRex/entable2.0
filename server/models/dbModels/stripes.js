import stripeNode from 'stripe';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

const stripeAcctSchema = new mongoose.Schema({
  Donation: {
    info: {},
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

dotenv.config({ silent: true });

const stripe = stripeNode(process.env.STRIPE_LIVE_SECRET_KEY);

stripeAcctSchema.statics.saveDonationInfo = donationInfo =>
StripeAcct.create()
.then((newAcct) => {
  const dbStripeAcct = newAcct;
  dbStripeAcct.info = donationInfo;
  dbStripeAcct.Donation.pending = true;
  return dbStripeAcct.save();
})
.catch(error => error);

stripeAcctSchema.statics.savedChargeInfo = (id, chargeInfo) =>
StripeAcct.findById(id)
.then((dbStripeAcctRef) => {
  const dbStripeAcct = dbStripeAcctRef;
  dbStripeAcct.charge_info = chargeInfo;
  dbStripeAcct.Donation.pending = false;
  dbStripeAcct.Donation.charged = true;
  return dbStripeAcct.save();
})
.catch(err => err);

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
  .catch(err => cb(err));
};

const StripeAcct = mongoose.model('StripeEvent', stripeAcctSchema);
