import React from "react";
import ProgressItem from "./ProgressItem";
import { progressItems } from "../../constants/ProgressItems";
import Text from "../atoms/Text";

const OurProgress: React.FC = () => {
  return (
    <section className="flex flex-col px-16 py-32 text-black max-md:px-5 max-md:py-24">
      <Text
        type="h1"
        className="text-6xl leading-none max-md:max-w-full max-md:text-4xl"
      >
        Our Progress
      </Text>
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
