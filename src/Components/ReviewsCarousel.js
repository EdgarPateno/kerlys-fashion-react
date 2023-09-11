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
                            <img src="./images/reviews-photos/1.webp" className="card-img-top" alt="Review 1" />
                            <div className="reviews-text-content text-center">
                                <p>
                                    <span className="quotation-mark">❝</span>
                                    <span>These luxury heel shoes are a dream come true. Despite the height, they are incredibly comfortable to walk in. The red soles are a signature touch of elegance, and they make me feel like a fashion icon.
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='reviews-content-wrapper'>
                        <div className="card">
                            <img src="./images/reviews-photos/2.webp" className="card-img-top" alt="Review 2" />
                            <div className="reviews-text-content text-center">
                                <p>
                                    <span className="quotation-mark">❝</span>
                                    <span>These heels are my go-to for a night out with friends. They're not only stylish but also comfortable enough to dance the night away. The attention to detail in the design is evident.</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='reviews-content-wrapper'>
                        <div className="card">
                            <img src="./images/reviews-photos/3.webp" className="card-img-top" alt="Review 3" />
                            <div className="reviews-text-content text-center">
                                <p>
                                    <span className='quotation-mark'>❝</span>
                                    <span>
                                        These heels are a classic addition to my collection. They never go out of style, and I find myself reaching for them whenever I want to make a statement with my outfit. They're a true fashion staple.
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='reviews-content-wrapper'>
                        <div className="card">
                            <img src="./images/reviews-photos/review1.webp" className="card-img-top" alt="Review 4" />
                            <div className="reviews-text-content text-center">
                                <p>
                                    <span className="quotation-mark">❝</span>
                                    <span>I received these earrings and bracelets as a gift, and they've become my cherished pieces of jewelry. The symbolism behind the charm makes them even more special.</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='reviews-content-wrapper'>
                        <div className="card">
                            <img src="./images/reviews-photos/review2.webp" className="card-img-top" alt="Review 5" />
                            <div className="reviews-text-content text-center">
                                <p>
                                    <span className="quotation-mark">❝</span>
                                    <span>These earrings are absolutely gorgeous! The intricate design and sparkling gems make them perfect for a special occasion. I received so many compliments when I wore them to a wedding.</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='reviews-content-wrapper'>
                        <div className="card">
                            <img src="./images/reviews-photos/review6.webp" className="card-img-top" alt="Review 6" />
                            <div className="reviews-text-content text-center">
                                <p>
                                    <span className="quotation-mark">❝</span>
                                    <span>I love how versatile and elegant this bag is. It complements both formal and casual outfits effortlessly. The luxury color makes it a timeless addition to my collection.</span>
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
