"use client";

import React from 'react';
import { ArrowRight, Shield, FileText, Settings, Calendar, Award, Zap, BookOpen, Briefcase, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const TrademarkIPRPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-bl from-[#44106C] via-[#6708A6] to-[#D007AC] overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-20 w-40 h-40 bg-pink-500/10 rounded-full blur-xl"></div>
      <div className="absolute top-1/4 right-1/4 w-24 h-24 bg-purple-500/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-1/3 left-1/4 w-28 h-28 bg-pink-500/5 rounded-full blur-xl"></div>

      {/* Hero Section */}
      <div className="container mx-auto px-6 pt-20 pb-12 relative z-10">
        <div className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-pink-200 text-xs font-medium mb-3">
          Professional Trademark & IPR Services
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-bold leading-tight tracking-tight max-w-4xl">
          Protect Your <span className="text-pink-300">Brand</span> with Expert <span className="text-pink-300">Trademark & IPR Services</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-white/80 leading-relaxed font-light max-w-2xl">
          Secure your intellectual property with our professional trademark registration, patent filing, and copyright protection services.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Button className="bg-gradient-to-r from-[#C6009A] to-[#FF4BD8] hover:from-[#D800AA] hover:to-[#FF6DE1] text-white rounded-full py-3 px-8 text-base font-medium shadow-lg shadow-pink-600/20 transform transition-all duration-300 hover:shadow-pink-600/40 hover:scale-[1.02]">
            Explore Services
          </Button>
          <Button
            variant="outline"
            className="bg-gradient-to-r from-[#6500AB]/80 to-[#290045]/80 backdrop-blur-sm text-white border border-white/20 hover:border-white/40 hover:from-[#6500AB] hover:to-[#290045] hover:text-white rounded-full py-3 px-8 text-base font-medium group transition-all duration-300"
          >
            <span>Learn More</span>
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>

      {/* Featured Services */}
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Trademark & IPR Services</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Ensure legal protection for your brand and intellectual property with our expert services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 transform transition-all duration-300 hover:shadow-purple-500/20 hover:border-white/30 hover:-translate-y-1">
            <div className="h-12 w-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center mb-5">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Trademark Registration</h3>
            <p className="text-white/70 mb-4">Protect your brand identity with legally recognized trademarks.</p>
            <p className="text-xl font-bold text-white mb-1">$299</p>
            <p className="text-white/60 text-sm mb-4">One-time registration fee</p>
            <Button className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/30 rounded-full py-2 transition-all duration-300">
              Learn More
            </Button>
          </div>

          <div className="bg-gradient-to-br from-[#6500AB]/90 to-[#D007AC]/50 backdrop-blur-md rounded-3xl p-8 border border-pink-500/30 transform transition-all duration-300 hover:shadow-pink-500/20 hover:scale-[1.02] relative">
            <div className="absolute top-0 right-8 bg-gradient-to-r from-[#C6009A] to-[#FF4BD8] text-white text-xs font-bold px-3 py-1 rounded-b-lg">POPULAR</div>
            <div className="h-12 w-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center mb-5">
              <Briefcase className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Patent Filing</h3>
            <p className="text-white/70 mb-4">Secure exclusive rights to your inventions with our patent services.</p>
            <p className="text-xl font-bold text-white mb-1">$999</p>
            <p className="text-white/60 text-sm mb-4">Comprehensive filing package</p>
            <Button className="w-full bg-gradient-to-r from-[#C6009A] to-[#FF4BD8] hover:from-[#D800AA] hover:to-[#FF6DE1] text-white rounded-full py-2 shadow-lg shadow-pink-600/20 transition-all duration-300">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrademarkIPRPage;
