const Review = require('../models/Review');
const Tour = require('../models/Tour');

/**
 * @desc    Create a new review
 * @route   POST /api/reviews
 * @access  Private
 */
const createReview = async (req, res) => {
  try {
    const { tour, rating, comment } = req.body;

    // Check if tour exists
    const tourExists = await Tour.findById(tour);
    if (!tourExists) {
      return res.status(404).json({ message: 'Tour not found' });
    }

    // Check if user already reviewed this tour
    const existingReview = await Review.findOne({ tour, user: req.user._id });
    if (existingReview) {
      return res
        .status(400)
        .json({ message: 'You have already reviewed this tour' });
    }

    const review = await Review.create({
      tour,
      user: req.user._id,
      rating,
      comment,
    });

    // Update tour rating
    const reviews = await Review.find({ tour });
    const avgRating =
      reviews.reduce((acc, item) => item.rating + acc, 0) / reviews.length;

    tourExists.rating = avgRating;
    tourExists.reviewsCount = reviews.length;
    await tourExists.save();

    res.status(201).json({
      success: true,
      data: review,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/**
 * @desc    Get reviews for a tour
 * @route   GET /api/reviews/:tourId
 * @access  Public
 */
const getTourReviews = async (req, res) => {
  try {
    const reviews = await Review.find({ tour: req.params.tourId })
      .populate('user', 'name')
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      count: reviews.length,
      data: reviews,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * @desc    Delete a review
 * @route   DELETE /api/reviews/:id
 * @access  Private
 */
const deleteReview = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);

    if (!review) {
      return res.status(404).json({ message: 'Review not found' });
    }

    // Check if user is the review owner or admin
    if (
      review.user.toString() !== req.user._id.toString() &&
      req.user.role !== 'admin'
    ) {
      return res.status(403).json({ message: 'Not authorized' });
    }

    const tourId = review.tour;
    await review.deleteOne();

    // Update tour rating
    const reviews = await Review.find({ tour: tourId });
    const tour = await Tour.findById(tourId);

    if (reviews.length > 0) {
      const avgRating =
        reviews.reduce((acc, item) => item.rating + acc, 0) / reviews.length;
      tour.rating = avgRating;
      tour.reviewsCount = reviews.length;
    } else {
      tour.rating = 0;
      tour.reviewsCount = 0;
    }

    await tour.save();

    res.json({
      success: true,
      message: 'Review deleted successfully',
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createReview,
  getTourReviews,
  deleteReview,
};
