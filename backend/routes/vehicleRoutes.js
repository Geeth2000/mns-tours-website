const express = require('express');
const router = express.Router();
const {
  getVehicles,
  getVehicleById,
  createVehicle,
  updateVehicle,
  deleteVehicle,
} = require('../controllers/vehicleController');
const { protect, admin } = require('../middleware/auth');

// Public routes
router.get('/', getVehicles);
router.get('/:id', getVehicleById);

// Protected admin routes
router.post('/', protect, admin, createVehicle);
router.put('/:id', protect, admin, updateVehicle);
router.delete('/:id', protect, admin, deleteVehicle);

module.exports = router;
