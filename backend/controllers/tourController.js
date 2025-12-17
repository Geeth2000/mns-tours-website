const Tour = require('../models/Tour');

/**
 * @desc    Get all tours with filters
 * @route   GET /api/tours
 * @access  Public
 */
const getTours = async (req, res) => {
  try {
    const { category, minPrice, maxPrice, minDuration, maxDuration, featured } = req.query;

    // Build query
    let query = {};

    if (category) {
      query.category = category;
    }

    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = Number(minPrice);
      if (maxPrice) query.price.$lte = Number(maxPrice);
    }

    if (minDuration || maxDuration) {
      query.duration = {};
      if (minDuration) query.duration.$gte = Number(minDuration);
      if (maxDuration) query.duration.$lte = Number(maxDuration);
    }

    if (featured) {
      query.featured = featured === 'true';
    }

    const tours = await Tour.find(query).sort({ createdAt: -1 });

    res.json({
      success: true,
      count: tours.length,
      data: tours,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * @desc    Get single tour by ID
 * @route   GET /api/tours/:id
 * @access  Public
 */
const getTourById = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id).populate('reviews');

    if (tour) {
      res.json(tour);
    } else {
      res.status(404).json({ message: 'Tour not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * @desc    Create a new tour
 * @route   POST /api/tours
 * @access  Private/Admin
 */
const createTour = async (req, res) => {
  try {
    const tour = await Tour.create(req.body);

    res.status(201).json({
      success: true,
      data: tour,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/**
 * @desc    Update a tour
 * @route   PUT /api/tours/:id
 * @access  Private/Admin
 */
const updateTour = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (tour) {
      res.json({
        success: true,
        data: tour,
      });
    } else {
      res.status(404).json({ message: 'Tour not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/**
 * @desc    Delete a tour
 * @route   DELETE /api/tours/:id
 * @access  Private/Admin
 */
const deleteTour = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndDelete(req.params.id);

    if (tour) {
      res.json({
        success: true,
        message: 'Tour deleted successfully',
      });
    } else {
      res.status(404).json({ message: 'Tour not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getTours,
  getTourById,
  createTour,
  updateTour,
  deleteTour,
};
