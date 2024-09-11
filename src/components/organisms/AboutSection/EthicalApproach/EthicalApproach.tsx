import React from "react";
import ContentSection from "./ContentSection";
import Image from "../../../atoms/Image";

interface EthicalApproachProps {
  imageSrc: string;
  title: string;
  subtitle: string;
  description: string;
}

const EthicalApproach: React.FC<EthicalApproachProps> = ({
  imageSrc,
  title,
  subtitle,
  description,
}) => {
  return (
    <section className="flex flex-col lg:flex-row bg-stone-200 w-full m-auto">
      <Image
        loading="lazy"
        src={imageSrc}
        alt="Our factory"
        className="object-fill h-[733px] w-50%"
      />
      <ContentSection
        title={title}
        subtitle={subtitle}
        description={description}
      />
    </section>
  );
};

export default EthicalApproach;
