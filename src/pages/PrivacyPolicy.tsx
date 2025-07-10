import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Eye, Lock, Users, FileText, Mail } from 'lucide-react';

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "Information We Collect",
      icon: <FileText className="h-6 w-6 text-blue-600" />,
      content: [
        "Personal information (name, email, phone number) when you register",
        "Vehicle information for drivers (model, registration, insurance details)",
        "Location data for campaign tracking and route optimization",
        "Usage data to improve our services and platform functionality",
        "Payment information processed securely through third-party providers"
      ]
    },
    {
      title: "How We Use Your Information",
      icon: <Users className="h-6 w-6 text-green-600" />,
      content: [
        "To provide and maintain our mobile advertising services",
        "To process payments and manage your account",
        "To match advertisers with suitable drivers and routes",
        "To track campaign performance and generate analytics",
        "To communicate important updates and support messages",
        "To comply with legal obligations and prevent fraud"
      ]
    },
    {
      title: "Information Sharing",
      icon: <Eye className="h-6 w-6 text-purple-600" />,
      content: [
        "We do not sell your personal information to third parties",
        "Campaign data may be shared with advertisers in aggregated form",
        "Location data is used only for campaign tracking and optimization",
        "We may share information with service providers who assist our operations",
        "Legal disclosures may be made when required by law"
      ]
    },
    {
      title: "Data Security",
      icon: <Lock className="h-6 w-6 text-yellow-600" />,
      content: [
        "We use industry-standard encryption to protect your data",
        "Payment information is processed through secure, PCI-compliant systems",
        "Access to personal information is restricted to authorized personnel",
        "Regular security audits and updates to protect against threats",
        "Secure data storage with backup and recovery procedures"
      ]
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Shield className="h-12 w-12 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          <p className="text-sm text-gray-500 mt-4">Last updated: January 2024</p>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment to Privacy</h2>
          <p className="text-gray-600 mb-4">
            At Drivertize, we are committed to protecting your privacy and ensuring the security of your personal information. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our 
            mobile advertising platform.
          </p>
          <p className="text-gray-600">
            By using our services, you agree to the collection and use of information in accordance with this policy. 
            We will not use or share your information with anyone except as described in this Privacy Policy.
          </p>
        </div>

        {/* Main Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-8">
              <div className="flex items-center mb-6">
                {section.icon}
                <h2 className="text-2xl font-bold text-gray-900 ml-3">{section.title}</h2>
              </div>
              <ul className="space-y-3">
                {section.content.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional Sections */}
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Your Rights</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Access your personal information</li>
              <li>• Request corrections to your data</li>
              <li>• Delete your account and data</li>
              <li>• Opt-out of marketing communications</li>
              <li>• Data portability upon request</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Data Retention</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Account data: Until account deletion</li>
              <li>• Campaign data: 3 years for analytics</li>
              <li>• Payment records: 7 years for compliance</li>
              <li>• Location data: 1 year for optimization</li>
              <li>• Support communications: 2 years</li>
            </ul>
          </div>
        </div>

        {/* Cookies Section */}
        <div className="bg-white rounded-lg shadow-sm p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking</h2>
          <p className="text-gray-600 mb-4">
            We use cookies and similar tracking technologies to enhance your experience on our platform:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Essential Cookies</h4>
              <p className="text-gray-600 text-sm">Required for basic platform functionality and security</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Analytics Cookies</h4>
              <p className="text-gray-600 text-sm">Help us understand how users interact with our platform</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Performance Cookies</h4>
              <p className="text-gray-600 text-sm">Used to optimize platform performance and user experience</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Preference Cookies</h4>
              <p className="text-gray-600 text-sm">Remember your settings and preferences</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-blue-50 rounded-lg p-8 mt-8">
          <div className="text-center">
            <Mail className="h-8 w-8 text-blue-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions About Privacy?</h2>
            <p className="text-gray-600 mb-6">
              If you have any questions about this Privacy Policy or our data practices, please contact us.
            </p>
            <div className="space-y-2 text-gray-600">
              <p><strong>Email:</strong> bathanikeyur@gmail.com</p>
              <p><strong>Phone:</strong> +91 88662 86211</p>
            </div>
            <Link 
              to="/contact-us"
              className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-8">
          <Link 
            to="/"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;