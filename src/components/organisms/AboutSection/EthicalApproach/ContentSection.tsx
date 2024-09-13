import React from "react";
import Text from "../../../atoms/Text";

interface ContentSectionProps {
  title: string;
  subtitle: string;
  description: string;
}

const ContentSection: React.FC<ContentSectionProps> = ({
  title,
  subtitle,
  description,
}) => {
  return (
    <div className="flex flex-col flex-1 shrink justify-center px-16 basis-0 min-w-[240px] max-md:p-5 max-md:max-w-full">
      <header className="flex flex-col w-full tracking-wide max-md:max-w-full">
        <Text className="text-xs font-semibold leading-none max-md:max-w-full">
          {title}
        </Text>
        <Text
          type="h1"
          className="text-4xl leading-tight max-md:max-w-full font-normal"
        >
          {subtitle}
        </Text>
      </header>
      <Text className="mt-5 text-sm tracking-widest leading-4 max-md:max-w-full">
        {description}
      </Text>
    </div>
  );
};

export default ContentSection;
