import '../CSS/ElevateFashionImageBanner.css';
import { Link } from 'react-router-dom';
import React, { useRef } from 'react';

function ElevateFashionImageBanner() {

  const headerRef = useRef(null);

  return (
    <section className="elevate-fashion-image-banner">
      <div className="elevate-fashion-image-banner-container">
        <div className="elevate-fashion-text-overlay-box">
          <h3 className="h1 mb-4">
            <span className="elevate-fashion">Elevate Your Fashion.</span> <br />
            <span className="embrace-luxury">Embrace Luxury.</span>
          </h3>
          <Link to="lv-bags" onClick={() => headerRef.current.scrollIntoView({ behavior: 'smooth' })} className="btn btn-primary">SHOP NOW</Link>
        </div>
        <img src="./images/image-banners/elevate-fashion-image-banner-woman-on-pool.webp" width="auto"
          height="auto" alt="Woman on a pool with Louis Vuitton bag" />
      </div>
    </section>
  )
}

export default ElevateFashionImageBanner