import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Target, Users, Award, Shield, TrendingUp, MapPin, Clock, ArrowRight } from 'lucide-react';

const AboutUs = () => {
  const milestones = [
    { year: '2023', title: 'Company Founded', description: 'Drivertize was established with a vision to revolutionize outdoor advertising in Gujarat' },
    { year: '2024', title: 'First 100 Vehicles', description: 'Successfully onboarded our first 100 drivers and launched initial campaigns' },
    { year: '2024', title: '25+ Brand Partners', description: 'Partnered with leading local and national brands for mobile advertising campaigns' },
    { year: '2024', title: 'Citywide Coverage', description: 'Achieved complete coverage across all major routes and business districts in Ahmedabad' }
  ];

  const values = [
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: 'Trust & Transparency',
      description: 'We believe in honest partnerships with both drivers and advertisers, ensuring fair compensation and clear communication.'
    },
    {
      icon: <Award className="h-8 w-8 text-green-600" />,
      title: 'Quality Excellence',
      description: 'Premium materials, professional installation, and meticulous attention to detail in every campaign we execute.'
    },
    {
      icon: <Users className="h-8 w-8 text-purple-600" />,
      title: 'Community First',
      description: 'Supporting local drivers and businesses while contributing to Gujarat\'s economic growth and development.'
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-yellow-600" />,
      title: 'Innovation Drive',
      description: 'Continuously evolving our technology and processes to deliver better results for all stakeholders.'
    }
  ];

  const team = [
    {
      name: 'Rajesh Patel',
      role: 'Founder & CEO',
      description: 'Visionary entrepreneur with 15+ years in advertising and technology sectors.'
    },
    {
      name: 'Priya Shah',
      role: 'Head of Operations',
      description: 'Expert in fleet management and driver relations with proven track record.'
    },
    {
      name: 'Amit Kumar',
      role: 'Technology Director',
      description: 'Leading our digital transformation and campaign tracking systems.'
    },
    {
      name: 'Neha Desai',
      role: 'Creative Director',
      description: 'Award-winning designer specializing in mobile advertising campaigns.'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-blue-600">Drivertize</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Gujarat's pioneering mobile advertising platform, connecting brands with drivers to create 
              impactful marketing campaigns that benefit everyone in the ecosystem.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                To revolutionize outdoor advertising by creating a sustainable ecosystem where brands achieve 
                maximum visibility, drivers earn meaningful income, and communities benefit from innovative 
                marketing solutions.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We're not just an advertising platform – we're building Gujarat's largest network of mobile 
                entrepreneurs, empowering drivers to monetize their daily commutes while helping businesses 
                reach customers in the most effective way possible.
              </p>
              
              {/* <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-sm text-gray-600">Active Drivers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">25+</div>
                  <div className="text-sm text-gray-600">Brand Partners</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">₹35L+</div>
                  <div className="text-sm text-gray-600">Paid to Drivers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-600 mb-2">100%</div>
                  <div className="text-sm text-gray-600">Ahmedabad Coverage</div>
                </div>
              </div> */}
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Why We Started Drivertize</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Target className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Market Gap</h4>
                    <p className="text-sm text-gray-600">Traditional advertising was expensive and ineffective for local businesses</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Car className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Driver Opportunity</h4>
                    <p className="text-sm text-gray-600">Thousands of drivers wanted additional income from their vehicles</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-6 w-6 text-purple-600 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Local Focus</h4>
                    <p className="text-sm text-gray-600">Gujarat needed a homegrown solution for mobile advertising</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-50 rounded-xl p-6 mb-4 hover:bg-blue-50 transition-colors">
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join the Drivertize Revolution
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Be part of Gujarat's mobile advertising revolution. Start your journey with us today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact-us"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-medium text-lg inline-flex items-center justify-center group"
            >
              Partner with Us
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;