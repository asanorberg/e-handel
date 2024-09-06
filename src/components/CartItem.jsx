import React from "react";
import { useCart } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom"; // Importera useNavigate

const CartItem = ({ closeModal }) => {
  const { cart } = useCart(); // Hämta varukorgen
  const navigate = useNavigate(); // Hämta navigate-funktionen för navigering

  const handleCheckout = () => {
    navigate("/CartPage"); // Navigera till checkout-sidan
  };

  const handleContinueShopping = () => {
    closeModal(); // Stäng modalen
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg relative">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
        <div className="cart-items mb-6">
          {cart.length === 0 ? (
            <p className="text-gray-700">Your cart is empty</p>
          ) : (
            cart.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center mb-4"
              >
                <div>
                  <p className="text-gray-700 font-bold">{item.title}</p>
                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                </div>
                <p className="text-gray-700">${item.price * item.quantity}</p>
              </div>
            ))
          )}
        </div>

        <div className="flex justify-between">
          <button
            onClick={handleContinueShopping}
            className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Continue Shopping
          </button>
          <button
            onClick={handleCheckout}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-400"
          >
            Go to Checkout
          </button>
        </div>
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={closeModal}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default CartItem;
