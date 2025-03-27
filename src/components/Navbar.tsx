"use client";

import ClientNavbar from "./ClientNavbar";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 ease-in-out bg-[#6500AB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                <Image src="/image-Photoroom 1 (2).png" alt="logo" width={150} height={150} />
              </Link>
            </div>
          </div>

          <ClientNavbar />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
