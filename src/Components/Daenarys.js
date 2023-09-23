import React, { useState } from 'react';
import '../CSS/Aeliana.css'
import ProductTabs from './ProductTabs';
import ProductAccordion from './ProductAccordion';
import ProductGallerySlides from './ProductGallerySlides';

const Daenarys = () => {

    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState('description');

    const productImages = [
        '/images/product-photos/daenarys/daenarys1.webp',
        '/images/product-photos/daenarys/daenarys2.webp',
        '/images/product-photos/daenarys/daenarys3.webp',
        '/images/product-photos/daenarys/daenarys4.webp',
        '/images/product-photos/daenarys/daenarys5.webp',
    ];

    return (
        <div className="mt-5">
            <section className="aeliana-product-page container-sm">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-4">
                    <div className="col">
                        <ProductGallerySlides images={productImages} />
                    </div>

                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <small>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className='ms-2'>300 Trusted Reviews</span>
                                </small>
                                <h5 className="h1" id="productTitle">Daenarys</h5>
                                <div className="h5 d-flex align-items-center" id="productPrice">
                                    <span className="regular-price">$700</span>
                                    <span className="sale-price">$600</span>
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
            <section className="container mt-5">
                <ProductTabs activeTab={activeTab} setActiveTab={setActiveTab} />
                <div className="tab-content">
                    <div id="description" className={`tab-pane ${activeTab === 'description' ? 'active' : ''}`}>
                        <p className="mt-4">
                            Introducing the exquisite Daenarys Luxury Bag – a true embodiment of elegance and sophistication. Crafted
                            with the utmost precision and attention to detail, this masterpiece redefines luxury in every sense.</p>

                        <p>Enveloped in the gentle embrace of a soothing baby blue hue, the Aeliana Luxury Bag exudes an aura of
                            timeless charm and refined beauty. The color evokes a sense of tranquility and grace, making it the
                            perfect companion for any occasion, whether it be a casual outing or a glamorous soirée.</p>

                        <p>Indulge in the opulence of genuine leather as your fingertips graze across the impeccably smooth surface
                            of the Aeliana bag. This carefully selected leather not only enhances the bag's durability but also lends
                            an air of exclusivity, ensuring that your accessory stands the test of time while becoming a symbol of
                            your impeccable taste.</p>
                    </div>
                </div>
                <ProductAccordion
                    description={
                        <div className="mt-4">
                            <p>Introducing the exquisite Daenarys Luxury Bag – a true embodiment of elegance and sophistication. Crafted
                                with the utmost precision and attention to detail, this masterpiece redefines luxury in every sense.</p>
                            <p>Enveloped in the gentle embrace of a soothing baby blue hue, the Aeliana Luxury Bag exudes an aura of
                                timeless charm and refined beauty. The color evokes a sense of tranquility and grace, making it the
                                perfect companion for any occasion, whether it be a casual outing or a glamorous soirée.</p>
                        </div>
                    }
                />
            </section>
        </div>

    )
}

export default Daenarys;