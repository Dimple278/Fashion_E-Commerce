import React from "react";

interface ProgressItemProps {
  imageSrc: string;
  title: string;
}

const ProgressItem: React.FC<ProgressItemProps> = ({ imageSrc, title }) => {
  return (
    <article className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
      <img
        loading="lazy"
        src={imageSrc}
        alt={`Illustration for ${title}`}
        className="object-contain w-full aspect-[1.34]"
      />
      <h2 className="mt-3">{title}</h2>
    </article>
  );
};

export default ProgressItem;
