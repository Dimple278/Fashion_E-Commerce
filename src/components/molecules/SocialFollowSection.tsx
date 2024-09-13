import React from "react";
import Button from "../atoms/Button";
import Text from "../atoms/Text";

interface SocialFollowSectionProps {
  title: string;
  buttonText: string;
  socialPlatform: string;
}

const SocialFollowSection: React.FC<SocialFollowSectionProps> = ({
  title,
  buttonText,
  socialPlatform,
}) => {
  return (
    <section className="flex flex-col self-stretch px-16 py-24 font-semibold bg-black max-md:px-5">
      <Text
        type="h2"
        className="text-6xl leading-none text-white max-md:max-w-full max-md:text-4xl"
      >
        {title}
      </Text>
      <Button text={buttonText} variant="social" platform={socialPlatform} />
    </section>
  );
};

export default SocialFollowSection;
