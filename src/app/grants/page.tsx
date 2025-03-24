"use client";

import React from 'react';
import { GiftIcon, FileText, Search, CheckCircle, DollarSign, Target, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const GrantsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-bl from-[#44106C] via-[#6708A6] to-[#D007AC] overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-20 w-40 h-40 bg-pink-500/10 rounded-full blur-xl"></div>
      
      {/* Hero Section */}
      <div className="container mx-auto px-6 pt-20 pb-12 relative z-10">
        <div className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-pink-200 text-xs font-medium mb-3">
          Business Grants
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-bold leading-tight tracking-tight max-w-4xl">
          Access <span className="text-pink-300">Government Grants</span> & <span className="text-pink-300">Funding</span>
        </h1>
        
        <p className="mt-6 text-lg md:text-xl text-white/80 leading-relaxed font-light max-w-2xl">
          Expert assistance in identifying and securing government grants and funding opportunities for your business.
        </p>
        
        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20">
            <div className="h-12 w-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center mb-5">
              <Search className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Grant Search</h3>
            <p className="text-white/70 mb-4">Comprehensive search for available grants.</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-white/80 text-sm">
                <CheckCircle className="h-4 w-4 text-pink-400 mr-2" />
                Eligibility assessment
              </li>
              <li className="flex items-center text-white/80 text-sm">
                <CheckCircle className="h-4 w-4 text-pink-400 mr-2" />
                Grant matching
              </li>
              <li className="flex items-center text-white/80 text-sm">
                <CheckCircle className="h-4 w-4 text-pink-400 mr-2" />
                Opportunity analysis
              </li>
            </ul>
            <p className="text-xl font-bold text-white mb-1">$499</p>
            <Button className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/30 rounded-full py-2">
              Start Search
            </Button>
          </div>
          
          <div className="bg-gradient-to-br from-[#6500AB]/90 to-[#D007AC]/50 backdrop-blur-md rounded-3xl p-8 border border-pink-500/30 relative">
            <div className="absolute top-0 right-8 bg-gradient-to-r from-[#C6009A] to-[#FF4BD8] text-white text-xs font-bold px-3 py-1 rounded-b-lg">
              POPULAR
            </div>
            <div className="h-12 w-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center mb-5">
              <GiftIcon className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Complete Grant Package</h3>
            <p className="text-white/70 mb-4">End-to-end grant application support.</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-white/80 text-sm">
                <CheckCircle className="h-4 w-4 text-pink-400 mr-2" />
                Grant search
              </li>
              <li className="flex items-center text-white/80 text-sm">
                <CheckCircle className="h-4 w-4 text-pink-400 mr-2" />
                Application preparation
              </li>
              <li className="flex items-center text-white/80 text-sm">
                <CheckCircle className="h-4 w-4 text-pink-400 mr-2" />
                Documentation support
              </li>
              <li className="flex items-center text-white/80 text-sm">
                <CheckCircle className="h-4 w-4 text-pink-400 mr-2" />
                Follow-up assistance
              </li>
            </ul>
            <p className="text-xl font-bold text-white mb-1">$1,999</p>
            <Button className="w-full bg-gradient-to-r from-[#C6009A] to-[#FF4BD8] hover:from-[#D800AA] hover:to-[#FF6DE1] text-white rounded-full py-2">
              Get Started
            </Button>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20">
            <div className="h-12 w-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center mb-5">
              <FileText className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Grant Writing</h3>
            <p className="text-white/70 mb-4">Professional grant proposal writing.</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-white/80 text-sm">
                <CheckCircle className="h-4 w-4 text-pink-400 mr-2" />
                Proposal development
              </li>
              <li className="flex items-center text-white/80 text-sm">
                <CheckCircle className="h-4 w-4 text-pink-400 mr-2" />
                Budget preparation
              </li>
              <li className="flex items-center text-white/80 text-sm">
                <CheckCircle className="h-4 w-4 text-pink-400 mr-2" />
                Review & editing
              </li>
            </ul>
            <p className="text-xl font-bold text-white mb-1">$999</p>
            <Button className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/30 rounded-full py-2">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our Grant Services</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">Expert assistance for successful grant applications.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-6">
            <div className="h-16 w-16 bg-white/10 rounded-full flex items-center justify-center mb-5">
              <Target className="h-8 w-8 text-pink-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Targeted Search</h3>
            <p className="text-white/70">Find the most relevant grants for your business.</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6">
            <div className="h-16 w-16 bg-white/10 rounded-full flex items-center justify-center mb-5">
              <Users className="h-8 w-8 text-pink-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Expert Team</h3>
            <p className="text-white/70">Experienced grant writers and consultants.</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6">
            <div className="h-16 w-16 bg-white/10 rounded-full flex items-center justify-center mb-5">
              <DollarSign className="h-8 w-8 text-pink-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Maximum Funding</h3>
            <p className="text-white/70">Optimize your chances of securing grants.</p>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default GrantsPage;
