import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const FeaturedProductsCarousel = () => {
    return (
        <section className='featured-products-carousel my-5'>
            <div className='container'>
                <h2 className='h1 mb-4 text-center'>OUR BEST SELLERS</h2>
                <Carousel prevIcon={<BsChevronLeft />} nextIcon={<BsChevronRight />}>
                    <Carousel.Item style={{ backgroundColor: 'white' }}>
                        <div className="d-flex justify-content-between gap-3">
                            <div className="card">
                                <img src="./images/featured-products-carousel/1.webp" className="card-img-top" alt="Bag 1" />
                            </div>

                            <div className="card">
                                <img src="./images/featured-products-carousel/2.webp" className="card-img-top" alt="Jewelry 1" />
                            </div>

                            <div className="card">
                                <img src="./images/featured-products-carousel/3.webp" className="card-img-top" alt="Shoes 1" />
                            </div>

                            <div className="card">
                                <img src="./images/featured-products-carousel/4.webp" className="card-img-top" alt="Jewelry 2" />
                            </div>
                        </div>
                    </Carousel.Item>

                    <Carousel.Item style={{ backgroundColor: 'white' }}>
                        <div className="d-flex justify-content-between gap-3">
                            <div className="card">
                                <img src="./images/featured-products-carousel/5.webp" className="card-img-top" alt="Shoes 2" />
                            </div>

                            <div className="card">
                                <img src="./images/featured-products-carousel/6.webp" className="card-img-top" alt="Jewelry 3" />
                            </div>

                            <div className="card">
                                <img src="./images/featured-products-carousel/7.webp" className="card-img-top" alt="Shoes 3" />
                            </div>

                            <div className="card">
                                <img src="./images/featured-products-carousel/8.webp" className="card-img-top" alt="Shoes 4" />
                            </div>

                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </section>
    );
};

export default FeaturedProductsCarousel;