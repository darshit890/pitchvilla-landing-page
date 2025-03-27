// components/HeroSection.tsx  
import CampusAmbassador from '@/components/CampusAmbassador';
import Hero from '@/components/Hero';
import ServicesPage from '@/components/Services';
import GetApp from '@/components/GetApp';
// import PitchDeck from '@/components/PitchDeck';

   
export default function HeroSection() {  
  return (  
    <>
    <Hero />
    <ServicesPage />
{/*     <PitchDeck /> */}
     <GetApp /> 
    <CampusAmbassador />
    </>
  );  
}  
