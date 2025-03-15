import Image from "next/image";

const PitchDeck = () => {
  return (
    <div className="relative h-screen w-full">
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
      
      {/* Absolute positioning for perfect centering */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col items-center text-center">
          <h1 className="mb-8 font-bold text-4xl text-purple-900">
            NOW ACCEPTING PITCH DECK
            <br />
            SUBMISSIONS FOR INVESTMENT
          </h1>
          
          <div className="flex flex-col gap-4 w-80">
            <button className="rounded-full bg-gradient-to-r from-[#6500AB] to-[#290045] px-8 py-3 font-bold text-white">
              UPLOAD PITCHDECK
            </button>
            <button className="rounded-full bg-[#E838FF] px-8 py-3 font-bold text-white hover:bg-[#E838FF]/90">
              UPLOAD VIDEO DECK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PitchDeck;
