import express from 'express';
import * as Twilio from '../models/apiModels/twilio';

const router = new express.Router();

// ----------------------------- Endpoints -------------------------------------

router.post('/text_btc/:phone', (req, res) => Twilio.textAddressBtc(req.params.phone, res.handle));

// ----------------------------- Webhooks -------------------------------------

router.route('/sms/reply')
.post((req, res) => Twilio.replyReceived(res.twiml));

export default router;
