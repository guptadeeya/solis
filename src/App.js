import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Shop from "./components/Shop/Shop";
import Home from "./components/Home/Home";
import ProductPage from './components/Shop/ProductPage'
import AddToCart from './components/Shop/AddToCart'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/products/:subcategoryName" element={<ProductPage />} />
          <Route path="/cart" element={<AddToCart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
