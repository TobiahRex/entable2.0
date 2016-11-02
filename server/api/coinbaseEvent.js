import express from 'express';
import CbHooks from '../models/Coinbase/coinbase.hooks';

const router = new express.Router();

router.post('/btc/notifications', (req, res) => CbHooks.saveNotification(req.body, res.handle));

export default router;
