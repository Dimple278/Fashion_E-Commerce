import React from "react";

const QualityContent: React.FC = () => {
  return (
    <div className="flex flex-col flex-1 shrink justify-center px-16 basis-0 min-w-[240px] max-md:p-5 max-md:max-w-full">
      <header className="flex flex-col w-full tracking-wide max-md:max-w-full">
        <h2 className="text-xs font-semibold leading-none max-md:max-w-full">
          OUR QUALITY
        </h2>
        <h1 className="text-4xl leading-10 max-md:max-w-full">
          Designed <br /> to last.
        </h1>
      </header>
      <p className="mt-5 text-sm tracking-widest leading-4 max-md:max-w-full">
        At Everlane, we're not big on trends. We want you to wear our pieces for
        years, even decades, to come. That's why we source the finest materials
        and factories for our timeless products— like our Grade-A cashmere
        sweaters, Italian shoes, and Peruvian Pima tees.
      </p>
    </div>
  );
};

export default QualityContent;
