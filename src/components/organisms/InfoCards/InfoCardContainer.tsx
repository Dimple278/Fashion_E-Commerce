import React from "react";
import InfoCard from "./InfoCard";

const infoCardsData = [
  {
    imageSrc: "/cube.png",
    title: "Complimentary Shipping",
    description: "Enjoy free shipping on U.S. orders over $100.",
  },
  {
    imageSrc: "/craft.png",
    title: "Consciously Crafted",
    description: "Designed with you and the planet in mind.",
  },
  {
    imageSrc: "/location.png",
    title: "Come Say Hi",
    description: "We have 11 stores across the U.S.",
  },
];

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
