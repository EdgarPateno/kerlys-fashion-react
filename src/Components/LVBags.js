import React from 'react'
import '../CSS/LVBags.css'
import { Link } from 'react-router-dom'
import { useRef } from 'react'

function LVBags() {
    const headerRef = useRef(null);

    return (
        <section className="lv-bags-main-nav-banner">
            <div className="container-liquid">
                <video width="100%" nocontrols autoPlay loop muted>
                    <source src="/videos/lv-bags-collection-section-video-banner-compressed.mp4" type="video/mp4" />
                </video>
                <div className="lv-bags-collection-video-banner-title">
                    <h2>Louis Vuitton Bags Collection</h2>
                </div>
            </div>

            <div className="all-bags-collection my-5">
                <div className="container">
                    <div className="bags-main-nav row row-cols-2 row-cols-md-4 g-4">
                        <div className="col">
                            <Link to="/aeliana" onClick={() => headerRef.current.scrollIntoView({ behavior: 'smooth' })}>
                                <div className="card">
                                    <img src="/images/product-photos/aeliana/1.webp" width="auto" height="auto"
                                        className="card-img-top" alt="Aeliana Baby Blue Bag" />
                                    <div className="card-body">
                                        <h3 className="card-title text-center">Aeliana</h3>
                                        <p className="card-text text-center">
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <br />
                                            <span>600 Trusted Reviews</span>
                                        </p>
                                        <h5 className="card-text text-center align-items-center">
                                            <span className="regular-price">$700</span>
                                            <span className="sale-price">$600</span>
                                        </h5>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="col">
                            <Link to="/arya" onClick={() => headerRef.current.scrollIntoView({ behavior: 'smooth' })}>
                                <div className="card">
                                    <img src="/images/product-photos/arya/arya-1.webp" width="auto" height="auto"
                                        className="card-img-top" alt="Arya Bag" />
                                    <div className="card-body">
                                        <h3 className="card-title text-center">Arya</h3>
                                        <p className="card-text text-center">
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <br />
                                            <span>650 Trusted Reviews</span>
                                        </p>
                                        <h5 className="card-text text-center align-items-center">
                                            <span className="regular-price">$700</span>
                                            <span className="sale-price">$600</span>
                                        </h5>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="col">
                            <Link to="/calliope" onClick={() => headerRef.current.scrollIntoView({ behavior: 'smooth' })}>
                                <div className="card">
                                    <img src="/images/product-photos/calliope/calliope-1.webp" width="auto" height="auto"
                                        className="card-img-top" alt="Calliope Bag" />
                                    <div className="card-body">
                                        <h3 className="card-title text-center">Calliope</h3>
                                        <p className="card-text text-center">
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <br />
                                            <span>700 Trusted Reviews</span>
                                        </p>
                                        <h5 className="card-text text-center align-items-center">
                                            <span className="regular-price">$700</span>
                                            <span className="sale-price">$600</span>
                                        </h5>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="col">
                            <Link to="/cassia" onClick={() => headerRef.current.scrollIntoView({ behavior: 'smooth' })}>
                                <div className="card">
                                    <img src="/images/product-photos/cassia/cassia-1.webp" width="auto" height="auto"
                                        className="card-img-top" alt="Cassia Bag" />
                                    <div className="card-body">
                                        <h3 className="card-title text-center">Cassia</h3>
                                        <p className="card-text text-center">
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <br />
                                            <span>600 Trusted Reviews</span>
                                        </p>
                                        <h5 className="card-text text-center align-items-center">
                                            <span className="regular-price">$700</span>
                                            <span className="sale-price">$600</span>
                                        </h5>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="col">
                            <Link to="/dracarys" onClick={() => headerRef.current.scrollIntoView({ behavior: 'smooth' })}>
                                <div className="card">
                                    <img src="/images/product-photos/dracarys/dracarys-1.webp" width="auto" height="auto"
                                        className="card-img-top" alt="Dracarys Bag" />
                                    <div className="card-body">
                                        <h3 className="card-title text-center">Dracarys</h3>
                                        <p className="card-text text-center">
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <br />
                                            <span>800 Trusted Reviews</span>
                                        </p>
                                        <h5 className="card-text text-center align-items-center">
                                            <span className="regular-price">$700</span>
                                            <span className="sale-price">$600</span>
                                        </h5>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="col">
                            <Link to="/gwenore" onClick={() => headerRef.current.scrollIntoView({ behavior: 'smooth' })}>
                                <div className="card">
                                    <img src="/images/product-photos/gwenore/gwenore-2.webp" width="auto" height="auto"
                                        className="card-img-top" alt="Gwenore Bag" />
                                    <div className="card-body">
                                        <h3 className="card-title text-center">Gwenore</h3>
                                        <p className="card-text text-center">
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <br />
                                            <span>500 Trusted Reviews</span>
                                        </p>
                                        <h5 className="card-text text-center align-items-center">
                                            <span className="regular-price">$700</span>
                                            <span className="sale-price">$600</span>
                                        </h5>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="col">
                            <Link to="/sansa" onClick={() => headerRef.current.scrollIntoView({ behavior: 'smooth' })}>
                                <div className="card">
                                    <img src="/images/product-photos/sansa/sansa-2.webp" width="auto" height="auto"
                                        className="card-img-top" alt="Sansa Bag" />
                                    <div className="card-body">
                                        <h3 className="card-title text-center">Sansa</h3>
                                        <p className="card-text text-center">
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <br />
                                            <span>700 Trusted Reviews</span>
                                        </p>
                                        <h5 className="card-text text-center align-items-center">
                                            <span className="regular-price">$700</span>
                                            <span className="sale-price">$600</span>
                                        </h5>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="col">
                            <Link to="/daenarys" onClick={() => headerRef.current.scrollIntoView({ behavior: 'smooth' })}>
                                <div className="card">
                                    <img src="/images/product-photos/daenarys/daenarys1.webp" width="auto" height="auto"
                                        className="card-img-top" alt="Daenarys Bag" />
                                    <div className="card-body">
                                        <h3 className="card-title text-center">Daenarys</h3>
                                        <p className="card-text text-center">
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <br />
                                            <span>700 Trusted Reviews</span>
                                        </p>
                                        <h5 className="card-text text-center align-items-center">
                                            <span className="regular-price">$700</span>
                                            <span className="sale-price">$600</span>
                                        </h5>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LVBags;