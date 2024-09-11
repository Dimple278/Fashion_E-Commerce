import React from "react";
import Image from "../../atoms/Image";

interface CategoryItemProps {
  imageSrc: string;
  categoryName: string;
}

const CategoryItem: React.FC<CategoryItemProps> = ({
  imageSrc,
  categoryName,
}) => {
  return (
    <div className="category-item">
      <Image
        loading="lazy"
        src={imageSrc}
        alt={`${categoryName} category`}
        className="category-item__image"
      />
      <div className="category-item__label">{categoryName.toUpperCase()}</div>
    </div>
  );
};

export default CategoryItem;
