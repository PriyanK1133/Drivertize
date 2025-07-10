import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, BarChart3, MapPin, Clock, Users, TrendingUp, Star, Shield, Car, IndianRupee, Settings, Bell, Plus, Eye, Pause, Play } from 'lucide-react';

const Home = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [campaigns, setCampaigns] = useState([
    { 
      id: 1, 
      name: 'Summer Sale Campaign', 
      status: 'Active', 
      reach: 55000, 
      budget: 55000, 
      spent: 28000,
      reach: 55000,
      vehicles: 15,
      startDate: '2024-01-15',
      endDate: '2024-02-15'
    },
    { 
      id: 2, 
      name: 'New Product Launch', 
      status: 'Scheduled', 
      reach: 40000, 
      budget: 40000, 
      spent: 0,
      reach: 40000,
      vehicles: 10,
      startDate: '2024-02-20',
      endDate: '2024-03-20'
    }
  ]);

  const [stats, setStats] = useState({
    totalReach: 148000,
    activeCampaigns: 1,
    totalSpent: 78000,
    activeVehicles: 15
  });

  const features = [
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: "Maximize Marketing Impact",
      description: "Reach thousands of customers across targeted locations with professional mobile billboards"
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-green-600" />,
      title: "Cost-Effective Solution",
      description: "Up to 80% lower cost-per-impression compared to traditional billboards and outdoor advertising"
    },
    {
      icon: <Clock className="h-8 w-8 text-purple-600" />,
      title: "Flexible Duration",
      description: "Customizable campaigns from 1-12 months with flexible pricing and professional installation"
    },
    {
      icon: <MapPin className="h-8 w-8 text-yellow-600" />,
      title: "Targeted Reach",
      description: "Perfect for local businesses targeting specific neighborhoods and high-traffic areas"
    }
  ];

  const homeStats = [
    { number: "80%", label: "Cost Savings", icon: <Target className="h-6 w-6" /> },
    { number: "Ahmedabad", label: "Cities Covered", icon: <Users className="h-6 w-6" /> },
    { number: "10K+ /Car", label: "Estimated Reach/Day", icon: <Clock className="h-6 w-6" /> },
    { number: "Zero", label: "Hassle", icon: <Car className="h-6 w-6" /> }
  ];

  const benefits = [
    "Dominate high-traffic corridors and business districts",
    "Massive cost advantage over static outdoor advertising",
    "Flexible campaign durations from months to years",
    "Greater ROI compared to traditional static billboards",
    "Professional design and installation services",
    "Hyper-local targeting for maximum impact",
    "Great for brand visibility and local reach",
    "Guaranteed brand exposure during peak hours"
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Scheduled': return 'bg-yellow-100 text-yellow-800';
      case 'Paused': return 'bg-orange-100 text-orange-800';
      case 'Completed': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Reach Every Corner of 
                  <span className="text-blue-600"> Ahmedabad</span> with Mobile Advertising
                </h1>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                  Dominate the streets with Gujarat's most powerful mobile advertising network. Our professional car wrap campaigns deliver unmatched brand visibility and customer engagement across high-traffic zones.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 py-6 border-y border-gray-200">
                {homeStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/advertiser-login"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 font-medium text-lg flex items-center justify-center group"
                >
                  Launch Your Campaign
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

     {/* Car Sample with Advertisement */}
<div className="relative flex justify-center">
  {/* Car Body */}
  <div className="relative">
    <div className="w-[480px] h-52 bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 relative shadow-2xl border border-gray-300" style={{ borderRadius: '25px 25px 12px 12px' }}>
      
      {/* Car Roof */}
      <div className="absolute top-0 left-16 w-80 h-24 bg-gradient-to-b from-white to-gray-100 shadow-inner" style={{ borderRadius: '20px 20px 6px 6px' }}></div>
      
      {/* Windows */}
      <div className="absolute top-6 left-44 w-28 h-14 bg-gradient-to-b from-blue-50 to-blue-100 opacity-70 border border-gray-200 rounded-sm"></div>
      <div className="absolute top-6 right-44 w-28 h-14 bg-gradient-to-b from-blue-50 to-blue-100 opacity-70 border border-gray-200 rounded-sm"></div>
      
      {/* Car Body Panels */}
      <div className="absolute top-24 left-0 w-full h-28 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200"></div>

      {/* Advertisement Blocks - Aligned to Red Box Area */}
      <div className="absolute left-[24px] top-[80px] w-full flex justify-center  z-10">
        {/* Front Door Advertisement */}
        <div className="w-44 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-xl border-2 border-white">
          <div className="p-2 text-white text-center h-full flex flex-col justify-center">
            <div className="text-lg font-bold tracking-wide">Drivertize</div>
            <div className="text-xs mt-1 bg-white/20 rounded px-2 py-1">📞 88662-86211</div>
          </div>
        </div>

        {/* Rear Door Advertisement */}
        <div className="w-44 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-xl border-2 border-white">
          <div className="p-2 text-white text-center h-full flex flex-col justify-center">
            <div className="text-lg font-bold tracking-wide">Drivertize</div>
            <div className="text-xs mt-1 bg-white/20 rounded px-2 py-1">📞 88662-86211</div>
          </div>
        </div>
      </div>

      {/* Wheels */}
      <div className="absolute -bottom-6 left-16 w-12 h-12 bg-gray-900 rounded-full shadow-xl border-3 border-gray-700">
        <div className="absolute inset-2 bg-gray-600 rounded-full">
          <div className="absolute inset-3 bg-gray-400 rounded-full"></div>
        </div>
      </div>
      <div className="absolute -bottom-6 right-16 w-12 h-12 bg-gray-900 rounded-full shadow-xl border-3 border-gray-700">
        <div className="absolute inset-2 bg-gray-600 rounded-full">
          <div className="absolute inset-3 bg-gray-400 rounded-full"></div>
        </div>
      </div>
      
      {/* Lights */}
      <div className="absolute top-20 -left-2 w-6 h-10 bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-l-xl shadow-lg border border-gray-300"></div>
      <div className="absolute top-32 -left-2 w-6 h-6 bg-gradient-to-r from-orange-200 to-orange-300 rounded-l-lg shadow-md border border-gray-300"></div>
      <div className="absolute top-20 -right-2 w-6 h-10 bg-gradient-to-l from-red-200 to-red-300 rounded-r-xl shadow-lg border border-gray-300"></div>
      <div className="absolute top-32 -right-2 w-6 h-6 bg-gradient-to-l from-red-300 to-red-400 rounded-r-lg shadow-md border border-gray-300"></div>
      
      {/* Mirrors */}
      <div className="absolute top-10 left-6 w-4 h-3 bg-gray-800 rounded-lg shadow-md border border-gray-600"></div>
      <div className="absolute top-10 right-6 w-4 h-3 bg-gray-800 rounded-lg shadow-md border border-gray-600"></div>
      
      {/* Handles */}
      <div className="absolute top-32 left-20 w-2 h-4 bg-gray-700 rounded-full shadow-sm"></div>
      <div className="absolute top-32 right-20 w-2 h-4 bg-gray-700 rounded-full shadow-sm"></div>
      
      {/* Logo */}
      <div className="absolute top-28 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-gray-600 rounded-sm shadow-md"></div>
    </div>

    {/* Campaign Info Cards */}
    <div className="absolute -top-11 -left-8 bg-white rounded-xl p-4 shadow-xl animate-pulse border border-gray-200">
      <div className="flex items-center space-x-2">
        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
        <span className="text-sm font-semibold text-gray-800">Live Campaign</span>
      </div>
    </div>

    {/* Mobile Billboard – pushed lower */}
    <div className="absolute -bottom-24 -right-8 bg-white rounded-xl p-4 shadow-xl border border-gray-200">
      <div className="flex items-center space-x-2">
        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
        <span className="text-sm font-semibold text-gray-800">Mobile Billboard</span>
      </div>
    </div>
  </div>
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
                Why Leading Brands Choose 
                <span className="text-blue-600"> Mobile Billboard Advertising</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Experience the power of mobile advertising that follows your customers everywhere they go. Our strategic network ensures your brand dominates the streets during peak business hours and high-traffic periods.
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
                  <span className="text-gray-600">Cost Savings</span>
                  <span className="text-2xl font-bold text-green-600">Up to 80%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Campaign Duration</span>
                  <span className="text-2xl font-bold text-purple-600">1-12 Months</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Market Penetration</span>
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
              Launch Your Mobile Advertising Campaign
            </h2>
            <p className="text-xl text-gray-600">
              From concept to street domination in just 3 simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Strategic Planning</h3>
              <p className="text-gray-600">Our experts analyze your target market and design compelling mobile billboard campaigns for maximum impact</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fleet Deployment</h3>
              <p className="text-gray-600">Premium vinyl installation across our extensive vehicle network covering all major routes and business districts</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Dominate & Measure</h3>
              <p className="text-gray-600">Watch your brand dominate the streets while tracking real-time performance metrics and customer engagement</p>
            </div>
          </div>
        </div>
      </section>

      {/* Advertiser Dashboard Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Campaign Dashboard Preview
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Manage and track your advertising campaigns with our comprehensive dashboard
            </p>
            {/* Demo Warning */}
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8 max-w-2xl mx-auto">
              <div className="flex">
                <div className="ml-3">
                  <p className="text-sm text-yellow-700">
                    <strong>Demo Dashboard:</strong> This is a demonstration dashboard. Some functionality may not function as they would in the live system.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg">
            {/* Dashboard Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 sm:p-6 border-b gap-4">
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Campaign Dashboard</h1>
                <p className="text-gray-600">Manage and track your advertising campaigns</p>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-4">
                <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors relative">
                  <Bell className="h-5 w-5 sm:h-6 sm:w-6" />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center">3</span>
                </button>
                <button className="bg-blue-600 text-white px-3 py-2 sm:px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center text-sm">
                  <Plus className="h-4 w-4 mr-1 sm:mr-2" />
                  <span className="hidden sm:inline">New Campaign</span>
                  <span className="sm:hidden">New</span>
                </button>
                <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                  <Settings className="h-5 w-5 sm:h-6 sm:w-6" />
                </button>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="bg-gray-50 p-1 m-4 sm:m-6 rounded-lg">
              <div className="grid grid-cols-2 sm:flex sm:space-x-1 gap-1 sm:gap-0">
                {['overview', 'campaigns', 'analytics', 'vehicles'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-3 py-2 sm:px-6 sm:py-3 rounded-lg font-medium transition-colors capitalize text-sm sm:text-base ${
                      activeTab === tab
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-600 hover:text-blue-600'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-4 sm:p-6">
              {activeTab === 'overview' && (
                <div className="space-y-6 sm:space-y-8">
                  {/* Stats Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-blue-600 font-medium">Estimated Reach</p>
                          <p className="text-xl sm:text-2xl font-bold text-blue-900">{stats.totalReach.toLocaleString()}</p>
                          <p className="text-xs text-green-600 mt-1">↑ 12% from last month</p>
                        </div>
                        <BarChart3 className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-green-600 font-medium">Active Campaigns</p>
                          <p className="text-xl sm:text-2xl font-bold text-green-900">{stats.activeCampaigns}</p>
                          <p className="text-xs text-gray-500 mt-1">2 scheduled</p>
                        </div>
                        <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-yellow-600 font-medium">Total Spent</p>
                          <p className="text-xl sm:text-2xl font-bold text-yellow-900">₹{stats.totalSpent.toLocaleString()}</p>
                          <p className="text-xs text-gray-500 mt-1">₹22k remaining</p>
                        </div>
                        <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-600" />
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-purple-600 font-medium">Active Vehicles</p>
                          <p className="text-xl sm:text-2xl font-bold text-purple-900">{stats.activeVehicles}</p>
                          <p className="text-xs text-green-600 mt-1">Mobile billboards</p>
                        </div>
                        <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-purple-600" />
                      </div>
                    </div>
                  </div>

                  {/* Recent Campaigns */}
                  <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Campaigns</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full min-w-[600px]">
                        <thead>
                          <tr className="text-left text-sm text-gray-500 border-b">
                            <th className="pb-3">Campaign</th>
                            <th className="pb-3">Status</th>
                            <th className="pb-3">Budget</th>
                            <th className="pb-3">Spent</th>
                            <th className="pb-3">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {campaigns.slice(0, 3).map((campaign) => (
                            <tr key={campaign.id} className="border-b border-gray-100">
                              <td className="py-4">
                                <div className="font-medium text-gray-900">{campaign.name}</div>
                                <div className="text-sm text-gray-500">{campaign.vehicles} vehicles</div>
                              </td>
                              <td className="py-4">
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(campaign.status)}`}>
                                  {campaign.status}
                                </span>
                              </td>
                              <td className="py-4 text-gray-600">{campaign.reach.toLocaleString()}</td>
                              <td className="py-4 font-medium text-gray-900">₹{campaign.spent.toLocaleString()}</td>
                              <td className="py-4">
                                <div className="flex space-x-2">
                                  <button className="p-1 text-gray-400 hover:text-blue-600">
                                    <Eye className="h-4 w-4" />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'campaigns' && (
                <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
                    <h3 className="text-lg font-semibold text-gray-900">All Campaigns</h3>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center text-sm">
                      <Plus className="h-4 w-4 mr-2" />
                      Create Campaign
                    </button>
                  </div>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[800px]">
                      <thead>
                        <tr className="text-left text-sm text-gray-500 border-b">
                          <th className="pb-3">Campaign Name</th>
                          <th className="pb-3">Status</th>
                          <th className="pb-3">Budget</th>
                          <th className="pb-3">Spent</th>
                          <th className="pb-3">Reach</th>
                          <th className="pb-3">Vehicles</th>
                          <th className="pb-3">Duration</th>
                          <th className="pb-3">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {campaigns.map((campaign) => (
                          <tr key={campaign.id} className="border-b border-gray-100">
                            <td className="py-4 font-medium text-gray-900">{campaign.name}</td>
                            <td className="py-4">
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(campaign.status)}`}>
                                {campaign.status}
                              </span>
                            </td>
                            <td className="py-4 text-gray-600">₹{campaign.budget.toLocaleString()}</td>
                            <td className="py-4 text-gray-600">₹{campaign.spent.toLocaleString()}</td>
                            <td className="py-4 text-gray-600">{campaign.reach.toLocaleString()}</td>
                            <td className="py-4 text-gray-600">{campaign.vehicles}</td>
                            <td className="py-4 text-gray-600 text-sm">
                              {new Date(campaign.startDate).toLocaleDateString()} - {new Date(campaign.endDate).toLocaleDateString()}
                            </td>
                            <td className="py-4">
                              <div className="flex space-x-2">
                                <button className="p-1 text-gray-400 hover:text-blue-600">
                                  <Eye className="h-4 w-4" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {activeTab === 'analytics' && (
                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Analytics</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-3">Campaign Performance</h4>
                        <div className="bg-white rounded-lg h-48 sm:h-64 flex items-center justify-center">
                          <p className="text-gray-500">Chart visualization would go here</p>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-3">Geographic Distribution</h4>
                        <div className="bg-white rounded-lg h-48 sm:h-64 flex items-center justify-center">
                          <p className="text-gray-500">Map visualization would go here</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'vehicles' && (
                <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Active Vehicles</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {Array.from({ length: 6 }, (_, i) => (
                      <div key={i} className="bg-white border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium">Vehicle #{i + 1}</span>
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Active</span>
                        </div>
                        <div className="text-sm text-gray-600 space-y-1">
                          <p>Driver: Rajesh Patel</p>
                          <p>Route: S.G. Highway</p>
                          <p>Coverage: High Traffic Areas</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Dominate Ahmedabad's Streets?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join leading brands already capturing massive market share with our mobile billboard network
          </p>
          <Link 
            to="/advertiser-login"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-medium text-lg inline-flex items-center group"
          >
            Launch Your Domination Campaign
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;