import React from "react";
import { Trash2 } from "lucide-react";
import Image from "../../atoms/Image";
import Text from "../../atoms/Text";

interface CartItemProps {
  item: {
    id: number;
    title: string;
    price: number;
    quantity: number;
    thumbnailUrl: string;
  };
  onRemove: (id: number) => void;
  onUpdateQuantity: (id: number, quantity: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({
  item,
  onRemove,
  onUpdateQuantity,
}) => {
  return (
    <li className="cart-item-container">
      <div className="image-container">
        <Image
          src={item.thumbnailUrl}
          alt={item.title}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="flex-grow">
        <Text className="font-semibold text-gray-900">{item.title}</Text>
        <Text className="mt-1 text-sm text-gray-500">
          ${(item.price * item.quantity).toFixed(2)}
        </Text>
      </div>

      <div className="flex flex-col items-end space-y-2">
        <button onClick={() => onRemove(item.id)} className="button-style">
          <Trash2 size={18} />
        </button>
        <div className="flex items-center space-x-2 border rounded">
          <button
            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
            className="quantity-button"
          >
            −
          </button>
          <span className="px-2">{item.quantity}</span>
          <button
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            className="quantity-button"
          >
            +
          </button>
        </div>
        <p className="font-semibold text-gray-900">
          ${(item.price * item.quantity).toFixed(2)}
        </p>
      </div>
    </li>
  );
};

export default CartItem;
