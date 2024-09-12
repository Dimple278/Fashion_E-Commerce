import React from "react";
import { Link } from "react-router-dom";

interface SocialButtonProps {
  text: string;
  platform: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({ text, platform }) => {
  return (
    <Link
      to={`/blog`}
      className="inline-block gap-2.5 self-stretch py-5 px-12 mt-8 w-60 max-w-full text-sm tracking-wide text-center text-black bg-white rounded-lg max-md:px-5"
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
    </Link>
  );
};

export default SocialButton;
