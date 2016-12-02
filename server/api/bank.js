import express from 'express';
import Bank from '../models/dbModels/banks';

const router = new express.Router();
// ----------------------REMOVE BEFORE DEPLOY ---------------------------------
router.delete('/', (req, res) => Bank.remove({}, res.handle));
// ----------------------------------------------------------------------------
router.route('/')
.get((req, res) => Bank.find({}, res.handle))
.post((req, res) => Bank.create(req.body, res.handle));
// ----------------------------------------------------------------------------

router.route('/manager')
.get((req, res) =>
Bank.findBankByManagerId(req.query.manager_id, res.handle));

// ----------------------------------------------------------------------------
router.route('/:id')
.get((req, res) =>
Bank.findById(req.params.id, res.handle))
.put((req, res) =>
Bank.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true }, res.handle))
.delete((req, res) =>
Bank.findByIdAndRemove(req.params.id, res.handle));
// ----------------------------------------------------------------------------

router.route('/:bank_id/manager/:manager_id')
.get((req, res) =>
Bank.find(req.params.bank_id, res.handle))
.put((req, res) =>
Bank.assignManagerAsChair(req.params.bank_id, req.params.manager_id, res.handle));

// ----------------------------------------------------------------------------

export default router;
