const mongoose = require('mongoose');

/**
 * Booking Schema
 * Handles bookings for both tours and vehicles
 */
const bookingSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Booking must belong to a user'],
    },
    bookingType: {
      type: String,
      required: [true, 'Please specify booking type'],
      enum: ['tour', 'vehicle'],
    },
    tour: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Tour',
    },
    vehicle: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Vehicle',
    },
    startDate: {
      type: Date,
      required: [true, 'Please provide start date'],
    },
    endDate: {
      type: Date,
    },
    numberOfPeople: {
      type: Number,
      default: 1,
      min: 1,
    },
    totalPrice: {
      type: Number,
      required: [true, 'Please provide total price'],
      min: 0,
    },
    status: {
      type: String,
      enum: ['pending', 'confirmed', 'cancelled', 'completed'],
      default: 'pending',
    },
    customerName: {
      type: String,
      required: [true, 'Please provide customer name'],
      trim: true,
    },
    customerEmail: {
      type: String,
      required: [true, 'Please provide customer email'],
      trim: true,
    },
    customerPhone: {
      type: String,
      required: [true, 'Please provide customer phone'],
      trim: true,
    },
    specialRequests: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// Validation: Either tour or vehicle must be specified based on bookingType
bookingSchema.pre('save', function (next) {
  if (this.bookingType === 'tour' && !this.tour) {
    next(new Error('Tour booking must reference a tour'));
  } else if (this.bookingType === 'vehicle' && !this.vehicle) {
    next(new Error('Vehicle booking must reference a vehicle'));
  } else {
    next();
  }
});

module.exports = mongoose.model('Booking', bookingSchema);
