import React, { useState } from "react";
import ProductTabs from "./ProductTabs";
import ProductAccordion from "./ProductAccordion";
import ProductGallerySlides from "./ProductGallerySlides";
import ProductInfoCard from "./ProductInfoCard";

const Osha = () => {
  //const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  const productImages = [
    "/images/product-photos/osha/osha1.webp",
    "/images/product-photos/osha/osha2.webp",
    "/images/product-photos/osha/osha3.webp",
    "/images/product-photos/osha/osha4.webp",
  ];

  return (
    <div className="mt-5">
      <section className="osha-product-page product-gallery-info-grid container-sm">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2">
          <ProductGallerySlides images={productImages} />

          <ProductInfoCard
            productTitle="Osha"
            regularPrice="700"
            salePrice="600"
            saveAmount="100"
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
              Introducing the exquisite Osha Luxury Bag – a true embodiment of
              elegance and sophistication. Crafted with the utmost precision and
              attention to detail, this masterpiece redefines luxury in every
              sense.
            </p>

            <p>
              Enveloped in the gentle embrace of a soothing baby blue hue, the
              Aeliana Luxury Bag exudes an aura of timeless charm and refined
              beauty. The color evokes a sense of tranquility and grace, making
              it the perfect companion for any occasion, whether it be a casual
              outing or a glamorous soirée.
            </p>

            <p>
              Indulge in the opulence of genuine leather as your fingertips
              graze across the impeccably smooth surface of the Aeliana bag.
              This carefully selected leather not only enhances the bag's
              durability but also lends an air of exclusivity, ensuring that
              your accessory stands the test of time while becoming a symbol of
              your impeccable taste.
            </p>
          </div>
        </div>
        <ProductAccordion
          description={
            <div>
              <p>
                Introducing the exquisite Osha Luxury Bag – a true embodiment of
                elegance and sophistication. Crafted with the utmost precision
                and attention to detail, this masterpiece redefines luxury in
                every sense.
              </p>
              <p>
                Enveloped in the gentle embrace of a soothing baby blue hue, the
                Aeliana Luxury Bag exudes an aura of timeless charm and refined
                beauty. The color evokes a sense of tranquility and grace,
                making it the perfect companion for any occasion, whether it be
                a casual outing or a glamorous soirée.
              </p>
            </div>
          }
        />
      </section>
    </div>
  );
};

export default Osha;
