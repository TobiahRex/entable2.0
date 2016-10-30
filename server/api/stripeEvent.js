import express from 'express';
import * as StripeEvents from '../models/Stripe/stripeEvents';

const router = new express.Router();

router.post('/all_events', (req, res) =>
StripeEvents.veryifyAndSave(req.body, res.handle));

// router.post('/transfer_created', (req, res) =>
// StripeEvents.verifyTransfer(req.body, res.handle));

// router.post('/transfer_failed',);
//
// router.post('/charge_succeeded', )
// router.post('/charge_failed', )
//
// router.post('/balance_available', )
// router.post('/account_updated', (req, res) =>
// StripeEvents.verifyAccount(req.body, res.handle));

export default router;
