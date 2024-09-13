import React from "react";
import { Link } from "react-router-dom";

import Image from "./Image";

interface ButtonProps {
  text?: string;
  onClick?: () => void;
  ariaLabel?: string;
  variant?:
    | "primary"
    | "secondary"
    | "icon"
    | "search"
    | "cancel"
    | "social"
    | "hamburger";
  className?: string;
  children?: React.ReactNode;
  to?: any;
  platform?: string;
  isOpen?: boolean;
  toggleMenu?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  ariaLabel,
  variant = "primary",
  className,
  children,
  to,
  platform,
  isOpen,
  toggleMenu,
}) => {
  const variantClasses = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    search: "btn-search",
    cancel: "btn-cancel",
    icon: "btn-icon",
    social: "btn-social",
    hamburger: "btn-hamburger",
  };

  if (variant === "hamburger") {
    return (
      <button
        onClick={toggleMenu}
        aria-label={isOpen ? "Close Menu" : "Open Menu"}
        className={`focus:outline-none ${variantClasses[variant]} ${className}`}
      >
        {isOpen ? (
          <Image src="/close.png" className="w-8 h-8" alt="Close Menu" />
        ) : (
          <Image src="/hamburger.png" className="w-8 h-8" alt="Open Menu" />
        )}
      </button>
    );
  }

  const Component = to ? Link : "button";

  return (
    <Component
      to={to}
      onClick={onClick}
      aria-label={ariaLabel}
      className={`btn-base ${variantClasses[variant]} ${className}`}
      target={to ? "_blank" : undefined}
      rel={to ? "noopener noreferrer" : undefined}
    >
      {text || children}
    </Component>
  );
};

export default Button;
