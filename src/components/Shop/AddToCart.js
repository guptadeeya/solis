import React, { useState, useEffect } from "react";
import "../css/AddToCart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faTrash } from "@fortawesome/free-solid-svg-icons";
// import { Scrollbars } from 'react-custom-scrollbars-2';
import { motion } from 'framer-motion'
import { BiMinus, BiPlus } from 'react-icons/bi'

const AddToCart = () => {
  // State to keep track of cart items
  const [cartItems, setCartItems] = useState([]);

  // Retrieve cart items from localStorage on component mount
  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (storedCartItems) {
      setCartItems(storedCartItems);
    }
  }, []);

  return (
    <div className="cart-container">
      <h2>My Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {/* <div className="cart-item">
                <img src={item.image} alt={item.name} />
                <div>
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                </div>
              </div> */}

              <div className="cart-item">
                {/* <Scrollbars> */}
                <div className="product-img">
                  <img src={item.image} alt={item.name} />
                </div>

                <div className="title">
                  <p>{item.name}</p>
                </div>

                {/* <motion.div whileTap={{ scale: 0.75 }} className="add-minus-quantity">
                    <FontAwesomeIcon className="minus" icon={faMinus} />
                    <input className="number-input" type="text" placeholder="2" />
                    <FontAwesomeIcon className="plus" icon={faPlus} />
                  </motion.div> */}

                <div className='quantity'>
                  <motion.div whileTap={{ scale: 0.75 }}>
                    <BiMinus className="minus" />
                  </motion.div>

                  <p className='number'>2</p>

                  <motion.div whileTap={{ scale: 0.75 }}>
                    <BiPlus className="plus" />
                  </motion.div>
                </div>

                <div className="price">
                  Price
                </div>

                <div className="remove-item">
                  <FontAwesomeIcon className="trash" icon={faTrash} />
                </div>
                <hr />
                {/* </Scrollbars> */}
              </div>
            </li>
          ))}
          <div className="total">
            <h3>Cart total:  <span>Rs. 2000</span> </h3>
          </div>

          <div className="buy-now">
            Buy Now
          </div>
        </ul>
      )}
    </div>
  );
};

export default AddToCart;






