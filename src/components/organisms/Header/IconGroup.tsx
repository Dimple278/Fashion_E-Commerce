import React, { useState } from "react";
import { useSelector } from "react-redux";
import IconButton from "./IconButton";
import { RootState } from "../../../store/store";
import CartSummary from "../CartSummary/CartSummary";

interface IconData {
  src: string;
  alt: string;
}

const iconData: IconData[] = [
  {
    src: "/search.png",
    alt: "Icon 1",
  },
  {
    src: "/User.png",
    alt: "Icon 2",
  },
  {
    src: "/cart.png",
    alt: "Cart",
  },
];

const IconGroup: React.FC = () => {
  const totalQuantity = useSelector(
    (state: RootState) => state.cart.totalQuantity
  );
  const [isCartOpen, setCartOpen] = useState(false);
  const handleCartClick = () => {
    setCartOpen(true);
  };

  const handleCloseCart = () => {
    setCartOpen(false);
  };

  return (
    <nav className="flex items-center relative">
      {iconData.map((icon, index) => (
        <div key={index} className="relative">
          {icon.alt === "Cart" ? (
            <button onClick={handleCartClick}>
              <IconButton src={icon.src} alt={icon.alt} />
              {totalQuantity > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalQuantity}
                </span>
              )}
            </button>
          ) : (
            <IconButton src={icon.src} alt={icon.alt} />
          )}
        </div>
      ))}

      <CartSummary isOpen={isCartOpen} onClose={handleCloseCart} />
    </nav>
  );
};

export default IconGroup;
