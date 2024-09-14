import React from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  text?: string;
  onClick?: () => void;
  ariaLabel?: string;
  variant?: "primary" | "secondary" | "icon" | "search" | "cancel" | "social";
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
