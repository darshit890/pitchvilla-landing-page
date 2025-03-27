"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { Download, Apple, Clock } from "lucide-react";

export default function GetAppPage() {
  const handleNotifyMe = (platform) => {
    alert(`We'll notify you when PitchVilla launches on ${platform}!`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-bl from-[#44106C] via-[#6708A6] to-[#D007AC] py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute animate-blob-1 top-[-10%] left-[-10%] w-72 h-72 bg-purple-500/20 rounded-full filter blur-2xl"></div>
        <div className="absolute animate-blob-2 bottom-[-10%] right-[-10%] w-96 h-96 bg-pink-500/20 rounded-full filter blur-2xl"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto relative z-10 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Phone Mockup */}
        <div className="flex items-center justify-center relative w-full">
          <div className="w-64 h-[530px] bg-black rounded-[40px] border-[12px] border-gray-800 shadow-2xl overflow-hidden relative animate-float">
            {/* Mobile Screen */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#6500AB] to-[#290045] z-10"></div>
            
            {/* Mobile Camera */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-gray-900 rounded-b-lg z-20"></div>
            
            {/* Screen Content Simulation */}
            <div className="absolute inset-4 bg-white/10 backdrop-blur-sm rounded-[30px] z-30 flex flex-col items-center justify-center text-center p-6">
              <div className="text-white">
                <h2 className="text-3xl font-bold mb-4">PITCHVILLA</h2>
                <p className="text-sm text-white/80 mb-6">WHERE A STARTUP MEETS THE RIGHT INVESTOR</p>
                <div className="space-y-2">
                  <div className="w-full h-16 bg-white/10 rounded-full animate-pulse"></div>
                  <div className="w-full h-16 bg-white/10 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Coming Soon Section */}
        <div className="bg-gradient-to-br from-[#6500AB]/90 to-[#6500AB]/70 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-purple-500/30 relative overflow-hidden">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
                PITCHVILLA
              </span>
            </h1>
            <p className="text-lg text-purple-100 max-w-2xl mx-auto mb-6">
              The ultimate platform connecting entrepreneurs with investors.
            </p>
            
            {/* One Month Left Section */}
            <div className="flex justify-center items-center space-x-4 mb-6">
              <Clock className="text-pink-300 w-12 h-12 animate-pulse" />
              <div className="text-2xl font-bold text-white">
                Launching in <span className="text-pink-300">1 Month</span>
              </div>
            </div>
          </div>
          
          {/* Platform Notify Buttons */}
          <div className="space-y-6">
            <Button 
              className="w-full flex justify-center items-center py-3 px-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-pink-400"
              onClick={() => handleNotifyMe('Android')}
            >
              <Download className="h-5 w-5 mr-2" />
              Notify Me - Android
            </Button>
            
            <Button 
              className="w-full flex justify-center items-center py-3 px-6 bg-gradient-to-r from-[#C6009A] to-[#FF4BD8] text-white font-medium rounded-xl hover:from-[#D800AA] hover:to-[#FF6DE1] shadow-lg shadow-pink-600/20 hover:shadow-pink-600/40 transition-all duration-300"
              onClick={() => handleNotifyMe('iOS')}
            >
              <Apple className="h-5 w-5 mr-2" />
              Notify Me - iOS
            </Button>
          </div>

          <p className="text-purple-100 text-center mt-6 text-sm">
            Coming Soon on Google Play and App Store
          </p>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        @keyframes blob-1 {
          0% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0, 0) scale(1); }
        }

        @keyframes blob-2 {
          0% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-30px, 50px) scale(0.9); }
          66% { transform: translate(20px, -20px) scale(1.1); }
          100% { transform: translate(0, 0) scale(1); }
        }

        .animate-blob-1 {
          animation: blob-1 20s ease-in-out infinite;
        }

        .animate-blob-2 {
          animation: blob-2 20s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
