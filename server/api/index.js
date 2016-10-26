import express from 'express';
import twilio from './twilio';
import tropo from './tropo';

const router = new express.Router();

router.use('/tropo', tropo);
router.use('/twilio', twilio);

export default router;
