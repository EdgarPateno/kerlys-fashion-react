import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4, // Number of cards to show at a time
        slidesToScroll: 1, // Number of cards to slide on each click
        autoplay: true, // Automatically slide the carousel
        autoplaySpeed: 2000, // Delay between each slide in milliseconds
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
        <div>
            <h2>Carousel Example</h2>
            <Slider {...settings}>
                <div>
                    <div className="card">
                        <img src="./images/featured-products-carousel/1.webp" class="card-img-top" alt="Featured Product 1" />
                        <h3>Card 1</h3>
                        <p>Card 1 Content</p>
                    </div>
                </div>
                <div>
                    <div className="card">
                        <img src="./images/featured-products-carousel/2.webp" class="card-img-top" alt="Featured Product 2" />
                        <h3>Card 2</h3>
                        <p>Card 2 Content</p>
                    </div>
                </div>
                <div>
                    <div className="card">
                        <img src="./images/featured-products-carousel/3.webp" class="card-img-top" alt="Featured Product 3" />
                        <h3>Card 3</h3>
                        <p>Card 3 Content</p>
                    </div>
                </div>
                <div>
                    <div className="card">
                        <img src="./images/featured-products-carousel/4.webp" class="card-img-top" alt="Featured Product 4" />
                        <h3>Card 4</h3>
                        <p>Card 4 Content</p>
                    </div>
                </div>
                <div>
                    <div className="card">
                        <img src="./images/featured-products-carousel/5.webp" class="card-img-top" alt="Featured Product 5" />
                        <h3>Card 5</h3>
                        <p>Card 5 Content</p>
                    </div>
                </div>
                <div>
                    <div className="card">
                        <img src="./images/featured-products-carousel/6.webp" class="card-img-top" alt="Featured Product 6" />
                        <h3>Card 6</h3>
                        <p>Card 6 Content</p>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default Carousel;
