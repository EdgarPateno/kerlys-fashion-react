import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function FAQ() {
    return (
        <section className="frequently-asked-questions my-5">
            <div className="accordion" id="faq-page">
                <div className="container-sm">
                    <h3 className="faq-page-heading text-center mb-5">FREQUENTLY ASKED QUESTIONS</h3>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="faq-one">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                What shipping options are available?
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="faq-one"
                            data-bs-parent="#faq-page">
                            <div className="accordion-body">
                                <p>We offer the following shipping options:</p>
                                <ul>
                                    <li>Standard Shipping: 5-10 business days via USPS depending on your location.</li>
                                    <li>Express Shipping: 2-4 business days via FedEx depending on your location</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="faq-two">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                How can I track my order online?
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="faq-two"
                            data-bs-parent="#faq-page">
                            <div className="accordion-body">
                                <p>A shipping notification with tracking number will be sent via email after your order has
                                    been shipped out. You may
                                    click on that tracking number to get the latest available update. You can also visit the
                                    website
                                    and click on <em>Track Order</em> tab on the header and footer sections.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="faq-three">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Do you ship internationally?
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="faq-three"
                            data-bs-parent="#faq-page">
                            <div className="accordion-body">
                                <p>Unfortunately, at the moment, we only ship to the addresses within the US. We are
                                    considering
                                    to offer that in the near future.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="faq-four">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                How do I care for my jewellery?
                            </button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="faq-four"
                            data-bs-parent="#faq-page">
                            <div className="accordion-body">
                                <ul>
                                    <li>
                                        <p>Sterling Silver Jewellery</p>
                                        <p>Sterling silver tarnishes, especially when exposed to salt air and products
                                            containing sulfur, such as rubber bands and some papers. However, a silver that
                                            is
                                            regularly used typically needs less care, so we strongly recommend that you wear
                                            your
                                            silver every day.</p>
                                    </li>
                                    <li>
                                        <p>Gold Jewellery</p>
                                        <p>Gold jewellery can be maintained with a non-abrasive cleaner. Examine your
                                            jewellery
                                            regularly to make sure settings are snug and joinings are secure.</p>
                                        <p>Avoid exposing your gold jewellery to household bleach which will quickly cause
                                            gold to
                                            discolor and possibly disintegrate.
                                        </p>
                                    </li>
                                    <li>
                                        <p>Gemstone Jewellery</p>
                                        <p>Gemstones require special care. Protect your jewellery from impact against hard
                                            surfaces and avoid contact with abrasive surfaces. Therefore, avoid stacking
                                            these rings and bracelets that would be vulnerable to such abrasion. Extreme
                                            temperature, perfumes, cosmetics, ultrasonic cleaning, and household chemicals
                                            can also damage your jewellery.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="faq-five">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                Do you offer repair service?
                            </button>
                        </h2>
                        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="faq-five"
                            data-bs-parent="#faq-page">
                            <div className="accordion-body">
                                <p>Yes, we do offer repair service. We recommend customers to bring-in their jewellery
                                    at least once a year. Items worn regularly should be cleaned and checked every few
                                    month.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default FAQ