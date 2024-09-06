import React, { useState } from "react";
import { useCart } from "../contexts/CartContext";

const Cart = () => {
  const { cart } = useCart();

  console.log("Cart items:", cart);
  const [form, setForm] = useState({
    fullName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    paymentMethod: "credit-card",
  });

  const totalCost = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle order and payment here
    console.log("Order placed:", form, cart);
    alert("Order placed successfully!");
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Checkout</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left section: Cart overview */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
          <div className="bg-white shadow rounded-lg p-4">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between mb-4">
                <span>{item.name}</span>
                <span>
                  {item.quantity} x ${item.price} = $
                  {item.quantity * item.price}
                </span>
              </div>
            ))}
            <div className="flex justify-between font-bold text-lg">
              <span>Total:</span>
              <span>${totalCost}</span>
            </div>
          </div>
        </div>

        {/* Right section: Shipping information form */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow rounded-lg p-6"
          >
            <div className="mb-4">
              <label htmlFor="fullName" className="block text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={form.fullName}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded mt-1"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="address" className="block text-gray-700">
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={form.address}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded mt-1"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="mb-4">
                <label htmlFor="city" className="block text-gray-700">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={form.city}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="postalCode" className="block text-gray-700">
                  Postal Code
                </label>
                <input
                  type="text"
                  id="postalCode"
                  name="postalCode"
                  value={form.postalCode}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="country" className="block text-gray-700">
                Country
              </label>
              <input
                type="text"
                id="country"
                name="country"
                value={form.country}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded mt-1"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="paymentMethod" className="block text-gray-700">
                Payment Method
              </label>
              <select
                id="paymentMethod"
                name="paymentMethod"
                value={form.paymentMethod}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded mt-1"
                required
              >
                <option value="credit-card">Credit Card</option>
                <option value="paypal">PayPal</option>
                <option value="swish">Swish</option>
              </select>
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
            >
              Place Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cart;
