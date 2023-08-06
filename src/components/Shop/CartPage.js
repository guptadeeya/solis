import React from "react";
import AddToCart from "./AddToCart";

const CartPage = () => {
  return (
    <div>
      <h1>My Cart Page</h1>
      {/* Pass an empty array as the default value for cartItems */}
      <AddToCart />
    </div>
  );
};

export default CartPage;

