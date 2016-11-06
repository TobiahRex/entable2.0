import stripeNode from 'stripe';
import dotenv from 'dotenv';
import StripeAcct from '../dbModels/stripes';

dotenv.config({ silent: true });
const stripe = stripeNode(process.env.STRIPE_LIVE_SECRET_KEY);

export const acceptDonation = (token, donationInfo) =>
Promise.fromCallback(cb => stripe.charges.create({
  amount: donationInfo.amount,
  currency: donationInfo.currency,
  source: token,
  description: `Mongo ID: _id=${donationInfo._id}`,
}, cb));

export const rxDonation = (token, donationInfo, cb) => {
  let dbRefId;
  StripeAcct.saveDonationInfo(donationInfo)
  .then((dbDonation) => {
    dbRefId = dbDonation._id;
    acceptDonation(token, donationInfo);
  })
  .then(charge => {
    console.log('charge: ', charge);
    StripeAcct.saveChargeInfo(dbRefId, charge, cb)
  })
  .catch(error => cb({
    ERROR_DONATION: 'There was an error processing your donation.', error,
  }));
};
