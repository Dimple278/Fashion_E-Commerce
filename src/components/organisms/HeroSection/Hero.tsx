import React from "react";
import HeroContent from "./HeroContent";
import Button from "../../atoms/Button";
import Image from "../../atoms/Image";
import { Link } from "react-router-dom";

interface HeroProps {
  backgroundImageSrc: string;
}

const Hero: React.FC<HeroProps> = ({ backgroundImageSrc }) => {
  return (
    <section className="flex overflow-hidden relative flex-col justify-center items-start py-72 pl-8 text-center min-h-[758px] pr-[632px] max-md:px-5 max-md:py-24">
      <Image
        src={backgroundImageSrc}
        className="object-cover absolute inset-0 size-full"
      />
      <div className="flex relative flex-col max-w-full w-[632px]">
        <HeroContent />
        <Link to="/products">
          <Button text="SHOP NOW" />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
