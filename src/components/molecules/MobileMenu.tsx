import React from "react";
import { Link } from "react-router-dom";

interface MobileMenuProps {
  navItems: { name: string; path: string }[];
  toggleMenu: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ navItems, toggleMenu }) => {
  return (
    <div className="mobile-menu">
      <ul className="mobile-menu__list">
        {navItems.map((item, index) => (
          <li key={index} className="mobile-menu__item">
            <Link
              to={item.path}
              className="mobile-menu__link"
              onClick={toggleMenu}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileMenu;
