import React from "react";
import Image from "../atoms/Image";

interface HamburgerIconProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const HamburgerIcon: React.FC<HamburgerIconProps> = ({
  isOpen,
  toggleMenu,
}) => {
  return (
    <button
      onClick={toggleMenu}
      className="focus:outline-none"
      aria-label={isOpen ? "Close Menu" : "Open Menu"}
    >
      {isOpen ? (
        <Image src="/close.png" className="w-8 h-8" />
      ) : (
        <Image src="/hamburger.png" alt="Close Menu" className="w-8 h-8" />
      )}
    </button>
  );
};

export default HamburgerIcon;
