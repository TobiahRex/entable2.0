import express from 'express';
import Bank from '../models/Bank';

const router = new express.Router();

router.route('/')
.get((req, res) => Bank.find({}, res.handle));

export default router;
