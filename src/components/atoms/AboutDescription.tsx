import React from "react";

interface AboutDescriptionProps {
  text: string;
}

const AboutDescription: React.FC<AboutDescriptionProps> = ({ text }) => {
  return (
    <section className="flex-1 shrink gap-2.5 self-stretch px-64 py-20 text-4xl tracking-wide text-center text-black leading-[53px] max-md:px-5 max-md:max-w-full">
      {text}
    </section>
  );
};

export default AboutDescription;
