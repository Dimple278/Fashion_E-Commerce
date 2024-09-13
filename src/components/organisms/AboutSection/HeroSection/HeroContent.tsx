import React from "react";
import Text from "../../../atoms/Text";

const HeroContent: React.FC = () => {
  return (
    <div className="flex relative flex-col max-w-full w-[488px]">
      <Text
        type="h1"
        className="text-7xl tracking-wide leading-[84px] max-md:max-w-full max-md:text-4xl max-md:leading-[53px] font-normal"
      >
        We believe <br /> we can all make <br />a difference.
      </Text>

      <Text type="h3" className="mt-4 leading-8 max-md:max-w-full">
        Our way: Exceptional quality. <br /> Ethical factories. Radical
        Transparency.
      </Text>
    </div>
  );
};

export default HeroContent;
