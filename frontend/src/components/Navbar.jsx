import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const { user, isAuthenticated, isAdmin, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const isPathActive = (path) =>
    location.pathname === path || location.pathname.startsWith(`${path}/`);

  const getDesktopLinkClass = (path) => {
    const base = "text-gray-700 hover:text-primary-500 transition";
    return isPathActive(path) ? `${base} text-primary-600 font-semibold` : base;
  };

  const getDesktopCtaClass = (path) => {
    const base =
      "bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition";
    return isPathActive(path) ? `${base} bg-primary-600` : base;
  };

  const getMobileLinkClass = (path) => {
    const base =
      "block px-3 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-500 rounded-md transition";
    return isPathActive(path)
      ? `${base} bg-primary-50 text-primary-600 font-semibold`
      : base;
  };

  const getMobileCtaClass = (path) => {
    const base =
      "block px-3 py-2 bg-primary-500 text-white hover:bg-primary-600 rounded-md transition text-center";
    return isPathActive(path) ? `${base} bg-primary-600` : base;
  };

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
              <Link to="/" className={getDesktopLinkClass("/")}>
                Home
              </Link>
              <Link to="/tours" className={getDesktopLinkClass("/tours")}>
                Tours
              </Link>
              <Link to="/vehicles" className={getDesktopLinkClass("/vehicles")}>
                Vehicles
              </Link>
              <Link to="/about" className={getDesktopLinkClass("/about")}>
                About
              </Link>
              <Link to="/contact" className={getDesktopLinkClass("/contact")}>
                Contact
              </Link>

              {isAuthenticated ? (
                <>
                  {isAdmin && (
                    <Link to="/admin" className={getDesktopLinkClass("/admin")}>
                      Admin
                    </Link>
                  )}
                  <Link
                    to="/dashboard"
                    className={getDesktopLinkClass("/dashboard")}
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
                  <Link to="/login" className={getDesktopLinkClass("/login")}>
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className={getDesktopCtaClass("/register")}
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
                className={getMobileLinkClass("/")}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/tours"
                className={getMobileLinkClass("/tours")}
                onClick={() => setIsOpen(false)}
              >
                Tours
              </Link>
              <Link
                to="/vehicles"
                className={getMobileLinkClass("/vehicles")}
                onClick={() => setIsOpen(false)}
              >
                Vehicles
              </Link>
              <Link
                to="/about"
                className={getMobileLinkClass("/about")}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className={getMobileLinkClass("/contact")}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>

              {isAuthenticated ? (
                <>
                  {isAdmin && (
                    <Link
                      to="/admin"
                      className={getMobileLinkClass("/admin")}
                      onClick={() => setIsOpen(false)}
                    >
                      Admin
                    </Link>
                  )}
                  <Link
                    to="/dashboard"
                    className={getMobileLinkClass("/dashboard")}
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
                    className={getMobileLinkClass("/login")}
                    onClick={() => setIsOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className={getMobileCtaClass("/register")}
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
