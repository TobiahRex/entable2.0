const express = require('express');
const Tropo = require('../models/Tropo');

const router = new express.Router();

router.post('/create', Tropo.create);
router.post('/trans', Tropo.trans);
router.post('/member', Tropo.member);
router.get('/', Tropo.all);

module.exports = router;
