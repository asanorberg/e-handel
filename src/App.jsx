import Home from "./pages/Home";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Shop from "./pages/ProductPage";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Layout from "./components/layout/Layout";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
