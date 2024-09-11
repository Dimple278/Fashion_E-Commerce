import React from "react";
import Button from "../../atoms/Button";

interface CategoryCardProps {
  imageSrc: string;
  title: string;
  buttonText: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  imageSrc,
  title,
  buttonText,
}) => {
  return (
    <section
      className="category-card"
      style={{ backgroundImage: `url(${imageSrc})` }}
    >
      <h2 className="category-card__title">{title}</h2>
      <Button text={buttonText} />
    </section>
  );
};

export default CategoryCard;
