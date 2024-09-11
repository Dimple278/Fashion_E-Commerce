import React from "react";
import { Link } from "react-router-dom";
import Image from "../components/atoms/Image";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface ListingsProps {
  products: Product[];
  isLoading: boolean;
  error: any;
  title?: string;
}

const ShimmerCard = () => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden animate-pulse">
    <div className="h-96 bg-gray-300" />
    <div className="p-6">
      <div className="h-6 bg-gray-300 rounded w-3/4 mb-4" />
      <div className="h-4 bg-gray-300 rounded w-1/2" />
    </div>
  </div>
);

const Listings: React.FC<ListingsProps> = ({
  products,
  isLoading,
  error,
  title = "Product Listings",
}) => {
  if (error)
    return (
      <div className="text-center py-4 text-red-500">Something went wrong!</div>
    );

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold text-center mb-6">{title}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {isLoading
          ? Array.from({ length: 8 }).map((_, index) => (
              <ShimmerCard key={index} />
            ))
          : products?.map((product: Product) => {
              const discountedPrice = (product.price * 0.7).toFixed(2);

              return (
                <Link
                  to={`/products/${product.id}`}
                  key={product.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden group flex flex-col"
                >
                  <div className="relative h-96 flex-shrink-0">
                    <Image
                      src={product.image}
                      alt={product.title}
                      className="absolute inset-0 w-full h-full object-fill object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 flex-grow">
                    <h2 className="text-xl font-semibold mb-4 line-clamp-2">
                      {product.title}
                    </h2>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-xl font-bold text-green-500">
                        ${discountedPrice}
                      </span>
                      <span className="line-through text-gray-500">
                        ${product.price.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
      </div>
    </div>
  );
};

export default Listings;
