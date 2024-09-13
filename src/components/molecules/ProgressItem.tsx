import React from "react";
import Image from "../atoms/Image";
import Text from "../atoms/Text";

interface ProgressItemProps {
  imageSrc: string;
  title: string;
}

const ProgressItem: React.FC<ProgressItemProps> = ({ imageSrc, title }) => {
  return (
    <article className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
      <Image
        loading="lazy"
        src={imageSrc}
        alt={`Illustration for ${title}`}
        className="object-contain w-full aspect-[1.34]"
      />
      <Text type="h2" className="mt-3 font-normal">
        {title}
      </Text>
    </article>
  );
};

export default ProgressItem;
