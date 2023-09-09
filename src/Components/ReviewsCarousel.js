import '../CSS/ReviewsCarousel.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ReviewsCarousel = () => {
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
        <section className="reviews-carousel">
            <div className='container'>
                <h2 className='reviews-carousel-title text-center h1 mb-4'>SPREAD THE WORDS</h2>
                <Slider {...settings}>
                    <div className='reviews-content-wrapper'>
                        <div className="card">
                            <img src="./images/reviews-photos/1.webp" class="card-img-top" alt="Review 1" />
                            <div className="reviews-text-content text-center">
                                <h3>Daenarys</h3>
                                <p>
                                    <span className='reviews regular-price'>$700 </span>
                                    <span className='reviews sale-price'>$600</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='reviews-content-wrapper'>
                        <div className="card">
                            <img src="./images/reviews-photos/2.webp" class="card-img-top" alt="Review 2" />
                            <div className="reviews-text-content text-center">
                                <h3>Greyjoy</h3>
                                <p>
                                    <span className='reviews regular-price'>$800 </span>
                                    <span className='reviews sale-price'>$700</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='reviews-content-wrapper'>
                        <div className="card">
                            <img src="./images/reviews-photos/3.webp" class="card-img-top" alt="Review 3" />
                            <div className="reviews-text-content text-center">
                                <h3>Aeliana</h3>
                                <p>
                                    <span className='reviews regular-price'>$900 </span>
                                    <span className='reviews sale-price'>$800</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='reviews-content-wrapper'>
                        <div className="card">
                            <img src="./images/reviews-photos/review1.webp" class="card-img-top" alt="Review 4" />
                            <div className="reviews-text-content text-center">
                                <h3>Tyene</h3>
                                <p>
                                    <span className='reviews regular-price'>$700 </span>
                                    <span className='reviews sale-price'>$600</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='reviews-content-wrapper'>
                        <div className="card">
                            <img src="./images/reviews-photos/review2.webp" class="card-img-top" alt="Review 5" />
                            <div className="reviews-text-content text-center">
                                <h3>Gilly</h3>
                                <p>
                                    <span className='reviews regular-price'>$900 </span>
                                    <span className='reviews sale-price'>$800</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='reviews-content-wrapper'>
                        <div className="card">
                            <img src="./images/reviews-photos/review6.webp" class="card-img-top" alt="Review 6" />
                            <div className="reviews-text-content text-center">
                                <h3>Idylle </h3>
                                <p>
                                    <span className='reviews regular-price'>$900 </span>
                                    <span className='reviews sale-price'>$800</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </section>
    );
};

export default ReviewsCarousel;
