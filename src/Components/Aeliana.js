import React, { useEffect, useState } from 'react';
import '../CSS/Aeliana.css'

const Aeliana = () => {

    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState('description');

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
        <div>
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
                                    <span id="save-badge" className="badge badge-save50 bg-danger">Save
                                        $100</span>
                                </div>


                                <div className="free-shipping-product-form my-3">
                                    <img src="/logos-icons/free-shipping-icon.png" /> <small>Free Express Shipping<br />
                                        Order now, delivery in 3-5 business days.</small>
                                </div>

                                <div className="row">

                                </div>

                                <div className="quantity">
                                    <label htmlFor="quantity" className="mb-1">Quantity</label>
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

                                <div className="productpage-secure-checkout-content">
                                    <h6 style={{ fontSize: '13px' }}>SAFE AND SECURE CHECKOUT WITH:</h6>
                                    <div className="credit-card-logos d-flex gap-2">
                                        <i className="fa fa-cc-visa"></i>
                                        <i className="fa fa-cc-amex"></i>
                                        <i className="fa fa-cc-mastercard"></i>
                                        <i className="fa fa-cc-discover"></i>
                                        <i className="fa fa-cc-paypal"></i>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='container'>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <button
                            className={`nav-link ${activeTab === 'description' ? 'active' : ''}`}
                            onClick={() => setActiveTab('description')}
                        >
                            DESCRIPTION
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            className={`nav-link ${activeTab === 'shipping' ? 'active' : ''}`}
                            onClick={() => setActiveTab('shipping')}
                        >
                            SHIPPING
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            className={`nav-link ${activeTab === 'return' ? 'active' : ''}`}
                            onClick={() => setActiveTab('return')}
                        >
                            RETURN
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            className={`nav-link ${activeTab === 'guarantee' ? 'active' : ''}`}
                            onClick={() => setActiveTab('guarantee')}
                        >
                            GUARANTEE
                        </button>
                    </li>
                </ul>

                <div className="tab-content">
                    <div className={`tab-pane ${activeTab === 'description' ? 'active' : ''}`}>
                        <p className='mt-4'>
                            Introducing the exquisite Aeliana Luxury Bag – a true embodiment of elegance and sophistication. Crafted with the utmost precision and attention to detail, this masterpiece redefines luxury in every sense.</p>

                        <p>Enveloped in the gentle embrace of a soothing baby blue hue, the Aeliana Luxury Bag exudes an aura of timeless charm and refined beauty. The color evokes a sense of tranquility and grace, making it the perfect companion for any occasion, whether it be a casual outing or a glamorous soirée.</p>

                        <p>Indulge in the opulence of genuine leather as your fingertips graze across the impeccably smooth surface of the Aeliana bag. This carefully selected leather not only enhances the bag's durability but also lends an air of exclusivity, ensuring that your accessory stands the test of time while becoming a symbol of your impeccable taste.</p>
                    </div>

                    <div className={`tab-pane ${activeTab === 'shipping' ? 'active' : ''}`}>
                        <p className="mt-4">When you place your order, we know that you want to receive the item as fast as possible. We will make that happen.</p>
                        <p>How long will the entire ordering process take from order submission to delivery?</p>
                        <p>We will do our best to deliver your product as fast as possible, depending on your location.</p>
                        <p className="display-6">USA only:</p>
                        <ul>
                            <li>Standard Shipping: 5-10 Business Days via USPS (expect a slight delay due to COVID)</li>
                            <li>Express Shipping: 3-5 Business Days via FedEx </li>
                        </ul>
                    </div>

                    <div className={`tab-pane ${activeTab === 'return' ? 'active' : ''}`}>
                        <p className="mt-4">We have a pretty straightforward and simple return, refund, and exchange policy.</p>
                        <p>When you receive your order and want to exchange it with a different product, it MUST be unopened, unused, in original packaging, and with all the labels. First, you will need to contact us stating your reason for exchange. Then, you will need to ship the original order back to us, at your own expense. Once we receive it, we will inspect if it's unopened, unused, in original packaging, and with all the labels. Then, we will issue a store credit in the form of a code, and you will use that code to make a new purchase.</p>
                        <p>When you receive your order and have changed your mind and you want to return it, it MUST be unopened, unused, in original packaging, and with all the labels. First, you will need to contact us stating your reason for returning the item/s. Then, you will need to ship the original order back to us, at your own expense. Once we receive it, we will inspect if it's unopened, unused, in original packaging, and with all the labels. Then, we will issue a store credit only in the form of a code, not a full refund.</p>
                    </div>

                    <div className={`tab-pane ${activeTab === 'guarantee' ? 'active' : ''}`}>
                        <p className="mt-4">Our Guarantee of Uncompromising Excellence:</p>
                        <p>At KERLYS FASHION, we take great pride in the craftsmanship and quality of our luxury shoes. We stand firmly behind the excellence of our products and offer a comprehensive guarantee to ensure your absolute satisfaction.
                        </p>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Aeliana;