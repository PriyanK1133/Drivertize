import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <Car className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold">Drivertize</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                A platform connecting brands with drivers for impactful mobile advertising. Turn your car into an advertising asset and earn while you drive.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-gray-400">
                  <Phone className="h-4 w-4" />
                  <span>+91 88662 86211</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Mail className="h-4 w-4" />
                  <span>bathanikeyur@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/advertisers" className="text-gray-400 hover:text-white transition-colors">
                    For Advertisers
                  </Link>
                </li>
                <li>
                  <Link to="/drivers" className="text-gray-400 hover:text-white transition-colors">
                    For Drivers
                  </Link>
                </li>
              </ul>
            </div>

            {/* Get Started */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Get Started</h3>
              <div className="space-y-3">
                <Link 
                  to="/advertiser-login"
                  className="block w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm text-center"
                >
                  Advertiser Login
                </Link>
                <Link 
                  to="/driver-login"
                  className="block w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors text-sm text-center"
                >
                  Driver Login
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-6">
          <div className="text-center">
            <div className="text-gray-400 text-sm">
              © 2025 Drivertize. All rights reserved. Made with ❤️ in Gujarat.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;