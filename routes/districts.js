const express = require('express');
const router = express.Router();
const districtController = require('../controllers/districts');

router.get('/new', districtController.new);
router.post('/new', districtController.create);

module.exports = router; 