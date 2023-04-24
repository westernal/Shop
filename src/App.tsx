import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Cart from "./pages/cart";
import Header from "./components/Header/header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
