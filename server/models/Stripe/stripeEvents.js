import Promise from 'bluebird';
import stripeNode from 'stripe';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

const stripeEventSchema = new mongoose.Schema({
  events: [{ type: Object }],
});

dotenv.config({ silent: true });

const stripe = stripeNode(process.env.STRIPE_LIVE_SECRET_KEY);
Promise.promisify(stripe);

export const txfrToBank = amount =>
stripe.transfer.create({
  amount,
  currency: 'usd',
  destination: 'default_for_currency',
}, {
  stripe_account: process.env.STRIPE_DEFAULT_BANK_ACCT_ID,
});

export const txfrToDebitCard = amount =>
stripe.transfer.create({
  amount,
  currency: 'usd',
  method: 'instant',
}, {
  stripe_account: process.env.STRIPE_DEFAULT_DEBIT_CARD_ACCT_ID,
});

export const saveEvent = eventObj => {
  stripeAccount.findById();
};

export const saveAndVerifyEvent = (reqBody, cb) => {
  stripe.events.retrieve(reqBody.id)
  .then(event => saveEvent(event))
  .then(() => cb(null, null))
  .catch(err => cb(err));
};

const StripeEvent = mongoose.model('StripeEvent', stripeEventSchema);
