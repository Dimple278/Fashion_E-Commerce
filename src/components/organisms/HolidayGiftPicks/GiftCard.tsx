import React from "react";
import Image from "../../atoms/Image";

export interface GiftCardProps {
  title: string;
  imageSrc: string;
  description: string;
  buttonText: string;
}

export const GiftCard: React.FC<GiftCardProps> = ({
  title,
  imageSrc,
  description,
  buttonText,
}) => {
  return (
    <article className="flex flex-col shrink-0 grow-0 basis-[505px] max-w-[505px] max-md:max-w-full">
      <h2 className="text-2xl leading-none max-md:max-w-full">{title}</h2>
      <Image
        loading="lazy"
        src={imageSrc}
        alt=""
        className="object-contain mt-5 w-full aspect-[0.81] max-md:max-w-full"
      />
      <p className="mt-5 tracking-widest leading-tight max-md:max-w-full">
        {description}
      </p>
      <button className="gap-2.5 self-stretch px-5 py-4 mt-5 w-full tracking-widest leading-none underline max-md:max-w-full">
        {buttonText}
      </button>
    </article>
  );
};
