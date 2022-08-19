const express = require('express');
const router = express.Router();
const districtController = require('../controllers/districts');
const isLoggedIn = require('../config/auth');

router.get('/', isLoggedIn, districtController.index);
router.get('/new', isLoggedIn, districtController.new);
router.post('/', isLoggedIn,districtController.create);
router.get('/:id',isLoggedIn, districtController.show);

module.exports = router; 