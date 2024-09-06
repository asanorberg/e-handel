import React, { useState } from "react";
import CartItem from "./CartItem"; // Importera din modal-komponent

const Header = () => {
  const [isCartOpen, setCartOpen] = useState(false);

  const toggleCartModal = () => {
    setCartOpen(!isCartOpen);
  };

  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="flex items-center">
        <img
          className="w-12 h-12"
          src="/src/assets/cf07e26a-9bb2-4dc2-b6f3-6ce127c50549.png"
          alt="logo"
        />
        <h1 className="ml-2 text-2xl font-bold">YourShop</h1>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="hover:text-gray-400">
              Home
            </a>
          </li>

          <li>
            <a href="/contact" className="hover:text-gray-400">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className="flex space-x-4">
        <a href="/search" className="hover:text-gray-400">
          <i className="fas fa-search"></i>
        </a>
        <button className="hover:text-gray-400" onClick={toggleCartModal}>
          <i className="fas fa-shopping-cart"></i>
        </button>
        <a href="/profile" className="hover:text-gray-400">
          <i className="fas fa-user"></i>
        </a>
      </div>
      {isCartOpen && <CartItem closeModal={toggleCartModal} />}{" "}
      {/* Visa modalen om isCartOpen är true */}
    </header>
  );
};

export default Header;
