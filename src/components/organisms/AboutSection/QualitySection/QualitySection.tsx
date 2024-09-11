import React from "react";
import QualityContent from "./QualityContent";
import Image from "../../../atoms/Image";

interface QualitySectionProps {
  imageSrc: string;
  imageAlt: string;
}

const QualitySection: React.FC<QualitySectionProps> = ({
  imageSrc,
  imageAlt,
}) => {
  return (
    <section className="flex flex-wrap self-stretch text-black bg-stone-200 ">
      <QualityContent />
      <Image
        loading="lazy"
        src={imageSrc}
        alt={imageAlt}
        className="object-contain flex-1 shrink w-full aspect-[1.27] basis-[140px] min-w-[240px] max-md:max-w-full"
      />
    </section>
  );
};

export default QualitySection;
