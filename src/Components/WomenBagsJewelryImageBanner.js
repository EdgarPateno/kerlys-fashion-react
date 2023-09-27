import '../CSS/WomenBagsJewelryImageBanner.css';
import { Link } from 'react-router-dom';
import React, { useRef } from 'react';

const WomenBagsJewelryImageBanner = () => {

  const headerRef = useRef(null);

  return (
    <section className="womens-bags-jewellery-img-text-overlay">
      <div className='container'>
        <div className="women-bags-jewellery-img-text-overlay-wrapper d-flex justify-content-center">
          <Link to="/bags" onClick={() => headerRef.current.scrollIntoView({ behavior: 'smooth' })}>
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
          </Link>

          <Link to="/jewelry" onClick={() => headerRef.current.scrollIntoView({ behavior: 'smooth' })}>
            <div className="womens-jewellery-text-overlay">
              <img
                src="./images/image-banners/women-bag-jewelry-image-banner-jewelry.webp"
                width="auto"
                height="auto"
                alt="Woman wearing jewellery"
              />
              <h2 className="text-center">JEWELLERY</h2>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WomenBagsJewelryImageBanner;