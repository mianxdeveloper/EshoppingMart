import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Store from "./Pages/Store";
import Header from "./components/Header";
import Fallback from "./Pages/Fallback";
import Contact from "./Pages/Contact";
import "leaflet/dist/leaflet.css";
import About from "./Pages/About";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import Orders from "./Pages/Orders";
import SpecificProduct from "./Pages/SpecificProduct";

const App = () => {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/store" element={<Store />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/product/:id" element={<SpecificProduct />} />
        <Route path="*" element={<Fallback />} />
      </Routes>
    </Router>
  );
};

export default App;
