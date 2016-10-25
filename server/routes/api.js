const express = require('express');
const router = express.Router();

router.use('/tropo', require('./tropo'));

module.exports = router;
