import React, { useEffect, useState } from 'react';
import '../CSS/Aeliana.css'

const Aeliana = () => {

    const [quantity, setQuantity] = useState(1);
    const showSlides = (n) => {
        let i;
        let slides = document.getElementsByClassName("aeliana-pp-Slides");
        let dots = document.getElementsByClassName("aeliana-pp");

        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }

    const plusSlides = (n) => {
        showSlides(slideIndex += n);
    }

    const currentSlide = (n) => {
        showSlides(slideIndex = n);
    }

    let slideIndex = 1;

    useEffect(() => {
        showSlides(slideIndex);
    }, []);

    return (
        <section className="aeliana-product-page container-sm">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-4">
                <div className="col">
                    <div className="card my-5">
                        <div className="container">
                            <div className="aeliana-pp-Slides">
                                <img src="/images/product-photos/aeliana/1.webp" style={{ width: '100%' }} />
                            </div>

                            <div className="aeliana-pp-Slides">
                                <img src="/images/product-photos/aeliana/2.webp" style={{ width: '100%' }} />
                            </div>

                            <div className="aeliana-pp-Slides">
                                <img src="/images/product-photos/aeliana/3.webp" style={{ width: '100%' }} />
                            </div>

                            <div className="aeliana-pp-Slides">
                                <img src="/images/product-photos/aeliana/4.webp" style={{ width: '100%' }} />
                            </div>

                            <div className="aeliana-pp-Slides">
                                <img src="/images/product-photos/aeliana/5.webp" style={{ width: '100%' }} />
                            </div>

                            <a className="prev" onClick={() => plusSlides(-1)}>❮</a>
                            <a className="next" onClick={() => plusSlides(1)}>❯</a>

                            <p>&nbsp;</p>
                            <div className="row">
                                <div className="column">
                                    <img className="aeliana-pp cursor" src="/images/product-photos/aeliana/1.webp" style={{ width: '100%' }} onClick={() => currentSlide(1)} alt="aeliana bag" />
                                </div>
                                <div className="column">
                                    <img className="aeliana-pp cursor" src="/images/product-photos/aeliana/2.webp" style={{ width: '100%' }} onClick={() => currentSlide(2)} alt="aeliana bag" />
                                </div>
                                <div className="column">
                                    <img className="aeliana-pp cursor" src="/images/product-photos/aeliana/3.webp" style={{ width: '100%' }} onClick={() => currentSlide(3)} alt="aeliana bag" />
                                </div>
                                <div className="column">
                                    <img className="aeliana-pp cursor" src="/images/product-photos/aeliana/4.webp" style={{ width: '100%' }} onClick={() => currentSlide(4)} alt="aeliana bag" />
                                </div>
                                <div className="column">
                                    <img className="aeliana-pp cursor" src="/images/product-photos/aeliana/5.webp" style={{ width: '100%' }} onClick={() => currentSlide(5)} alt="aeliana bag" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card mt-5">
                        <div className="card-body">
                            <small>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className='ms-2'>300 Trusted Reviews</span>
                            </small>
                            <h5 className="h1" id="productTitle">Aeliana</h5>
                            <div className="h5" id="productPrice">$600 USD <del className="mx-2">$700</del>
                                <span id="save-badge" class="badge badge-save50 bg-danger">Save
                                    $100</span>
                            </div>


                            <div className="free-shipping-product-form my-3">
                                <img src="/logos-icons/free-shipping-icon.png" /> <small>Free Express Shipping<br />
                                    Order now, delivery in 3-5 business days.</small>
                            </div>

                            <div className="row">

                            </div>

                            <div className="quantity">
                                <label for="quantity" className="mb-1">Quantity</label>
                            </div>
                            <div>
                                <input
                                    className="form-control text-center"
                                    style={{ width: '150px' }}
                                    type="number"
                                    name="quantity"
                                    id="productQuantity"
                                    min="1"
                                    value={quantity}
                                    onChange={(event) => setQuantity(event.target.value)}
                                />
                            </div>

                            <div className="add-to-cart-button my-4">
                                <button id="addToCartButton" className="btn btn-primary" style={{ width: '150px' }}>Add to Cart</button>
                            </div>

                            <div className="productpage-secure-checkout-cc-icons">
                                <h6 style={{ fontSize: '13px' }}>SAFE AND SECURE CHECKOUT WITH:</h6>
                                <i className="fa fa-cc-visa" id="product-page-cc-icon"></i>
                                <i className="fa fa-cc-amex" id="product-page-cc-icon"></i>
                                <i className="fa fa-cc-mastercard" id="product-page-cc-icon"></i>
                                <i className="fa fa-cc-discover" id="product-page-cc-icon"></i>
                                <i className="fa fa-cc-paypal" id="product-page-cc-icon"></i>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Aeliana;