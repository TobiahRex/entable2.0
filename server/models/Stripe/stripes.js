import stripeNode from 'stripe';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

const stripeAccountSchema = new mongoose.Schema({
  events: [{ type: Object }],
});

dotenv.config({ silent: true });

const stripe = stripeNode(process.env.STRIPE_LIVE_SECRET_KEY);

stripeAccountSchema.statics.txfrToBank = amount =>
stripe.transfer.create({
  amount,
  currency: 'usd',
  destination: 'default_for_currency',
}, {
  stripe_account: process.env.STRIPE_DEFAULT_BANK_ACCT_ID,
});

stripeAccountSchema.statics.txfrToDebitCard = amount =>
stripe.transfer.create({
  amount,
  currency: 'usd',
  method: 'instant',
}, {
  stripe_account: process.env.STRIPE_DEFAULT_DEBIT_CARD_ACCT_ID,
});

stripeAccountSchema.statics.saveEvent = eventObj =>
StripeEvent.create(eventObj);

stripeAccountSchema.statics.verifyAndSave = (reqBody, cb) => {
  stripe.events.retrieve(reqBody.id)
  .then(event => StripeEvent.saveEvent(event))
  .then(() => cb(null, { SUCCESS: 'Event saved.' }))
  .catch(err => cb(err));
};

const StripeEvent = mongoose.model('StripeEvent', stripeAccountSchema);
