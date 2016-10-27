import express from 'express';
import * as Twilio from '../models/Twilio';

const router = new express.Router();

router.route('/sms/test')
.post((req, res) => Twilio.replyThanks(res.twiml));

export default router;
