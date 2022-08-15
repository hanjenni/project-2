const express = require('express');
const router = express.Router();
const districtController = require('../controllers/districts');

router.get('/', districtController.index);
router.get('/new', districtController.new);
router.post('/', districtController.create);
router.get('/:id', districtController.show);

module.exports = router; 