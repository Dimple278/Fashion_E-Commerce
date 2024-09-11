import React from 'react';
import HeroContent from './HeroContent';

interface HeroSectionProps {
  backgroundImageSrc: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ backgroundImageSrc }) => {
  return (
    <section className="flex overflow-hidden relative flex-col justify-center items-center text-center text-white min-h-[691px]">
      <img loading="lazy" src={backgroundImageSrc} alt="" className="object-cover absolute inset-0 size-full" />
      <HeroContent />
    </section>
  );
};

export default HeroSection;