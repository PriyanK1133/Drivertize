import React from 'react';
import { Link } from 'react-router-dom';
import { Target, BarChart3, MapPin, Clock, ArrowRight, Users, TrendingUp, Star, Shield, Car } from 'lucide-react';

const Advertisers = () => {
  const features = [
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: "Maximum Impressions",
      description: "Reach thousands of customers across targeted locations with mobile billboards in Ahmedabad"
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-green-600" />,
      title: "Cost-Effective Marketing",
      description: "Up to 80% lower cost-per-impression compared to traditional billboards and outdoor advertising"
    },
    {
      icon: <Clock className="h-8 w-8 text-purple-600" />,
      title: "Flexible Duration",
      description: "Customizable campaigns from 1-12 months with flexible pricing options"
    },
    {
      icon: <Shield className="h-8 w-8 text-yellow-600" />,
      title: "Professional Installation",
      description: "Expert installation and removal with high-quality, paint-safe wrap materials"
    }
  ];

  const benefits = [
    "Maximum brand visibility across the city",
    "80% lower cost vs traditional billboards",
    "Customizable 1-12 month durations",
    "Professional grade wraps",
    "Expert installation/removal",
    "Perfect for local businesses",
    "Targeted neighborhood reach",
    "Real-time campaign tracking"
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Transform Your Brand with <span className="text-blue-600">Mobile Billboards</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Maximize your marketing impact with car wrap advertising. Generate thousands of daily impressions 
              while targeting specific neighborhoods and high-traffic areas across Ahmedabad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/advertiser-login"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg flex items-center justify-center group"
              >
                Launch Your Campaign
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Car Wrap Advertising?
            </h2>
            <p className="text-xl text-gray-600">
              Professional mobile billboard solutions that deliver measurable results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Maximize Your Marketing Impact
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Car wrap advertising offers unparalleled reach and cost-effectiveness for businesses 
                looking to make a lasting impression in their target markets.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>

              <Link 
                to="/advertiser-login"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg inline-flex items-center group"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Campaign Impact</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Brand Reach</span>
                  <span className="text-2xl font-bold text-blue-600">Citywide</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Cost Savings</span>
                  <span className="text-2xl font-bold text-green-600">Up to 80%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Campaign Duration</span>
                  <span className="text-2xl font-bold text-purple-600">1-12 Months</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Target Areas</span>
                  <span className="text-2xl font-bold text-yellow-600">Citywide</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How Car Wrap Advertising Works
            </h2>
            <p className="text-xl text-gray-600">
              Simple process to launch your mobile billboard campaign
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Design & Plan</h3>
              <p className="text-gray-600">Create your mobile billboard design and select target areas and campaign duration</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Professional Installation</h3>
              <p className="text-gray-600">Expert installation of high-quality wraps on selected vehicles in your target areas</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Track & Measure</h3>
              <p className="text-gray-600">Monitor your campaign performance with real-time tracking and detailed analytics</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Launch Your Mobile Billboard?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join businesses already reaching thousands of customers daily with professional car wrap advertising
          </p>
          <Link 
            to="/advertiser-login"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-medium text-lg inline-flex items-center group"
          >
            Start Your Campaign Now
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Advertisers;