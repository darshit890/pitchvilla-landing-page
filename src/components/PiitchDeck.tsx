import Image from "next/image";

const PitchDeck = () => {
  return (
    <div className="relative min-h-[100vh]">
      {/* Main content container */}
      <div className="relative w-full min-h-[100vh]">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/Desktop - 7.png"
            alt="Workspace with keyboard, glasses, coffee, notepad and phone"
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
        
        {/* Content overlay with vertical and horizontal centering, shifted slightly down */}
        <div className="relative z-10 w-full h-full flex items-center justify-center p-6 sm:p-8 md:p-12 pt-50">
          {/* Content container - centered horizontally but shifted down */}
          <div className="max-w-7xl w-full flex flex-col items-center text-center mt pt-40">
            <h1 className="text-purple-900 text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">
              NOW ACCEPTING PITCH DECK
              <br />
              SUBMISSIONS FOR INVESTMENT
            </h1>
            
            <div className="flex flex-col gap-4 w-80">
              <button className="bg-gradient-to-r from-[#6500AB] to-[#290045] text-white border-none font-bold text-sm sm:text-base py-2 sm:py-3 px-6 sm:px-8 rounded-full">
                UPLOAD PITCHDECK
              </button>
              <button className="bg-[#E838FF] hover:bg-[#E838FF]/90 text-white font-bold text-sm sm:text-base py-2 sm:py-3 px-6 sm:px-8 rounded-full">
                UPLOAD VIDEO DECK
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PitchDeck;
