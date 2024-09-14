import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store/store";
import { removeItem, updateQuantity } from "../../../store/slices/cartSlice";
import { X } from "lucide-react";
import CartItem from "./CartItem";

interface CartSummaryProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartSummary: React.FC<CartSummaryProps> = ({ isOpen, onClose }) => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalAmount = useSelector((state: RootState) => state.cart.totalAmount);
  const dispatch = useDispatch();

  const handleRemove = (id: number) => {
    dispatch(removeItem(id));
  };

  const handleUpdateQuantity = (id: number, quantity: number) => {
    if (quantity > 0) {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  return (
    <div
      className={`cart-summary-modal ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex flex-col h-full">
        <div className="p-5 flex justify-between items-center border-b">
          <h1 className="text-2xl font-bold">Your Cart</h1>
          <button className="button-style" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        {cartItems.length === 0 ? (
          <p className="p-5 text-center text-gray-500">Your cart is empty.</p>
        ) : (
          <div className="flex-grow flex flex-col justify-between overflow-hidden">
            <ul className="flex-grow overflow-y-auto px-5 py-2 space-y-6">
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onRemove={handleRemove}
                  onUpdateQuantity={handleUpdateQuantity}
                />
              ))}
            </ul>

            <div className="border-t bg-gray-50 p-5">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-medium text-gray-900">
                  Subtotal (
                  {cartItems.reduce((acc, item) => acc + item.quantity, 0)}{" "}
                  items)
                </h2>
                <p className="text-2xl font-bold text-gray-900">
                  ${totalAmount.toFixed(2)}
                </p>
              </div>

              <button className="w-full bg-black text-white py-3 px-4 text-lg font-medium hover:bg-gray-900 transition-colors">
                CONTINUE TO CHECKOUT
              </button>

              <p className="text-sm text-center text-gray-500 mt-2">
                Psst, get it now before it sells out.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartSummary;
