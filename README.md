# M&S Tours - Complete MERN Stack Travel Booking Website

A full-stack travel booking website for Sri Lanka built with the MERN stack (MongoDB, Express.js, React, Node.js).

## Features

### Public Features
- **Home Page**: Hero section, featured tours, and call-to-action
- **Tours Listing**: Browse tours with advanced filters (price, duration, category)
- **Tour Details**: Detailed information about each tour with reviews
- **Vehicle Rentals**: Browse and filter available vehicles
- **About Us**: Company information and values
- **Contact Us**: Contact form and business information

### User Features
- **Authentication**: Secure registration and login with JWT
- **User Dashboard**: View profile and booking history
- **Booking System**: Book tours and rent vehicles
- **Profile Management**: Update user information

### Admin Features
- **Admin Dashboard**: Comprehensive management interface
- **Tour Management**: Create, read, update, and delete tours
- **Vehicle Management**: Manage vehicle inventory
- **Booking Management**: View and update booking statuses
- **User Management**: Manage user accounts

## Tech Stack

### Backend
- **Node.js** with **Express.js** - Server framework
- **MongoDB** with **Mongoose** - Database
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin resource sharing
- **express-validator** - Input validation

### Frontend
- **React 19** - UI library
- **Vite** - Build tool
- **React Router DOM** - Routing
- **Axios** - HTTP client
- **Tailwind CSS** - Styling
- **Context API** - State management

## Project Structure

```
mns-tours-website/
├── backend/
│   ├── config/          # Database configuration
│   ├── controllers/     # Request handlers
│   ├── middleware/      # Authentication & authorization
│   ├── models/          # Mongoose schemas
│   ├── routes/          # API routes
│   ├── utils/           # Helper functions & seed data
│   ├── .env.example     # Environment variables template
│   ├── package.json     # Backend dependencies
│   └── server.js        # Express app entry point
│
└── frontend/
    ├── src/
    │   ├── components/  # Reusable UI components
    │   ├── context/     # React Context (Auth)
    │   ├── layouts/     # Layout components
    │   ├── pages/       # Page components
    │   ├── services/    # API service layer
    │   ├── App.jsx      # Main app component
    │   └── main.jsx     # React entry point
    ├── .env.example     # Frontend environment template
    └── package.json     # Frontend dependencies
```

## Database Models

- **User**: User accounts with role-based access (user/admin)
- **Tour**: Tour packages with pricing, duration, and categories
- **Vehicle**: Vehicle rentals with specifications
- **Booking**: Booking records linking users to tours/vehicles
- **Review**: Tour reviews and ratings

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create environment file:
   ```bash
   cp .env.example .env
   ```

4. Update `.env` with your configuration:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/mns-tours
   JWT_SECRET=your_secret_key_here
   JWT_EXPIRE=30d
   CLIENT_URL=http://localhost:5173
   ```

5. Seed the database with sample data:
   ```bash
   npm run seed
   ```

6. Start the development server:
   ```bash
   npm run dev
   ```

   The backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create environment file:
   ```bash
   cp .env.example .env
   ```

4. Update `.env` with your configuration:
   ```env
   VITE_API_URL=http://localhost:5000/api
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

   The frontend will run on `http://localhost:5173`

## Default Admin Credentials

After seeding the database, you can login with:
- **Email**: admin@mnstours.com
- **Password**: admin123

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get user profile (Protected)
- `PUT /api/auth/profile` - Update user profile (Protected)

### Tours
- `GET /api/tours` - Get all tours (supports filters)
- `GET /api/tours/:id` - Get tour by ID
- `POST /api/tours` - Create tour (Admin)
- `PUT /api/tours/:id` - Update tour (Admin)
- `DELETE /api/tours/:id` - Delete tour (Admin)

### Vehicles
- `GET /api/vehicles` - Get all vehicles
- `GET /api/vehicles/:id` - Get vehicle by ID
- `POST /api/vehicles` - Create vehicle (Admin)
- `PUT /api/vehicles/:id` - Update vehicle (Admin)
- `DELETE /api/vehicles/:id` - Delete vehicle (Admin)

### Bookings
- `POST /api/bookings` - Create booking (Protected)
- `GET /api/bookings/my-bookings` - Get user bookings (Protected)
- `GET /api/bookings` - Get all bookings (Admin)
- `GET /api/bookings/:id` - Get booking by ID (Protected)
- `PUT /api/bookings/:id` - Update booking status (Admin)
- `DELETE /api/bookings/:id` - Cancel booking (Protected)

### Reviews
- `POST /api/reviews` - Create review (Protected)
- `GET /api/reviews/:tourId` - Get tour reviews
- `DELETE /api/reviews/:id` - Delete review (Protected)

### Users (Admin)
- `GET /api/users` - Get all users (Admin)
- `GET /api/users/:id` - Get user by ID (Admin)
- `PUT /api/users/:id` - Update user (Admin)
- `DELETE /api/users/:id` - Delete user (Admin)

## Color Scheme

- **Primary**: Light Blue (#38BDF8 / #4DA8DA)
- **Secondary**: White / Light Gray
- **Accent**: Dark Blue for CTA buttons
- **Success**: Green
- **Warning**: Yellow
- **Error**: Red

## Features Highlights

### Responsive Design
- Mobile-first approach
- Fully responsive on all devices
- Touch-friendly interface

### Security
- JWT-based authentication
- Password hashing with bcryptjs
- Protected routes
- Role-based access control

### User Experience
- Clean and modern UI
- Smooth transitions and hover effects
- Loading states
- Error handling
- Form validation

## Security Considerations

### Current Implementation
- JWT-based authentication
- Password hashing with bcryptjs
- Protected routes
- Role-based access control
- Secure email validation regex

### Production Recommendations
For production deployment, consider adding:
- **Rate limiting**: Use `express-rate-limit` to prevent abuse
  ```bash
  npm install express-rate-limit
  ```
- **Helmet.js**: Add security headers
- **CORS configuration**: Restrict to specific domains
- **Input sanitization**: Use `express-mongo-sanitize`
- **HTTPS**: Always use SSL/TLS in production
- **Environment variables**: Keep secrets secure and never commit .env files

## Development

### Backend Development
```bash
cd backend
npm run dev  # Start with nodemon for auto-reload
```

### Frontend Development
```bash
cd frontend
npm run dev  # Start Vite dev server
```

### Building for Production

Backend:
```bash
cd backend
npm start
```

Frontend:
```bash
cd frontend
npm run build
npm run preview  # Preview production build
```

## License

This project is licensed under the ISC License.

## Contact

For any queries or support, please contact:
- **Email**: info@mnstours.com
- **Phone**: +94 77 123 4567

---

Built with ❤️ for exploring the beauty of Sri Lanka
