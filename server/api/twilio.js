import express from 'express';
import TwilioAPI from '../models/apiModels/twilio';

const router = new express.Router();

// ----------------------------- Endpoints -------------------------------------

router.post('/text_btc/:phone', (req, res) => TwilioAPI.sendText(req.params.phone, res.handle));

// ----------------------------- Webhooks -------------------------------------

router.route('/sms/test')
.post((req, res) => Twilio.replyGreeting(res.twiml));

export default router;
