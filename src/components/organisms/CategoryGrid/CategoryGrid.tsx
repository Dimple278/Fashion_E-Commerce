import React from "react";
import CategoryCard from "./CategoryCard";

interface Category {
  imageSrc: string;
  title: string;
  buttonText: string;
}

const categories: Category[] = [
  {
    imageSrc: "/category1.png",
    title: "New Arrivals",
    buttonText: "SHOP THE LATEST",
  },
  {
    imageSrc: "/category2.png",
    title: "Best-Sellers",
    buttonText: "SHOP YOUR FAVORITES",
  },
  {
    imageSrc: "/category1.png",
    title: "New Arrivals",
    buttonText: "SHOP THE LATEST",
  },
  {
    imageSrc: "/category3.png",
    title: "The Holiday Outfit",
    buttonText: "SHOP OCCASION",
  },
];

const CategoryGrid: React.FC = () => {
  return (
    <main className="flex flex-wrap gap-3 items-start px-11 leading-tight text-center max-md:px-5 h-full">
      {categories.map((category, index) => (
        <CategoryCard
          key={index}
          imageSrc={category.imageSrc}
          title={category.title}
          buttonText={category.buttonText}
        />
      ))}
    </main>
  );
};

export default CategoryGrid;
