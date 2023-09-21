import React, { useState, useEffect } from 'react';
import '../CSS/ProductGallerySlides.css';

const ProductGallerySlides = ({ images }) => {
    const [slideIndex, setSlideIndex] = useState(1);

    const showSlides = (n) => {
        if (n < 1) {
            setSlideIndex(images.length);
        } else if (n > images.length) {
            setSlideIndex(1);
        } else {
            setSlideIndex(n);
        }
    };

    const plusSlides = (n) => {
        showSlides(slideIndex + n);
    };

    const currentSlide = (n) => {
        showSlides(n);
    };

    useEffect(() => {
        showSlides(slideIndex);
    }, [slideIndex]);

    return (
        <div className="product-gallery container">
            <div className="slides">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`slide ${index + 1 === slideIndex ? 'active' : ''}`}
                    >
                        <img src={image} alt={`Product Image ${index + 1}`} />
                    </div>
                ))}
            </div>
            <a className="prev" onClick={() => plusSlides(-1)}>❮</a>
            <a className="next" onClick={() => plusSlides(1)}>❯</a>
            <div className="thumbnails">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`thumbnail cursor ${index + 1 === slideIndex ? 'active' : ''}`}
                        onClick={() => currentSlide(index + 1)}
                    >
                        <img src={image} alt={`Thumbnail ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductGallerySlides;
