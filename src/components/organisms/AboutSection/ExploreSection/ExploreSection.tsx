import React from "react";
import ExploreCard from "./ExploreCard";

interface ExploreItem {
  imageSrc: string;
  title: string;
}

const exploreItems: ExploreItem[] = [
  { imageSrc: "/explore1.png", title: "Our Story" },
  {
    imageSrc: "/explore2.png",
    title: "Our Stores",
  },
  {
    imageSrc: "/explore3.png",
    title: "Careers",
  },
];

const ExploreSection: React.FC = () => {
  return (
    <section className="flex flex-col px-52 py-20 text-center max-md:px-5">
      <h2 className="text-3xl leading-none text-black max-md:max-w-full">
        More to Explore
      </h2>
      <div className="flex flex-wrap gap-5 items-start mt-5 w-full max-md:max-w-full">
        {exploreItems.map((item, index) => (
          <ExploreCard
            key={index}
            imageSrc={item.imageSrc}
            title={item.title}
          />
        ))}
      </div>
    </section>
  );
};

export default ExploreSection;
