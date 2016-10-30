import express from 'express';
import * as Coinbase from '../models/Coinbase/coinbaseEvents';

const router = new express.Router();

router.post('/btc/notifications', (req, res) => {
  console.log('req.body: ', req.body);
  res.sendStatus(200);
});

router.post('/send/:address', (req, res) => Coinbase.sendBitcoin(req.params.address, req.body, res.handle));

export default router;
