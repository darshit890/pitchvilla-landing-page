    import ClientNavbar from "./ClientNavbar";
import Image from "next/image";


interface NavItem {
  name: string;
  href: string;
  subItems?: { name: string; href: string }[];
}

// Define navItems outside both components so it's accessible to both
export const navItems: NavItem[] = [
  {
    name: "STARTUPS",
    href: "#startups",
    subItems: [
      { name: "PITCH DECK", href: "#pitch-deck" },
      { name: "STARTUP TOOLKIT", href: "#startup-toolkit" },
      { name: "VALUATION REPORT", href: "#valuation-report" },
      { name: "BUSINESS REVIEW REPORT", href: "#business-review-report" },
      { name: "COMPANY COMPLIANCE", href: "#company-compliance" },
      { name: "FOUNDER COUNCELLING", href: "#founder-councelling" },
      { name: "VIRTUAL CXO", href: "#virtual-cxo" },
    ],
  },
  {
    name: "INVESTOR",
    href: "#investor",
    subItems: [
      { name: "STARTUP HUNTER", href: "#startup-hunter" },
      { name: "STARTUP DUE DILIGENCE", href: "#startup-due-diligence" },
      { name: "CO-INVESTING OPPORTUNITY", href: "#co-investing" },
      { name: "INVESTOR ELITE CLUB", href: "#investor-elite-club" },
      { name: "IPO DEALS & ASSIST", href: "#ipo-deals" },
      { name: "MERGERS AND ACQUISITIONS", href: "#mergers-acquisitions" },
    ],
  },
  { name: "STUDENT", href: "#student" },
  { name: "BLOGS", href: "#blogs" },
  { name: "CONTACT US", href: "#contact" },
];

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 ease-in-out bg-[#6500AB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Image src={"/image-Photoroom 1 (2).png"} alt="logo" width={150} height={150} />
            </div>
          </div>

          {/* Pass the client-side functionality to ClientNavbar */}
          <ClientNavbar />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
