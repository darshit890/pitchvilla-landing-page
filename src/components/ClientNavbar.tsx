"use client";

import { useState } from "react";
import Link from "next/link";

// Define the NavItem type
interface NavItem {
  name: string;
  href: string;
  subItems?: { name: string; href: string }[];
}

// Define navItems with the STUDENTS dropdown
const navItems: NavItem[] = [
  {
    name: "SERVICES",
    href: "#services",
   
  },
  { name: "GET APP", href: "#get-app" },
  { name: "UPLOAD PITCH DECK", href: "#upload-pitch-deck" },
  // { name: "EVENTS", href: "#events" },
  // {
  //   name: "STUDENTS",
  //   href: "#students",
  //   subItems: [
  //     { name: "Hackathons", href: "#hackathons" },
  //     { name: "Startup Competitions", href: "#startup-competitions" },
  //     { name: "Conferences", href: "#conferences" },
  //     { name: "Webkitli", href: "#webkitli" },
  //   ],
  // },
  { name: "CONTACT US", href: "#contact" },
];

const ClientNavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <div className="flex items-center">
      {/* Desktop Navbar */}
      <div className="hidden md:flex space-x-4">
        {navItems.map((item) => (
          <div
            key={item.name}
            className="relative group"
            onMouseEnter={() => setHoveredItem(item.name)}
          >
            <Link
              href={item.href}
              className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-purple-700 flex items-center"
            >
              {item.name}
              {item.subItems && (
                <svg
                  className="ml-1 h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </Link>
            {item.subItems && hoveredItem === item.name && (
              <div 
                className="absolute z-10 w-64 mt-2 bg-white shadow-lg rounded-md py-1"
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {item.subItems.map((subItem) => (
                  <Link
                    key={subItem.name}
                    href={subItem.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-100"
                  >
                    {subItem.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-purple-700 focus:outline-none"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-purple-900">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.subItems && (
                  <div className="pl-4 space-y-1">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="text-gray-300 block px-3 py-2 rounded-md text-sm font-medium hover:bg-purple-700"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ClientNavbar;
