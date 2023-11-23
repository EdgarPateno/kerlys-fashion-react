import React, { useState } from "react";
import ProductTabs from "./ProductTabs";
import ProductAccordion from "./ProductAccordion";
import ProductGallerySlides from "./ProductGallerySlides";
import ProductInfoCard from "./ProductInfoCard";

const Melisandre = () => {
  //const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  const productImages = [
    "/images/product-photos/melisandre/melisandre1.png",
    "/images/product-photos/melisandre/melisandre2.png",
    "/images/product-photos/melisandre/melisandre3.png",
    "/images/product-photos/melisandre/melisandre4.png",
  ];

  return (
    <div className="mt-5">
      <section className="melisandre-product-page product-gallery-info-grid container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2">
          <ProductGallerySlides images={productImages} />

          <ProductInfoCard
            productTitle="Melisandre"
            regularPrice="1000"
            salePrice="800"
            saveAmount="200"
          />
        </div>
      </section>
      <section className="product-description-and-policies container mt-sm-3 mt-md-5">
        <ProductTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="tab-content">
          <div
            id="description"
            className={`tab-pane ${
              activeTab === "description" ? "active" : ""
            }`}
          >
            <p>
              The Melisandre Blossom slingback pump is crafted from suede baby
              goat leather, which is complemented by an adjustable back strap in
              Louis Vuitton's emblematic natural leather. The strap bears the
              House signature and an engraved, gold-tone stud. The heel,
              inspired by the round Monogram Flower, is color-matched to the
              upper for a particularly refined look.
            </p>
          </div>
        </div>
        <ProductAccordion
          description={
            <div>
              <p>
                The Melisandre Blossom slingback pump is crafted from suede baby
                goat leather, which is complemented by an adjustable back strap
                in Louis Vuitton's emblematic natural leather. The strap bears
                the House signature and an engraved, gold-tone stud. The heel,
                inspired by the round Monogram Flower, is color-matched to the
                upper for a particularly refined look.
              </p>
            </div>
          }
        />
      </section>
    </div>
  );
};

export default Melisandre;
