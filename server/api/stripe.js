import express from 'express';
import Stripe from '../models/apiModels/stripe';

const router = new express.Router();

/*
  This is the local api for handling local api actions having to do with Stripe.

  1. Donor sends FIAT to Stripe account.
  2. Donor gives Entable permission to retrieve Donor's Coinbase info using Stripe API

*/
router.post('/donation/:tx_token', (req, res) =>
Stripe.rxDonation(req.params.tx_token, req.body, res.handle));

// ----------------------------- Webhooks -------------------------------------

router.post('/notifications', (req, res) =>
StripeHooks.saveNotification(req.body, res.handle));


export default router;
