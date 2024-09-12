import React from "react";
import ProgressItem from "./ProgressItem";
import { progressItems } from "../../constants/ProgressItems";

const OurProgress: React.FC = () => {
  return (
    <section className="flex flex-col px-16 py-32 text-black max-md:px-5 max-md:py-24">
      <h1 className="text-6xl font-semibold leading-none max-md:max-w-full max-md:text-4xl">
        Our Progress
      </h1>
      <div className="flex flex-wrap gap-6 items-start mt-3 w-full text-3xl leading-none max-md:max-w-full">
        {progressItems.map((item, index) => (
          <ProgressItem
            key={index}
            imageSrc={item.imageSrc}
            title={item.title}
          />
        ))}
      </div>
    </section>
  );
};

export default OurProgress;
