import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Image from "../../atoms/Image";
import IconGroup from "./IconGroup";
import MobileMenu from "../../molecules/MobileMenu";
import { navItems } from "../../../constants/navItems";
import Button from "../../atoms/Button";

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    const currentPath = location.pathname.toLowerCase();

    if (currentPath === path.toLowerCase()) {
      return true;
    }

    if (path.includes("women's clothing")) {
      return (
        currentPath.includes("women's clothing") ||
        (currentPath.includes("/women") && currentPath.includes("wo"))
      );
    }

    if (path.includes("men's clothing")) {
      return (
        currentPath.includes("men's clothing") ||
        (currentPath.includes("/men") && !currentPath.includes("women"))
      );
    }

    if (path === "/" && currentPath === "/") {
      return true;
    }

    return false;
  };

  return (
    <nav className="flex relative justify-between items-center px-16 w-full h-14 text-center border-b border-solid border-b-zinc-300 max-md:px-5 z-10">
      <div className="flex h-full items-center max-md:hidden">
        {navItems.map((item, index) => (
          <Link
            to={item.path}
            key={index}
            className={`px-3 cursor-pointer whitespace-nowrap h-full flex items-center hover:border-b-2 hover:border-neutral-800 transition-all duration-200 ${
              isActive(item.path) ? "border-b-2 border-neutral-800" : ""
            }`}
          >
            <div>{item.name}</div>
          </Link>
        ))}
      </div>
      <Link to={"/"}>
        <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-10 cursor-pointer">
          <Image loading="lazy" src="/Logo.png" alt="Logo" />
        </div>
      </Link>

      <div className="flex-1 flex justify-end items-center">
        <IconGroup />

        <div className="md:hidden ml-4">
          <Button variant="hamburger" onClick={toggleMenu} />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && <MobileMenu navItems={navItems} toggleMenu={toggleMenu} />}
    </nav>
  );
};

export default Navigation;
