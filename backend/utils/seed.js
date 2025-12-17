const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('../models/User');
const Tour = require('../models/Tour');
const Vehicle = require('../models/Vehicle');
const connectDB = require('../config/db');

// Load env vars
dotenv.config();

// Connect to DB
connectDB();

// Sample data
const users = [
  {
    name: 'Admin User',
    email: 'admin@mnstours.com',
    password: 'admin123',
    role: 'admin',
    phone: '+94771234567',
    address: 'Colombo, Sri Lanka',
  },
  {
    name: 'John Doe',
    email: 'john@example.com',
    password: 'user123',
    role: 'user',
    phone: '+94777654321',
    address: 'Kandy, Sri Lanka',
  },
];

const tours = [
  {
    name: 'Cultural Triangle Tour',
    description:
      'Explore ancient cities of Anuradhapura, Polonnaruwa, and Sigiriya. Experience rich Sri Lankan history and culture.',
    price: 45000,
    duration: 3,
    category: 'Cultural',
    maxGroupSize: 15,
    difficulty: 'Easy',
    locations: ['Anuradhapura', 'Polonnaruwa', 'Sigiriya'],
    included: [
      'Transportation',
      'Professional guide',
      'Entrance fees',
      '2 nights accommodation',
      'Breakfast',
    ],
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945',
      'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a',
    ],
    featured: true,
    rating: 4.8,
    reviewsCount: 45,
  },
  {
    name: 'Hill Country Adventure',
    description:
      'Journey through tea plantations, waterfalls, and scenic mountain views in Nuwara Eliya and Ella.',
    price: 38000,
    duration: 2,
    category: 'Hill Country',
    maxGroupSize: 12,
    difficulty: 'Moderate',
    locations: ['Nuwara Eliya', 'Ella', 'Horton Plains'],
    included: [
      'Transportation',
      'Guide',
      'Hotel accommodation',
      'Tea factory visit',
      'Train ride',
    ],
    images: [
      'https://images.unsplash.com/photo-1591176480745-4df2f391c0c1',
      'https://images.unsplash.com/photo-1609137144813-7d9921338f24',
    ],
    featured: true,
    rating: 4.9,
    reviewsCount: 67,
  },
  {
    name: 'Beach Paradise Getaway',
    description:
      'Relax on pristine beaches of south coast. Includes whale watching and water sports.',
    price: 32000,
    duration: 2,
    category: 'Beach',
    maxGroupSize: 20,
    difficulty: 'Easy',
    locations: ['Mirissa', 'Unawatuna', 'Galle'],
    included: [
      'Beach resort stay',
      'Whale watching',
      'Water sports',
      'Galle Fort tour',
      'Meals',
    ],
    images: [
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19',
      'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f',
    ],
    featured: true,
    rating: 4.7,
    reviewsCount: 53,
  },
  {
    name: 'Wildlife Safari Experience',
    description:
      'Exciting safari in Yala National Park. Spot leopards, elephants, and exotic birds.',
    price: 28000,
    duration: 1,
    category: 'Wildlife',
    maxGroupSize: 8,
    difficulty: 'Easy',
    locations: ['Yala National Park'],
    included: [
      '4x4 safari jeep',
      'Experienced tracker',
      'Park entrance',
      'Lunch',
      'Drinking water',
    ],
    images: [
      'https://images.unsplash.com/photo-1516426122078-c23e76319801',
      'https://images.unsplash.com/photo-1551969014-7d2c4cddf0b6',
    ],
    featured: false,
    rating: 4.6,
    reviewsCount: 38,
  },
  {
    name: 'Colombo City Tour',
    description:
      'Discover the vibrant capital city with shopping, dining, and cultural attractions.',
    price: 8000,
    duration: 1,
    category: 'City Tour',
    maxGroupSize: 25,
    difficulty: 'Easy',
    locations: ['Colombo'],
    included: [
      'Air-conditioned vehicle',
      'City guide',
      'Temple visits',
      'Shopping stops',
      'Lunch',
    ],
    images: [
      'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272',
      'https://images.unsplash.com/photo-1609137144813-7d9921338f24',
    ],
    featured: false,
    rating: 4.5,
    reviewsCount: 29,
  },
  {
    name: 'Adam\'s Peak Climbing',
    description:
      'Challenging night climb to sacred Adam\'s Peak. Watch breathtaking sunrise from summit.',
    price: 15000,
    duration: 1,
    category: 'Adventure',
    maxGroupSize: 15,
    difficulty: 'Challenging',
    locations: ['Adam\'s Peak'],
    included: [
      'Transportation',
      'Guide',
      'Climbing permit',
      'Snacks and water',
      'First aid kit',
    ],
    images: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
      'https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a',
    ],
    featured: false,
    rating: 4.8,
    reviewsCount: 41,
  },
];

