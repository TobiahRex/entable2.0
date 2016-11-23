import { Router } from 'express';
import User from '../models/dbModels/users';

const router = new Router();

router.route('/')
.post((req, res) => User.create(req.body, res.handle));

export default router;
