const express = require('express');
const router = express.Router();
const reviewsController = require('../controllers/reviews');
const isLoggedIn = require('../config/auth');

router.post('/districts/:id/reviews', isLoggedIn, reviewsController.create);
router.delete('/reviews/:id', isLoggedIn, reviewsController.delete);
router.put('/districts/:districtId/reviews/:reviewId', isLoggedIn, reviewsController.edit);


module.exports = router; 
