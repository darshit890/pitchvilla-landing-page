"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, Rocket, DollarSign, GraduationCap } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axios from "axios";
import { toast } from "sonner";

// Common country codes
const countryCodes = [
  { value: "+91", label: "India (+91)" },
  { value: "+1", label: "USA (+1)" },
  { value: "+44", label: "UK (+44)" },
  { value: "+61", label: "Australia (+61)" },
  { value: "+86", label: "China (+86)" },
  { value: "+971", label: "UAE (+971)" },
  { value: "+65", label: "Singapore (+65)" },
  { value: "+49", label: "Germany (+49)" },
  { value: "+33", label: "France (+33)" },
  { value: "+81", label: "Japan (+81)" },
  { value: "+7", label: "Russia (+7)" },
  { value: "+27", label: "South Africa (+27)" },
  { value: "+55", label: "Brazil (+55)" },
  { value: "+52", label: "Mexico (+52)" },
];

export default function Hero() {
  const [userType, setUserType] = useState<string>("investor");
  const [fullName, setFullName] = useState<string>("");
  const [countryCode, setCountryCode] = useState<string>("+91");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow numbers
    const value = e.target.value.replace(/\D/g, "");
    setPhoneNumber(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!fullName.trim()) {
      toast("Please enter your full name");
      return;
    }

    if (!phoneNumber.trim()) {
      toast("Please enter your phone number");
      return;
    }

    try {
      setIsSubmitting(true);

      // Send data to the API with full phone number including country code
      const response = await axios.post("/api/users", {
        fullName,
        phoneNumber: `${countryCode}${phoneNumber}`,
        userType,
      });

      if (response.data.success) {
        // Reset form
        setFullName("");
        setPhoneNumber("");
        setUserType("investor");

        // Show success message
        toast("Your information has been submitted successfully!");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast("Failed to submit your information. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-bl from-[#44106C] via-[#6708A6] to-[#D007AC] flex items-center justify-center px-4 py-8 md:py-12 overflow-hidden relative">
      {/* Enhanced decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-20 w-40 h-40 bg-pink-500/10 rounded-full blur-xl"></div>
      <div className="absolute top-1/4 right-1/4 w-24 h-24 bg-purple-500/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-1/3 left-1/4 w-28 h-28 bg-pink-500/5 rounded-full blur-xl"></div>
      
      <div className="container mx-auto max-w-6xl z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
          {/* Left Column - Updated Heading to Two Lines */}
          <div className="space-y-8 text-center md:text-left">
            <div className="mt-10 md:mt-0">
              <div className="inline-block px-4 py-1 bg-white/10 backdrop-blur-sm rounded-full text-pink-200 text-xs font-medium mb-4">
                Coming Soon
              </div>
              <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-5xl text-white font-bold leading-tight tracking-tight">
                WHERE <span className="text-pink-300">A STARTUP MEETS</span>
                <br className="block" />
                THE RIGHT <span className="text-pink-300">INVESTOR</span>
              </h1>
              <p className="mt-6 text-base sm:text-lg md:text-xl text-white/80 leading-relaxed font-light">
                INDIA&apos;S FIRST AI-POWERED
                <br className="hidden sm:block" />
                FOUNDERS X INVESTOR MATCHMAKING PLATFORM
              </p>
            </div>

            <div>
              <Button
                variant="outline"
                className="mt-4 bg-gradient-to-r from-[#6500AB]/80 to-[#290045]/80 backdrop-blur-sm text-white border border-white/20 hover:border-white/40 hover:from-[#6500AB] hover:to-[#290045] hover:text-white rounded-full px-8 py-6 text-base sm:text-lg group transition-all duration-300"
              >
                <span className="font-medium">APP LAUNCHING - APRIL 2025</span>
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </div>
          </div>

          {/* Right Column - Form Card */}
          <div className="bg-gradient-to-br from-[#6500AB]/90 to-[#6500AB]/70 backdrop-blur-md rounded-3xl shadow-2xl p-6 sm:p-8 border border-purple-500/30 transform transition-all duration-300 hover:shadow-purple-500/20">
            <h2 className="text-2xl font-semibold text-white mb-1 text-center">Join the Waitlist</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <Label
                  htmlFor="fullName"
                  className="text-white text-sm md:text-base font-medium block mb-1"
                >
                  Full Name
                </Label>
                <Input
                  id="fullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Enter your name"
                  className="bg-white/10 backdrop-blur-sm border border-white/20 h-12 rounded-full text-white placeholder:text-white/50 w-full focus:border-pink-400 focus:ring-pink-400/50 transition-all duration-300"
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="phoneNumber"
                  className="text-white text-sm md:text-base font-medium block mb-1"
                >
                  Phone Number
                </Label>
                <div className="flex gap-3">
                  <div className="w-1/3">
                    <Select value={countryCode} onValueChange={setCountryCode}>
                      <SelectTrigger className="bg-white/10 backdrop-blur-sm border border-white/20 h-12 rounded-full text-white w-full focus:border-pink-400">
                        <SelectValue placeholder="Code" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#44106C] border border-purple-500/30 text-white">
                        {countryCodes.map((code) => (
                          <SelectItem key={code.value} value={code.value}>
                            {code.label}
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
                      placeholder="Enter phone number"
                      className="bg-white/10 backdrop-blur-sm border border-white/20 h-12 rounded-full text-white placeholder:text-white/50 w-full focus:border-pink-400 focus:ring-pink-400/50 transition-all duration-300"
                      type="tel"
                      inputMode="numeric"
                    />
                  </div>
                </div>
              </div>

              {/* User Type Selection - Single Line */}
              <div className="space-y-2">
                <Label className="text-white text-sm md:text-base font-medium block mb-1">
                  I am a...
                </Label>
                <div className="flex gap-3 w-full">
                  <button
                    type="button"
                    onClick={() => setUserType("investor")}
                    className={`flex items-center justify-center flex-1 py-3 px-4 rounded-full transition-all duration-300 
                      ${userType === "investor" 
                        ? "bg-gradient-to-r from-[#C6009A] to-[#FF4BD8] text-white border-2 border-transparent shadow-lg shadow-pink-600/20" 
                        : "bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/15"}`}
                  >
                    <DollarSign className="h-5 w-5 mr-2" />
                    <span className="font-medium text-sm">INVESTOR</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setUserType("startup")}
                    className={`flex items-center justify-center flex-1 py-3 px-4 rounded-full transition-all duration-300 
                      ${userType === "startup" 
                        ? "bg-gradient-to-r from-[#C6009A] to-[#FF4BD8] text-white border-2 border-transparent shadow-lg shadow-pink-600/20" 
                        : "bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/15"}`}
                  >
                    <Rocket className="h-5 w-5 mr-2" />
                    <span className="font-medium text-sm">STARTUP</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setUserType("student")}
                    className={`flex items-center justify-center flex-1 py-3 px-4 rounded-full transition-all duration-300 
                      ${userType === "student" 
                        ? "bg-gradient-to-r from-[#C6009A] to-[#FF4BD8] text-white border-2 border-transparent shadow-lg shadow-pink-600/20" 
                        : "bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/15"}`}
                  >
                    <GraduationCap className="h-5 w-5 mr-2" />
                    <span className="font-medium text-sm">STUDENT</span>
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full font-medium bg-gradient-to-r from-[#C6009A] to-[#FF4BD8] hover:from-[#D800AA] hover:to-[#FF6DE1] text-white rounded-full py-3 md:py-4 text-base mt-6 shadow-lg shadow-pink-600/20 transform transition-all duration-300 hover:shadow-pink-600/40 hover:scale-[1.02]"
                disabled={isSubmitting}
                suppressHydrationWarning
              >
                {isSubmitting ? "SUBMITTING..." : "JOIN WAITLIST"}
              </Button>
            </form>

            <p className="text-white/60 text-xs text-center mt-6">
              By joining, you agree to our Terms of Service & Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
