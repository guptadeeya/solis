import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../css/ProductPage.css";
import Header from "../../containers/Header";
import Details from "../../containers/Details";
import Footer from "../../containers/Footer";
import WhatsAppIcon from "../Home/WhatsappIcon"
import img1 from "../../images/img-1.png";

const ProductPage = () => {
  const { subcategoryName } = useParams();

  // Replace this with your actual logic to fetch products related to the subcategoryName
  // For demonstration purposes, we will display dummy product data.
  const products = [
    { id: 1, name: "Product 1", price: 10, image: img1 },
    { id: 2, name: "Product 2", price: 20, image: "product-2.jpg" },
    { id: 3, name: "Product 3", price: 15, image: "product-3.jpg" },
    // Add more product data here...
  ];

  // State to keep track of cart items
  const [cartItems, setCartItems] = useState([]);

  // State to manage the visibility of the success popup
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  // Function to handle "Add to Cart" button click
  const handleAddToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
    setShowSuccessPopup(true); // Show the success popup
  };

  useEffect(() => {
    // Retrieve cart items from localStorage on component mount
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (storedCartItems) {
      setCartItems(storedCartItems);
    }
  }, []);

  useEffect(() => {
    // Save cart items to localStorage whenever cartItems state changes
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // Function to hide the success popup after a certain duration
  useEffect(() => {
    if (showSuccessPopup) {
      const timeout = setTimeout(() => {
        setShowSuccessPopup(false);
      }, 2000); // Duration in milliseconds, adjust as needed
      return () => clearTimeout(timeout);
    }
  }, [showSuccessPopup]);

  return (
    <div>
      <Header cartItemCount={cartItems.length} />
      <Details />
      <div className="product-page">
        <h2>Products for Subcategory: {subcategoryName}</h2>
        <div className="product-cards">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={product.image} // Use imported images
                alt={product.name}
                className="product-image"
              />
              <h3>{product.name}</h3>
              <p>Price: ${product.price}</p>
              {/* Remove the Add to Cart button */}
              {/* You can still keep the Buy Now button or modify the layout as needed */}
              <button className="buy-now-button">
                <i className="fa fa-credit-card"></i> Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* The success popup */}
      {showSuccessPopup && (
        <div className={`success-popup ${showSuccessPopup ? "show" : ""}`}>
          <p>Item added to cart successfully!</p>
        </div>
      )}
      <WhatsAppIcon />
      <Footer />
    </div>
  );
};

export default ProductPage;
