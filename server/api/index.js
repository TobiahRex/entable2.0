import express from 'express';
import twilio from './twilio';
import coinbase from './coinbase';
import stripe from './stripe';
import stripeEvent from './stripeEvent';
import coinbaseEvent from './coinbaseEvent';

const router = new express.Router();

// router.use('/twilio', twilio);
router.use('/coinbase', coinbase);
// router.use('/stripe', stripe);
router.use('/stripe/webhooks', stripeEvent);
router.use('/coinbase/webhooks', coinbaseEvent);

export default router;