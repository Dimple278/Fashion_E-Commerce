import React from "react";
import Button from "../../atoms/Button";
import Image from "../../atoms/Image";

interface HeroSectionProps {
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  description,
  buttonText,
  imageSrc,
}) => {
  return (
    <section className="flex relative flex-col justify-center py-20 w-full min-h-[281px] max-md:max-w-full">
      <Image
        src={imageSrc}
        alt=""
        className="object-cover absolute inset-0 size-full"
      />
      <div className="flex relative flex-col w-full text-white max-md:max-w-full">
        <h1 className="text-3xl leading-none max-md:max-w-full">{title}</h1>
        <p className="mt-3 text-base tracking-wider max-md:max-w-full">
          {description}
        </p>
      </div>
      <Button text={buttonText} />
    </section>
  );
};
