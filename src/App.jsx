import HomePage from "./pages/HomePage";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Layout from "./components/layout/Layout";
import ProductPage from "./pages/ProductPage";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/productpage" element={<ProductPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
