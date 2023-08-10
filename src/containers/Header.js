import React from "react";
// import { Link } from "react-router-dom";
import "./css/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
// import {faShoppingBasket } from "@fortawesome/free-solid-svg-icons";

const Header = ({ cartItemCount }) => {
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

      {/* <div className="cart">
        <Link to="/cart" className="basket-button">
          {cartItemCount > 0 && (
            <div className="cart-notification">{cartItemCount}</div>
          )}
          <FontAwesomeIcon className="basket-icon" icon={faShoppingBasket} />
          <div className="my-cart">मेरी टोकरी</div>
        </Link>
      </div> */}
    </div>
  );
};

export default Header;
