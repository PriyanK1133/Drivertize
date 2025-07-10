import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Car, IndianRupee, Clock, Shield, CheckCircle, ArrowRight, User, Phone, Mail, Star, BarChart3, MapPin, Users, TrendingUp, Calendar, Settings, Bell, Plus, Eye, Edit, Pause, Play } from 'lucide-react';
import emailjs from 'emailjs-com';


const Drivers = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    carModel: '',
    drivingExperience: '',
    city: 'Ahmedabad'
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const [activeTab, setActiveTab] = useState('overview');
  const [campaigns, setCampaigns] = useState([
    { 
      id: 1, 
      name: 'Summer Sale Campaign', 
      status: 'Active', 
      reach: 55000, 
      budget: 35000, 
      spent: 28000,
      impressions: 125000,
      vehicles: 15,
      startDate: '2024-01-15',
      endDate: '2024-02-15'
    },
    { 
      id: 2, 
      name: 'New Product Launch', 
      status: 'Scheduled', 
      reach: 25000, 
      budget: 20000, 
      spent: 0,
      impressions: 0,
      vehicles: 10,
      startDate: '2024-02-20',
      endDate: '2024-03-20'
    }
  ]);

  const [stats, setStats] = useState({
    totalEarned: 28400,
    activeCampaigns: 2,
    distanceCovered: 3440,
    rating: 4.8,
    monthlyAverage: 3275,
    totalCampaigns: 10
  });

  const [earnings, setEarnings] = useState([
    { month: 'January', amount: 3200, campaigns: 2, distance: 850, bonus: 200 },
    { month: 'February', amount: 3500, campaigns: 3, distance: 920, bonus: 300 },
    { month: 'March', amount: 3100, campaigns: 2, distance: 780, bonus: 100 },
    { month: 'April', amount: 3400, campaigns: 3, distance: 890, bonus: 250 }
  ]);

  const [activeCampaigns, setActiveCampaigns] = useState([
    {
      id: 1,
      brand: 'TechCorp Solutions',
      payment: 2500,
      startDate: '2024-01-15',
      endDate: '2024-02-15',
      status: 'Active',
      todayEarnings: 85
    },
    {
      id: 2,
      brand: 'FoodieHub',
      payment: 1800,
      startDate: '2024-01-20',
      endDate: '2024-02-20',
      status: 'Active',
      todayEarnings: 60
    }
  ]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setShowSuccess(true);
  //   setTimeout(() => setShowSuccess(false), 5000);
  //   setFormData({
  //     name: '',
  //     phone: '',
  //     email: '',
  //     carModel: '',
  //     drivingExperience: '',
  //     city: 'Ahmedabad'
  //   });
  // };
  
  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  emailjs.send(
    'service_2viivzc',      // replace with your service ID
    'template_c0t60os',     // replace with your template ID (e.g., template_driver123)
    {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      carModel: formData.carModel,
      drivingExperience: formData.drivingExperience,
      city: formData.city
    },
    '0nt1fF0yI5Ttot_Zg'       // replace with your public key from API section
  )
  .then(() => {
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
    setFormData({
      name: '',
      phone: '',
      email: '',
      carModel: '',
      drivingExperience: '',
      city: 'Ahmedabad'
    });
  })
  .catch((error) => {
    console.error('EmailJS Error:', error);
  });
};


  const handleCampaignAction = (id: number, action: string) => {
    setCampaigns(prev => prev.map(campaign => 
      campaign.id === id 
        ? { ...campaign, status: action === 'pause' ? 'Paused' : action === 'resume' ? 'Active' : campaign.status }
        : campaign
    ));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Scheduled': return 'bg-yellow-100 text-yellow-800';
      case 'Paused': return 'bg-orange-100 text-orange-800';
      case 'Completed': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const benefits = [
    {
      icon: <IndianRupee className="h-8 w-8 text-green-600" />,
      title: "Guaranteed Monthly Income",
      description: "Earn ₹3,000-4,000 monthly with zero out-of-pocket costs for installation or removal"
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Safe Installation",
      description: "Paint-safe materials and professional installation ensure your vehicle remains in perfect condition"
    },
    {
      icon: <Clock className="h-8 w-8 text-purple-600" />,
      title: "Flexible Commitment",
      description: "Withdraw anytime your earnings and get bonus payments for longer commitments"
    },
    {
      icon: <Car className="h-8 w-8 text-yellow-600" />,
      title: "Professional Service",
      description: "Expert installation and removal with professional grade wrap materials"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Apply Online",
      description: "Submit your application with vehicle details and get approved within 24 hours"
    },
    {
      number: "02",
      title: "Professional Installation",
      description: "Our experts install high-quality car wraps with zero damage to your vehicle"
    },
    {
      number: "03",
      title: "Start Earning",
      description: "Drive normally and earn guaranteed monthly income - withdraw anytime"
    }
  ];

  const earningBreakdown = [
    { type: "Base Payment", amount: "₹2,500", description: "Guaranteed monthly base" },
    { type: "Distance Bonus", amount: "₹1,000", description: "For active driving" },
    { type: "Loyalty Bonus", amount: "₹500", description: "Long-term commitment" }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Transform Your Car Section */}
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Transform Your Car Into a <span className="text-green-600">Moving Billboard</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Join Gujarat's revolutionary mobile advertising network. Turn your daily commute into a profitable venture while helping brands reach customers across Ahmedabad's busiest routes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-3xl font-bold text-green-600 mb-2">₹4,000</div>
                <div className="text-sm text-gray-600">Maximum Monthly Earning</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-3xl font-bold text-blue-600 mb-2">Zero</div>
                <div className="text-sm text-gray-600">Out-of-Pocket Costs</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
                <div className="text-sm text-gray-600">Professional Service</div>
              </div>
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Monetize Your Daily <span className="text-green-600">Drive</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Earn guaranteed monthly income while driving your regular routes. Professional ad installation with quality materials — designed to be safe and non-damaging.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/driver-login"
                className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-colors font-medium text-lg flex items-center justify-center group"
              >
                Start Earning Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Earnings Breakdown */}
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Monthly Earnings Breakdown</h3>
            <div className="space-y-4">
              {earningBreakdown.map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div>
                    <span className="font-medium text-gray-900">{item.type}</span>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                  <span className="font-bold text-lg text-green-600">{item.amount}</span>
                </div>
              ))}
              <div className="border-t pt-4 flex justify-between font-bold text-xl">
                <span>Total Earning Potential:</span>
                <span className="text-green-600">₹4,000/month</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Car Wrap Advertising?
            </h2>
            <p className="text-xl text-gray-600">
              Professional service with guaranteed income and vehicle protection
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="bg-gray-50 rounded-xl p-6 mb-4 group-hover:bg-green-50 transition-colors">
                  <div className="flex justify-center mb-4">{benefit.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Simple 3-step process to start earning with your vehicle
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.number}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h4>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-200 transform -translate-x-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Vehicle Owner Benefits
              </h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Earn ₹3,000-4,000 monthly guaranteed income</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Zero out-of-pocket costs for wrap installation/removal</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Professional installation with paint-safe materials</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Withdraw anytime your earnings</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Bonus earnings for longer commitments</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Expert installation and removal service</span>
                </div>
              </div>
            </div>

            <div className="bg-green-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Limited Spots Available</h3>
              <p className="text-gray-600 mb-6">
                We're currently accepting applications for prime locations across Ahmedabad. 
                Apply now to secure your spot in our mobile billboard network.
              </p>
              <div className="bg-white rounded-lg p-4 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">₹4,000</div>
                  <div className="text-sm text-gray-600">Maximum Monthly Earning</div>
                </div>
              </div>
              <Link 
                to="/driver-login"
                className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center group"
              >
                Apply Now
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Dashboard Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Driver Dashboard Preview
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              See how you can track your earnings and manage campaigns
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
            <div className="flex items-center justify-between p-6 border-b">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Driver Dashboard</h1>
                <p className="text-gray-600">Track your earnings and campaign performance</p>
              </div>
              <div className="flex items-center space-x-4">
                <button className="p-2 text-gray-400 hover:text-green-600 transition-colors relative">
                  <Bell className="h-6 w-6" />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">2</span>
                </button>
                <button className="p-2 text-gray-400 hover:text-green-600 transition-colors">
                  <Settings className="h-6 w-6" />
                </button>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="bg-gray-50 p-1 m-6 rounded-lg">
              <div className="flex space-x-1">
                {['overview', 'earnings', 'campaigns', 'profile'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-3 rounded-lg font-medium transition-colors capitalize ${
                      activeTab === tab
                        ? 'bg-green-600 text-white'
                        : 'text-gray-600 hover:text-green-600'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-6">
              {activeTab === 'overview' && (
                <div className="space-y-8">
                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-gray-50 rounded-lg p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-green-600 font-medium">Total Earned</p>
                          <p className="text-2xl font-bold text-green-900">₹{stats.totalEarned.toLocaleString()}</p>
                          <p className="text-xs text-green-600 mt-1">↑ ₹275 this month</p>
                        </div>
                        <TrendingUp className="h-8 w-8 text-green-600" />
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-blue-600 font-medium">Active Campaigns</p>
                          <p className="text-2xl font-bold text-blue-900">{stats.activeCampaigns}</p>
                          <p className="text-xs text-gray-500 mt-1">2 brands</p>
                        </div>
                        <Users className="h-8 w-8 text-blue-600" />
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-yellow-600 font-medium">Distance Covered</p>
                          <p className="text-2xl font-bold text-yellow-900">{stats.distanceCovered} km</p>
                          <p className="text-xs text-gray-500 mt-1">This year</p>
                        </div>
                        <MapPin className="h-8 w-8 text-yellow-600" />
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-purple-600 font-medium">Rating</p>
                          <p className="text-2xl font-bold text-purple-900">{stats.rating}/5</p>
                          <p className="text-xs text-green-600 mt-1">Excellent driver</p>
                        </div>
                        <BarChart3 className="h-8 w-8 text-purple-600" />
                      </div>
                    </div>
                  </div>

                  {/* Active Campaigns */}
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Active Campaigns</h3>
                    <div className="space-y-4">
                      {activeCampaigns.map((campaign) => (
                        <div key={campaign.id} className="bg-white border border-gray-200 rounded-lg p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-medium text-gray-900">{campaign.brand}</h4>
                              <p className="text-sm text-gray-600">
                                {new Date(campaign.startDate).toLocaleDateString()} - {new Date(campaign.endDate).toLocaleDateString()}
                              </p>
                            </div>
                            <div className="text-right">
                              <div className="text-lg font-bold text-green-600">₹{campaign.payment}/month</div>
                              <div className="text-sm text-gray-500">Today: ₹{campaign.todayEarnings}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'earnings' && (
                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Earnings History</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="text-left text-sm text-gray-500 border-b">
                            <th className="pb-3">Month</th>
                            <th className="pb-3">Amount Earned</th>
                            <th className="pb-3">Campaigns</th>
                            <th className="pb-3">Distance (km)</th>
                            <th className="pb-3">Bonus</th>
                            <th className="pb-3">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {earnings.map((earning, index) => (
                            <tr key={index} className="border-b border-gray-100">
                              <td className="py-4 font-medium text-gray-900">{earning.month}</td>
                              <td className="py-4 font-semibold text-green-600">₹{earning.amount.toLocaleString()}</td>
                              <td className="py-4 text-gray-600">{earning.campaigns}</td>
                              <td className="py-4 text-gray-600">{earning.distance}</td>
                              <td className="py-4 text-yellow-600">₹{earning.bonus}</td>
                              <td className="py-4">
                                <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                  Paid
                                </span>
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
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Campaign History</h3>
                  <div className="space-y-4">
                    {[...activeCampaigns, 
                      { id: 3, brand: 'LocalBiz', payment: 2200, startDate: '2023-12-01', endDate: '2024-01-01', status: 'Completed', todayEarnings: 0 },
                      { id: 4, brand: 'RetailChain', payment: 1900, startDate: '2023-11-15', endDate: '2023-12-15', status: 'Completed', todayEarnings: 0 }
                    ].map((campaign) => (
                      <div key={campaign.id} className="bg-white border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium text-gray-900">{campaign.brand}</h4>
                            <p className="text-sm text-gray-600">
                              {new Date(campaign.startDate).toLocaleDateString()} - {new Date(campaign.endDate).toLocaleDateString()}
                            </p>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-green-600">₹{campaign.payment}/month</div>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(campaign.status)}`}>
                              {campaign.status}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'profile' && (
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Driver Profile</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">Personal Information</h4>
                      <div className="space-y-3">
                        <div>
                          <label className="block text-sm text-gray-600">Full Name</label>
                          <p className="font-medium">Rajesh Kumar Patel</p>
                        </div>
                        <div>
                          <label className="block text-sm text-gray-600">Phone Number</label>
                          <p className="font-medium">+91 99900 99900</p>
                        </div>
                        <div>
                          <label className="block text-sm text-gray-600">Email</label>
                          <p className="font-medium">rajesh.patel@email.com</p>
                        </div>
                        <div>
                          <label className="block text-sm text-gray-600">City</label>
                          <p className="font-medium">Ahmedabad, Gujarat</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">Vehicle Information</h4>
                      <div className="space-y-3">
                        <div>
                          <label className="block text-sm text-gray-600">Car Model</label>
                          <p className="font-medium">Maruti Swift Dzire</p>
                        </div>
                        <div>
                          <label className="block text-sm text-gray-600">Registration Number</label>
                          <p className="font-medium">GJ-01-AB-1234</p>
                        </div>
                        <div>
                          <label className="block text-sm text-gray-600">Driving Experience</label>
                          <p className="font-medium">8 years</p>
                        </div>
                        <div>
                          <label className="block text-sm text-gray-600">Join Date</label>
                          <p className="font-medium">January 15, 2024</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section id="application-form" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Driver Application Form</h3>
              <p className="text-gray-600">
                Submit your application to start earning with your vehicle. Quick approval process within 24 hours.
              </p>
            </div>
            
            {showSuccess && (
              <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-8">
                <div className="flex">
                  <div className="ml-3">
                    <p className="text-sm text-green-700">
                      <strong>Application Submitted!</strong> We'll contact you within 24 hours with next steps.
                    </p>
                  </div>
                </div>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Car Model *</label>
                <input
                  type="text"
                  name="carModel"
                  value={formData.carModel}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="e.g., Maruti Swift, Honda City"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Driving Experience *</label>
                <select
                  name="drivingExperience"
                  value={formData.drivingExperience}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                >
                  <option value="">Select experience</option>
                  <option value="1-2 years">1-2 years</option>
                  <option value="3-5 years">3-5 years</option>
                  <option value="5+ years">5+ years</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                <select
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                >
                  <option value="Ahmedabad">Ahmedabad</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center group"
                >
                  Submit Application
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-xs text-gray-500 mt-4 text-center">
                  By submitting, you agree to our terms and conditions. We'll contact you within 24 hours.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Drivers;