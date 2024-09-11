import React from "react";
import TopBanner from "../../molecules/TopBanner";
import Navigation from "./Navigation";
import SubNavigation from "./SubNavigation";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 flex flex-col self-stretch text-xs tracking-wide leading-none bg-white text-neutral-800">
      <TopBanner />
      <Navigation />
      <SubNavigation />
    </header>
  );
};

export default Header;
