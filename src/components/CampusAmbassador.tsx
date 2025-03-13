"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { toast } from "sonner";

const CampusAmbassador = () => {
  const [fullName, setFullName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [cityName, setCityName] = useState<string>("");
  const [collegeName, setCollegeName] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

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
      console.log("Sending data to API:", {
        fullName,
        phoneNumber,
        cityName,
        collegeName,
      });

      // Send data to the API
      const response = await axios.post("/api/campus-ambassadors", {
        fullName,
        phoneNumber,
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
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
                <Input
                  id="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full border border-gray-300 rounded-full h-12"
                />
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
