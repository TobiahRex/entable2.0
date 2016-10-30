import express from 'express';

const router = new express.Router();

/*
  This is the local api for handling local api actions having to do with Stripe.

  1. Donor sends FIAT to Stripe account.
  2. Donor gives Entable permission to retrieve Donor's Coinbase info using Stripe API

*/

export default router;
