import React from "react";
import Button from "../../atoms/Button";
import Text from "../../atoms/Text";

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
      <Text className="category-card__title">{title}</Text>
      <Button text={buttonText} />
    </section>
  );
};

export default CategoryCard;
