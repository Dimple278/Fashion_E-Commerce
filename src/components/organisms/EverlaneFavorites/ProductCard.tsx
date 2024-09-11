import React from "react";

interface ProductCardProps {
  imageSrc: string;
  title: string;
  price: string;
  color: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageSrc,
  title,
  price,
  color,
}) => {
  return (
    <article>
      <img
        loading="lazy"
        src={imageSrc}
        alt={`${title} in ${color}`}
        className="object-contain"
      />
      <div className="flex flex-col mt-1.5 w-full">
        <div className="flex gap-3 items-start w-full text-neutral-800">
          <h3 className="flex-1 shrink basis-0">{title}</h3>
          <span className="text-right">{price}</span>
        </div>
        <p className="text-neutral-500">{color}</p>
      </div>
    </article>
  );
};

export default ProductCard;
