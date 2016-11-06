import express from 'express';
import * as Stripe from '../models/apiModels/stripe';
import StripeAcct from '../models/dbModels/stripes';

const router = new express.Router();

/*
  This is the local api for handling local api actions having to do with Stripe.

  1. Donor sends FIAT to Stripe account.
  2. Donor gives Entable permission to retrieve Donor's Coinbase info using Stripe API

*/
router.route('/')
.get((req, res) => StripeAcct.find({}, res.handle))
.delete((req, res) => StripeAcct.remove({}, res.handle));

router.post('/donation', (req, res) => Stripe.rxDonation(req.body, res.handle));

// ----------------------------- Webhooks -------------------------------------

router.post('/notifications', (req, res) => StripeHooks.saveNotification(req.body, res.handle));


export default router;
