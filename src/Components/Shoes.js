import '../CSS/Shoes.css'
import { Link } from 'react-router-dom';
import { useRef } from 'react';

function Shoes() {

    const headerRef = useRef();

    return (
        <section className="shoes-collection-image-banner">
            <div className="container-liquid">
                <img src="/images/image-banners/shoes-collection-image-banner.webp" width="auto" height="auto"
                    alt="Shoes" />
                <div className="shoes-collection-image-banner-title">
                    <h2>Shoes Collection</h2>
                </div>
            </div>

            <div className="shoes-collection my-5">
                <div className="container">
                    <div className="row row-cols-2 row-cols-md-4 g-4">
                        <div className="col">
                            <Link to="/melisandre" onClick={(() => headerRef.current.scrollIntoView({ behavior: 'smooth' }))}>
                                <div className="card">
                                    <img src="/images/product-photos/melisandre/melisandre1.png" className="card-img-top" alt="shoes" />
                                    <div className="card-body">
                                        <h3 className="card-title text-center">Melisandre</h3>
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
                                            <span className="regular-price">$900</span>
                                            <span className="sale-price">$700</span>
                                        </h5>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="col">
                            <Link to="/greyjoy" onClick={(() => headerRef.current.scrollIntoView({ behavior: 'smooth' }))}>
                                <div className="card">
                                    <img src="/images/product-photos/greyjoy/greyjoy1.webp" className="card-img-top" alt="shoes" />
                                    <div className="card-body">
                                        <h3 className="card-title text-center">Greyjoy</h3>
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
                            <Link to="/missandei" onClick={(() => headerRef.current.scrollIntoView({ behavior: 'smooth' }))}>
                                <div className="card">
                                    <img src="/images/product-photos/missandei/missandei1.webp" className="card-img-top" alt="shoes" />
                                    <div className="card-body">
                                        <h3 className="card-title text-center">Missandei</h3>
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
                            <Link to="/olenna" onClick={(() => headerRef.current.scrollIntoView({ behavior: 'smooth' }))}>
                                <div className="card">
                                    <img src="/images/shoes-collection/shoes-4.webp" className="card-img-top" alt="shoes" />
                                    <div className="card-body">
                                        <h3 className="card-title text-center">Olenna</h3>
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
                            <Link to="/myrcella" onClick={(() => headerRef.current.scrollIntoView({ behavior: 'smooth' }))}>
                                <div className="card">
                                    <img src="/images/shoes-collection/shoes-5.webp" className="card-img-top" alt="shoes" />
                                    <div className="card-body">
                                        <h3 className="card-title text-center">Myrcella</h3>
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
                            <Link to="/Tyene" onClick={(() => headerRef.current.scrollIntoView({ behavior: 'smooth' }))}>
                                <div className="card">
                                    <img src="/images/shoes-collection/shoes-6.webp" className="card-img-top" alt="shoes" />
                                    <div className="card-body">
                                        <h3 className="card-title text-center">Tyene</h3>
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
        </section>
    )
}

export default Shoes;