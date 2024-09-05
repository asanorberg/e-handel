import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img
          className="imglogo"
          src="/src/assets/cf07e26a-9bb2-4dc2-b6f3-6ce127c50549.png"
          alt=""
        />
        <h1>YourShop</h1>
      </div>
      <nav className="nav">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>

          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="header-icons">
        <a href="/search" className="icon">
          <i className="fas fa-search"></i>
        </a>
        <a href="/cart" className="icon">
          <i className="fas fa-shopping-cart"></i>
        </a>
        <a href="/profile" className="icon">
          <i className="fas fa-user"></i>
        </a>
      </div>
    </header>
  );
};

export default Header;
