import stripeNode from 'stripe';
import dotenv from 'dotenv';
import Promise from 'bluebird';
import StripeAcct from '../dbModels/stripes';

dotenv.config({ silent: true });
const stripe = stripeNode('sk_test_GDAilUmntpmOgLEveq1E1RNI');
// const stripe = stripeNode(process.env.STRIPE_LIVE_SECRET_KEY);

export const acceptDonation = (token, donationInfo) =>
Promise.fromCallback(cb => stripe.charges.create({
  amount: donationInfo.amount,
  currency: donationInfo.currency,
  source: token.id,
  description: `Mongo ID: _id=${donationInfo._id}`,
}, cb));
// return stripe.charges.create({
//   amount: donationInfo.amount,
//   currency: donationInfo.currency,
//   source: token.id,
//   description: `Mongo ID: _id=${donationInfo._id}`,
// }, (err, charge) => {
//   console.log('err: ', err || 'CHARGE: \n', charge);
//   return (err || charge);
// });

export const rxDonation = ({ token, info }, cb) => {
  let dbRefId;
  StripeAcct.saveDonationInfo(info)
  .then((dbDonation) => {
    dbRefId = dbDonation._id;
    return acceptDonation(token, dbDonation.donation.info);
  })
  .then(charge => {
    console.log('CHARGE >>> ', charge);
    StripeAcct.saveChargeInfo(dbRefId, charge, cb)
  })
  .catch(error => {
    console.log('error >>>\n', error);
    return cb({
    ERROR_DONATION: 'There was an error processing your donation.', error
  })
});
};
