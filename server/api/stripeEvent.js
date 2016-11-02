import express from 'express';
import * as StripeHooks from '../models/Stripe/stripe.hooks';

const router = new express.Router();

router.post('/notifications', (req, res) =>
StripeHooks.saveNotification(req.body, res.handle));

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
