import stripeNode from 'stripe';

const stripe = stripeNode(process.env.STRIPE_API_SECRET)
