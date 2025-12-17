import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About M&S Tours</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted travel partner for exploring the beautiful island of Sri Lanka
          </p>
        </div>

        {/* Company Story */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Founded in 2020, M&S Tours has been dedicated to providing unforgettable travel
            experiences across Sri Lanka. We started with a simple mission: to showcase the
            breathtaking beauty, rich culture, and warm hospitality of our island nation to
            travelers from around the world.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Over the years, we have grown from a small family-run business to one of Sri
            Lanka's most trusted tour operators. Our success is built on our commitment to
            excellence, personalized service, and deep knowledge of every corner of this
            beautiful island.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Today, we offer a wide range of tours and vehicle rental services, each carefully
            designed to provide authentic experiences that create lasting memories.
          </p>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <svg
                className="w-8 h-8 text-primary-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Service</h3>
            <p className="text-gray-600">
              We provide top-notch service with attention to every detail of your journey.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <svg
                className="w-8 h-8 text-primary-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Guides</h3>
            <p className="text-gray-600">
              Our experienced guides share their passion and knowledge of Sri Lankan culture.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <svg
                className="w-8 h-8 text-primary-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Customer Satisfaction</h3>
            <p className="text-gray-600">
              Your happiness is our success. We go the extra mile to exceed expectations.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose M&S Tours?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="bg-primary-100 rounded-full p-2 mr-4 flex-shrink-0">
                <svg
                  className="w-6 h-6 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Local Expertise</h4>
                <p className="text-gray-600">
                  Deep knowledge of Sri Lankan destinations and hidden gems
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-primary-100 rounded-full p-2 mr-4 flex-shrink-0">
                <svg
                  className="w-6 h-6 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Competitive Pricing</h4>
                <p className="text-gray-600">Best value for money without compromising quality</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-primary-100 rounded-full p-2 mr-4 flex-shrink-0">
                <svg
                  className="w-6 h-6 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Safe & Reliable</h4>
                <p className="text-gray-600">
                  Well-maintained vehicles and safety-first approach
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-primary-100 rounded-full p-2 mr-4 flex-shrink-0">
                <svg
                  className="w-6 h-6 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">24/7 Support</h4>
                <p className="text-gray-600">
                  Round-the-clock assistance for all your travel needs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
