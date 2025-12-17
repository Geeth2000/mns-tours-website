const mongoose = require('mongoose');

/**
 * Vehicle Schema
 * Handles vehicle rentals with pricing and specifications
 */
const vehicleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide a vehicle name'],
      trim: true,
    },
    type: {
      type: String,
      required: [true, 'Please provide vehicle type'],
      enum: ['Car', 'Van', 'SUV', 'Bus', 'Luxury Car'],
    },
    description: {
      type: String,
      required: [true, 'Please provide a description'],
    },
    pricePerDay: {
      type: Number,
      required: [true, 'Please provide price per day'],
      min: 0,
    },
    capacity: {
      type: Number,
      required: [true, 'Please provide seating capacity'],
      min: 1,
    },
    transmission: {
      type: String,
      enum: ['Manual', 'Automatic'],
      default: 'Manual',
    },
    fuelType: {
      type: String,
      enum: ['Petrol', 'Diesel', 'Electric', 'Hybrid'],
      default: 'Petrol',
    },
    features: [
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
    available: {
      type: Boolean,
      default: true,
    },
    rating: {
      type: Number,
      default: 4.5,
      min: 0,
      max: 5,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Vehicle', vehicleSchema);
