import React from "react";
import Image from "../atoms/Image";

interface ArticleCardProps {
  imageSrc: string;
  title: string;
  category: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  imageSrc,
  title,
  category,
}) => {
  return (
    <article className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
      <Image
        loading="lazy"
        src={imageSrc}
        alt={title}
        className="object-contain w-full aspect-square"
      />
      <div className="flex flex-col mt-5 w-full">
        <h2 className="text-3xl leading-none">{title}</h2>
        <span className="gap-2.5 self-start px-5 py-1 mt-3 text-xs font-semibold tracking-wide leading-none text-center whitespace-nowrap border border-solid border-zinc-300 rounded-[30px]">
          {category}
        </span>
      </div>
    </article>
  );
};

export default ArticleCard;
