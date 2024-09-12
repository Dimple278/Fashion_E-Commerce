import React from "react";
import InfoCard from "./InfoCard";
import { infoCardsData } from "../../../constants/infoCardsData";

const InfoCardsContainer: React.FC = () => {
  return (
    <main className="flex flex-wrap gap-1.5 items-start px-20 py-24 text-sm text-center text-neutral-800 max-md:px-5">
      {infoCardsData.map((card, index) => (
        <InfoCard
          key={index}
          imageSrc={card.imageSrc}
          title={card.title}
          description={card.description}
        />
      ))}
    </main>
  );
};

export default InfoCardsContainer;
