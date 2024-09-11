import React from "react";
import { Link } from "react-router-dom";
import CategoryItem from "./CategoryItem";
import { useGetCategoriesQuery } from "../../../store/slices/apiSlice";

const randomImages: string[] = [
  "/electronics.jpeg",
  "/jwellery.jpeg",
  "/byCategory1.png",
  "/women.jpeg",
];

const ShopByCategory: React.FC = () => {
  const { data: categories, error, isLoading } = useGetCategoriesQuery({});

  if (isLoading) return <p>Loading categories...</p>;
  if (error || !categories) return <p>Error fetching categories.</p>;

  return (
    <section className="shop-by-category">
      <h2 className="shop-by-category__heading">Shop by Category</h2>

      <div className="shop-by-category__grid">
        {categories.map((category: string, index: number) => (
          <Link
            key={category}
            to={`/products/category/${category}`}
            className="group relative overflow-hidden rounded-lg"
          >
            <CategoryItem
              imageSrc={randomImages[index % randomImages.length]}
              categoryName={category}
            />
            <div className="absolute inset-0 bg-gray-800 opacity-0 group-hover:opacity-50 transition-opacity"></div>
            <p className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
              View {category}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ShopByCategory;
