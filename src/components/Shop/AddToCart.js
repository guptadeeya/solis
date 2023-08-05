import React from "react";

const AddToCartPage = ({ cartItems }) => {
  return (
    <div>
      <h1>My Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <p>{item.name}</p>
              <p>Price: ${item.price}</p>
              {/* Add more details about the item if needed */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AddToCartPage;
