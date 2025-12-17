import React, { useEffect, useState } from 'react';
import { vehicleService } from '../services';
import Loading from '../components/Loading';

const Vehicles = () => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    fetchVehicles();
  }, [filter]);

  const fetchVehicles = async () => {
    try {
      setLoading(true);
      const queryFilters = filter ? { type: filter } : {};
      const response = await vehicleService.getVehicles(queryFilters);
      setVehicles(response.data);
    } catch (error) {
      console.error('Error fetching vehicles:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loading />;

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Vehicle Rentals</h1>

        {/* Filter */}
        <div className="mb-8 flex justify-center">
          <div className="bg-white rounded-lg shadow-lg p-4 inline-flex gap-2 flex-wrap">
            <button
              onClick={() => setFilter('')}
              className={`px-4 py-2 rounded-lg transition ${
                filter === ''
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All
            </button>
            {['Car', 'Van', 'SUV', 'Bus', 'Luxury Car'].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-4 py-2 rounded-lg transition ${
                  filter === type
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Vehicles Grid */}
        {vehicles.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No vehicles found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vehicles.map((vehicle) => (
              <div
                key={vehicle._id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1"
              >
                <img
                  src={vehicle.images[0] || 'https://via.placeholder.com/400x300'}
                  alt={vehicle.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-sm font-semibold">
                      {vehicle.type}
                    </span>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        vehicle.available
                          ? 'bg-green-100 text-green-700'
                          : 'bg-red-100 text-red-700'
                      }`}
                    >
                      {vehicle.available ? 'Available' : 'Unavailable'}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{vehicle.name}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{vehicle.description}</p>
                  <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
                    <div>
                      <p>Capacity: {vehicle.capacity} seats</p>
                      <p>{vehicle.transmission} • {vehicle.fuelType}</p>
                    </div>
                    <div className="flex items-center">
                      <svg
                        className="w-5 h-5 text-yellow-400 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                      <span className="ml-1">{vehicle.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Per Day</p>
                      <p className="text-2xl font-bold text-primary-600">
                        Rs. {vehicle.pricePerDay.toLocaleString()}
                      </p>
                    </div>
                    <button className="bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Vehicles;
