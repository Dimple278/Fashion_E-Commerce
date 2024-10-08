import React from "react";
import { subNavItems } from "../../../constants/navItems";

const SubNavigation: React.FC = () => {
  return (
    <nav className="flex flex-wrap justify-center items-center w-full text-center max-md:max-w-full">
      {subNavItems.map((item, index) => (
        <a
          key={index}
          href="#"
          className={`self-stretch px-3 py-5 my-auto ${
            item === "Sale" ? "text-red-700" : ""
          } ${
            ["Best-Sellers", "Clothing", "Outerwear"].includes(item)
              ? "whitespace-nowrap"
              : ""
          }`}
        >
          {item}
        </a>
      ))}
    </nav>
  );
};

export default SubNavigation;
