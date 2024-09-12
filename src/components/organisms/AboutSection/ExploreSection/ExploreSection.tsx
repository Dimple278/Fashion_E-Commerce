import React from "react";
import { Link } from "react-router-dom";
import ExploreCard from "./ExploreCard";

import { exploreItems } from "../../../../constants/About/exploreItems";

const ExploreSection: React.FC = () => {
  return (
    <section className="flex flex-col px-52 py-20 text-center max-md:px-5">
      <h2 className="text-3xl leading-none text-black max-md:max-w-full">
        More to Explore
      </h2>
      <div className="flex justify-between gap-5 items-start mt-5 w-full max-md:flex-col">
        {exploreItems.map((item, index) => (
          <Link to={item.link} key={index} className="flex-1">
            <ExploreCard imageSrc={item.imageSrc} title={item.title} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ExploreSection;
