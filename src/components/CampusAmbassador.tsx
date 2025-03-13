"use client";

import Image from "next/image";
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
  const [countryCode, setCountryCode] = useState<string>("+1"); // Default to US
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
    <div className="relative min-h-screen">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Desktop - 8.png"
          alt="Background"
          className="w-full h-full object-cover"
          width={1000}
          height={1000}
          priority
        />
      </div>

      {/* Content with exact layout matching the image */}
      <div className="relative z-10 container mx-auto px-4 py-8 md:py-16 flex flex-col md:flex-row items-start">
        {/* Left side - Text and Form */}
        <div className="w-full md:w-3/5 lg:w-1/2 flex flex-col md:pl-12 lg:pl-24 mt-20">
          {/* Heading Text */}
          <div className="text-white mb-10 md:mb-16">
            <h1 className="text-3xl   font-bold mb-2 w-full">
              CAMPUS AMBASSADOR PROGRAM
            </h1>
            <p className="text-lg md:text-xl">
              BE THE FACE OF STARTUP ECOSYSTEM OF YOUR COLLEGE
            </p>
          </div>

          {/* White form card */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-lg shadow-lg p-6 md:p-8 w-full max-w-md"
          >
            <div className="space-y-5">
              <div>
                <label
                  className="text-purple-600 font-medium block mb-2"
                  htmlFor="fullName"
                >
                  Full Name
                </label>
                <Input
                  id="fullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full border border-gray-300 rounded-full h-12"
                />
              </div>

              <div>
                <label
                  className="text-purple-600 font-medium block mb-2"
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
                      <SelectTrigger className="border border-gray-300 rounded-full h-12">
                        <SelectValue placeholder="Code" />
                      </SelectTrigger>
                      <SelectContent>
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
                      className="w-full border border-gray-300 rounded-full h-12"
                      placeholder="Phone number (digits only)"
                      type="tel"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label
                  className="text-purple-600 font-medium block mb-2"
                  htmlFor="cityName"
                >
                  City Name
                </label>
                <Input
                  id="cityName"
                  value={cityName}
                  onChange={(e) => setCityName(e.target.value)}
                  className="w-full border border-gray-300 rounded-full h-12"
                />
              </div>

              <div>
                <label
                  className="text-purple-600 font-medium block mb-2"
                  htmlFor="collegeName"
                >
                  College or University Name
                </label>
                <Input
                  id="collegeName"
                  value={collegeName}
                  onChange={(e) => setCollegeName(e.target.value)}
                  className="w-full border border-gray-300 rounded-full h-12"
                />
              </div>

              <div className="pt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-40 h-12 mx-auto block bg-pink-600 hover:bg-pink-700 text-white font-bold rounded-full"
                >
                  {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CampusAmbassador;
