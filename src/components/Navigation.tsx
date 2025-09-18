import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Car, LogIn } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/90 backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Car className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Drivertize</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`transition-colors ${isActive('/') ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600'}`}
            >
              Home
            </Link>
            {/* <Link 
              to="/drivers" 
              className={`transition-colors ${isActive('/drivers') ? 'text-green-600 font-medium' : 'text-gray-700 hover:text-green-600'}`}
            >
              Drivers
            </Link> */}
            <button className="text-gray-700 hover:text-blue-600 transition-colors">
              <Link to="/about-us" className="text-gray-700 hover:text-blue-600 transition-colors">
                About Us
              </Link>
            </button>
            <button className="text-gray-700 hover:text-blue-600 transition-colors">
              <Link to="/contact-us" className="text-gray-700 hover:text-blue-600 transition-colors">
                Contact Us
              </Link>
            </button>
          </div>

          {/* Login Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              to="/advertiser-login"
              className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              <LogIn className="h-4 w-4" />
              <span>Advertiser Login</span>
            </Link>
            <Link 
              to="/driver-login"
              className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium"
            >
              <LogIn className="h-4 w-4" />
              <span>Driver Login</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-2 space-y-2">
            <Link 
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={`block w-full text-left px-4 py-2 rounded-lg ${isActive('/') ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
            >
              Home
            </Link>
            <Link 
              to="/drivers"
              onClick={() => setIsMenuOpen(false)}
              className={`block w-full text-left px-4 py-2 rounded-lg ${isActive('/drivers') ? 'bg-green-50 text-green-600' : 'text-gray-700 hover:bg-gray-50'}`}
            >
              Drivers
            </Link>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-left px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-50"
            >
              <Link to="/about-us" className="block w-full text-left">
                About Us
              </Link>
            </button>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-left px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-50"
            >
              <Link to="/contact-us" className="block w-full text-left">
                Contact Us
              </Link>
            </button>
            <div className="pt-2 border-t border-gray-200 space-y-2">
              <Link 
                to="/advertiser-login"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-center"
              >
                Advertiser Login
              </Link>
              <Link 
                to="/driver-login"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-center"
              >
                Driver Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;