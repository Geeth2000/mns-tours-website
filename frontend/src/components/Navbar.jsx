import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const { user, isAuthenticated, isAdmin, logout } = useAuth();
  const navigate = useNavigate();

  const requestLogout = () => {
    setShowLogoutConfirm(true);
  };

  const handleLogout = () => {
    logout();
    setShowLogoutConfirm(false);
    setIsOpen(false);
    navigate("/");
  };

  const cancelLogout = () => {
    setShowLogoutConfirm(false);
  };

  return (
    <>
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <span className="text-2xl font-bold text-primary-500">
                  M&S Tours
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className="text-gray-700 hover:text-primary-500 transition"
              >
                Home
              </Link>
              <Link
                to="/tours"
                className="text-gray-700 hover:text-primary-500 transition"
              >
                Tours
              </Link>
              <Link
                to="/vehicles"
                className="text-gray-700 hover:text-primary-500 transition"
              >
                Vehicles
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-primary-500 transition"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-primary-500 transition"
              >
                Contact
              </Link>

              {isAuthenticated ? (
                <>
                  {isAdmin && (
                    <Link
                      to="/admin"
                      className="text-gray-700 hover:text-primary-500 transition"
                    >
                      Admin
                    </Link>
                  )}
                  <Link
                    to="/dashboard"
                    className="text-gray-700 hover:text-primary-500 transition"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={requestLogout}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="text-gray-700 hover:text-primary-500 transition"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-primary-500 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-500 rounded-md transition"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/tours"
                className="block px-3 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-500 rounded-md transition"
                onClick={() => setIsOpen(false)}
              >
                Tours
              </Link>
              <Link
                to="/vehicles"
                className="block px-3 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-500 rounded-md transition"
                onClick={() => setIsOpen(false)}
              >
                Vehicles
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-500 rounded-md transition"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-500 rounded-md transition"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>

              {isAuthenticated ? (
                <>
                  {isAdmin && (
                    <Link
                      to="/admin"
                      className="block px-3 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-500 rounded-md transition"
                      onClick={() => setIsOpen(false)}
                    >
                      Admin
                    </Link>
                  )}
                  <Link
                    to="/dashboard"
                    className="block px-3 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-500 rounded-md transition"
                    onClick={() => setIsOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={requestLogout}
                    className="block w-full text-left px-3 py-2 text-red-600 hover:bg-red-50 rounded-md transition"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="block px-3 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-500 rounded-md transition"
                    onClick={() => setIsOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="block px-3 py-2 bg-primary-500 text-white hover:bg-primary-600 rounded-md transition text-center"
                    onClick={() => setIsOpen(false)}
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </nav>
      {showLogoutConfirm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[60]">
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-sm w-full">
            <h3 className="text-lg font-semibold text-gray-900">
              Confirm Logout
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Really want to log out?
            </p>
            <div className="mt-6 flex justify-end space-x-3">
              <button
                onClick={cancelLogout}
                className="px-4 py-2 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600 transition"
              >
                Yes, Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
