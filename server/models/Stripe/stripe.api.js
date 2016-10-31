import stripeNode from 'stripe';
import dotenv from 'dotenv';

dotenv.config({ silent: true });
const stripe = stripeNode(process.env.STRIPE_LIVE_SECRET_KEY);
