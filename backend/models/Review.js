const mongoose = require('mongoose');

/**
 * Review Schema
 * Handles tour reviews and ratings
 */
const reviewSchema = new mongoose.Schema(
  {
    tour: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Tour',
      required: [true, 'Review must belong to a tour'],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Review must belong to a user'],
    },
    rating: {
      type: Number,
      required: [true, 'Please provide a rating'],
      min: 1,
      max: 5,
    },
    comment: {
      type: String,
      required: [true, 'Please provide a comment'],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// Prevent duplicate reviews from same user for same tour
reviewSchema.index({ tour: 1, user: 1 }, { unique: true });

module.exports = mongoose.model('Review', reviewSchema);
