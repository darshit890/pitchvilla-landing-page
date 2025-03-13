"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ArrowRight } from "lucide-react";
import axios from "axios";
import { toast } from "sonner";

export default function Hero() {
  const [userType, setUserType] = useState<string>("investor");
  const [fullName, setFullName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

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

      // Send data to the API
      const response = await axios.post("/api/users", {
        fullName,
        phoneNumber,
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
    <div className="min-h-screen bg-gradient-to-bl from-[#44106C] via-[#6708A6] to-[#D007AC] flex items-center justify-center p-4 ">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-36 items-center">
          {/* Left Column - Heading and Subheading */}
          <div className="space-y-6 md:space-y-8 text-center md:text-left">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl text-white leading-tight ">
                WHERE A STARTUP MEETS THE RIGHT INVESTOR
              </h1>
              <p className="mt-4 md:mt-6 text-lg sm:text-xl text-white/90 leading-normal">
                INDIA&apos;S FIRST AI POWERED
                <br className="hidden sm:block" />
                FOUNDERS X INVESTOR MATCHMAKING PLATFORM
              </p>
            </div>

            <div>
              <Button
                variant="outline"
                className="mt-4 md:mt-8 bg-gradient-to-r from-[#6500AB] to-[#290045] text-white border-none hover:text-white rounded-full px-4 sm:px-6 md:px-8 py-4 md:py-6 text-base md:text-lg group"
              >
                <span className="font-normal">APP LAUNCHING IN APRIL 2025</span>
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Right Column - Form Card */}
          <div className="bg-[#6500AB] rounded-2xl md:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10">
            <form className="space-y-6 md:space-y-8" onSubmit={handleSubmit}>
              <div className="space-y-2 md:space-y-4">
                <Label
                  htmlFor="fullName"
                  className="text-white text-base md:text-lg"
                >
                  Full Name
                </Label>
                <Input
                  id="fullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder=""
                  className="bg-gray-200 h-12 md:h-14 rounded-full text-purple-950 placeholder:text-purple-900/50"
                />
              </div>

              <div className="space-y-2 md:space-y-4">
                <Label
                  htmlFor="phoneNumber"
                  className="text-white text-base md:text-lg"
                >
                  Phone Number
                </Label>
                <Input
                  id="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder=""
                  className="bg-gray-200 h-12 md:h-14 rounded-full text-purple-950 placeholder:text-purple-900/50"
                />
              </div>

              <div className="space-y-2 md:space-y-4">
                <Label className="text-white text-base md:text-lg">
                  Identify Yourself
                </Label>
                <RadioGroup
                  value={userType}
                  onValueChange={setUserType}
                  className="space-y-2 md:space-y-3"
                >
                  <div className="flex items-center bg-gray-200 rounded-full p-2 pl-4">
                    <RadioGroupItem
                      value="investor"
                      id="investor"
                      className="text-fuchsia-600"
                    />
                    <Label
                      htmlFor="investor"
                      className="flex-1 text-purple-950 font-medium pl-6 sm:pl-12 md:pl-20 lg:pl-32"
                    >
                      INVESTOR
                    </Label>
                  </div>

                  <div className="flex items-center bg-gray-200 rounded-full p-2 pl-4">
                    <RadioGroupItem
                      value="startup"
                      id="startup"
                      className="text-fuchsia-600"
                    />
                    <Label
                      htmlFor="startup"
                      className="flex-1 text-purple-950 font-medium pl-6 sm:pl-12 md:pl-20 lg:pl-32"
                    >
                      STARTUPS
                    </Label>
                  </div>

                  <div className="flex items-center bg-gray-200 rounded-full p-2 pl-4">
                    <RadioGroupItem
                      value="student"
                      id="student"
                      className="text-fuchsia-600"
                    />
                    <Label
                      htmlFor="student"
                      className="flex-1 text-purple-950 font-medium pl-6 sm:pl-12 md:pl-20 lg:pl-32"
                    >
                      STUDENT
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <Button
                type="submit"
                className="w-full bg-[#C6009A] hover:bg-[#C6009A] text-white rounded-full py-4 md:py-6 text-base md:text-lg font-medium"
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
