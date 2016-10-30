import express from 'express';
import * as Stripe from '../models/Stripe';

const router = new express.Router();

router.post('/all_events', (req, res) =>
Stripe.veryifyAndSave(req.body, res.handle));

// router.post('/transfer_created', (req, res) =>
// Stripe.verifyTransfer(req.body, res.handle));

// router.post('/transfer_failed',);
//
// router.post('/charge_succeeded', )
// router.post('/charge_failed', )
//
// router.post('/balance_available', )
// router.post('/account_updated', (req, res) =>
// Stripe.verifyAccount(req.body, res.handle));

export default router;
