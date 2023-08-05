import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./css/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faShoppingBasket } from "@fortawesome/free-solid-svg-icons";

const Header = ({ cartItemCount }) => {
  // State to keep track of cart items
  const [cartItems, setCartItems] = useState([]);

  // Function to handle the basket button click
  const handleBasketClick = () => {
    // Perform any action you want when the basket button is clicked
    console.log("Basket button clicked!");
    // For demonstration, let's add a dummy item to the cart when the button is clicked
    setCartItems((prevCartItems) => [
      ...prevCartItems,
      { id: 4, name: "New Item", price: 30, image: "new-item.jpg" },
    ]);
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

  return (
    <div className="header">
      <div className="logo">
        <div className="solis">SOLiS</div>
        <div className="cattle-feed">Cattle Feed</div>
      </div>

      <div className="search">
        <input
          className="search-input"
          type="text"
          placeholder="आइटम खोजें"
        />

        {/* searchIcon */}
        <FontAwesomeIcon className="search-icon" icon={faMagnifyingGlass} />
      </div>

      <div className="cart">
        {/* Use the Link component to navigate to the cart page */}
        <Link to="/cart" className="basket-button" onClick={handleBasketClick}>
          {cartItemCount > 0 && (
            <div className="cart-notification">{cartItemCount}</div>
          )}
          <FontAwesomeIcon className="basket-icon" icon={faShoppingBasket} />
          <div className="my-cart">मेरी टोकरी</div>
        </Link>
      </div>
    </div>
  );
};

export default Header;







