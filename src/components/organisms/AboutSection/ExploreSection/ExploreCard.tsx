import React from "react";
import Image from "../../../atoms/Image";
import Text from "../../../atoms/Text";

interface ExploreCardProps {
  imageSrc: string;
  title: string;
}

const ExploreCard: React.FC<ExploreCardProps> = ({ imageSrc, title }) => {
  return (
    <article className="flex flex-col flex-1 shrink basis-0 min-w-[20px] items-center">
      <Image
        loading="lazy"
        src={imageSrc}
        alt={title}
        className="object-contain w-full aspect-[1.64]"
      />
      <Text className="mt-2.5 text-base font-semibold tracking-wide text-neutral-600 text-center">
        {title}
      </Text>
    </article>
  );
};

export default ExploreCard;
