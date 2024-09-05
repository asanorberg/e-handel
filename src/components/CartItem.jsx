import React from "react";

const CartItem = ({ closeModal }) => {
  const handleCheckout = () => {
    window.location.href = "/checkout";
  };

  const handleContinueShopping = () => {
    closeModal(); // Stäng modalen och fortsätt handla
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg relative">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
        {/* Här kan du lägga till en lista över varor användaren har valt */}
        <div className="cart-items mb-6">
          <p className="text-gray-700">Product 1</p>
          <p className="text-gray-700">Product 2</p>
          {/* Lägg till fler produkter här */}
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
