import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

// it will take header and footer always on its position
export default function Layout({ children }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Header />
      {children}
      <Footer />
      
    </div>
  );
}
