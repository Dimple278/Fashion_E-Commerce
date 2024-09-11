import React from "react";
import HeroSection from "../components/organisms/AboutSection/HeroSection/HeroSection";
import EverlaneDescription from "../components/organisms/AboutSection/Description/EverlanceDescription";
import EthicalApproach from "../components/organisms/AboutSection/EthicalApproach/EthicalApproach";
import Image from "../components/atoms/Image";
import QualitySection from "../components/organisms/AboutSection/QualitySection/QualitySection";
import ExploreSection from "../components/organisms/AboutSection/ExploreSection/ExploreSection";

const About: React.FC = () => {
  return (
    <>
      <HeroSection backgroundImageSrc="/aboutHero.png" />
      <EverlaneDescription />
      <EthicalApproach
        title="Our Factories"
        subtitle="Our Ethical Approach"
        description="We spend months finding the best factories around the world—the same ones that produce your favorite designer labels. We visit them often and build strong personal relationships with the owners. Each factory is given a compliance audit to evaluate factors like fair wages, reasonable hours, and environment. Our goal? A score of 90 or above for every factory."
        imageSrc="/ethicalApproach.png"
      />
      <Image src="/aboutImage.png" alt="factory" className="w-full m-auto" />
      <QualitySection imageSrc="/qualitySection.png" imageAlt="Our factory" />
      <Image src="/aboutImage2.png" alt="factory" className="w-full m-auto" />
      <EthicalApproach
        title="OUR PRICES"
        subtitle="Radically Transparent"
        description="We believe our customers have a right to know how much their clothes cost to make. We reveal the true costs behind all of our products—from materials to labor to transportation—then offer them to you, minus the traditional retail markup."
        imageSrc="/radicallyTransparent.png"
      />
      <ExploreSection />
    </>
  );
};

export default About;
