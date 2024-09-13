import ShopByCategory from "../components/organisms/ShopByCategory/ShopByCategory";
import Hero from "../components/organisms/HeroSection/Hero";
import CategoryGrid from "../components/organisms/CategoryGrid/CategoryGrid";
import MissionCleanup from "../components/organisms/MissionCleanup/MissionCleanup";
import EverlaneSection from "../components/organisms/EverlaneFavorites/EverlaneSection";
import { HolidayGiftPicks } from "../components/organisms/HolidayGiftPicks/HolidayGiftPicks";
import EverlaneOnYou from "../components/organisms/EverlaneOnYou/EverlaneOnYou";
import InfoCardsContainer from "../components/organisms/InfoCards/InfoCardContainer";
import Image from "../components/atoms/Image";

const LandingPage = () => {
  return (
    <>
      <Hero backgroundImageSrc="/Hero.png" />
      <ShopByCategory />
      <CategoryGrid />
      <MissionCleanup />
      <EverlaneSection />
      <Image src="/peopleAreTalk.png" className="w-full mb-4" />
      <HolidayGiftPicks />
      <EverlaneOnYou />

      <InfoCardsContainer />
    </>
  );
};

export default LandingPage;
