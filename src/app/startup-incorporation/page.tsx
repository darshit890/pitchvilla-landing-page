"use client";

import React from 'react';
import { ArrowRight, Shield, FileText, Settings, Calendar, Award, Zap, BookOpen, Briefcase, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const StartupIncorporationPage = () => {
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
          Professional Incorporation Services
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-bold leading-tight tracking-tight max-w-4xl">
          Launch Your <span className="text-pink-300">Startup</span> With The Right <span className="text-pink-300">Foundation</span>
        </h1>
        
        <p className="mt-6 text-lg md:text-xl text-white/80 leading-relaxed font-light max-w-2xl">
          Professional incorporation services to help ambitious founders build legally sound businesses with confidence.
        </p>
        
        <div className="mt-8 flex flex-wrap gap-4">
          <Button
            className="bg-gradient-to-r from-[#C6009A] to-[#FF4BD8] hover:from-[#D800AA] hover:to-[#FF6DE1] text-white rounded-full py-3 px-8 text-base font-medium shadow-lg shadow-pink-600/20 transform transition-all duration-300 hover:shadow-pink-600/40 hover:scale-[1.02]"
          >
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Premium Incorporation Services</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">Choose the right legal structure for your business with our expert guidance and support.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 transform transition-all duration-300 hover:shadow-purple-500/20 hover:border-white/30 hover:-translate-y-1">
            <div className="h-12 w-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center mb-5">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">LLC Formation</h3>
            <p className="text-white/70 mb-4">Protect your personal assets while maintaining flexibility with a Limited Liability Company structure.</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-white/80 text-sm">
                <CheckCircle className="h-4 w-4 text-pink-400 mr-2" />
                Personal liability protection
              </li>
              <li className="flex items-center text-white/80 text-sm">
                <CheckCircle className="h-4 w-4 text-pink-400 mr-2" />
                Tax flexibility options
              </li>
              <li className="flex items-center text-white/80 text-sm">
                <CheckCircle className="h-4 w-4 text-pink-400 mr-2" />
                Simpler compliance requirements
              </li>
            </ul>
            <p className="text-xl font-bold text-white mb-1">$499</p>
            <p className="text-white/60 text-sm mb-4">One-time formation fee</p>
            <Button className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/30 rounded-full py-2 transition-all duration-300">
              Learn More
            </Button>
          </div>
          
          <div className="bg-gradient-to-br from-[#6500AB]/90 to-[#D007AC]/50 backdrop-blur-md rounded-3xl p-8 border border-pink-500/30 transform transition-all duration-300 hover:shadow-pink-500/20 hover:scale-[1.02] relative">
            <div className="absolute top-0 right-8 bg-gradient-to-r from-[#C6009A] to-[#FF4BD8] text-white text-xs font-bold px-3 py-1 rounded-b-lg">POPULAR</div>
            <div className="h-12 w-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center mb-5">
              <Briefcase className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">C-Corporation</h3>
            <p className="text-white/70 mb-4">Ideal for startups seeking venture capital with the most robust legal structure for growth.</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-white/80 text-sm">
                <CheckCircle className="h-4 w-4 text-pink-400 mr-2" />
                Unlimited growth potential
              </li>
              <li className="flex items-center text-white/80 text-sm">
                <CheckCircle className="h-4 w-4 text-pink-400 mr-2" />
                Attractive to investors and VCs
              </li>
              <li className="flex items-center text-white/80 text-sm">
                <CheckCircle className="h-4 w-4 text-pink-400 mr-2" />
                Stock options for employees
              </li>
              <li className="flex items-center text-white/80 text-sm">
                <CheckCircle className="h-4 w-4 text-pink-400 mr-2" />
                Enhanced credibility
              </li>
            </ul>
            <p className="text-xl font-bold text-white mb-1">$899</p>
            <p className="text-white/60 text-sm mb-4">One-time formation fee</p>
            <Button className="w-full bg-gradient-to-r from-[#C6009A] to-[#FF4BD8] hover:from-[#D800AA] hover:to-[#FF6DE1] text-white rounded-full py-2 shadow-lg shadow-pink-600/20 transition-all duration-300">
              Get Started
            </Button>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 transform transition-all duration-300 hover:shadow-purple-500/20 hover:border-white/30 hover:-translate-y-1">
            <div className="h-12 w-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center mb-5">
              <FileText className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">S-Corporation</h3>
            <p className="text-white/70 mb-4">Benefit from pass-through taxation while maintaining limited liability protection.</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-white/80 text-sm">
                <CheckCircle className="h-4 w-4 text-pink-400 mr-2" />
                Avoid double taxation
              </li>
              <li className="flex items-center text-white/80 text-sm">
                <CheckCircle className="h-4 w-4 text-pink-400 mr-2" />
                Personal asset protection
              </li>
              <li className="flex items-center text-white/80 text-sm">
                <CheckCircle className="h-4 w-4 text-pink-400 mr-2" />
                Potential self-employment tax savings
              </li>
            </ul>
            <p className="text-xl font-bold text-white mb-1">$799</p>
            <p className="text-white/60 text-sm mb-4">One-time formation fee</p>
            <Button className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/30 rounded-full py-2 transition-all duration-300">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Simple Process</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">We've streamlined the incorporation process to get your business up and running quickly.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20 text-center">
            <div className="bg-gradient-to-r from-[#C6009A] to-[#FF4BD8] text-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-6">
              1
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Consultation</h3>
            <p className="text-white/70">We'll discuss your business goals and help you choose the right entity type.</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20 text-center">
            <div className="bg-gradient-to-r from-[#C6009A] to-[#FF4BD8] text-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-6">
              2
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Documentation</h3>
            <p className="text-white/70">Our team prepares and files all necessary legal documents with state authorities.</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20 text-center">
            <div className="bg-gradient-to-r from-[#C6009A] to-[#FF4BD8] text-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-6">
              3
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Compliance Setup</h3>
            <p className="text-white/70">Receive your EIN, operating agreements, and compliance calendar.</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20 text-center">
            <div className="bg-gradient-to-r from-[#C6009A] to-[#FF4BD8] text-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-6">
              4
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Ongoing Support</h3>
            <p className="text-white/70">Access our team of experts for your ongoing legal and compliance questions.</p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our Services</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">We provide comprehensive incorporation services with expert guidance every step of the way.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-6">
            <div className="h-16 w-16 bg-white/10 rounded-full flex items-center justify-center mb-5">
              <Zap className="h-8 w-8 text-pink-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Fast Processing</h3>
            <p className="text-white/70">Get your business up and running quickly with our expedited filing services.</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6">
            <div className="h-16 w-16 bg-white/10 rounded-full flex items-center justify-center mb-5">
              <BookOpen className="h-8 w-8 text-pink-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Expert Guidance</h3>
            <p className="text-white/70">Our team of legal professionals will help you navigate complex incorporation decisions.</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6">
            <div className="h-16 w-16 bg-white/10 rounded-full flex items-center justify-center mb-5">
              <Settings className="h-8 w-8 text-pink-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Customized Solutions</h3>
            <p className="text-white/70">Tailored incorporation packages designed for your specific business needs.</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6">
            <div className="h-16 w-16 bg-white/10 rounded-full flex items-center justify-center mb-5">
              <Calendar className="h-8 w-8 text-pink-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Compliance Reminders</h3>
            <p className="text-white/70">Never miss important deadlines with our automated compliance calendar.</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6">
            <div className="h-16 w-16 bg-white/10 rounded-full flex items-center justify-center mb-5">
              <Award className="h-8 w-8 text-pink-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Satisfaction Guarantee</h3>
            <p className="text-white/70">We stand behind our services with a 100% satisfaction guarantee.</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6">
            <div className="h-16 w-16 bg-white/10 rounded-full flex items-center justify-center mb-5">
              <Shield className="h-8 w-8 text-pink-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Liability Protection</h3>
            <p className="text-white/70">Our incorporation services help shield your personal assets from business risks.</p>
          </div>
        </div>
      </div>

     
      
    </div>
  );
};

export default StartupIncorporationPage;
