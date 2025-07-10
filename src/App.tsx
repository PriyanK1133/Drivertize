import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Advertisers from './pages/Advertisers';
import Drivers from './pages/Drivers';
import AdvertiserLogin from './pages/AdvertiserLogin';
import DriverLogin from './pages/DriverLogin';
import AdvertiserDashboard from './pages/AdvertiserDashboard';
import DriverDashboard from './pages/DriverDashboard';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/advertisers" element={<Advertisers />} />
          <Route path="/drivers" element={<Drivers />} />
          <Route path="/advertiser-login" element={<AdvertiserLogin />} />
          <Route path="/driver-login" element={<DriverLogin />} />
          <Route path="/advertiser-dashboard" element={<AdvertiserDashboard />} />
          <Route path="/driver-dashboard" element={<DriverDashboard />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;