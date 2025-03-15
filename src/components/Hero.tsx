"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ArrowRight } from "lucide-react";
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
  { value: "+7", label: "Russia" },
  { value: "+27", label: "South Africa" },
  { value: "+55", label: "Brazil" },
  { value: "+52", label: "Mexico" },
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
    <div className="min-h-screen bg-gradient-to-bl from-[#44106C] via-[#6708A6] to-[#D007AC] flex items-center justify-center px-4 py-8 md:py-12">
      <div className="container relative mx-auto">
        {/* Text content with left alignment */}
        <div className="max-w-xl md:max-w-2xl lg:max-w-2xl mx-auto md:mr-auto md:ml-16 lg:ml-50 text-center md:text-left mb-16 md:mb-0">
          <div className="mt-20 md:mt-0">
            {/* Main heading with left alignment */}
            <h1 className="text-3xl sm:text-4xl md:text-2xl lg:text-5xl text-white font-bold leading-tight tracking-tight">
  <span className="inline-block bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
  WHERE A STARTUP MEETS THE RIGHT INVESTOR
  </span>
</h1>
            
            {/* Subheading with left alignment and fixed spacing */}
            <p className="mt-4 text-xl sm:text-1xl md:text-1xl text-white/90 font-medium tracking-wide">
              <span className="inline-block">INDIA&apos;S FIRST AI POWERED</span>
              <span className="inline-block block">FOUNDERS x INVESTOR MATCHMAKING PATFORM</span>
            </p>
          </div>

          {/* Launch button also left aligned */}
          <div className="mt-12 text-center md:text-left">
            <Button
              variant="outline"
              className="bg-gradient-to-r from-[#6500AB] to-[#290045] text-white border-none hover:opacity-90 transition-opacity rounded-full px-10 py-6 text-lg sm:text-xl font-medium shadow-lg group"
            >
              <span>APP LAUNCHING IN APRIL 2025</span>
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Form positioned slightly more to the left */}
        <div className="md:absolute md:right-16 lg:right-24 md:top-1/2 md:transform md:-translate-y-1/2 mt-16 md:mt-0 w-full md:w-96">
          <div className="bg-[#6500AB] rounded-3xl shadow-2xl p-5 sm:p-6 md:p-8 w-full">
            <form className="space-y-5 md:space-y-6" onSubmit={handleSubmit}>
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
                <Label className="text-white text-sm md:text-base block mb-1">
                  Identify Yourself
                </Label>
                <RadioGroup
                  value={userType}
                  onValueChange={setUserType}
                  className="space-y-3"
                >
                  <div className="flex items-center bg-gray-200 rounded-full p-2 pl-3 py-2 relative">
                    <RadioGroupItem
                      value="investor"
                      id="investor"
                      className="text-fuchsia-600 absolute left-3"
                    />
                    <Label
                      htmlFor="investor"
                      className="text-purple-950 text-sm text-center w-full cursor-pointer"
                    >
                      INVESTOR
                    </Label>
                  </div>

                  <div className="flex items-center bg-gray-200 rounded-full p-2 pl-3 py-2 relative">
                    <RadioGroupItem
                      value="startup"
                      id="startup"
                      className="text-fuchsia-600 absolute left-3"
                    />
                    <Label
                      htmlFor="startup"
                      className="text-purple-950 text-sm text-center w-full cursor-pointer"
                    >
                      STARTUPS
                    </Label>
                  </div>

                  <div className="flex items-center bg-gray-200 rounded-full p-2 pl-3 py-2 relative">
                    <RadioGroupItem
                      value="student"
                      id="student"
                      className="text-fuchsia-600 absolute left-3"
                    />
                    <Label
                      htmlFor="student"
                      className="text-purple-950 text-sm text-center w-full cursor-pointer"
                    >
                      STUDENT
                    </Label>
                  </div>
                </RadioGroup>
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
