import React from "react";
import Header from "../Header";
import Footer from "../Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-4 mt-[70px] mb-[auto]">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
