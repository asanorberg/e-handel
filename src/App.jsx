import HomePage from "./pages/HomePage";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Layout from "./components/layout/Layout";
import CartPage from "./pages/CartPage";
import ProductPage from "./pages/ProductPage";
import { CartProvider } from "./contexts/CartContext";
import CartItem from "./components/CartItem";

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/CartPage" element={<CartPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/CartItem" element={<CartItem />} />
          </Routes>
        </Layout>
      </Router>
    </CartProvider>
  );
};

export default App;
