import React from 'react';

function Footer() {
    return (
        <section className="site-footer">
            <div className="container-fluid">
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    <div className="customer-help col">
                        <div className="card bg-transparent h-100">
                            <div className="card-body">
                                <h5 className="card-title">Customer Help</h5>
                                <ul className="list-unstyled">
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                    <li><a href="#">FAQs</a></li>
                                    <li><a href="#">Track Your Order</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="corporate-policies col">
                        <div className="card bg-transparent h-100">
                            <div className="card-body">
                                <h5 className="card-title">Corporate Policies</h5>
                                <ul className="list-unstyled">
                                    <li><a href="#">Shipping and Cancellation</a></li>
                                    <li><a href="#">Refund Policy</a></li>
                                    <li><a href="#">Return and Exchange</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Terms of Service</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="social-media col">
                        <div className="card bg-transparent h-100">
                            <div className="card-body">
                                <h5 className="card-title">Follow Us On Social Media</h5>
                                <ul className="list-unstyled follow-us d-flex">
                                    <li className="me-2"><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i
                                        className="fa fa-facebook-square"></i></a></li>
                                    <li className="me-2"><a href="https://pinterest.com" target="_blank" rel="noopener noreferrer"><i
                                        className="fa fa-pinterest-square"></i></a></li>
                                    <li className="me-2"><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i
                                        className="fa fa-twitter-square"></i></a>
                                    </li>
                                    <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="friendly-support col">
                        <div className="card bg-transparent h-100">
                            <div className="card-body">
                                <h5 className="card-title">Friendly Support</h5>
                                <p className="card-text">For any questions and concerns, please don't hesitate to contact us below:</p>
                                <p><i className="fa fa-envelope"></i>&nbsp;support@kerlysfashion.com
                                </p>
                                <p><i className="fa fa-mobile-phone"></i>&nbsp;<span
                                    className="phone-number-footer">+639123456789</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom pb-5">
                <div className="container-fluid">
                    <div className="d-flex justify-content-between">
                        <div className="p-3">&#169;2022, <a className="site-logo-footer-bottom" href="#">Kerlys Fashion LTD.</a>
                            &nbsp;ALL RIGHTS RESERVED</div>
                        <div className="p-3">
                            <i className="fa fa-cc-visa" id="payment-method-footer-bottom"></i>
                            <i className="fa fa-cc-amex" id="payment-method-footer-bottom"></i>
                            <i className="fa fa-cc-mastercard" id="payment-method-footer-bottom"></i>
                            <i className="fa fa-cc-discover" id="payment-method-footer-bottom"></i>
                            <i className="fa fa-cc-paypal" id="payment-method-footer-bottom"></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;