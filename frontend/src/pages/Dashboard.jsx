import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { bookingService } from '../services';
import Loading from '../components/Loading';

const Dashboard = () => {
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await bookingService.getMyBookings();
      setBookings(response.data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loading />;

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">My Dashboard</h1>

        {/* User Info */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Profile Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-gray-600">Name</p>
              <p className="font-semibold text-gray-900">{user?.name}</p>
            </div>
            <div>
              <p className="text-gray-600">Email</p>
              <p className="font-semibold text-gray-900">{user?.email}</p>
            </div>
            <div>
              <p className="text-gray-600">Phone</p>
              <p className="font-semibold text-gray-900">{user?.phone || 'Not provided'}</p>
            </div>
            <div>
              <p className="text-gray-600">Address</p>
              <p className="font-semibold text-gray-900">{user?.address || 'Not provided'}</p>
            </div>
          </div>
        </div>

        {/* My Bookings */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">My Bookings</h2>

          {bookings.length === 0 ? (
            <p className="text-gray-600 text-center py-8">You haven't made any bookings yet.</p>
          ) : (
            <div className="space-y-4">
              {bookings.map((booking) => (
                <div
                  key={booking._id}
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {booking.bookingType === 'tour'
                          ? booking.tour?.name
                          : booking.vehicle?.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {booking.bookingType === 'tour' ? 'Tour Booking' : 'Vehicle Rental'}
                      </p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        booking.status === 'confirmed'
                          ? 'bg-green-100 text-green-700'
                          : booking.status === 'pending'
                          ? 'bg-yellow-100 text-yellow-700'
                          : booking.status === 'cancelled'
                          ? 'bg-red-100 text-red-700'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {booking.status}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600">Start Date</p>
                      <p className="font-semibold">
                        {new Date(booking.startDate).toLocaleDateString()}
                      </p>
                    </div>
                    {booking.endDate && (
                      <div>
                        <p className="text-gray-600">End Date</p>
                        <p className="font-semibold">
                          {new Date(booking.endDate).toLocaleDateString()}
                        </p>
                      </div>
                    )}
                    <div>
                      <p className="text-gray-600">People</p>
                      <p className="font-semibold">{booking.numberOfPeople}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Total Price</p>
                      <p className="font-semibold text-primary-600">
                        Rs. {booking.totalPrice.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
