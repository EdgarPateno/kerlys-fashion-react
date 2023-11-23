import React, { useState } from "react";
import ProductTabs from "./ProductTabs";
import ProductAccordion from "./ProductAccordion";
import ProductGallerySlides from "./ProductGallerySlides";
import ProductInfoCard from "./ProductInfoCard";

const Shae = () => {
  //const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  const productImages = [
    "/images/product-photos/shae/shae1.webp",
    "/images/product-photos/shae/shae2.webp",
    "/images/product-photos/shae/shae3.webp",
  ];

  return (
    <div className="mt-5">
      <section className="shae-product-page product-gallery-info-grid container-sm">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2">
          <ProductGallerySlides images={productImages} />

          <ProductInfoCard
            productTitle="Shae"
            regularPrice="1000"
            salePrice="800"
            saveAmount="200"
          />
        </div>
      </section>
      <section className="container mt-sm-3 mt-md-5">
        <ProductTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="tab-content">
          <div
            id="description"
            className={`tab-pane ${
              activeTab === "description" ? "active" : ""
            }`}
          >
            <p>
              Discover the beauty of simplicity with our elegant and timeless
              Shae necklace. This elegant piece is a symbol of understated
              sophistication. The sterling silver pendant hangs gracefully from
              a delicate chain, making it a versatile accessory suitable for any
              outfit or occasion.
            </p>
            <p>
              Whether you wear it alone for a minimalist look or layer it with
              other necklaces for a trendy style, this necklace is a timeless
              addition to your jewelry collection. Elevate your elegance with
              our Classic Silver Pendant Necklace.
            </p>
          </div>
        </div>
        <ProductAccordion
          description={
            <div>
              <p>
                Discover the beauty of simplicity with our elegant and timeless
                Shae necklace. This elegant piece is a symbol of understated
                sophistication. The sterling silver pendant hangs gracefully
                from a delicate chain, making it a versatile accessory suitable
                for any outfit or occasion.
              </p>
              <p>
                Whether you wear it alone for a minimalist look or layer it with
                other necklaces for a trendy style, this necklace is a timeless
                addition to your jewelry collection. Elevate your elegance with
                our Classic Silver Pendant Necklace.
              </p>
            </div>
          }
        />
      </section>
    </div>
  );
};

export default Shae;
