import express from 'express';
import Twilio from '../models/Twilio';

const router = new express.Router();

router.use('/sms/test')
.post((req, res) => Twilio.replyThanks())

export default router;
