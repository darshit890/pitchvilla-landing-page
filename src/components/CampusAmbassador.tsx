"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue 
} from "@/components/ui/select";
import axios from "axios";
import { toast } from "sonner";

const CampusAmbassador = () => {
  const [fullName, setFullName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [countryCode, setCountryCode] = useState<string>("+91");
  const [cityName, setCityName] = useState<string>("");
  const [collegeName, setCollegeName] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Common country codes
  const countryCodes = [
    { code: "+91", country: "India" },
    { code: "+1", country: "US/Canada" },
    { code: "+44", country: "UK" },
    { code: "+61", country: "Australia" },
    { code: "+49", country: "Germany" },
    { code: "+33", country: "France" },
    { code: "+86", country: "China" },
    { code: "+81", country: "Japan" },
    { code: "+7", country: "Russia" },
    { code: "+27", country: "South Africa" },
    { code: "+55", country: "Brazil" },
    { code: "+52", country: "Mexico" },
  ];

  // Validate phone number input to only allow digits
  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Only allow digits
    if (value === "" || /^\d+$/.test(value)) {
      setPhoneNumber(value);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted"); // Debug log

    // Basic validation
    if (!fullName.trim()) {
      toast("Please enter your full name");
      return;
    }

    if (!phoneNumber.trim()) {
      toast("Please enter your phone number");
      return;
    }

    if (!cityName.trim()) {
      toast("Please enter your city name");
      return;
    }

    if (!collegeName.trim()) {
      toast("Please enter your college or university name");
      return;
    }

    try {
      setIsSubmitting(true);
      const completePhoneNumber = `${countryCode}${phoneNumber}`;
      
      console.log("Sending data to API:", {
        fullName,
        phoneNumber: completePhoneNumber,
        cityName,
        collegeName,
      });

      // Send data to the API
      const response = await axios.post("/api/campus-ambassadors", {
        fullName,
        phoneNumber: completePhoneNumber,
        cityName,
        collegeName,
      });

      console.log("API response:", response);

      if (response.data.success) {
        // Reset form
        setFullName("");
        setPhoneNumber("");
        setCityName("");
        setCollegeName("");

        // Show success message
        toast("Your application has been submitted successfully!");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast("Failed to submit your application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-tl from-[#D007AC] via-[#44106C] to-[#6708A6] animate-gradient-x">
        {/* Abstract Shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-pink-500 rounded-full filter blur-3xl animate-blob"></div>
          <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-yellow-500 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      {/* Floating elements for visual interest */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="stars-container">
          {Array(20).fill(0).map((_, i) => (
            <div 
              key={i} 
              className="absolute rounded-full bg-white opacity-70"
              style={{
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `twinkle ${Math.random() * 5 + 3}s infinite alternate`
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Content container */}
      <div className="relative z-10 container mx-auto px-4 py-12 md:py-20 flex flex-col items-center justify-center min-h-screen">
        <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Content - Heading and Illustration */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start space-y-8">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-white tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-300">
                  CAMPUS AMBASSADOR
                </span>
                <span className="block mt-2 text-white">PROGRAM</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-purple-100 font-medium mt-4 max-w-lg leading-relaxed">
                BE THE FACE OF THE STARTUP ECOSYSTEM AT YOUR COLLEGE
              </p>
              
              <div className="mt-8 space-y-6 text-purple-100">
                <div className="flex items-center">
                  <div className="bg-pink-500 p-2 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p>Build leadership skills & expand your network</p>
                </div>
                <div className="flex items-center">
                  <div className="bg-pink-500 p-2 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p>Get exclusive certificates & recognition</p>
                </div>
                <div className="flex items-center">
                  <div className="bg-pink-500 p-2 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p>Access to exclusive events & workshops</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Form */}
          <div className="w-full lg:w-1/2 max-w-md">
            <form
              onSubmit={handleSubmit}
              className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/20"
            >
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Join The Program</h2>
              
              <div className="space-y-5">
                <div>
                  <label
                    className="text-purple-100 font-medium block mb-2"
                    htmlFor="fullName"
                  >
                    Full Name
                  </label>
                  <Input
                    id="fullName"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-white/100 border-0 rounded-xl h-12 text-white placeholder-purple-200 focus:ring-2 focus:ring-pink-500 transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    className="text-purple-100 font-medium block mb-2"
                    htmlFor="phoneNumber"
                  >
                    Phone Number
                  </label>
                  <div className="flex gap-2">
                    <div className="w-1/3">
                      <Select
                        value={countryCode}
                        onValueChange={setCountryCode}
                      >
                        <SelectTrigger className="bg-white/100 border-0 rounded-xl h-12 text-black">
                          <SelectValue placeholder="Code" />
                        </SelectTrigger>
                        <SelectContent className="bg-purple-900 text-black border-purple-700">
                          {countryCodes.map((country) => (
                            <SelectItem key={country.code} value={country.code}>
                              {country.code} ({country.country})
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="w-2/3">
                      <Input
                        id="phoneNumber"
                        value={phoneNumber}
                        onChange={handlePhoneNumberChange}
                        className="bg-white/100 border-0 rounded-xl h-12 text-black placeholder-black-200 focus:ring-2 focus:ring-pink-500 transition-all"
                        placeholder="phone number"
                        type="tel"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    className="text-purple-100 font-medium block mb-2"
                    htmlFor="cityName"
                  >
                    City Name
                  </label>
                  <Input
                    id="cityName"
                    value={cityName}
                    onChange={(e) => setCityName(e.target.value)}
                    className="w-full bg-white/100 border-0 rounded-xl h-12 text-white placeholder-purple-200 focus:ring-2 focus:ring-pink-500 transition-all"
                    placeholder="Your city"
                  />
                </div>

                <div>
                  <label
                    className="text-purple-100 font-medium block mb-2"
                    htmlFor="collegeName"
                  >
                    College or University Name
                  </label>
                  <Input
                    id="collegeName"
                    value={collegeName}
                    onChange={(e) => setCollegeName(e.target.value)}
                    className="w-full bg-white/100 border-0 rounded-xl h-12 text-white placeholder-purple-200 focus:ring-2 focus:ring-pink-500 transition-all"
                    placeholder="Your institution"
                  />
                </div>

                <div className="pt-6">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-14 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-bold rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>SUBMITTING...</span>
                      </div>
                    ) : "JOIN NOW"}
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Add style for animations */}
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.8; }
        }
        
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -30px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(20px, 30px) scale(1.2); }
        }
        
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-blob {
          animation: blob 10s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 10s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default CampusAmbassador;
