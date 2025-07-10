import React, { useState } from 'react';
import { TrendingUp, Users, MapPin, BarChart3, Calendar, Settings, Bell, Car, IndianRupee, Clock } from 'lucide-react';

const DriverDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [earnings, setEarnings] = useState([
    { month: 'January', amount: 3200, campaigns: 2, distance: 850, bonus: 200 },
    { month: 'February', amount: 3500, campaigns: 3, distance: 920, bonus: 300 },
    { month: 'March', amount: 3100, campaigns: 2, distance: 780, bonus: 100 },
    { month: 'April', amount: 3400, campaigns: 3, distance: 890, bonus: 250 }
  ]);

  const [stats, setStats] = useState({
    totalEarned: 28400,
    activeCampaigns: 2,
    distanceCovered: 3440,
    rating: 4.8,
    monthlyAverage: 3275,
    totalCampaigns: 10
  });

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
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Demo Warning */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
          <div className="flex">
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                <strong>Demo Dashboard:</strong> This is a demonstration dashboard. Some functionality may not function as they would in the live system.
              </p>
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Driver Dashboard</h1>
            <p className="text-gray-600">Track your earnings and campaign performance</p>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-4">
            <button className="p-2 text-gray-400 hover:text-green-600 transition-colors relative">
              <Bell className="h-5 w-5 sm:h-6 sm:w-6" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center">2</span>
            </button>
            <button className="p-2 text-gray-400 hover:text-green-600 transition-colors">
              <Settings className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-lg p-1 shadow-sm mb-8">
          <div className="grid grid-cols-2 sm:flex sm:space-x-1 gap-1 sm:gap-0">
            {['overview', 'earnings', 'campaigns', 'profile'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-2 sm:px-6 sm:py-3 rounded-lg font-medium transition-colors capitalize text-sm sm:text-base ${
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

        {activeTab === 'overview' && (
          <div className="space-y-6 sm:space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-green-600 font-medium">Total Earned</p>
                    <p className="text-xl sm:text-2xl font-bold text-green-900">₹{stats.totalEarned.toLocaleString()}</p>
                    <p className="text-xs text-green-600 mt-1">↑ ₹275 this month</p>
                  </div>
                  <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-blue-600 font-medium">Active Campaigns</p>
                    <p className="text-xl sm:text-2xl font-bold text-blue-900">{stats.activeCampaigns}</p>
                    <p className="text-xs text-gray-500 mt-1">2 brands</p>
                  </div>
                  <Users className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-yellow-600 font-medium">Daily Coverage</p>
                    <p className="text-xl sm:text-2xl font-bold text-yellow-900">120 km/day</p>
                    <p className="text-xs text-gray-500 mt-1">Average distance</p>
                  </div>
                  <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-600" />
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-purple-600 font-medium">Rating</p>
                    <p className="text-xl sm:text-2xl font-bold text-purple-900">{stats.rating}/5</p>
                    <p className="text-xs text-green-600 mt-1">Excellent driver</p>
                  </div>
                  <BarChart3 className="h-6 w-6 sm:h-8 sm:w-8 text-purple-600" />
                </div>
              </div>
            </div>

            {/* Active Campaigns */}
            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Active Campaigns</h3>
              <div className="space-y-4">
                {activeCampaigns.map((campaign) => (
                  <div key={campaign.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <h4 className="font-medium text-gray-900">{campaign.brand}</h4>
                        <p className="text-sm text-gray-600">
                          {new Date(campaign.startDate).toLocaleDateString()} - {new Date(campaign.endDate).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="text-left sm:text-right">
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
            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Earnings History</h3>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px]">
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
                <h4 className="font-medium text-gray-900 mb-3">Earnings Breakdown</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Base Payments:</span>
                    <span className="font-medium">₹24,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Distance Bonuses:</span>
                    <span className="font-medium">₹3,550</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Performance Bonuses:</span>
                    <span className="font-medium">₹850</span>
                  </div>
                  <div className="border-t pt-3 flex justify-between font-bold">
                    <span>Total Earned:</span>
                    <span className="text-green-600">₹{stats.totalEarned.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
                <h4 className="font-medium text-gray-900 mb-3">Performance Metrics</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monthly Average:</span>
                    <span className="font-medium">₹{stats.monthlyAverage.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Campaigns:</span>
                    <span className="font-medium">{stats.totalCampaigns}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Driver Rating:</span>
                    <span className="font-medium">{stats.rating}/5 ⭐</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Completion Rate:</span>
                    <span className="font-medium text-green-600">98%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'campaigns' && (
          <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Campaign History</h3>
            <div className="space-y-4">
              {[...activeCampaigns, 
                { id: 3, brand: 'LocalBiz', payment: 2200, startDate: '2023-12-01', endDate: '2024-01-01', status: 'Completed', todayEarnings: 0 },
                { id: 4, brand: 'RetailChain', payment: 1900, startDate: '2023-11-15', endDate: '2023-12-15', status: 'Completed', todayEarnings: 0 }
              ].map((campaign) => (
                <div key={campaign.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h4 className="font-medium text-gray-900">{campaign.brand}</h4>
                      <p className="text-sm text-gray-600">
                        {new Date(campaign.startDate).toLocaleDateString()} - {new Date(campaign.endDate).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="text-left sm:text-right">
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
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Driver Profile</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Personal Information</h4>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm text-gray-600">Full Name</label>
                      <p className="font-medium">Rajesh Kumar Patel</p>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600">Phone Number</label>
                      <p className="font-medium">+91 98765 43210</p>
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
          </div>
        )}
      </div>
    </div>
  );
};

export default DriverDashboard;