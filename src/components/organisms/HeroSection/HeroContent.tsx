import React from 'react';

const HeroContent: React.FC = () => {
  return (
    <div className="flex flex-col w-full text-white max-md:max-w-full">
      <h1 className="text-5xl tracking-wider leading-tight max-md:max-w-full max-md:text-4xl">
        Your Cozy Era
      </h1>
      <p className="mt-3.5 text-2xl leading-8 max-md:max-w-full">
        Get peak comfy-chic <br /> with new winter essentials.
      </p>
    </div>
  );
};

export default HeroContent;