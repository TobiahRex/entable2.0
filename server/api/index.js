import express from 'express';
import twilio from './twilio';
import coinbase from './coinbase';
import stripe from './stripe';
import stripeWebhooks from './stripeWebhooks';

const router = new express.Router();

router.use('/twilio', twilio);
router.use('/coinbase', coinbase);
router.use('/stripe', stripe);
router.use('/stripe/webhooks', stripeWebhooks);

export default router;
