const express = require('express');
const router = express.Router();
const reviewsController = require('../controllers/reviews');

router.post('/districts/:id/reviews', reviewsController.create);
router.delete('/reviews/:id', reviewsController.delete);

router.get('/reviews/:id/edit', reviewsController.edit);
router.put('/review/:id/edit', reviewsController.update);

module.exports = router; 
