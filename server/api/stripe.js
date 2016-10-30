import express from 'express';
import * as Stripe from '../models/Stripe';

const router = new express.Router();

router.post('/event_updates', (req, res) =>
Stripe.saveAndVerifyEvent(req.body, res.handle));


export default router;
