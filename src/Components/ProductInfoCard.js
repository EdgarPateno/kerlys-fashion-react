import { useState } from "react";
import BelowATCBadges from "./BelowATCBadges";
import "../CSS/ProductInfoCard.css";
import { useNavigate } from "react-router-dom";

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
    Catelyn: "/images/product-photos/catelyn/catelyn1.webp",
    Cersei: "/images/product-photos/cersei/cersei1.webp",
    Baelish: "/images/product-photos/baelish/baelish1.webp",
    Lysa: "/images/product-photos/lysa/lysa1.webp",
    Arryn: "/images/product-photos/arryn/arryn1.webp",
    Osha: "/images/product-photos/osha/osha1.webp",
    Yara: "/images/product-photos/yara/yara1.webp",
    Ygritte: "/images/product-photos/ygritte/ygritte1.webp",
    Margaery: "/images/product-photos/margaery/margaery1.webp",
    Brienne: "/images/product-photos/brienne/brienne1.webp",
    Shae: "/images/product-photos/shae/shae1.webp",
    Ros: "/images/product-photos/ros/ros1.webp",
    Melisandre: "/images/product-photos/melisandre/melisandre1.png",
    Greyjoy: "/images/product-photos/greyjoy/greyjoy1.webp",
    Missandei: "/images/product-photos/missandei/missandei1.webp",
    Olenna: "/images/product-photos/olenna/olenna-shoes-1.webp",
    Myrcella: "/images/product-photos/myrcella/myrcella-shoes-1.webp",
    Tyene: "/images/product-photos/tyene/tyene-shoes-1.webp",
  };

  return productImageMap[productTitle] || "";
}

function ProductInfoCard({
  productTitle,
  regularPrice,
  salePrice,
  saveAmount,
}) {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

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

  const handleAddToCart = () => {
    const cartItem = {
      productTitle,
      salePrice,
      quantity,
      image: getProductImage(productTitle), // This is to get the image based on the product title and display it on the cart
    };

    let cartItems = [];
    try {
      cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    } catch (error) {
      console.error("Error parsing cart items:", error);
    }

    const existingItemIndex = cartItems.findIndex(
      (item) => item.productTitle === productTitle
    );

    if (existingItemIndex !== -1) {
      // If the product already exists in the cart, update the quantity
      cartItems[existingItemIndex].quantity =
        parseInt(cartItems[existingItemIndex].quantity) + parseInt(quantity);
    } else {
      // Otherwise, add a new item to the cart
      cartItems.push(cartItem);
    }

    localStorage.setItem("cart", JSON.stringify(cartItems));

    navigate("/cart"); // Redirect to the /cart page
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
            <span className="regular-price">${regularPrice}</span>
            <span className="sale-price">${salePrice}</span>
            <span id="save-badge" className="badge badge-save50 bg-danger">
              ${saveAmount}
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
              onClick={handleAddToCart}
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
