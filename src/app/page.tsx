import EyebrowsServices from './components/eyebrowsServices';
import HeroSection from './components/heroSection';
import MakeUpServices from './components/makeupServices';
import NailsServices from './components/nailsServices';

export default function Home() {
  return (
    <>
      <HeroSection />
      <EyebrowsServices />
      <MakeUpServices />
      <NailsServices />
    </>
  );
}
