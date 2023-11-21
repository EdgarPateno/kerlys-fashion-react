import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BelowATCBadges from "./BelowATCBadges";
import "../CSS/ProductInfoCard.css";

function ProductInfoCard({
  productTitle,
  regularPrice,
  salePrice,
  saveAmount,
  id,
}) {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const handleAddToCart = (id) => {
    navigate("/cart/" + id);
  };

  const handleQuantityChange = (event) => {
    const value = event.target.value;
    const sanitizedValue = value.replace(/[^0-9]/g, "");
    setQuantity(sanitizedValue);
  };

  const handleKeyDown = (event) => {
    if (event.key === "e") {
      event.preventDefault();
    }
  };

  return (
    <div className="product-info-content col">
      <div className="card">
        <div className="card-body">
          <small>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="ms-2">300 Trusted Reviews</span>
          </small>
          <h5 className="h1" id="productTitle">
            {productTitle}
          </h5>
          <div className="h5 d-flex align-items-center" id="productPrice">
            <span className="regular-price">{regularPrice}</span>
            <span className="sale-price">{salePrice}</span>
            <span id="save-badge" className="badge badge-save50 bg-danger">
              {saveAmount}
            </span>
          </div>

          <div className="free-shipping-product-form my-3">
            <img
              className="me-2"
              src="/logos-icons/free-shipping-icon.png"
              alt="free shipping icon"
            />
            <small className="free-shipping-below-shipping-icon text-muted">
              Free Shipping. Order now, delivery in 3-5 business days.
            </small>
          </div>

          <div className="quantity">
            <label htmlFor="quantity" className="mb-1">
              Quantity
            </label>
          </div>
          <div>
            <input
              className="form-control text-center"
              style={{ width: "50%" }}
              type="number"
              name="quantity"
              id="productQuantity"
              min="1"
              value={quantity}
              onChange={handleQuantityChange}
              onKeyDown={handleKeyDown}
            />
          </div>

          <div className="add-to-cart-button my-4">
            <button
              id="addToCartButton"
              className="btn btn-primary"
              style={{ width: "100%" }}
              onClick={() => handleAddToCart(id)}
            >
              Add to Cart
            </button>
          </div>

          <div className="productpage-secure-checkout-content">
            <h6 className="text-center" style={{ fontSize: "13px" }}>
              SAFE AND SECURE CHECKOUT WITH:
            </h6>
            <div className="credit-card-logos d-flex justify-content-center gap-2">
              <i className="fa fa-cc-visa"></i>
              <i className="fa fa-cc-amex"></i>
              <i className="fa fa-cc-mastercard"></i>
              <i className="fa fa-cc-discover"></i>
              <i className="fa fa-cc-paypal"></i>
            </div>
          </div>

          <BelowATCBadges />
        </div>
      </div>
    </div>
  );
}

export default ProductInfoCard;
