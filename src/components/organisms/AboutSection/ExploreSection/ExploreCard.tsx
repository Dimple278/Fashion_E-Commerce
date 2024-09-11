import React from "react";

interface ExploreCardProps {
  imageSrc: string;
  title: string;
}

const ExploreCard: React.FC<ExploreCardProps> = ({ imageSrc, title }) => {
  return (
    <article className="flex flex-col flex-1 shrink basis-0 min-w-[240px] items-center">
      <img
        loading="lazy"
        src={imageSrc}
        alt={title}
        className="object-contain w-full aspect-[1.64]"
      />
      <h3 className="mt-2.5 text-base font-semibold tracking-wide text-neutral-600 text-center">
        {title}
      </h3>
    </article>
  );
};

export default ExploreCard;
