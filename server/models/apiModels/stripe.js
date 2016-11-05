import stripeNode from 'stripe';
import dotenv from 'dotenv';
import StripeAccount from '../dbModels/stripes';

dotenv.config({ silent: true });
const stripe = stripeNode(process.env.STRIPE_LIVE_SECRET_KEY);

const acceptDonation = (token, donationInfo) =>
Promise.fromCallback(cb => stripe.charges.create({
  amount: donationInfo.amount,
  currency: donationInfo.currency,
  source: token,
  description: `Mongo ID: _id=${donationInfo._id}`,
}, cb));

const rxDonation = (token, donationInfo, cb) => {
  StripeAccount.saveDonationInfo(donationInfo)
  .then(savedInfo => acceptDonation(token, savedInfo))
  .then(charge => StripeAccount.savedChargeInfo(charge))
  .then(savedCharge => cb(null, savedCharge))
  .catch(error => cb({
    ERROR_DONATION: 'There was an error processing your donation.', error,
  }));
};

export default rxDonation;
