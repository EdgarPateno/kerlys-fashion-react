import React from 'react';

const WomenBagsJewelryImageBanner = () => {
  return (
    <section className="womens-bags-jewellery-img-text-overlay py-5">
      <div className='container'>
        <div className="women-bags-jewellery-img-text-overlay-wrapper d-flex justify-content-center">
          <a href="all-bags-menu-main-nav.html">
            <div className="womens-bags-text-overlay">
              <img
                src="./images/image-banners/women-bag-jewelry-image-banner-bag.webp"
                data-aos="flip-right"
                width="auto"
                height="auto"
                alt="Woman holding a bag"
              />
              <h2 className="text-center">BAGS</h2>
            </div>
          </a>

          <a href="jewelry-collection.html">
            <div className="womens-jewellery-text-overlay">
              <img
                src="./images/image-banners/women-bag-jewelry-image-banner-jewelry.webp"
                data-aos="flip-left"
                width="auto"
                height="auto"
                alt="Woman wearing jewellery"
              />
              <h2 className="text-center">JEWELLERY</h2>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default WomenBagsJewelryImageBanner;