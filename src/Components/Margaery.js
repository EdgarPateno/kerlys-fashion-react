import React, { useState } from "react";
import ProductTabs from "./ProductTabs";
import ProductAccordion from "./ProductAccordion";
import ProductGallerySlides from "./ProductGallerySlides";
import ProductInfoCard from "./ProductInfoCard";

const Margaery = () => {
  //const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  const productImages = [
    "/images/product-photos/margaery/margaery1.webp",
    "/images/product-photos/margaery/margaery2.webp",
    "/images/product-photos/margaery/margaery3.webp",
    "/images/product-photos/margaery/margaery4.webp",
  ];

  return (
    <div className="mt-5">
      <section className="margaery-product-page product-gallery-info-grid container-sm">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2">
          <ProductGallerySlides images={productImages} />

          <ProductInfoCard
            productTitle="Margaery"
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
              Introducing our exquisite Margaery Earrings, the perfect blend of
              elegance and style. Crafted with precision, these earrings feature
              stunning Swarovski crystals that catch the light with every
              movement.{" "}
            </p>
            <p>
              Whether you're dressing up for a special occasion or adding a
              touch of glamour to your everyday look, these earrings are a
              must-have accessory. Their timeless design makes them a versatile
              choice that can effortlessly transition from day to night. Elevate
              your jewelry collection with these dazzling Crystal Drop Earrings
              today.
            </p>
          </div>
        </div>
        <ProductAccordion
          description={
            <div>
              <p>
                Introducing our exquisite Margaery Earrings, the perfect blend
                of elegance and style. Crafted with precision, these earrings
                feature stunning Swarovski crystals that catch the light with
                every movement.{" "}
              </p>
              <p>
                Whether you're dressing up for a special occasion or adding a
                touch of glamour to your everyday look, these earrings are a
                must-have accessory. Their timeless design makes them a
                versatile choice that can effortlessly transition from day to
                night. Elevate your jewelry collection with these dazzling
                Crystal Drop Earrings today.
              </p>
            </div>
          }
        />
      </section>
    </div>
  );
};

export default Margaery;
