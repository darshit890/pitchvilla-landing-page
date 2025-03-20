"use client";

import ClientNavbar from "./ClientNavbar";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 ease-in-out bg-[#6500AB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Image src="/image-Photoroom 1 (2).png" alt="logo" width={150} height={150} />
            </div>
          </div>

          <div className="relative">
            

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white shadow-lg rounded-lg">
                <ul className="py-2 text-gray-700">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Hackathons</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Startup Competitions</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Conferences</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Webkitli</li>
                </ul>
              </div>
            )}
          </div>

          <ClientNavbar />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
