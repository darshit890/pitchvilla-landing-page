"use client";

import React from 'react';
import { ArrowRight, Calculator, FileText, Calendar, ClipboardCheck, Shield, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const GSTFilingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-bl from-[#44106C] via-[#6708A6] to-[#D007AC] overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-20 w-40 h-40 bg-pink-500/10 rounded-full blur-xl"></div>
      
      {/* Hero Section */}
      <div className="container mx-auto px-6 pt-20 pb-12 relative z-10">
        <div className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-pink-200 text-xs font-medium mb-3">
          GST Filing Services
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-bold leading-tight tracking-tight max-w-4xl">
          Simplify Your <span className="text-pink-300">GST Compliance</span> & <span className="text-pink-300">Returns</span>
        </h1>
        
        <p className="mt-6 text-lg md:text-xl text-white/80 leading-relaxed font-light max-w-2xl">
          Professional GST filing services to ensure timely compliance and maximize input tax credits.
        </p>
        
        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20">
            <div className="h-12 w-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center mb-5">
              <FileText className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Monthly Returns</h3>
            <p className="text-white/70 mb-4">Regular GSTR-1 and GSTR-3B filing services.</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-white/80 text-sm">
                <CheckCircle className="h-4 w-4 text-pink-400 mr-2" />
                Data compilation
              </li>
              <li className="flex items-center text-white/80 text-sm">
                <CheckCircle className="h-4 w-4 text-pink-400 mr-2" />
                Return preparation
              </li>
              <li className="flex items-center text-white/80 text-sm">
                <CheckCircle className="h-4 w-4 text-pink-400 mr-2" />
                Timely filing
              </li>
            </ul>
            <p className="text-xl font-bold text-white mb-1">$199/month</p>
            <Button className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/30 rounded-full py-2">
              Get Started
            </Button>
          </div>
          
          <div className="bg-gradient-to-br from-[#6500AB]/90 to-[#D007AC]/50 backdrop-blur-md rounded-3xl p-8 border border-pink-500/30 relative">
            <div className="absolute top-0 right-8 bg-gradient-to-r from-[#C6009A] to-[#FF4BD8] text-white text-xs font-bold px-3 py-1 rounded-b-lg">
              POPULAR
            </div>
            <div className="h-12 w-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center mb-5">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Complete GST Package</h3>
            <p className="text-white/70 mb-4">Comprehensive GST compliance management.</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-white/80 text-sm">
                <CheckCircle className="h-4 w-4 text-pink-400 mr-2" />
                Monthly returns
              </li>
              <li className="flex items-center text-white/80 text-sm">
                <CheckCircle className="h-4 w-4 text-pink-400 mr-2" />
                Annual returns
              </li>
              <li className="flex items-center text-white/80 text-sm">
                <CheckCircle className="h-4 w-4 text-pink-400 mr-2" />
                Reconciliation
              </li>
              <li className="flex items-center text-white/80 text-sm">
                <CheckCircle className="h-4 w-4 text-pink-400 mr-2" />
                Advisory services
              </li>
            </ul>
            <p className="text-xl font-bold text-white mb-1">$399/month</p>
            <Button className="w-full bg-gradient-to-r from-[#C6009A] to-[#FF4BD8] hover:from-[#D800AA] hover:to-[#FF6DE1] text-white rounded-full py-2">
              Choose Plan
            </Button>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20">
            <div className="h-12 w-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center mb-5">
              <Calculator className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Annual Returns</h3>
            <p className="text-white/70 mb-4">GSTR-9 and GSTR-9C filing services.</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-white/80 text-sm">
                <CheckCircle className="h-4 w-4 text-pink-400 mr-2" />
                Annual compilation
              </li>
              <li className="flex items-center text-white/80 text-sm">
                <CheckCircle className="h-4 w-4 text-pink-400 mr-2" />
                Reconciliation
              </li>
              <li className="flex items-center text-white/80 text-sm">
                <CheckCircle className="h-4 w-4 text-pink-400 mr-2" />
                Certification
              </li>
            </ul>
            <p className="text-xl font-bold text-white mb-1">$599/year</p>
            <Button className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/30 rounded-full py-2">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our GST Services</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">Expert assistance for all your GST compliance needs.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-6">
            <div className="h-16 w-16 bg-white/10 rounded-full flex items-center justify-center mb-5">
              <Calendar className="h-8 w-8 text-pink-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Timely Filing</h3>
            <p className="text-white/70">Never miss GST filing deadlines with our automated system.</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6">
            <div className="h-16 w-16 bg-white/10 rounded-full flex items-center justify-center mb-5">
              <Shield className="h-8 w-8 text-pink-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Error-Free Filing</h3>
            <p className="text-white/70">Multi-level verification to ensure accurate returns.</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6">
            <div className="h-16 w-16 bg-white/10 rounded-full flex items-center justify-center mb-5">
              <Calculator className="h-8 w-8 text-pink-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Maximum Credits</h3>
            <p className="text-white/70">Optimize your input tax credits with our expert analysis.</p>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default GSTFilingPage;
