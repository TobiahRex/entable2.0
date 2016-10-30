import express from 'express';
import * as Coinbase from '../models/Coinbase';

const router = new express.Router();

router.post('/send/:address', (req, res) => Coinbase.sendBitcoin(req.params.address, req.body, res.handle));

export default router;
