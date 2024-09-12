import React from "react";
import Image from "../atoms/Image";

interface StoreCardProps {
  city: string;
  name: string;
  image: string;
}

const StoreCard: React.FC<StoreCardProps> = ({ city, name, image }) => {
  return (
    <article className="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full">
      <Image
        loading="lazy"
        src={image}
        alt={`${name} store`}
        className="object-contain w-full aspect-[1.51] max-md:max-w-full"
      />
      <div className="flex flex-col mt-2 w-full max-md:max-w-full">
        <h2 className="text-xs tracking-wider leading-relaxed max-md:max-w-full">
          {city}
        </h2>
        <p className="mt-1 text-base tracking-wider max-md:max-w-full">
          {name}
        </p>
      </div>
    </article>
  );
};

export default StoreCard;
