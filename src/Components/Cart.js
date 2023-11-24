import React from "react";
import "../CSS/Cart.css";

function Cart() {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

  const handleDeleteItem = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(updatedCartItems));

    window.location.reload();
  };

  const handleIncrementQuantity = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity =
      parseInt(updatedCartItems[index].quantity) + 1;
    localStorage.setItem("cart", JSON.stringify(updatedCartItems));

    window.location.reload();
  };

  const handleDecrementQuantity = (index) => {
    const updatedCartItems = [...cartItems];
    if (updatedCartItems[index].quantity > 1) {
      updatedCartItems[index].quantity -= 1;
      localStorage.setItem("cart", JSON.stringify(updatedCartItems));

      window.location.reload();
    }
  };

  const calculateSubtotal = (quantity, price) => {
    return quantity * price;
  };

  const calculateTotal = () => {
    let total = 0;

    cartItems.forEach((item) => {
      total += calculateSubtotal(item.quantity, item.salePrice);
    });

    return total;
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-5">Review Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        <table style={{ width: "1200px" }}>
          <thead>
            <tr>
              <th style={{ width: "600px" }}>PRODUCT</th>
              <th style={{ width: "150px" }}>QUANTITY</th>
              <th style={{ width: "150px" }}>SUBTOTAL</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index}>
                <td>
                  <div className="d-flex">
                    <img
                      src={item.image}
                      width={100}
                      height={100}
                      alt={item.productTitle}
                      className="me-5"
                    />
                    <div>
                      <h3>{item.productTitle}</h3>
                      <p>${item.salePrice}</p>
                    </div>
                  </div>
                </td>
                <td>
                  <button onClick={() => handleDecrementQuantity(index)}>
                    <i className="fa fa-minus"></i>
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button onClick={() => handleIncrementQuantity(index)}>
                    <i className="fa fa-plus"></i>
                  </button>
                </td>
                <td>${calculateSubtotal(item.quantity, item.salePrice)}</td>
                <td>
                  <button onClick={() => handleDeleteItem(index)}>
                    <i className="fa fa-trash-o"></i>
                  </button>
                </td>
              </tr>
            ))}
            <tr>
              <td className="text-center" colSpan="2">
                ESTIMATED TOTAL
              </td>
              <td>${calculateTotal()}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Cart;