const vehicles = [
  {
    name: 'Toyota KDH Van',
    type: 'Van',
    description:
      'Comfortable 14-seater van perfect for group travels. Air-conditioned with experienced driver.',
    pricePerDay: 12000,
    capacity: 14,
    transmission: 'Manual',
    fuelType: 'Diesel',
    features: [
      'Air conditioning',
      'Experienced driver',
      'GPS navigation',
      'USB charging ports',
      'Luggage space',
    ],
    images: [
      'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957',
    ],
    available: true,
    rating: 4.7,
  },
  {
    name: 'Toyota Prius Hybrid',
    type: 'Car',
    description:
      'Eco-friendly hybrid car for comfortable solo or couple travel. Fuel efficient and modern.',
    pricePerDay: 8000,
    capacity: 4,
    transmission: 'Automatic',
    fuelType: 'Hybrid',
    features: [
      'Automatic transmission',
      'Air conditioning',
      'Fuel efficient',
      'GPS navigation',
      'Bluetooth audio',
    ],
    images: [
      'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2',
    ],
    available: true,
    rating: 4.8,
  },
  {
    name: 'Mitsubishi Montero SUV',
    type: 'SUV',
    description:
      'Rugged 4x4 SUV ideal for hill country and off-road adventures. Spacious and reliable.',
    pricePerDay: 15000,
    capacity: 7,
    transmission: 'Manual',
    fuelType: 'Diesel',
    features: [
      '4WD capability',
      'High ground clearance',
      'Air conditioning',
      'Power steering',
      'Roof rack',
    ],
    images: [
      'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b',
    ],
    available: true,
    rating: 4.6,
  },
  {
    name: 'Mercedes-Benz E-Class',
    type: 'Luxury Car',
    description:
      'Premium luxury sedan for business or special occasions. Ultimate comfort and style.',
    pricePerDay: 25000,
    capacity: 4,
    transmission: 'Automatic',
    fuelType: 'Petrol',
    features: [
      'Leather seats',
      'Premium sound system',
      'Climate control',
      'Professional chauffeur',
      'Wi-Fi hotspot',
    ],
    images: [
      'https://images.unsplash.com/photo-1563720223185-11003d516935',
    ],
    available: true,
    rating: 5.0,
  },
  {
    name: 'Rosa Bus',
    type: 'Bus',
    description:
      'Large tourist bus for big groups. Comfortable seating with entertainment system.',
    pricePerDay: 20000,
    capacity: 30,
    transmission: 'Manual',
    fuelType: 'Diesel',
    features: [
      'Air conditioning',
      'Entertainment system',
      'Reclining seats',
      'Large luggage space',
      'Professional driver',
    ],
    images: [
      'https://images.unsplash.com/photo-1570125909232-eb263c188f7e',
    ],
    available: true,
    rating: 4.5,
  },
];

// Import data
const importData = async () => {
  try {
    await User.deleteMany();
    await Tour.deleteMany();
    await Vehicle.deleteMany();

    await User.create(users);
    await Tour.create(tours);
    await Vehicle.create(vehicles);

    console.log('Data Imported Successfully');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error}`);
    process.exit(1);
  }
};

// Delete data
const deleteData = async () => {
  try {
    await User.deleteMany();
    await Tour.deleteMany();
    await Vehicle.deleteMany();

    console.log('Data Destroyed Successfully');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error}`);
    process.exit(1);
  }
};

// Check command line arguments
if (process.argv[2] === '-d') {
  deleteData();
} else {
  importData();
}
