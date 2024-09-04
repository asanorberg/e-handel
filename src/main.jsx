import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Layout from "./components/layout/Layout";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Layout>
      <App />
    </Layout>
  </StrictMode>
);
