import React from 'react';

const HeroContent: React.FC = () => {
  return (
    <div className="flex relative flex-col max-w-full w-[488px]">
      <h1 className="text-7xl tracking-wide leading-[84px] max-md:max-w-full max-md:text-4xl max-md:leading-[53px]">
        We believe <br /> we can all make <br />a difference.
      </h1>
      <p className="mt-4 text-2xl leading-8 max-md:max-w-full">
        Our way: Exceptional quality. <br /> Ethical factories. Radical Transparency.
      </p>
    </div>
  );
};

export default HeroContent;