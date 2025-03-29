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
                  <Link href="https://www.linkedin.com/company/pitchvilla/" aria-label="LinkedIn">
                    <div className="text-white p-2 rounded-md w-10 h-10 flex items-center justify-center">
                      <Linkedin />
                    </div>
                  </Link>
                  <Link href="https://www.instagram.com/pitchvillaindia/?hl=en" aria-label="Instagram">
                    <div className="text-white p-2 rounded-md w-10 h-10 flex items-center justify-center">
                      <InstagramIcon />
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Column 2 - Startups */}
            <div>
              <h2 className="text-lg font-semibold mb-4">STARTUP HUB</h2>
              <ul className="space-y-3 text-white-100">
                <li>
                  <Link href="#" className="block hover:text-gray-300">
                  PITCH DECK
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block hover:text-gray-300">
                  VALUATION REPORT
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block hover:text-gray-300">
                  TERM SHEET DRAFTING 

                  </Link>
                </li>
                <li>
                  <Link href="#" className="block hover:text-gray-300">
                  STARTUP COMPLIANCES 

                  </Link>
                </li>
                <li>
                  <Link href="#" className="block hover:text-gray-300">
                  STRATEGIC CONSULTATION 

                  </Link>
                </li>
                
                  
              </ul>
            </div>

            {/* Column 3 - Investor */}
            <div>
              <h2 className="text-lg font-semibold mb-4">INVESTOR HUB</h2>
              <ul className="space-y-3 text-white-100">
                <li>
                  <Link href="#" className="block hover:text-gray-300">
                    STARTUP HUNTER
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block hover:text-gray-300">
                  DEAL SOURCING & MATCHMAKING
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block hover:text-gray-300">
                  DUE DILIGENCE & VALUATION SUPPORT
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block hover:text-gray-300">
                  INVESTMENT DOCUMENTATION
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block hover:text-gray-300">
                  PORTFOLIO MANAGEMENT & EXIT STRATEGY
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block hover:text-gray-300">
                  INVESTOR NETWORK & EDUCATION
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4 - Contact Us */}
            <div>
              <h2 className="text-lg font-semibold mb-4">CONTACT US</h2>
              <ul className="space-y-3 text-white-100">
                <li>
                  <Link href="#" className="block hover:text-gray-300">
                  Phone
                  +91 96878 78669
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block hover:text-gray-300">
                  Email - 
                  info@pitchvilla.com
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block hover:text-gray-300">
                  Office - 
1815, BLOCK-B

NAVRATNA CORPORATE PARK AMBLI BOPAL ROAD AHMEDABAD Ahmedabad, Gujarat 380058
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
        </div>
      </footer>
    </>
  );
};

export default Footer;
