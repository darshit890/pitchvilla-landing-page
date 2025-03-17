"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
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
  { value: "+7", label: "Russia" },
  { value: "+27", label: "South Africa" },
  { value: "+55", label: "Brazil" },
  { value: "+52", label: "Mexico" },
];

// User type options
const userTypes = [
  { value: "investor", label: "INVESTOR" },
  { value: "startup", label: "STARTUPS" },
  { value: "student", label: "STUDENT" },
];

// Services options
const startupServices = [
  { value: "pitch-deck", label: "Pitch Deck" },
  { value: "startup-toolkit", label: "Startup Toolkit" },
  { value: "valuation-report", label: "Valuation Report" },
  { value: "business-review", label: "Business Review Report" },
  { value: "company-compliance", label: "Company Compliance" },
  { value: "founder-counselling", label: "Founder Counselling" },
  { value: "virtual-cxo", label: "Virtual CXO" },
];

const investorServices = [
  { value: "startup-hunter", label: "Startup Hunter" },
  { value: "due-diligence", label: "Startup Due Diligence" },
  { value: "co-investing", label: "Co-investing Opportunity" },
  { value: "elite-club", label: "Investor Elite Club" },
  { value: "ipo-deals", label: "IPO Deals & Assist" },
  { value: "mergers-acquisitions", label: "Mergers and Acquisitions" },
];

export default function Hero() {
  const [userType, setUserType] = useState<string>("investor");
  const [fullName, setFullName] = useState<string>("");
  const [countryCode, setCountryCode] = useState<string>("+91");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [service, setService] = useState<string>("");
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
        service,
      });

      if (response.data.success) {
        // Reset form
        setFullName("");
        setPhoneNumber("");
        setUserType("investor");
        setService("");

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
    <div className="min-h-screen bg-gradient-to-bl from-[#44106C] via-[#6708A6] to-[#D007AC] flex items-center justify-center px-4 py-8 md:py-12">
      <div className="container relative mx-auto">
        {/* Text content with left alignment */}
        <div className="max-w-xl md:max-w-2xl lg:max-w-2xl mx-auto md:mr-auto md:ml-16 lg:ml-50 text-center md:text-left mb-16 md:mb-0">
          <div className="mt-16 md:mt-0">
            {/* Main heading with left alignment */}
            <h1 className="text-3xl sm:text-4xl md:text-2xl lg:text-5xl text-white font-bold leading-tight tracking-tight">
              <span className="inline-block bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
                WHERE A STARTUP MEETS THE RIGHT INVESTOR
              </span>
            </h1>
            
            {/* Subheading with left alignment and fixed spacing */}
            <p className="mt-4 text-xl sm:text-1xl md:text-1xl text-white/90 font-medium tracking-wide">
              <span className="inline-block">INDIA&apos;S FIRST AI POWERED</span>
              <span className="inline-block block">FOUNDERS x INVESTOR MATCHMAKING PLATFORM</span>
            </p>
          </div>

          {/* Launch button also left aligned */}
          <div className="mt-12 text-center md:text-left">
            <Button
              variant="outline"
              className="bg-gradient-to-r from-[#6500AB] to-[#290045] text-white border-none hover:opacity-90 transition-opacity rounded-full px-10 py-6 text-lg sm:text-xl font-medium shadow-lg group"
            >
              <span>APP LAUNCHING - APRIL 2025</span>
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Form positioned lower */}
        <div className="md:absolute md:right-16 lg:right-24 md:top-[60%] md:transform md:-translate-y-1/2 mt-16 md:mt-0 w-full md:w-96">
          <div className="bg-[#6500AB] rounded-3xl shadow-2xl p-5 sm:p-6 md:p-8 w-full">
            <form className="space-y-4 md:space-y-5" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <Label
                  htmlFor="fullName"
                  className="text-white text-sm md:text-base block mb-1"
                >
                  Full Name
                </Label>
                <Input
                  id="fullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder=""
                  className="bg-gray-200 h-10 md:h-12 rounded-full text-purple-950 placeholder:text-purple-900/50 w-full"
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="phoneNumber"
                  className="text-white text-sm md:text-base block mb-1"
                >
                  Phone Number
                </Label>
                <div className="flex gap-2 flex-wrap sm:flex-nowrap">
                  <div className="w-full sm:w-1/3">
                    <Select value={countryCode} onValueChange={setCountryCode}>
                      <SelectTrigger className="bg-gray-200 h-10 md:h-12 rounded-full text-purple-950 w-full">
                        <SelectValue placeholder="Code" />
                      </SelectTrigger>
                      <SelectContent>
                        {countryCodes.map((code) => (
                          <SelectItem key={code.value} value={code.value}>
                            {code.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="w-full sm:w-2/3">
                    <Input
                      id="phoneNumber"
                      value={phoneNumber}
                      onChange={handlePhoneNumberChange}
                      placeholder="Enter phone number"
                      className="bg-gray-200 h-10 md:h-12 rounded-full text-purple-950 placeholder:text-purple-900/50 w-full"
                      type="tel"
                      inputMode="numeric"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="userType"
                  className="text-white text-sm md:text-base block mb-1"
                >
                  Identify Yourself
                </Label>
                <Select value={userType} onValueChange={setUserType}>
                  <SelectTrigger
                    id="userType"
                    className="bg-gray-200 h-10 md:h-12 rounded-full text-purple-950 w-full"
                  >
                    <SelectValue placeholder="Select user type" />
                  </SelectTrigger>
                  <SelectContent>
                    {userTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="service"
                  className="text-white text-sm md:text-base block mb-1"
                >
                  Services
                </Label>
                <Select value={service} onValueChange={setService}>
                  <SelectTrigger
                    id="service"
                    className="bg-gray-200 h-10 md:h-12 rounded-full text-purple-950 w-full"
                  >
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel className="font-medium">For Startups</SelectLabel>
                      {startupServices.map((service) => (
                        <SelectItem key={service.value} value={service.value}>
                          {service.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                    <SelectGroup>
                      <SelectLabel className="font-medium">For Investors</SelectLabel>
                      {investorServices.map((service) => (
                        <SelectItem key={service.value} value={service.value}>
                          {service.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <Button
                type="submit"
                className="w-full font-normal bg-[#C6009A] hover:bg-[#C6009A]/90 text-white rounded-full py-3 md:py-4 text-sm md:text-base mt-2"
                disabled={isSubmitting}
                suppressHydrationWarning
              >
                {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
