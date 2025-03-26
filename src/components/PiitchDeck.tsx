"use client";

import React from 'react';

const ServicesPage = () => {
  const servicesSections = [
    {
      category: 'STARTUP INCORPORATION',
      services: [
        {
          icon: '👥',
          title: 'Pvt. Ltd. Incorporation',
          description: 'Private limited company is popular and well known business structure it enjoys wide options to raise funds through bank loans, angel investors, venture capitalists, in comparison to LLPs and OPCs.',
          price: '₹6,299',
          priceType: 'Professional Fees'
        },
        {
          icon: '👤',
          title: 'OPC Incorporation',
          description: 'The one person company helps startup entrepreneurs they can approach angel investors, venture capitalists for funding and easily convert their OPC into multi shareholder private limited company.',
          price: '₹4,799',
          priceType: 'Professional Fees'
        },
        {
          icon: '🤝',
          title: 'LLP Incorporation',
          description: 'Limited liability partnership is the modern business option for traditional firms operating as partnership.',
          price: '₹3,499',
          priceType: 'Professional Fees'
        }
      ]
    },
    {
      category: 'TRADEMARK & IPR SERVICES',
      services: [
        {
          icon: '🤲',
          title: 'Trademark Registration',
          description: 'Nobody will dare to copy your brand name once it is a registered trademark.',
          price: '₹998',
          priceType: 'Professional Fees'
        },
        {
          icon: '©',
          title: 'Copyright Registration',
          description: 'Copyright is an important property of the owner. Copyright protects from copycats.',
          price: '₹4,999',
          priceType: 'Professional Fees'
        }
      ]
    },
    {
      category: 'ROC FILING',
      services: [
        {
          icon: '📄',
          title: 'ROC Return Filing for Pvt. Ltd. Company',
          description: 'ROC return gives details of changes taken place in the company during the year and need to be filed with the ROC even though the company has not done any business during the year.',
          price: '₹3,999',
          priceType: 'Consulting Fees'
        },
        {
          icon: '📊',
          title: 'ROC Return Filing for OPC Company',
          description: 'ROC return gives details of changes taken place in the company during the year and need to be filed with the ROC even though the company has not done any business during the year.',
          price: '₹2,999',
          priceType: 'Consulting Fees'
        },
        {
          icon: '📝',
          title: 'LLP ROC Return Form 11 & Form 8',
          description: 'ROC return gives details of changes taken place in the company during the year and need to be filed with the ROC even though the company has not done any business during the year.',
          price: '₹1,999',
          priceType: 'Consulting Fees'
        }
      ]
    },
    {
      category: 'GST FILINGS',
      services: [
        {
          icon: '📊',
          title: 'GST Filing',
          description: 'Anyone supplying goods or services to another state, Online service providers, eCommerce sites need to apply for GST regardless of turnover.',
          price: '₹3,999',
          priceType: 'All Inclusive'
        }
      ]
    },
    {
      category: 'STARTUP INDIA, ISO & MSME',
      services: [
        {
          icon: '📋',
          title: 'Startup India Services',
          description: 'Startup India recognition is very important for a Startup to get eligible for 3 years Income Tax exemption, get easy funding and easy loan processing.',
          price: '₹3,999',
          priceType: 'Consulting Fees'
        },
        {
          icon: '🏆',
          title: 'ISO Services',
          description: 'ISO means International Standard Organization. It provides a set of requirements that helps management of business to achieve customer satisfaction.',
          price: '₹4,999',
          priceType: 'Consulting Fees'
        },
        {
          icon: '📃',
          title: 'MSME / Udyam Services',
          description: 'MSME (Micro Small and Medium Enterprises) Registration is the procedure to get your firm registered under MSME development Act.',
          price: '₹1,999',
          priceType: 'Consulting Fees'
        }
      ]
    }
  ];

  const [activeCategory, setActiveCategory] = React.useState('STARTUP INCORPORATION');

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#44106C] to-[#290045]">
      <div className="container mx-auto px-4 py-12">
        {/* Header with gradient text */}
        <div className="border-b border-purple-500/30 mb-8 pb-4">
          <h1 className="text-3xl font-bold text-center bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
            ALL SERVICES
          </h1>
        </div>
        
        {/* Category tabs with gradient hover effect */}
        <div className="flex justify-center space-x-2 mb-8 overflow-x-auto pb-2">
          {Object.keys(servicesSections.reduce((acc, section) => {
            acc[section.category] = true;
            return acc;
          }, {})).map((category, index) => (
            <button 
              key={index} 
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 text-sm font-medium rounded-full whitespace-nowrap transition-all ${
                category === activeCategory 
                  ? 'bg-gradient-to-r from-[#C6009A] to-[#FF4BD8] text-white shadow-lg shadow-pink-600/30' 
                  : 'bg-white/10 text-purple-200 hover:bg-white/15 border border-white/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Services cards with glassmorphism effect */}
        {servicesSections
          .filter(section => section.category === activeCategory)
          .map((section, sectionIndex) => (
            <div key={sectionIndex} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.services.map((service, serviceIndex) => (
                <div 
                  key={serviceIndex} 
                  className="bg-gradient-to-br from-[#6500AB]/50 to-[#6500AB]/30 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 shadow-lg hover:shadow-purple-500/20 transition-all hover:-translate-y-1"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h2 className="text-xl font-semibold mb-3 text-white">{service.title}</h2>
                  <p className="text-purple-100/80 mb-5 text-sm">{service.description}</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-2xl font-bold bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
                        {service.price}
                      </div>
                      <div className="text-xs text-purple-200/60">{service.priceType}</div>
                    </div>
                    <button className="px-5 py-2 bg-gradient-to-r from-[#C6009A] to-[#FF4BD8] text-white rounded-full text-sm hover:from-[#D800AA] hover:to-[#FF6DE1] shadow-md hover:shadow-pink-600/40 transition-all">
                      GET STARTED
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default ServicesPage;
