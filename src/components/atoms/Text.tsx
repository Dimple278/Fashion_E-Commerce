import React from "react";

interface TextProps {
  type?: "h1" | "h2" | "h3" | "p";
  className?: string;
  children: React.ReactNode;
}

const Text: React.FC<TextProps> = ({ type = "p", className, children }) => {
  switch (type) {
    case "h1":
      return <h1 className={`text-4xl font-bold ${className}`}>{children}</h1>;
    case "h2":
      return (
        <h2 className={`text-3xl font-semibold ${className}`}>{children}</h2>
      );
    case "h3":
      return (
        <h3 className={`text-2xl font-medium ${className}`}>{children}</h3>
      );
    case "p":
    default:
      return <p className={`text-base ${className}`}>{children}</p>;
  }
};

export default Text;
