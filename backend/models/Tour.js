const mongoose = require('mongoose');

/**
 * Tour Schema
 * Handles tour packages with pricing, duration, and categories
 */
const tourSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide a tour name'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Please provide a description'],
    },
    price: {
      type: Number,
      required: [true, 'Please provide a price'],
      min: 0,
    },
    duration: {
      type: Number,
      required: [true, 'Please provide duration in days'],
      min: 1,
    },
    category: {
      type: String,
      required: [true, 'Please provide a category'],
      enum: ['Adventure', 'Cultural', 'Beach', 'Wildlife', 'Hill Country', 'City Tour'],
    },
    maxGroupSize: {
      type: Number,
      required: [true, 'Please provide max group size'],
      min: 1,
    },
    difficulty: {
      type: String,
      enum: ['Easy', 'Moderate', 'Challenging'],
      default: 'Moderate',
    },
    locations: [
      {
        type: String,
        trim: true,
      },
    ],
    included: [
      {
        type: String,
        trim: true,
      },
    ],
    images: [
      {
        type: String,
        trim: true,
      },
    ],
    featured: {
      type: Boolean,
      default: false,
    },
    rating: {
      type: Number,
      default: 4.5,
      min: 0,
      max: 5,
    },
    reviewsCount: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Virtual populate reviews
tourSchema.virtual('reviews', {
  ref: 'Review',
  localField: '_id',
  foreignField: 'tour',
});

module.exports = mongoose.model('Tour', tourSchema);
