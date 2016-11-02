import stripeNode from 'stripe';
import dotenv from 'dotenv';
import StripeAccount from '../'

dotenv.config({ silent: true });
const stripe = stripeNode(process.env.STRIPE_LIVE_SECRET_KEY);

export const rxDonation = (token, donationInfo) =>
Promise.fromCallback(cb => {
  stripe.charges.create({
    amount: donationInfo.amount,
    currency: donationInfo.currency,
    source: token,
    description: 'Entable Donation',
  }, cb);
});
