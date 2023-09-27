import React from 'react'
import '../CSS/Jewelry.css'
import { Link } from 'react-router-dom'
import { useRef } from 'react';

function Jewelry() {

    const headerRef = useRef(null);

    return (
        <section className="jewelry-collection-video-banner">
            <div className="container-liquid">
                <video width="100%" nocontrols autoPlay loop muted>
                    <source src="/videos/jewelry-collection-video-banner.mp4" type="video/mp4" />
                </video>
                <div className="jewelry-collection-video-banner-title">
                    <h2 className="text-center">Jewelry Collection</h2>
                </div>
            </div>

            <div className="jewelry-collection my-5">
                <div className="container">
                    <div className="row row-cols-2 row-cols-md-4 g-4">
                        <div className="col">
                            <Link to="/yara" onClick={() => headerRef.current.scrollIntoView({ behavior: 'smooth' })}>
                                <div className="card">
                                    <img src="/images/product-photos/yara/yara1.webp" className="card-img-top" alt="Yara Necklace" />
                                    <div className="card-body">
                                        <h3 className="card-title text-center">Yara</h3>
                                        <p className="card-text text-center">
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <br />
                                            <span>600 Trusted Reviews</span>
                                        </p>
                                        <h5 className="regular-price text-center">$600</h5>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="col">
                            <Link to="/ygritte" onClick={() => headerRef.current.scrollIntoView({ behavior: 'smooth' })}>
                                <div className="card">
                                    <img src="/images/product-photos/ygritte/ygritte1.webp" className="card-img-top" alt="bracelet" />
                                    <div className="card-body">
                                        <h3 className="card-title text-center">Ygritte</h3>
                                        <p className="card-text text-center">
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <br />
                                            <span>650 Trusted Reviews</span>
                                        </p>
                                        <h5 className="regular-price text-center">$650</h5>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="col">
                            <Link to="/margaery" onClick={() => headerRef.current.scrollIntoView({ behavior: 'smooth' })}>
                                <div className="card">
                                    <img src="/images/product-photos/margaery/margaery1.webp" className="card-img-top" alt="earrings" />
                                    <div className="card-body">
                                        <h3 className="card-title text-center">Margaery</h3>
                                        <p className="card-text text-center">
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <br />
                                            <span>700 Trusted Reviews</span>
                                        </p>
                                        <h5 className="regular-price text-center">$700</h5>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="col">
                            <Link to="/brienne" onClick={() => headerRef.current.scrollIntoView({ behavior: 'smooth' })}>
                                <div className="card">
                                    <img src="/images/jewelry-collection/tiffany-hoops-5.webp" className="card-img-top" alt="hoops" />
                                    <div className="card-body">
                                        <h3 className="card-title text-center">Brienne</h3>
                                        <p className="card-text text-center">
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <br />
                                            <span>600 Trusted Reviews</span>
                                        </p>
                                        <h5 className="regular-price text-center">$800</h5>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="col">
                            <Link to="/shae" onClick={() => headerRef.current.scrollIntoView({ behavior: 'smooth' })}>
                                <div className="card">
                                    <img src="/images/jewelry-collection/tiffany-necklace-6.webp" className="card-img-top" alt="necklace" />
                                    <div className="card-body">
                                        <h3 className="card-title text-center">Shae</h3>
                                        <p className="card-text text-center">
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <br />
                                            <span>800 Trusted Reviews</span>
                                        </p>
                                        <h5 className="regular-price text-center">$800</h5>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="col">
                            <Link to="/ros" onClick={() => headerRef.current.scrollIntoView({ behavior: 'smooth' })}>
                                <div className="card">
                                    <img src="/images/jewelry-collection/tiffany-ring-4.webp" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h3 className="card-title text-center">Ros</h3>
                                        <p className="card-text text-center">
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <br />
                                            <span>500 Trusted Reviews</span>
                                        </p>
                                        <h5 className="regular-price text-center">$600</h5>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Jewelry;