import React from "react";
import { Table } from "react-bootstrap";

const Cart = () => {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

  return (
    <div className="container">
      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            <th colSpan="4">PRODUCT</th>
            <th>QUANTITY</th>
            <th>SUBTOTAL</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => {
            console.log("salePrice:", item.salePrice);
            console.log("quantity:", item.quantity);

            const subtotal =
              parseFloat(item.salePrice) * parseInt(item.quantity, 10);
            console.log("subtotal:", subtotal);

            return (
              <tr key={item.id}>
                <td colSpan="4">
                  <div className="row">
                    <div className="col">
                      <img
                        src={getProductImage(item.productTitle)}
                        alt={item.productTitle}
                        width={80}
                        height={80}
                      />
                    </div>
                    <div className="col">
                      <h5>{item.productTitle}</h5>
                      <p>{item.salePrice}</p>
                    </div>
                  </div>
                </td>
                <td>{item.quantity}</td>
                <td>{subtotal}</td> {/* Display the calculated subtotal */}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

function getProductImage(productTitle) {
  // Map the product title to the respective product image
  const productImageMap = {
    Aeliana: "/images/product-photos/aeliana/1.webp",
    Arya: "/images/product-photos/arya/arya-1.webp",
    Calliope: "/images/product-photos/calliope/calliope-1.webp",
    Cassia: "/images/product-photos/cassia/cassia-1.webp",
    Daenarys: "/images/product-photos/daenarys/daenarys1.webp",
    Dracarys: "/images/product-photos/dracarys/dracarys-1.webp",
    Gwenore: "/images/product-photos/gwenore/gwenore-1.webp",
    Sansa: "/images/product-photos/sansa/sansa-2.webp",
    // Add mappings for other products here
  };

  return productImageMap[productTitle] || ""; // Return an empty string if the product image is not found
}

export default Cart;
