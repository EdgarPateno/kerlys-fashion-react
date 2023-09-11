import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../CSS/FeaturedProductsCarousel.css';


const FeaturedProductsCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4, // Number of cards to show at a time
        slidesToScroll: 1, // Number of cards to slide on each click
        autoplay: true, // Automatically slide the carousel
        autoplaySpeed: 3000, // Delay between each slide in milliseconds
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };

    return (
        <section className="featured-products-carousel">
            <div className='container'>
                <h2 className='featured-products-carousel-title text-center h1 mb-4'>OUR BEST SELLERS</h2>
                <Slider {...settings}>
                    <div className='featured-product-content-wrapper'>
                        <div className="card">
                            <img src="./images/featured-products-carousel/1.webp" className="card-img-top" alt="Featured Product 1" />
                            <div className="featured-product-text-content text-center">
                                <h3>Daenarys</h3>
                                <p>
                                    <span className='featured-product regular-price'>$700 </span>
                                    <span className='featured-product sale-price'>$600</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='featured-product-content-wrapper'>
                        <div className="card">
                            <img src="./images/featured-products-carousel/2.webp" className="card-img-top" alt="Featured Product 2" />
                            <div className="featured-product-text-content text-center">
                                <h3>Greyjoy</h3>
                                <p>
                                    <span className='featured-product regular-price'>$800 </span>
                                    <span className='featured-product sale-price'>$700</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='featured-product-content-wrapper'>
                        <div className="card">
                            <img src="./images/featured-products-carousel/3.webp" className="card-img-top" alt="Featured Product 3" />
                            <div className="featured-product-text-content text-center">
                                <h3>Aeliana</h3>
                                <p>
                                    <span className='featured-product regular-price'>$900 </span>
                                    <span className='featured-product sale-price'>$800</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='featured-product-content-wrapper'>
                        <div className="card">
                            <img src="./images/featured-products-carousel/4.webp" className="card-img-top" alt="Featured Product 4" />
                            <div className="featured-product-text-content text-center">
                                <h3>Tyene</h3>
                                <p>
                                    <span className='featured-product regular-price'>$700 </span>
                                    <span className='featured-product sale-price'>$600</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='featured-product-content-wrapper'>
                        <div className="card">
                            <img src="./images/featured-products-carousel/5.webp" className="card-img-top" alt="Featured Product 5" />
                            <div className="featured-product-text-content text-center">
                                <h3>Gilly</h3>
                                <p>
                                    <span className='featured-product regular-price'>$900 </span>
                                    <span className='featured-product sale-price'>$800</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='featured-product-content-wrapper'>
                        <div className="card">
                            <img src="./images/featured-products-carousel/6.webp" className="card-img-top" alt="Featured Product 6" />
                            <div className="featured-product-text-content text-center">
                                <h3>Idylle </h3>
                                <p>
                                    <span className='featured-product regular-price'>$900 </span>
                                    <span className='featured-product sale-price'>$800</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </section>
    );
};

export default FeaturedProductsCarousel;
