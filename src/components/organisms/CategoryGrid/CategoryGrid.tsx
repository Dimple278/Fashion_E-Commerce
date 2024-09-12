import React from "react";
import CategoryCard from "./CategoryCard";

import { categories } from "../../../constants/categories";

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
