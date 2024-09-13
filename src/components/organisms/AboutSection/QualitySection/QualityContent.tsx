import React from "react";
import Text from "../../../atoms/Text";

const QualityContent: React.FC = () => {
  return (
    <div className="flex flex-col flex-1 shrink justify-center px-16 basis-0 min-w-[240px] max-md:p-5 max-md:max-w-full">
      <header className="flex flex-col w-full tracking-wide max-md:max-w-full">
        <Text className="text-xs font-semibold leading-none max-md:max-w-full">
          OUR QUALITY
        </Text>
        <Text type="h1" className="font-normal leading-tight max-md:max-w-full">
          Designed <br /> to last.
        </Text>
      </header>
      <Text className="mt-5 text-sm tracking-widest leading-4 max-md:max-w-full">
        At Everlane, we're not big on trends. We want you to wear our pieces for
        years, even decades, to come. That's why we source the finest materials
        and factories for our timeless products— like our Grade-A cashmere
        sweaters, Italian shoes, and Peruvian Pima tees.
      </Text>
    </div>
  );
};

export default QualityContent;
