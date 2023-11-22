import React from "react";

const Cart = () => {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

  return (
    <div>
      {cartItems.map((item) => (
        <div key={item.id}>
          <h3>{item.productTitle}</h3>
          <p>Regular Price: {item.regularPrice}</p>
          <p>Sale Price: {item.salePrice}</p>
          <p>Save Amount: {item.saveAmount}</p>
          <p>Quantity: {item.quantity}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
