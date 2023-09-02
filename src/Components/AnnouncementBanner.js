import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';


function AnnouncementBanner() {
  return (
    <div className="custom-carousel">
      <Carousel>
        <Carousel.Item interval={2000}>
          <div style={{ backgroundColor: 'black' }}>
            <h4 style={{ textAlign: 'center', color: 'white', padding: '5px 0' }}>Free Shipping On All Orders</h4>
          </div>
        </Carousel.Item>

        <Carousel.Item interval={2000}>
          <div style={{ backgroundColor: 'black' }}>
            <h4 style={{ textAlign: 'center', color: 'white', padding: '5px 0' }}>20% OFF On All Items</h4>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default AnnouncementBanner;