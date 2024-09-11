import React from "react";

interface IconButtonProps {
  src: string;
  alt: string;
  onClick?: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({ src, alt }) => {
  return (
    <button
      className="flex gap-2.5 justify-center items-center self-stretch p-3 my-auto w-10"
      aria-label={alt}
    >
      <img
        loading="lazy"
        src={src}
        alt={alt}
        className="object-contain self-stretch my-auto w-4 aspect-square"
      />
    </button>
  );
};

export default IconButton;
