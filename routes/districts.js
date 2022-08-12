const express = require('express');
const router = express.Router();
const districtController = require('../controllers/districts');

router.get('/new', districtController.new);

module.exports = router; 