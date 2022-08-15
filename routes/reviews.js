const express = require('express');
const router = express.Router();
const reviewsController = require('../controllers/reviews');

router.post('/districts/:id/reviews', reviewsController.create);

module.exports = router; 
