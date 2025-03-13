import Image from "next/image";
import React from "react";

const FeatureSection = () => {
  return (
    <div className="relative xl:min-h-[150vh] md:min-h-screen min-h-[50vh]">
      {/* Background image with reduced height on mobile/medium */}
      <div className="absolute inset-0 z-0">
        <Image
          src={"/Desktop - 6.png"}
          alt="Background"
          className="w-full h-full object-cover"
          fill
          sizes="100vw"
          priority
        />
      </div>

      {/* Content container - shifted slightly right on mobile/medium */}
      <div className="relative z-10 flex flex-col justify-center h-full w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12  py-16 sm:py-20 md:py-80">
        <div className="text-center md:text-left pr-0 sm:pr-4 md:pr-0 md:ml-0 lg:ml-8 max-w-full sm:mr-0 md:mr-6 lg:mr-12 ">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8">
            PITCH · CONNECT · CLOSE
          </h1>

          <div className="text-white space-y-2 sm:space-y-3 max-w-md sm:max-w-lg md:max-w-xl mx-auto md:mx-0">
            <p className="font-medium text-xs sm:text-sm md:text-base">
              STEP 1 - ANSWER A FEW QUESTIONS & GET MATCHED WITH INVESTORS
              INSTANTLY
            </p>
            <p className="font-medium text-xs sm:text-sm md:text-base">
              STEP 2 - UPLOAD YOUR PITCH DECK OR VIDEO DECK TO STAND OUT
            </p>
            <p className="font-medium text-xs sm:text-sm md:text-base">
              STEP 3 - CHAT WITH INVESTORS IN REAL TIME
            </p>
            <p className="font-medium text-xs sm:text-sm md:text-base">
              STEP 4 - GET ASSISTANCE IN CLOSING YOUR DEAL
            </p>
            <p className="font-medium text-xs sm:text-sm md:text-base">
              STEP 5 - START YOUR STARTUP JOURNEY NOW!
            </p>
          </div>

          <div className="flex flex-col w-80 gap-3 sm:gap-4 mt-8 sm:mt-10 justify-center flex-1 md:justify-start mx-auto sm:mx-0">
            <button className="bg-gradient-to-r from-[#6500AB] to-[#290045] text-white border-none font-bold text-sm sm:text-base py-2 sm:py-3 px-6 sm:px-8 rounded-full">
              DOWNLOAD APP - ANDROID
            </button>
            <button className="bg-[#E838FF] hover:bg-[#E838FF]/90 text-white font-bold text-sm sm:text-base py-2 sm:py-3 px-6 sm:px-8 rounded-full">
              DOWNLOAD APP - IOS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
