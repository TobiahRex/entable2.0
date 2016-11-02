import express from 'express';
import Coinbase from '../models/Coinbase/coinbases';

const router = new express.Router();

router.post('/btc/:transaction_type', (req, res) =>
Coinbase.createTransaction(req.params.transaction_type, res.handle));

router.post('/btc/send/:address', (req, res) => Coinbase.sendBitcoin(req.params.address, req.body, res.handle));

export default router;
