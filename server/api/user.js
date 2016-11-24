import { Router } from 'express';
import User from '../models/dbModels/users';

const router = new Router();

router.route('/:id')
.get((req, res) => User.find({ uid_firebase: req.params.id }, res.handle));

router.route('/')
.get((req, res) => User.find({}, res.handle))
.delete((req, res) => User.remove({}, res.handle))
.post((req, res) => User.create(req.body, res.handle));


export default router;
