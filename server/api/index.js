import express from 'express';
import users from './user';
import banks from './bank';
import twilio from './twilio';
import coinbase from './coinbase';
// import stripe from './stripe';
import stripe from './stripe';
// ----------------------------------------------------------------------------

const router = new express.Router();


router.use('/users', users);
router.use('/banks', banks);
router.use('/twilio', twilio);
router.use('/coinbase', coinbase);
router.use('/stripe', stripe);
// router.use('/stripe/webhooks', stripeEvent);
// router.use('/coinbase/webhooks', coinbaseEvent);

export default router;
