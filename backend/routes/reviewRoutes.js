const express = require('express');
const router = express.Router();
const {
  createReview,
  getTourReviews,
  deleteReview,
} = require('../controllers/reviewController');
const { protect } = require('../middleware/auth');

// Public routes
router.get('/:tourId', getTourReviews);

// Protected routes
router.post('/', protect, createReview);
router.delete('/:id', protect, deleteReview);

module.exports = router;
