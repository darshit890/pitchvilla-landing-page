// components/Footer.tsx
import Link from "next/link";
import {
  InstagramIcon,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  return (
    <>
      <footer className="bg-black text-white py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Column 1 - Logo and Connect */}
            <div className="space-y-6">
              <Link href="/" className="block mb-6">
                <h1 className="text-3xl font-bold">PITCHVILLA</h1>
              </Link>

              <div>
                <h2 className="text-lg font-semibold mb-4">
                  CONNECT WITH US :
                </h2>
                <div className="flex space-x-4">
                  <Link href="#" aria-label="LinkedIn">
                    <div className="text-white p-2 rounded-md w-10 h-10 flex items-center justify-center">
                      <Linkedin />
                    </div>
                  </Link>
                  <Link href="#" aria-label="Instagram">
                    <div className="text-white p-2 rounded-md w-10 h-10 flex items-center justify-center">
                      <InstagramIcon />
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Column 2 - Startups */}
            <div>
              <h2 className="text-lg font-semibold mb-4">STARTUPS</h2>
              <ul className="space-y-3 text-gray-500">
                <li>
                  <Link href="#" className="block hover:text-gray-300">
                    PITCH DECK
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block hover:text-gray-300">
                    STARTUP TOOLKIT
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block hover:text-gray-300">
                    VALUATION REPORT
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block hover:text-gray-300">
                    BUSINESS REVIEW REPORT
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block hover:text-gray-300">
                    COMPANY COMPLIANCE
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block hover:text-gray-300">
                    FOUNDER COUNCELLING
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block hover:text-gray-300">
                    VIRTUAL CXO
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3 - Investor */}
            <div>
              <h2 className="text-lg font-semibold mb-4">INVESTOR</h2>
              <ul className="space-y-3 text-gray-500">
                <li>
                  <Link href="#" className="block hover:text-gray-300">
                    STARTUP HUNTER
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block hover:text-gray-300">
                    STARTUP DUE DILIGENCE
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block hover:text-gray-300">
                    CO-INVESTING OPPORTUNITY
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block hover:text-gray-300">
                    INVESTOR ELITE CLUB
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block hover:text-gray-300">
                    IPO DEALS & ASSIST
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block hover:text-gray-300">
                    MERGERS AND ACQUSITIONS
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4 - Contact Us */}
            <div>
              <h2 className="text-lg font-semibold mb-4">CONTACT US</h2>
              <ul className="space-y-3 text-gray-500">
                <li>
                  <Link href="#" className="block hover:text-gray-300">
                    CONNECT WITH US
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block hover:text-gray-300">
                    LEGAL DISCLAIMER
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block hover:text-gray-300">
                    SITEMAP
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
        </div>
      </footer>
      <div className=" py-6 text-center bg-[#212121]">
        <p className="text-sm text-gray-400">@Copyright Qode Interactive</p>
      </div>
    </>
  );
};

export default Footer;
