import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { tourService } from '../services';
import Loading from '../components/Loading';

const Tours = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    category: '',
    minPrice: '',
    maxPrice: '',
    minDuration: '',
    maxDuration: '',
  });

  useEffect(() => {
    fetchTours();
  }, [filters]);

  const fetchTours = async () => {
    try {
      setLoading(true);
      const queryFilters = {};
      if (filters.category) queryFilters.category = filters.category;
      if (filters.minPrice) queryFilters.minPrice = filters.minPrice;
      if (filters.maxPrice) queryFilters.maxPrice = filters.maxPrice;
      if (filters.minDuration) queryFilters.minDuration = filters.minDuration;
      if (filters.maxDuration) queryFilters.maxDuration = filters.maxDuration;

      const response = await tourService.getTours(queryFilters);
      setTours(response.data);
    } catch (error) {
      console.error('Error fetching tours:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const resetFilters = () => {
    setFilters({
      category: '',
      minPrice: '',
      maxPrice: '',
      minDuration: '',
      maxDuration: '',
    });
  };

  if (loading) return <Loading />;

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Explore Our Tours</h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Filters</h2>

              {/* Category Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <select
                  name="category"
                  value={filters.category}
                  onChange={handleFilterChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">All Categories</option>
                  <option value="Adventure">Adventure</option>
                  <option value="Cultural">Cultural</option>
                  <option value="Beach">Beach</option>
                  <option value="Wildlife">Wildlife</option>
                  <option value="Hill Country">Hill Country</option>
                  <option value="City Tour">City Tour</option>
                </select>
              </div>

              {/* Price Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Price Range (Rs.)
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="number"
                    name="minPrice"
                    value={filters.minPrice}
                    onChange={handleFilterChange}
                    placeholder="Min"
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                  <input
                    type="number"
                    name="maxPrice"
                    value={filters.maxPrice}
                    onChange={handleFilterChange}
                    placeholder="Max"
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Duration Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Duration (Days)
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="number"
                    name="minDuration"
                    value={filters.minDuration}
                    onChange={handleFilterChange}
                    placeholder="Min"
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                  <input
                    type="number"
                    name="maxDuration"
                    value={filters.maxDuration}
                    onChange={handleFilterChange}
                    placeholder="Max"
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>

              <button
                onClick={resetFilters}
                className="w-full bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition"
              >
                Reset Filters
              </button>
            </div>
          </div>

          {/* Tours Grid */}
          <div className="lg:col-span-3">
            {tours.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-xl text-gray-600">No tours found matching your filters.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {tours.map((tour) => (
                  <div
                    key={tour._id}
                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1"
                  >
                    <img
                      src={tour.images[0] || 'https://via.placeholder.com/400x300'}
                      alt={tour.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-sm font-semibold">
                          {tour.category}
                        </span>
                        <span className="text-gray-600 text-sm">{tour.duration} Days</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{tour.name}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">{tour.description}</p>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <svg
                            className="w-5 h-5 text-yellow-400 fill-current"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                          <span className="ml-1 text-gray-600">{tour.rating}</span>
                          <span className="ml-1 text-gray-500">({tour.reviewsCount})</span>
                        </div>
                        <span className="text-2xl font-bold text-primary-600">
                          Rs. {tour.price.toLocaleString()}
                        </span>
                      </div>
                      <Link
                        to={`/tours/${tour._id}`}
                        className="block bg-primary-500 text-white text-center py-2 rounded-lg hover:bg-primary-600 transition"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tours;
