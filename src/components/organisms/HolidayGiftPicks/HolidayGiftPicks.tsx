import React from "react";
import { GiftCard, GiftCardProps } from "./GiftCard";

const giftCards: GiftCardProps[] = [
  {
    title: "Our Holiday Gift Picks",
    imageSrc: "/gift1.png",
    description: "The best presents for everyone on your list.",
    buttonText: "Read More",
  },
  {
    title: "Cleaner Fashion",
    imageSrc: "/gift2.png",
    description: "See the sustainability efforts behind each of our products.",
    buttonText: "Learn More",
  },
];

export const HolidayGiftPicks: React.FC = () => {
  return (
    <section className="flex flex-wrap justify-center gap-5 items-start text-sm text-center text-neutral-800 max-md:px-5">
      {giftCards.map((card, index) => (
        <GiftCard key={index} {...card} />
      ))}
    </section>
  );
};
