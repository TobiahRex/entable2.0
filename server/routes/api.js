const express = require('express');

const router = new express.Router();

router.use('/tropo', require('./tropo'));

module.exports = router;
