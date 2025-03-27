"use client";

import { useState } from "react";
import Link from "next/link";

// Define the NavItem type with support for nested subitems
interface NavItem {
  name: string;
  href: string;
  subItems?: {
    name: string;
    href: string;
    nestedSubItems?: { name: string; href: string }[];
  }[];
}

// Define navItems with the new nested menu structure
const navItems: NavItem[] = [
  { name: "GET APP", href: "#get-app" },
  { 
    name: "STARTUP HUB", 
    href: "#startup-hub",
    subItems: [
      { 
        name: "PITCH DECK", 
        href: "#startup-PITCH DECK",
        nestedSubItems: [
          { name: "Pitch Deck Creation", href: "#startup-pitch-deck-creation" },
          { name: "Pitch Deck Validation", href: "#startup-pitch-deck-validation" },
          { name: "Video Pitch Deck", href: "#startup-video-pitch-deck" },
          { name: "Pitch Deck Preparation", href: "#startup-pitch-deck-preparation" }
        ]
      },
      { 
        name: "Valuation Report", 
        href: "#startup-valuation-report",
        nestedSubItems: [
          { name: "VC Method", href: "#startup-vc-method" },
          { name: "DCF Method", href: "#startup-dcf-method" },
          { name: "Berkus Method", href: "#startup-berkus-method" },
          { name: "Scorecard Method", href: "#startup-scorecard-method" },
          { name: "Relative Method", href: "#startup-relative-method" }
        ]
      },
      { name: "TERM SHEET DRAFTING", href: "#startup-term-sheet-drafting" },
      { 
        name: "STARTUP COMPLIANCES", 
        href: "#startup-compliances",
        nestedSubItems: [
          { name: "Startup India Certificate & MSME Udyam", href: "#startup-india-certificate" },
          { name: "Startup Incorporation (LLP & Pvt Ltd)", href: "#startup-incorporation" },
          { name: "Govt Grants & SISFS", href: "#startup-govt-grants" },
          { name: "Trademark and IPR Services", href: "#startup-ipr-services" },
          { name: "ROC Filing", href: "#startup-roc-filing" },
          { name: "GST Filing", href: "#startup-gst-filing" }
        ]
      },
      { 
        name: "STRATEGIC CONSULTATION", 
        href: "#startup-strategic-consultation",
        nestedSubItems: [
          { name: "Ideation & Advisory", href: "#startup-ideation-advisory" },
          { name: "Incubation & Acceleration", href: "#startup-incubation" },
          { name: "Business Strategy & Tech Support", href: "#startup-business-strategy" }
        ]
      }
    ]
  },
  { 
    name: "INVESTOR'S HUB", 
    href: "#investors-hub",
    subItems: [
      { 
        name: "DEAL SOURCING & MATCHMAKING", 
        href: "#investor-deal-sourcing",
        nestedSubItems: [
          { name: "Curated Startup Deal Flow", href: "#investor-deal-flow" },
          { name: "Verified Startup Due Diligence Reports", href: "#investor-due-diligence" },
          { name: "AI-Powered Investor-Startup Matchmaking", href: "#investor-matchmaking" }
        ]
      },
      { 
        name: "DUE DILIGENCE & VALUATION SUPPORT", 
        href: "#investor-due-diligence-support",
        nestedSubItems: [
          { name: "Financial & Legal Due Diligence", href: "#investor-financial-due-diligence" },
          { name: "Startup Valuation Reports", href: "#investor-valuation-reports" },
          { name: "Market & Competitive Analysis Reports", href: "#investor-market-analysis" }
        ]
      },
      { 
        name: "INVESTMENT DOCUMENTATION", 
        href: "#investor-investment-documentation",
        nestedSubItems: [
          { name: "Term Sheet Drafting & Negotiation", href: "#investor-term-sheet" },
          { name: "Shareholder Agreements & SAFE Notes", href: "#investor-shareholder-agreements" },
          { name: "Investment Compliance & Structuring", href: "#investor-compliance" }
        ]
      },
      { 
        name: "PORTFOLIO MANAGEMENT & EXIT STRATEGY", 
        href: "#investor-portfolio-management",
        nestedSubItems: [
          { name: "Startup Performance Tracking", href: "#investor-performance-tracking" },
          { name: "Investor Dashboard & Analytics", href: "#investor-dashboard" },
          { name: "Mergers, Acquisitions & Exit Planning", href: "#investor-exit-planning" }
        ]
      },
      { 
        name: "INVESTOR NETWORK & EDUCATION", 
        href: "#investor-network",
        nestedSubItems: [
          { name: "Exclusive Investor Roundtables & Webinars", href: "#investor-roundtables" },
          { name: "Access to Investor Community & Syndicates", href: "#investor-community" },
          { name: "Workshops on Angel Investing & VC Strategies", href: "#investor-workshops" }
        ]
      }
    ]
  },
  { 
    name: "STUDENTS HUB", 
    href: "#students-hub",
    subItems: [
      { name: "Hackathons", href: "#hackathons" },
      { name: "Startup Competitions", href: "#startup-competitions" },
      { name: "Conferences", href: "#conferences" },
      { name: "Webkitli", href: "#webkitli" }
    ]
  },
  { name: "CONTACT US", href: "/contact-us" }
];

const WebsiteNavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  return (
    <div className="flex items-center">
      {/* Desktop Navbar */}
      <div className="hidden md:flex space-x-4">
        {navItems.map((item) => (
          <div
            key={item.name}
            className="relative group"
            onMouseEnter={() => {
              setHoveredItem(item.name);
              setActiveSubmenu(null);
            }}
            onMouseLeave={() => {
              setHoveredItem(null);
              setActiveSubmenu(null);
            }}
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
              >
                {item.subItems.map((subItem) => (
                  <div 
                    key={subItem.name} 
                    className="relative"
                    onMouseEnter={() => setActiveSubmenu(subItem.name)}
                  >
                    <Link
                      href={subItem.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-100 flex justify-between items-center"
                    >
                      {subItem.name}
                      {subItem.nestedSubItems && (
                        <svg
                          className="h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L10.586 10 7.293 6.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </Link>
                    {subItem.nestedSubItems && activeSubmenu === subItem.name && (
                      <div className="absolute left-full top-0 w-64 bg-white shadow-lg rounded-md py-1">
                        {subItem.nestedSubItems.map((nestedSubItem) => (
                          <Link
                            key={nestedSubItem.name}
                            href={nestedSubItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-100"
                          >
                            {nestedSubItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Sign In Button - Added to match the desktop layout */}
        <Link
          href="/signin"
          className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-purple-700"
        >
          SIGN IN
        </Link>
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
                      <div key={subItem.name}>
                        <Link
                          href={subItem.href}
                          className="text-gray-300 block px-3 py-2 rounded-md text-sm font-medium hover:bg-purple-700"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                        {subItem.nestedSubItems && (
                          <div className="pl-4 space-y-1">
                            {subItem.nestedSubItems.map((nestedSubItem) => (
                              <Link
                                key={nestedSubItem.name}
                                href={nestedSubItem.href}
                                className="text-gray-400 block px-3 py-2 rounded-md text-xs font-medium hover:bg-purple-700"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {nestedSubItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            {/* Sign In for Mobile */}
            <Link
              href="/signin"
              className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              SIGN IN
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default WebsiteNavbar;
