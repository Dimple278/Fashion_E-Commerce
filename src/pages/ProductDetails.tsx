import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../store/slices/apiSlice";
import Image from "../components/atoms/Image";
import { useDispatch } from "react-redux";
import { addItem } from "../store/slices/cartSlice";
import Button from "../components/atoms/Button";

const Shimmer = () => (
  <div className="animate-pulse flex space-x-4">
    <div className="flex-shrink-0 w-full max-w-md h-72 bg-gray-300 rounded-lg"></div>
    <div className="flex-grow space-y-4 py-1">
      <div className="h-6 bg-gray-300 rounded"></div>
      <div className="h-4 bg-gray-300 rounded w-3/4"></div>
      <div className="h-4 bg-gray-300 rounded"></div>
      <div className="h-4 bg-gray-300 rounded w-5/6"></div>
      <div className="h-10 bg-gray-300 rounded w-1/4"></div>
      <div className="h-8 bg-gray-300 rounded w-1/2"></div>
      <div className="h-12 bg-gray-300 rounded w-1/3 mt-6"></div>
    </div>
  </div>
);

const ProductDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { data: product, error, isLoading } = useGetProductByIdQuery(id);

  const handleAddToCart = () => {
    const cartItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: 1,
      totalPrice: product.price,
      thumbnailUrl: product.image,
    };
    dispatch(addItem(cartItem));
  };

  if (isLoading)
    return (
      <div className="container mx-auto px-4 py-10">
        <Shimmer />
      </div>
    );

  if (error)
    return <div className="text-center py-10">Error loading product</div>;

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-12">
        <div className="flex-shrink-0">
          <Image
            src={product.image}
            alt={product.title}
            className="w-full h-auto max-w-md rounded-lg shadow-md"
          />
        </div>

        <div className="flex-grow">
          <h1 className="text-3xl font-semibold text-gray-800">
            {product.title}
          </h1>
          <p className="mt-4 text-lg text-gray-600">{product.description}</p>

          <p className="mt-2 text-sm text-gray-500 uppercase">
            Category: {product.category}
          </p>

          <p className="mt-4 text-2xl font-semibold text-gray-900">
            ${product.price}
          </p>

          <div className="mt-4 flex items-center space-x-2">
            <span className="text-yellow-500">★ {product.rating.rate}</span>
            <span className="text-gray-600">
              ({product.rating.count} reviews)
            </span>
          </div>

          <button
            className="mt-6 bg-black text-white py-2 px-6 text-lg rounded-lg hover:bg-gray-800"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
